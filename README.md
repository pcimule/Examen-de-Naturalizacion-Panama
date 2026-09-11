# Examen de Naturalización Panamá

App nativa (iOS + Android) para practicar el examen de naturalización panameña.
130 preguntas organizadas en 5 categorías, con seguimiento de progreso persistente.
Disponible en **español, inglés y portugués**, con selector de idioma en la pantalla principal.

---

## Requisitos previos

- **Node.js 18+** — https://nodejs.org
- **Cuenta Apple Developer** ($99/año) — https://developer.apple.com/programs
- **Cuenta Google Play Console** ($25 único, solo para Android)
- **Cuenta Expo** (gratis) — https://expo.dev

---

## 1. Instalación local

```bash
npm install
npm install -g eas-cli
npx expo start
```

Escanea el QR con la app **Expo Go** (App Store / Play Store) para probarla
en tu teléfono al instante.

---

## 2. Configurar el proyecto en Expo

```bash
eas login
eas build:configure
```

Esto vincula el proyecto a tu cuenta Expo y genera el `projectId`.

---

## 3. Compilar para iOS

```bash
eas build --platform ios --profile production
```

En el primer build, EAS te pedirá tus credenciales de Apple y generará
automáticamente los certificados y perfiles de aprovisionamiento.
El build corre en la nube y tarda entre 15 y 30 minutos.

---

## 4. Enviar a App Store Connect

```bash
eas submit --platform ios --latest
```

Luego entra a https://appstoreconnect.apple.com para completar la ficha:
capturas de pantalla, descripción, palabras clave y categoría.

---

## 5. Compilar y enviar Android (opcional)

```bash
eas build --platform android --profile production
eas submit --platform android --latest
```

---

## Estructura del proyecto

```
ExamenPanama/
├── App.js            Lógica y UI de la app
├── preguntas.js      Banco de 130 preguntas (ES / EN / PT)
├── i18n.js           Textos de interfaz y categorías (ES / EN / PT)
├── app.json          Configuración Expo (nombre, íconos, bundle ID)
├── eas.json          Perfiles de compilación
├── package.json      Dependencias
└── assets/
    ├── icon.png            1024×1024  (App Store)
    ├── adaptive-icon.png   1024×1024  (Android)
    ├── splash.png          1284×2778  (pantalla de carga)
    └── favicon.png         64×64
```

---

## Banco de preguntas

| Categoría | Preguntas |
|---|---|
| Organización Política | 31 |
| Geografía | 21 |
| Historia | 21 |
| Otros Aspectos | 11 |
| Símbolos e Himno | 46 |
| **Total** | **130** |

Cada examen toma 50 preguntas al azar. El umbral de aprobación es 70%.

Para agregar o corregir preguntas, edita `preguntas.js`. Cada pregunta trae su
texto en los tres idiomas soportados. El formato es:

```js
{
  catKey: "historia",   // clave de categoría, ver i18n.js → CAT_META
  c: 1,                 // índice (base 0) de la opción correcta (igual en los 3 idiomas)
  es: { p: "¿Texto de la pregunta?", ops: ["Opción A", "Opción B", "Opción C", "Opción D"] },
  en: { p: "Question text?", ops: ["Option A", "Option B", "Option C", "Option D"] },
  pt: { p: "Texto da pergunta?", ops: ["Opção A", "Opção B", "Opção C", "Opção D"] },
}
```

---

## Antes de publicar — lista de verificación

- [ ] Cambiar `bundleIdentifier` en `app.json` si `com.pcimule.examenpanama` ya está tomado
- [ ] Preparar capturas de pantalla en los tamaños que exige Apple (6.7", 6.5", 5.5")
- [ ] Redactar descripción y palabras clave para la ficha del App Store
- [ ] Publicar una política de privacidad accesible por URL (Apple la exige aunque la app no recopile datos)
- [ ] Completar el cuestionario de privacidad en App Store Connect
  (esta app guarda el historial solo en el dispositivo — no envía datos a ningún servidor)
- [ ] Incluir en la descripción un aviso de que la app es un recurso de estudio
      independiente, sin afiliación ni respaldo del Tribunal Electoral de Panamá
      ni de ninguna entidad gubernamental

---

## Notas técnicas

- El historial de intentos se guarda con `AsyncStorage` (almacenamiento local del
  dispositivo). No hay servidor ni cuenta de usuario.
- La app funciona completamente sin conexión.
- Selector de idioma (🇪🇸 ES / 🇺🇸 EN / 🇧🇷 PT) en la pantalla principal; el idioma
  elegido se guarda con `AsyncStorage` y se recuerda entre sesiones. Español es el
  idioma por defecto.
- La ficha del App Store declara `es`, `en` y `pt-BR` como localizaciones soportadas
  (`CFBundleLocalizations` en `app.json`).
