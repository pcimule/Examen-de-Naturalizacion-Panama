import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  SafeAreaView, StatusBar, Platform, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BANCO } from './preguntas';
import { LANGS, LANG_LABELS, LANG_FLAGS, CAT_META, I18N } from './i18n';

const C = {
  azul: '#003580', azul2: '#0047b3', rojo: '#c0001b', rojo2: '#e6001f',
  claro: '#eef3fb', verde: '#15803d', verdeBg: '#dcfce7',
  rojoBg: '#fee2e2', gris: '#6b7280', borde: '#e2e8f0',
};

const PREGUNTAS_POR_EXAMEN = 50;
const STORAGE_KEY = '@examen_panama_historial';
const LANG_KEY = '@examen_panama_idioma';

const ICONS = Object.fromEntries(CAT_META.map(c => [c.key, c.icon]));

const shuffle = a => [...a].sort(() => Math.random() - 0.5);
const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export default function App() {
  const [lang, setLang] = useState('es');
  const [modo, setModo] = useState('menu');
  const [cat, setCat] = useState('todas');
  const [pregs, setPregs] = useState([]);
  const [idx, setIdx] = useState(0);
  const [sel, setSel] = useState(null);
  const [conf, setConf] = useState(false);
  const [resps, setResps] = useState([]);
  const [segs, setSegs] = useState(0);
  const [historial, setHistorial] = useState([]);
  const tmr = useRef(null);

  const t = I18N[lang];
  const CATS = CAT_META.map(c => ({ key: c.key, icon: c.icon, label: t.catNames[c.key] }));
  const pool = cat === 'todas' ? BANCO : BANCO.filter(p => p.catKey === cat);

  // ── Persistencia nativa: historial e idioma ────────────────
  useEffect(() => { cargarHistorial(); cargarIdioma(); }, []);

  async function cargarHistorial() {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      if (raw) setHistorial(JSON.parse(raw));
    } catch (e) { /* primera vez */ }
  }

  async function cargarIdioma() {
    try {
      const raw = await AsyncStorage.getItem(LANG_KEY);
      if (raw && LANGS.includes(raw)) setLang(raw);
    } catch (e) { /* usa idioma por defecto */ }
  }

  async function cambiarIdioma(nuevo) {
    setLang(nuevo);
    try { await AsyncStorage.setItem(LANG_KEY, nuevo); } catch (e) { /* no bloquea la app */ }
  }

  async function guardarIntento(porc, correctas, total, tiempo) {
    try {
      const nuevo = {
        fecha: new Date().toISOString(),
        categoria: cat, porcentaje: porc, correctas, total, tiempo,
      };
      const lista = [nuevo, ...historial].slice(0, 50);
      setHistorial(lista);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
    } catch (e) { /* no bloquea la app */ }
  }

  // ── Cronómetro ─────────────────────────────────────────────
  useEffect(() => {
    if (modo === 'examen') {
      tmr.current = setInterval(() => setSegs(s => s + 1), 1000);
    } else {
      clearInterval(tmr.current);
    }
    return () => clearInterval(tmr.current);
  }, [modo]);

  function iniciar() {
    const p = shuffle(pool)
      .slice(0, Math.min(PREGUNTAS_POR_EXAMEN, pool.length))
      .map(x => ({
        catKey: x.catKey,
        c: x.c,
        p: x[lang].p,
        _ops: shuffle(x[lang].ops.map((o, i) => ({ t: o, orig: i }))),
      }));
    setPregs(p); setIdx(0); setSel(null); setConf(false);
    setResps([]); setSegs(0); setModo('examen');
  }

  function cancelarExamen() {
    Alert.alert(t.cancelExamTitle, t.cancelExamMsg, [
      { text: t.cancelExamNo, style: 'cancel' },
      { text: t.cancelExamYes, style: 'destructive', onPress: () => {
        clearInterval(tmr.current);
        setModo('menu');
      } },
    ]);
  }

  function confirmar() {
    if (sel === null) return;
    const ok = pregs[idx]._ops[sel].orig === pregs[idx].c;
    setResps(r => [...r, { p: pregs[idx], sel, ok }]);
    setConf(true);
  }

  function siguiente() {
    if (idx + 1 < pregs.length) {
      setIdx(i => i + 1); setSel(null); setConf(false);
    } else {
      clearInterval(tmr.current);
      const correctas = resps.filter(r => r.ok).length;
      const porc = Math.round(correctas / pregs.length * 100);
      guardarIntento(porc, correctas, pregs.length, segs);
      setModo('resultado');
    }
  }

  const correctas = resps.filter(r => r.ok).length;
  const porc = pregs.length ? Math.round(correctas / pregs.length * 100) : 0;
  const ap = porc >= 70;
  const mejorPuntaje = historial.length ? Math.max(...historial.map(h => h.porcentaje)) : null;

  const SelectorIdioma = () => (
    <View style={st.langRow}>
      {LANGS.map(l => (
        <TouchableOpacity key={l} onPress={() => cambiarIdioma(l)}
          style={[st.langChip, lang === l && st.langChipOn]} activeOpacity={0.7}>
          <Text style={[st.langChipTxt, lang === l && st.langChipTxtOn]}>
            {LANG_FLAGS[l]} {l.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // ═══ MENÚ ═══════════════════════════════════════════════════
  if (modo === 'menu') return (
    <SafeAreaView style={st.safe}>
      <StatusBar barStyle="light-content" backgroundColor={C.azul} />
      <ScrollView contentContainerStyle={st.scroll}>

        <SelectorIdioma />

        <View style={st.hero}>
          <Text style={st.heroFlag}>🇵🇦</Text>
          <Text style={st.heroTitle}>{t.heroTitle}</Text>
          <Text style={st.heroSub}>{t.heroSub}</Text>
        </View>

        <View style={st.grid2}>
          <StatCard icon="📝" n={BANCO.length} label={t.statTotal} />
          <StatCard icon="🎯" n={PREGUNTAS_POR_EXAMEN} label={t.statPerExam} />
          <StatCard icon="📂" n={CATS.length - 1} label={t.statCats} />
          <StatCard icon="✅" n={pool.length} label={t.statAvail} />
        </View>

        {historial.length > 0 && (
          <View style={st.card}>
            <Text style={st.cardTitle}>{t.progressTitle}</Text>
            <View style={st.progRow}>
              <View style={st.progItem}>
                <Text style={[st.progN, { color: C.azul }]}>{historial.length}</Text>
                <Text style={st.progL}>{t.progExams}</Text>
              </View>
              <View style={st.progItem}>
                <Text style={[st.progN, { color: mejorPuntaje >= 70 ? C.verde : C.rojo }]}>
                  {mejorPuntaje}%
                </Text>
                <Text style={st.progL}>{t.progBest}</Text>
              </View>
              <View style={st.progItem}>
                <Text style={[st.progN, { color: C.azul }]}>
                  {Math.round(historial.reduce((a, h) => a + h.porcentaje, 0) / historial.length)}%
                </Text>
                <Text style={st.progL}>{t.progAvg}</Text>
              </View>
            </View>
          </View>
        )}

        <View style={st.card}>
          <Text style={st.cardTitle}>{t.filterTitle}</Text>
          <View style={st.chips}>
            {CATS.map(c => (
              <TouchableOpacity key={c.key} onPress={() => setCat(c.key)}
                style={[st.chip, cat === c.key && st.chipOn]} activeOpacity={0.7}>
                <Text style={[st.chipTxt, cat === c.key && st.chipTxtOn]}>
                  {c.icon} {c.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity onPress={iniciar} style={st.btnStart} activeOpacity={0.85}>
          <Text style={st.btnStartTxt}>{t.startBtn}</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );

  // ═══ EXAMEN ═════════════════════════════════════════════════
  if (modo === 'examen') {
    const p = pregs[idx];
    return (
      <SafeAreaView style={st.safe}>
        <StatusBar barStyle="light-content" backgroundColor={C.azul} />
        <ScrollView contentContainerStyle={st.scroll}>

          <TouchableOpacity onPress={cancelarExamen} style={st.btnCancelar} activeOpacity={0.7}>
            <Text style={st.btnCancelarTxt}>✕ {t.cancelExam}</Text>
          </TouchableOpacity>

          <View style={st.exHeader}>
            <View>
              <Text style={st.exLbl}>{t.progressLbl}</Text>
              <Text style={st.exVal}>{idx + 1} / {pregs.length}</Text>
              <View style={st.exCat}>
                <Text style={st.exCatTxt}>{ICONS[p.catKey]} {t.catNames[p.catKey]}</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={st.exLbl}>{t.timeLbl}</Text>
              <Text style={st.crono}>⏱ {fmt(segs)}</Text>
            </View>
          </View>

          <View style={st.barraWrap}>
            <View style={[st.barraFill, { width: `${(idx / pregs.length) * 100}%` }]} />
          </View>

          <View style={st.qCard}>
            <Text style={st.qNum}>{t.questionLbl(idx + 1)}</Text>
            <Text style={st.qTxt}>{p.p}</Text>
          </View>

          {p._ops.map((op, i) => {
            const esCorr = op.orig === p.c;
            const esSel = sel === i;
            let boxStyle = st.opt, bolaStyle = st.bola, bolaTxt = st.bolaTxt, txtStyle = st.optTxt;
            let letra = String.fromCharCode(65 + i);

            if (conf) {
              if (esCorr) { boxStyle = [st.opt, st.optOk]; bolaStyle = [st.bola, st.bolaOk]; bolaTxt = [st.bolaTxt, st.bolaTxtOn]; letra = '✓'; }
              else if (esSel) { boxStyle = [st.opt, st.optMal]; bolaStyle = [st.bola, st.bolaMal]; bolaTxt = [st.bolaTxt, st.bolaTxtOn]; letra = '✗'; }
            } else if (esSel) {
              boxStyle = [st.opt, st.optSel]; bolaStyle = [st.bola, st.bolaSel]; bolaTxt = [st.bolaTxt, st.bolaTxtOn];
            }

            return (
              <TouchableOpacity key={i} onPress={() => !conf && setSel(i)}
                disabled={conf} style={boxStyle} activeOpacity={0.7}>
                <View style={bolaStyle}><Text style={bolaTxt}>{letra}</Text></View>
                <Text style={txtStyle}>{op.t}</Text>
              </TouchableOpacity>
            );
          })}

          {conf && (
            <View style={[st.feedback, resps[resps.length - 1]?.ok ? st.fbOk : st.fbMal]}>
              <Text style={[st.fbTxt, { color: resps[resps.length - 1]?.ok ? C.verde : C.rojo }]}>
                {resps[resps.length - 1]?.ok ? t.correctFb : t.incorrectFb}
              </Text>
            </View>
          )}

          {!conf ? (
            <TouchableOpacity onPress={confirmar} disabled={sel === null}
              style={[st.btnConf, sel === null && st.btnDisabled]} activeOpacity={0.85}>
              <Text style={[st.btnConfTxt, sel === null && { color: '#94a3b8' }]}>
                {t.confirmBtn}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={siguiente} style={st.btnSig} activeOpacity={0.85}>
              <Text style={st.btnSigTxt}>
                {idx + 1 < pregs.length ? t.nextBtn : t.resultsBtn}
              </Text>
            </TouchableOpacity>
          )}

        </ScrollView>
      </SafeAreaView>
    );
  }

  // ═══ RESULTADO ══════════════════════════════════════════════
  return (
    <SafeAreaView style={st.safe}>
      <StatusBar barStyle="light-content" backgroundColor={C.azul} />
      <ScrollView contentContainerStyle={st.scroll}>

        <View style={st.hero}>
          <Text style={st.heroFlag}>{ap ? '🎉' : '📚'}</Text>
          <Text style={st.heroTitle}>{ap ? t.congratsTitle : t.keepGoingTitle}</Text>
          <Text style={st.heroSub}>
            {ap ? t.congratsSub : t.keepGoingSub}
          </Text>
          <View style={[st.badge, { backgroundColor: ap ? 'rgba(21,128,61,.25)' : 'rgba(192,0,27,.25)' }]}>
            <Text style={[st.badgeTxt, { color: ap ? '#bbf7d0' : '#fecaca' }]}>
              {ap ? t.approved : t.notApproved}
            </Text>
          </View>
        </View>

        <View style={st.grid3}>
          <ResCard n={correctas} label={t.correctas} color={C.verde} />
          <ResCard n={pregs.length - correctas} label={t.incorrectas} color={C.rojo} />
          <ResCard n={`${porc}%`} label={t.calificacion} color={ap ? C.verde : C.rojo} />
        </View>

        <View style={st.card}>
          <View style={st.rowBetween}>
            <Text style={st.tiempoTxt}>⏱ {fmt(segs)}</Text>
            <Text style={[st.tiempoTxt, { color: ap ? C.verde : C.rojo }]}>
              {ap ? t.approvedInline : t.minInline}
            </Text>
          </View>
          <View style={st.barraRes}>
            <View style={[st.barraResFill, {
              width: `${porc}%`,
              backgroundColor: ap ? C.verde : C.rojo,
            }]} />
          </View>
        </View>

        <View style={st.card}>
          <Text style={st.cardTitle}>{t.reviewTitle}</Text>
          {resps.map((r, i) => {
            const opC = r.p._ops.find(o => o.orig === r.p.c);
            return (
              <View key={i} style={[st.revItem, {
                backgroundColor: r.ok ? '#f0fdf4' : '#fff7ed',
                borderLeftColor: r.ok ? C.verde : '#f97316',
              }]}>
                <Text style={st.revP}>{i + 1}. {r.p.p}</Text>
                <Text style={st.revR}>✅ {opC.t}</Text>
              </View>
            );
          })}
        </View>

        <View style={st.rowGap}>
          <TouchableOpacity onPress={() => setModo('menu')} style={st.btnMenu} activeOpacity={0.8}>
            <Text style={st.btnMenuTxt}>{t.menuBtn}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={iniciar} style={st.btnNuevo} activeOpacity={0.85}>
            <Text style={st.btnNuevoTxt}>{t.newBtn}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// ── Subcomponentes ───────────────────────────────────────────
const StatCard = ({ icon, n, label }) => (
  <View style={st.stat}>
    <Text style={st.statIcon}>{icon}</Text>
    <Text style={st.statN}>{n}</Text>
    <Text style={st.statL}>{label}</Text>
  </View>
);

const ResCard = ({ n, label, color }) => (
  <View style={st.resCard}>
    <Text style={[st.resN, { color }]}>{n}</Text>
    <Text style={st.resL}>{label}</Text>
  </View>
);

// ── Estilos ──────────────────────────────────────────────────
const st = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.claro },
  scroll: { padding: 16, paddingBottom: 40 },

  langRow: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 12 },
  langChip: {
    paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20,
    borderWidth: 2, borderColor: C.borde, backgroundColor: 'white',
  },
  langChipOn: { backgroundColor: C.azul, borderColor: C.azul },
  langChipTxt: { fontSize: 12, fontWeight: '800', color: '#475569' },
  langChipTxtOn: { color: 'white' },

  hero: {
    backgroundColor: C.azul, borderRadius: 20, padding: 26,
    alignItems: 'center', marginBottom: 16,
  },
  heroFlag: { fontSize: 52, marginBottom: 8 },
  heroTitle: { fontSize: 21, fontWeight: '900', color: 'white', textAlign: 'center' },
  heroSub: { fontSize: 13, color: 'rgba(255,255,255,.8)', marginTop: 6, textAlign: 'center' },
  badge: { marginTop: 12, paddingVertical: 5, paddingHorizontal: 18, borderRadius: 20 },
  badgeTxt: { fontSize: 13, fontWeight: '800' },

  grid2: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 14 },
  grid3: { flexDirection: 'row', gap: 10, marginBottom: 14 },

  stat: {
    backgroundColor: 'white', borderRadius: 14, padding: 14,
    alignItems: 'center', width: '47.5%',
    shadowColor: C.azul, shadowOpacity: 0.08, shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  statIcon: { fontSize: 20 },
  statN: { fontSize: 24, fontWeight: '900', color: C.azul },
  statL: { fontSize: 10, color: C.gris, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },

  card: {
    backgroundColor: 'white', borderRadius: 14, padding: 16, marginBottom: 14,
    shadowColor: C.azul, shadowOpacity: 0.08, shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  cardTitle: { fontSize: 14, fontWeight: '800', color: C.azul, marginBottom: 12 },

  progRow: { flexDirection: 'row', justifyContent: 'space-around' },
  progItem: { alignItems: 'center' },
  progN: { fontSize: 22, fontWeight: '900' },
  progL: { fontSize: 10, color: C.gris, fontWeight: '700', textTransform: 'uppercase' },

  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 7 },
  chip: {
    paddingVertical: 7, paddingHorizontal: 12, borderRadius: 20,
    borderWidth: 2, borderColor: C.borde, backgroundColor: 'white',
  },
  chipOn: { backgroundColor: C.azul, borderColor: C.azul },
  chipTxt: { fontSize: 12, fontWeight: '700', color: '#475569' },
  chipTxtOn: { color: 'white' },

  btnStart: {
    backgroundColor: C.rojo, borderRadius: 14, padding: 17, alignItems: 'center',
    shadowColor: C.rojo, shadowOpacity: 0.35, shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 }, elevation: 5,
  },
  btnStartTxt: { color: 'white', fontSize: 16, fontWeight: '900' },

  btnCancelar: {
    alignSelf: 'flex-start', paddingVertical: 6, paddingHorizontal: 12,
    borderRadius: 20, borderWidth: 1.5, borderColor: '#cbd5e1',
    backgroundColor: 'white', marginBottom: 10,
  },
  btnCancelarTxt: { fontSize: 12, fontWeight: '700', color: C.rojo },

  exHeader: {
    backgroundColor: C.azul, borderRadius: 14, padding: 16, marginBottom: 11,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  exLbl: { fontSize: 10, color: 'rgba(255,255,255,.72)', fontWeight: '700', letterSpacing: 0.5 },
  exVal: { fontSize: 17, fontWeight: '800', color: 'white', marginTop: 1 },
  exCat: {
    backgroundColor: 'rgba(255,255,255,.18)', borderRadius: 20,
    paddingVertical: 3, paddingHorizontal: 9, marginTop: 4, alignSelf: 'flex-start',
  },
  exCatTxt: { fontSize: 11, fontWeight: '700', color: 'white' },
  crono: { fontSize: 22, fontWeight: '900', color: 'white' },

  barraWrap: { backgroundColor: '#cdd5ea', borderRadius: 10, height: 7, marginBottom: 13, overflow: 'hidden' },
  barraFill: { height: '100%', backgroundColor: C.azul, borderRadius: 10 },

  qCard: {
    backgroundColor: 'white', borderRadius: 16, padding: 20, marginBottom: 11,
    borderLeftWidth: 5, borderLeftColor: C.azul,
    shadowColor: C.azul, shadowOpacity: 0.08, shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  qNum: { fontSize: 10, fontWeight: '800', color: C.azul, letterSpacing: 1, marginBottom: 8 },
  qTxt: { fontSize: 15, fontWeight: '700', lineHeight: 23, color: '#1e293b' },

  opt: {
    backgroundColor: 'white', borderWidth: 2, borderColor: C.borde, borderRadius: 12,
    padding: 12, marginBottom: 9, flexDirection: 'row', alignItems: 'center', gap: 12,
  },
  optSel: { borderColor: C.azul, backgroundColor: '#eef3fb' },
  optOk: { borderColor: C.verde, backgroundColor: C.verdeBg },
  optMal: { borderColor: C.rojo, backgroundColor: C.rojoBg },
  optTxt: { fontSize: 14, fontWeight: '500', lineHeight: 20, color: '#334155', flex: 1 },

  bola: {
    width: 30, height: 30, borderRadius: 15, backgroundColor: '#e8edf8',
    alignItems: 'center', justifyContent: 'center',
  },
  bolaSel: { backgroundColor: C.azul },
  bolaOk: { backgroundColor: C.verde },
  bolaMal: { backgroundColor: C.rojo },
  bolaTxt: { fontSize: 12, fontWeight: '800', color: '#64748b' },
  bolaTxtOn: { color: 'white' },

  feedback: { borderRadius: 12, padding: 13, alignItems: 'center', marginBottom: 11 },
  fbOk: { backgroundColor: C.verdeBg },
  fbMal: { backgroundColor: C.rojoBg },
  fbTxt: { fontSize: 15, fontWeight: '800' },

  btnConf: { backgroundColor: C.azul, borderRadius: 14, padding: 16, alignItems: 'center' },
  btnConfTxt: { color: 'white', fontSize: 15, fontWeight: '800' },
  btnDisabled: { backgroundColor: '#cbd5e1' },
  btnSig: { backgroundColor: C.rojo, borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 9 },
  btnSigTxt: { color: 'white', fontSize: 15, fontWeight: '800' },

  resCard: {
    backgroundColor: 'white', borderRadius: 14, padding: 14,
    alignItems: 'center', flex: 1,
    shadowColor: C.azul, shadowOpacity: 0.08, shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  resN: { fontSize: 24, fontWeight: '900' },
  resL: { fontSize: 9, color: C.gris, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },

  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  rowGap: { flexDirection: 'row', gap: 10 },
  tiempoTxt: { fontSize: 13, fontWeight: '700', color: C.azul },

  barraRes: { backgroundColor: C.borde, borderRadius: 10, height: 12, overflow: 'hidden' },
  barraResFill: { height: '100%', borderRadius: 10 },

  revItem: { borderRadius: 10, padding: 11, borderLeftWidth: 4, marginBottom: 8 },
  revP: { fontSize: 12, fontWeight: '700', color: '#1e293b', marginBottom: 4, lineHeight: 17 },
  revR: { fontSize: 11.5, color: C.verde, fontWeight: '600', lineHeight: 16 },

  btnMenu: {
    flex: 1, backgroundColor: 'white', borderWidth: 2, borderColor: C.azul,
    borderRadius: 14, padding: 14, alignItems: 'center',
  },
  btnMenuTxt: { color: C.azul, fontSize: 14, fontWeight: '800' },
  btnNuevo: { flex: 1, backgroundColor: C.azul, borderRadius: 14, padding: 14, alignItems: 'center' },
  btnNuevoTxt: { color: 'white', fontSize: 14, fontWeight: '800' },
});
