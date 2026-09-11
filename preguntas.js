// Banco de preguntas — temario de naturalización panameña
// Disponible en ES / EN / PT. `catKey` referencia i18n.js → CAT_META / catNames.
// `c` es el índice (0-based) de la opción correcta, igual en los 3 idiomas.

export const BANCO = [
  // ══ ORGANIZACIÓN POLÍTICA ══════════════════════════════════
  { catKey: 'politica', c: 1,
    es: { p: '¿Qué es la Constitución Política de la República?', ops: ['Un reglamento del Órgano Ejecutivo', 'El conjunto de normas fundamentales que organizan el Estado panameño, del cual se derivan todas las demás normas legales. También se llama Carta Magna', 'Un tratado internacional firmado por Panamá', 'Las leyes aprobadas por la Asamblea Nacional'] },
    en: { p: 'What is the Political Constitution of the Republic?', ops: ['A regulation of the Executive Branch', 'The set of fundamental rules that organize the Panamanian State, from which all other legal rules derive. Also called the Magna Carta', 'An international treaty signed by Panama', 'The laws passed by the National Assembly'] },
    pt: { p: 'O que é a Constituição Política da República?', ops: ['Um regulamento do Órgão Executivo', 'O conjunto de normas fundamentais que organizam o Estado panamenho, do qual derivam todas as demais normas legais. Também chamada de Carta Magna', 'Um tratado internacional assinado pelo Panamá', 'As leis aprovadas pela Assembleia Nacional'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Cuántas constituciones políticas ha tenido la República de Panamá?', ops: ['Tres (1904, 1946, 1972)', 'Cuatro (1904, 1941, 1946, 1972)', 'Dos (1904 y 1972)', 'Cinco (1904, 1941, 1946, 1972, 1989)'] },
    en: { p: 'How many political constitutions has the Republic of Panama had?', ops: ['Three (1904, 1946, 1972)', 'Four (1904, 1941, 1946, 1972)', 'Two (1904 and 1972)', 'Five (1904, 1941, 1946, 1972, 1989)'] },
    pt: { p: 'Quantas constituições políticas teve a República do Panamá?', ops: ['Três (1904, 1946, 1972)', 'Quatro (1904, 1941, 1946, 1972)', 'Duas (1904 e 1972)', 'Cinco (1904, 1941, 1946, 1972, 1989)'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿Cuál es la Constitución vigente de Panamá?', ops: ['La de 1946', 'La de 1941', 'La de 1972, reformada por Actos Reformatorios de 1978, el Acto Constitucional de 1983 y Actos Legislativos de 1993, 1994 y 2004', 'La de 1904'] },
    en: { p: "Which is Panama's constitution currently in force?", ops: ['The 1946 one', 'The 1941 one', 'The 1972 one, amended by the Reform Acts of 1978, the Constitutional Act of 1983, and Legislative Acts of 1993, 1994 and 2004', 'The 1904 one'] },
    pt: { p: 'Qual é a Constituição vigente do Panamá?', ops: ['A de 1946', 'A de 1941', 'A de 1972, reformada pelos Atos Reformatórios de 1978, o Ato Constitucional de 1983 e Atos Legislativos de 1993, 1994 e 2004', 'A de 1904'] } },

  { catKey: 'politica', c: 1,
    es: { p: 'Según la Constitución, el Gobierno panameño se caracteriza por ser:', ops: ['Federal, democrático, representativo y presidencial', 'Unitario, republicano, democrático y representativo', 'Unitario, federal, democrático y parlamentario', 'Republicano, federal, liberal y representativo'] },
    en: { p: 'According to the Constitution, the Panamanian Government is characterized as being:', ops: ['Federal, democratic, representative and presidential', 'Unitary, republican, democratic and representative', 'Unitary, federal, democratic and parliamentary', 'Republican, federal, liberal and representative'] },
    pt: { p: 'Segundo a Constituição, o Governo panamenho se caracteriza por ser:', ops: ['Federal, democrático, representativo e presidencial', 'Unitário, republicano, democrático e representativo', 'Unitário, federal, democrático e parlamentar', 'Republicano, federal, liberal e representativo'] } },

  { catKey: 'politica', c: 1,
    es: { p: "¿Qué significa que el gobierno sea 'Unitario'?", ops: ['Que tiene un solo partido político', 'Que todos los niveles de gobierno están subordinados al poder central y en todo el país rigen las mismas leyes', 'Que el presidente tiene poderes absolutos', 'Que solo existe un órgano de gobierno'] },
    en: { p: "What does it mean for the government to be 'Unitary'?", ops: ['That it has a single political party', 'That all levels of government are subordinate to the central power and the same laws apply throughout the country', 'That the president has absolute powers', 'That only one branch of government exists'] },
    pt: { p: "O que significa o governo ser 'Unitário'?", ops: ['Que tem um único partido político', 'Que todos os níveis de governo estão subordinados ao poder central e as mesmas leis vigoram em todo o país', 'Que o presidente tem poderes absolutos', 'Que existe apenas um órgão de governo'] } },

  { catKey: 'politica', c: 1,
    es: { p: "¿Qué significa que el gobierno sea 'Democrático'?", ops: ['Que el presidente elige a los ministros', 'Se basa en la igualdad política de los ciudadanos', 'Que hay elecciones cada diez años', 'Que el ejército gobierna el país'] },
    en: { p: "What does it mean for the government to be 'Democratic'?", ops: ['That the president chooses the ministers', 'It is based on the political equality of citizens', 'That there are elections every ten years', 'That the army governs the country'] },
    pt: { p: "O que significa o governo ser 'Democrático'?", ops: ['Que o presidente escolhe os ministros', 'Baseia-se na igualdade política dos cidadãos', 'Que há eleições a cada dez anos', 'Que o exército governa o país'] } },

  { catKey: 'politica', c: 1,
    es: { p: "¿Qué significa que el gobierno sea 'Representativo'?", ops: ['El pueblo ejerce directamente todas las funciones del gobierno', 'El pueblo, siendo soberano, delega el ejercicio de las funciones del gobierno en personas elegidas por él', 'El gobierno representa solo a los partidos políticos', 'Los representantes se eligen por sorteo'] },
    en: { p: "What does it mean for the government to be 'Representative'?", ops: ['The people directly exercise all functions of government', 'The people, being sovereign, delegate the exercise of government functions to persons elected by them', 'The government represents only the political parties', 'Representatives are chosen by lottery'] },
    pt: { p: "O que significa o governo ser 'Representativo'?", ops: ['O povo exerce diretamente todas as funções do governo', 'O povo, sendo soberano, delega o exercício das funções de governo a pessoas eleitas por ele', 'O governo representa apenas os partidos políticos', 'Os representantes são escolhidos por sorteio'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿Cuál de los siguientes NO es un derecho consagrado en la Constitución?', ops: ['Libertad de pensamiento y expresión', 'Derecho de igualdad ante la ley', 'Derecho a tener doble nacionalidad automática', 'Libertad de conciencia, culto y enseñanza'] },
    en: { p: 'Which of the following is NOT a right enshrined in the Constitution?', ops: ['Freedom of thought and expression', 'Right to equality before the law', 'Right to automatic dual nationality', 'Freedom of conscience, worship and teaching'] },
    pt: { p: 'Qual das seguintes opções NÃO é um direito consagrado na Constituição?', ops: ['Liberdade de pensamento e expressão', 'Direito à igualdade perante a lei', 'Direito à dupla nacionalidade automática', 'Liberdade de consciência, culto e ensino'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Qué es la nacionalidad?', ops: ['El documento de identidad', 'Un vínculo social y político que une a una persona con el Estado al que pertenece, dándole derecho a reclamar protección', 'El derecho a votar en elecciones', 'El permiso de residencia en un país'] },
    en: { p: 'What is nationality?', ops: ['The identity document', 'A social and political bond that links a person to the State to which they belong, giving them the right to claim protection', 'The right to vote in elections', "A country's residence permit"] },
    pt: { p: 'O que é a nacionalidade?', ops: ['O documento de identidade', 'Um vínculo social e político que une uma pessoa ao Estado a que pertence, dando-lhe o direito de reclamar proteção', 'O direito de votar em eleições', 'A permissão de residência em um país'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿De cuántas formas se puede adquirir la nacionalidad panameña?', ops: ['Solo por nacimiento', 'Por nacimiento o naturalización', 'Por nacimiento, naturalización o disposición constitucional', 'Por nacimiento, matrimonio o naturalización'] },
    en: { p: 'In how many ways can Panamanian nationality be acquired?', ops: ['Only by birth', 'By birth or naturalization', 'By birth, naturalization, or constitutional provision', 'By birth, marriage, or naturalization'] },
    pt: { p: 'De quantas formas pode-se adquirir a nacionalidade panamenha?', ops: ['Somente por nascimento', 'Por nascimento ou naturalização', 'Por nascimento, naturalização ou disposição constitucional', 'Por nascimento, casamento ou naturalização'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Cuántos años de residencia necesita un extranjero para naturalizarse (caso general)?', ops: ['Tres años', 'Cinco años consecutivos', 'Diez años', 'Siete años'] },
    en: { p: 'How many years of residency does a foreigner need to naturalize (general case)?', ops: ['Three years', 'Five consecutive years', 'Ten years', 'Seven years'] },
    pt: { p: 'Quantos anos de residência um estrangeiro precisa para se naturalizar (caso geral)?', ops: ['Três anos', 'Cinco anos consecutivos', 'Dez anos', 'Sete anos'] } },

  { catKey: 'politica', c: 1,
    es: { p: 'Un extranjero con 3 años de residencia puede pedir naturalización si:', ops: ['Tiene dinero suficiente en el banco', 'Tiene hijos nacidos en Panamá, o padre/madre panameños, o cónyuge de nacionalidad panameña', 'Trabaja para el gobierno panameño', 'Solo habla español'] },
    en: { p: 'A foreigner with 3 years of residency may apply for naturalization if:', ops: ['They have enough money in the bank', 'They have children born in Panama, or a Panamanian father/mother, or a spouse of Panamanian nationality', 'They work for the Panamanian government', 'They only speak Spanish'] },
    pt: { p: 'Um estrangeiro com 3 anos de residência pode solicitar a naturalização se:', ops: ['Tiver dinheiro suficiente no banco', 'Tiver filhos nascidos no Panamá, ou pai/mãe panamenhos, ou cônjuge de nacionalidade panamenha', 'Trabalhar para o governo panamenho', 'Falar apenas espanhol'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Quiénes son panameños por disposición constitucional sin carta de naturaleza?', ops: ['Hijos de extranjeros nacidos en Panamá', 'Los nacidos en el extranjero y adoptados por nacionales panameños antes de cumplir 7 años', 'Los casados con panameños por más de 5 años', 'Los extranjeros con inversiones en Panamá'] },
    en: { p: 'Who are Panamanians by constitutional provision without a naturalization certificate?', ops: ['Children of foreigners born in Panama', 'Those born abroad and adopted by Panamanian nationals before turning 7 years old', 'Those married to Panamanians for more than 5 years', 'Foreigners with investments in Panama'] },
    pt: { p: 'Quem são panamenhos por disposição constitucional sem carta de naturalização?', ops: ['Filhos de estrangeiros nascidos no Panamá', 'Os nascidos no exterior e adotados por nacionais panamenhos antes de completar 7 anos', 'Os casados com panamenhos há mais de 5 anos', 'Os estrangeiros com investimentos no Panamá'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Qué es el sufragio?', ops: ['El presupuesto nacional del Estado', 'El derecho y deber del ciudadano de intervenir en la organización del Estado mediante consultas populares', 'El registro de nacimientos del Tribunal Electoral', 'El proceso de naturalización de extranjeros'] },
    en: { p: 'What is suffrage?', ops: ['The national budget of the State', "The citizen's right and duty to take part in organizing the State through popular consultations", "The Electoral Tribunal's birth registry", 'The naturalization process for foreigners'] },
    pt: { p: 'O que é o sufrágio?', ops: ['O orçamento nacional do Estado', 'O direito e o dever do cidadão de intervir na organização do Estado por meio de consultas populares', 'O registro de nascimentos do Tribunal Eleitoral', 'O processo de naturalização de estrangeiros'] } },

  { catKey: 'politica', c: 1,
    es: { p: 'Para ejercer el sufragio se necesita:', ops: ['Solo ser mayor de 18 años', 'Ser ciudadano panameño, aparecer en el Padrón Electoral, presentar la cédula y estar en pleno goce de derechos civiles y políticos', 'Tener al menos 5 años de residencia', 'Solo presentar pasaporte'] },
    en: { p: 'To exercise suffrage one needs to:', ops: ['Only be over 18 years old', 'Be a Panamanian citizen, appear on the Electoral Roll, present the ID card, and be in full enjoyment of civil and political rights', 'Have at least 5 years of residency', 'Only present a passport'] },
    pt: { p: 'Para exercer o sufrágio é necessário:', ops: ['Apenas ser maior de 18 anos', 'Ser cidadão panamenho, constar no Cadastro Eleitoral, apresentar a cédula e estar em pleno gozo dos direitos civis e políticos', 'Ter pelo menos 5 anos de residência', 'Apenas apresentar o passaporte'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿Por cuánto tiempo duran los cargos públicos elegidos por votación popular?', ops: ['Cuatro años', 'Seis años', 'Cinco años, iniciando funciones el 1° de julio siguiente a la elección', 'Tres años'] },
    en: { p: 'How long do publicly elected offices last?', ops: ['Four years', 'Six years', 'Five years, beginning duties on July 1st following the election', 'Three years'] },
    pt: { p: 'Por quanto tempo duram os cargos públicos eleitos por votação popular?', ops: ['Quatro anos', 'Seis anos', 'Cinco anos, iniciando funções em 1º de julho seguinte à eleição', 'Três anos'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Cuáles son los tres órganos del Estado panameño?', ops: ['Ejecutivo, Legislativo y Tribunal Electoral', 'Ejecutivo, Legislativo y Judicial', 'Presidente, Asamblea Nacional y Corte Suprema', 'Gobierno, Congreso y Tribunales'] },
    en: { p: 'What are the three branches of the Panamanian State?', ops: ['Executive, Legislative and Electoral Tribunal', 'Executive, Legislative and Judicial', 'President, National Assembly and Supreme Court', 'Government, Congress and Courts'] },
    pt: { p: 'Quais são os três órgãos do Estado panamenho?', ops: ['Executivo, Legislativo e Tribunal Eleitoral', 'Executivo, Legislativo e Judiciário', 'Presidente, Assembleia Nacional e Suprema Corte', 'Governo, Congresso e Tribunais'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Cómo está compuesto el Órgano Ejecutivo?', ops: ['Por el Presidente y los diputados', 'Por el Presidente de la República, su Vicepresidente y los 15 Ministros de Estado', 'Por el Presidente, Vicepresidente y los magistrados', 'Solo por el Presidente'] },
    en: { p: 'How is the Executive Branch composed?', ops: ['By the President and the deputies', 'By the President of the Republic, the Vice President, and the 15 Ministers of State', 'By the President, Vice President and the justices', 'Only by the President'] },
    pt: { p: 'Como é composto o Órgão Executivo?', ops: ['Pelo Presidente e os deputados', 'Pelo Presidente da República, seu Vice-Presidente e os 15 Ministros de Estado', 'Pelo Presidente, Vice-Presidente e os magistrados', 'Apenas pelo Presidente'] } },

  { catKey: 'politica', c: 2,
    es: { p: 'Para ser presidente o vicepresidente se requiere:', ops: ['Ser panameño por nacimiento y tener 30 años', 'Ser panameño por naturalización y tener 35 años', 'Ser panameño por nacimiento, haber cumplido 35 años y no haber sido condenado por delito doloso con pena de 5+ años', 'Ser panameño y haber vivido en el país al menos 10 años'] },
    en: { p: 'To be president or vice president it is required to:', ops: ['Be Panamanian by birth and be 30 years old', 'Be Panamanian by naturalization and be 35 years old', 'Be Panamanian by birth, be at least 35 years old, and not have been convicted of an intentional crime with a sentence of 5+ years', 'Be Panamanian and have lived in the country for at least 10 years'] },
    pt: { p: 'Para ser presidente ou vice-presidente é necessário:', ops: ['Ser panamenho de nascimento e ter 30 anos', 'Ser panamenho por naturalização e ter 35 anos', 'Ser panamenho de nascimento, ter completado 35 anos e não ter sido condenado por crime doloso com pena de 5+ anos', 'Ser panamenho e ter vivido no país por pelo menos 10 anos'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Por cuántos diputados está integrada actualmente la Asamblea Nacional?', ops: ['65 diputados', '71 diputados', '80 diputados', '60 diputados'] },
    en: { p: 'How many deputies currently make up the National Assembly?', ops: ['65 deputies', '71 deputies', '80 deputies', '60 deputies'] },
    pt: { p: 'Por quantos deputados é atualmente composta a Assembleia Nacional?', ops: ['65 deputados', '71 deputados', '80 deputados', '60 deputados'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Cuál es la principal función de la Asamblea Nacional?', ops: ['Elegir al presidente', 'Expedir las leyes necesarias para el cumplimiento de los fines del Estado', 'Administrar el Canal de Panamá', 'Dirigir la política exterior'] },
    en: { p: 'What is the main function of the National Assembly?', ops: ['Elect the president', 'Enact the laws necessary to fulfill the purposes of the State', 'Manage the Panama Canal', 'Direct foreign policy'] },
    pt: { p: 'Qual é a principal função da Assembleia Nacional?', ops: ['Eleger o presidente', 'Expedir as leis necessárias para o cumprimento dos fins do Estado', 'Administrar o Canal do Panamá', 'Dirigir a política externa'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Qué es el Consejo de Gabinete?', ops: ['Una reunión de los diputados', 'La reunión del Presidente, quien lo presidirá, con el Vicepresidente y los Ministros de Estado', 'El tribunal que juzga al presidente', 'Una comisión del Tribunal Electoral'] },
    en: { p: 'What is the Cabinet Council?', ops: ['A meeting of the deputies', 'The meeting of the President, who presides over it, with the Vice President and the Ministers of State', 'The tribunal that judges the president', 'A commission of the Electoral Tribunal'] },
    pt: { p: 'O que é o Conselho de Gabinete?', ops: ['Uma reunião dos deputados', 'A reunião do Presidente, que o preside, com o Vice-Presidente e os Ministros de Estado', 'O tribunal que julga o presidente', 'Uma comissão do Tribunal Eleitoral'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿Cuándo se creó el Tribunal Electoral?', ops: ['En 1903', 'En 1972', 'En 1956, mediante el Acto Legislativo N°2', 'En 1983'] },
    en: { p: 'When was the Electoral Tribunal created?', ops: ['In 1903', 'In 1972', 'In 1956, through Legislative Act No. 2', 'In 1983'] },
    pt: { p: 'Quando foi criado o Tribunal Eleitoral?', ops: ['Em 1903', 'Em 1972', 'Em 1956, por meio do Ato Legislativo Nº 2', 'Em 1983'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Por cuántos magistrados está integrado el Tribunal Electoral y por cuánto tiempo?', ops: ['Cinco magistrados por 5 años', 'Tres magistrados nombrados por 10 años: uno por el Ejecutivo, uno por el Legislativo y uno por la Corte Suprema', 'Siete magistrados por 7 años', 'Nueve magistrados vitalicios'] },
    en: { p: 'How many judges make up the Electoral Tribunal and for how long are they appointed?', ops: ['Five judges for 5 years', 'Three judges appointed for 10 years: one by the Executive, one by the Legislative and one by the Supreme Court', 'Seven judges for 7 years', 'Nine judges for life'] },
    pt: { p: 'Por quantos magistrados é composto o Tribunal Eleitoral e por quanto tempo?', ops: ['Cinco magistrados por 5 anos', 'Três magistrados nomeados por 10 anos: um pelo Executivo, um pelo Legislativo e um pela Suprema Corte', 'Sete magistrados por 7 anos', 'Nove magistrados vitalícios'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Cuál es la función principal del Órgano Judicial?', ops: ['Crear las leyes', 'Administrar la justicia de forma gratuita, expedita e ininterrumpida', 'Organizar las elecciones', 'Fiscalizar el gasto público'] },
    en: { p: 'What is the main function of the Judicial Branch?', ops: ['Create laws', 'Administer justice free of charge, promptly and without interruption', 'Organize elections', 'Oversee public spending'] },
    pt: { p: 'Qual é a principal função do Órgão Judiciário?', ops: ['Criar as leis', 'Administrar a justiça de forma gratuita, expedita e ininterrupta', 'Organizar as eleições', 'Fiscalizar os gastos públicos'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿Quién es el jefe de la administración municipal?', ops: ['El gobernador', 'El representante de corregimiento', 'El alcalde, elegido por votación popular directa', 'El diputado'] },
    en: { p: 'Who is the head of the municipal administration?', ops: ['The governor', 'The corregimiento representative', 'The mayor, elected by direct popular vote', 'The deputy'] },
    pt: { p: 'Quem é o chefe da administração municipal?', ops: ['O governador', 'O representante de corregimiento', 'O prefeito, eleito por votação popular direta', 'O deputado'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿Quién nombra al gobernador de provincia?', ops: ['Los ciudadanos por votación directa', 'La Asamblea Nacional', 'El Órgano Ejecutivo por conducto del Ministro de Gobierno', 'El Tribunal Electoral'] },
    en: { p: 'Who appoints the provincial governor?', ops: ['Citizens by direct vote', 'The National Assembly', 'The Executive Branch, through the Minister of Government', 'The Electoral Tribunal'] },
    pt: { p: 'Quem nomeia o governador de província?', ops: ['Os cidadãos por votação direta', 'A Assembleia Nacional', 'O Órgão Executivo por meio do Ministro de Governo', 'O Tribunal Eleitoral'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿A qué cargos puede aspirar un panameño naturalizado?', ops: ['A todos, incluyendo la presidencia', 'Solo a diputado', 'A Diputado, Alcalde, Representante de Corregimiento y Concejal (con requisitos de tiempo)', 'No puede aspirar a ningún cargo'] },
    en: { p: 'Which offices can a naturalized Panamanian aspire to?', ops: ['All of them, including the presidency', 'Only deputy', 'Deputy, Mayor, Corregimiento Representative and Councilman (with time requirements)', 'They cannot aspire to any office'] },
    pt: { p: 'A quais cargos pode aspirar um panamenho naturalizado?', ops: ['A todos, incluindo a presidência', 'Somente a deputado', 'Deputado, Prefeito, Representante de Corregimiento e Vereador (com requisitos de tempo)', 'Não pode aspirar a nenhum cargo'] } },

  { catKey: 'politica', c: 1,
    es: { p: 'Para ser Alcalde, un panameño naturalizado debe haber obtenido la nacionalidad al menos:', ops: ['5 años antes de la elección', '10 años antes de la fecha de la elección', '15 años antes de la elección', '3 años antes de la elección'] },
    en: { p: 'To be Mayor, a naturalized Panamanian must have obtained nationality at least:', ops: ['5 years before the election', '10 years before the election date', '15 years before the election', '3 years before the election'] },
    pt: { p: 'Para ser Prefeito, um panamenho naturalizado deve ter obtido a nacionalidade pelo menos:', ops: ['5 anos antes da eleição', '10 anos antes da data da eleição', '15 anos antes da eleição', '3 anos antes da eleição'] } },

  { catKey: 'politica', c: 2,
    es: { p: '¿Cuántos ministerios conforman la administración pública de Panamá?', ops: ['Doce', 'Trece', 'Quince', 'Dieciséis'] },
    en: { p: "How many ministries make up Panama's public administration?", ops: ['Twelve', 'Thirteen', 'Fifteen', 'Sixteen'] },
    pt: { p: 'Quantos ministérios compõem a administração pública do Panamá?', ops: ['Doze', 'Treze', 'Quinze', 'Dezesseis'] } },

  { catKey: 'politica', c: 1,
    es: { p: '¿Qué es el Ministerio Público?', ops: ['El ministerio que administra el Canal', 'Organismo que colabora con el Órgano Judicial; compuesto por la Procuraduría General de la Nación y la Procuraduría de la Administración', 'El ministerio de educación pública', 'El ministerio de relaciones exteriores'] },
    en: { p: "What is the Public Ministry (Attorney General's Office)?", ops: ['The ministry that manages the Canal', "A body that collaborates with the Judicial Branch; made up of the Attorney General's Office of the Nation and the Administration's Attorney's Office", 'The ministry of public education', 'The ministry of foreign relations'] },
    pt: { p: 'O que é o Ministério Público?', ops: ['O ministério que administra o Canal', 'Órgão que colabora com o Órgão Judiciário; composto pela Procuradoria-Geral da Nação e pela Procuradoria da Administração', 'O ministério da educação pública', 'O ministério das relações exteriores'] } },

  // ══ GEOGRAFÍA ══════════════════════════════════════════════
  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuáles son los límites de la República de Panamá?', ops: ['Norte: Caribe, Sur: Pacífico, Este: Costa Rica, Oeste: Colombia', 'Norte: Caribe, Sur: Pacífico, Oeste: Costa Rica, Este: Colombia', 'Norte: Pacífico, Sur: Caribe, Este: Costa Rica, Oeste: Colombia', 'Norte: Caribe, Sur: Pacífico, Oeste: Colombia, Este: Costa Rica'] },
    en: { p: 'What are the borders of the Republic of Panama?', ops: ['North: Caribbean, South: Pacific, East: Costa Rica, West: Colombia', 'North: Caribbean, South: Pacific, West: Costa Rica, East: Colombia', 'North: Pacific, South: Caribbean, East: Costa Rica, West: Colombia', 'North: Caribbean, South: Pacific, West: Colombia, East: Costa Rica'] },
    pt: { p: 'Quais são os limites da República do Panamá?', ops: ['Norte: Caribe, Sul: Pacífico, Leste: Costa Rica, Oeste: Colômbia', 'Norte: Caribe, Sul: Pacífico, Oeste: Costa Rica, Leste: Colômbia', 'Norte: Pacífico, Sul: Caribe, Leste: Costa Rica, Oeste: Colômbia', 'Norte: Caribe, Sul: Pacífico, Oeste: Colômbia, Leste: Costa Rica'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿En cuántas provincias y comarcas está dividida Panamá?', ops: ['8 provincias y 4 comarcas', '10 provincias y 6 comarcas', '9 provincias y 5 comarcas', '12 provincias y 6 comarcas'] },
    en: { p: 'Into how many provinces and comarcas is Panama divided?', ops: ['8 provinces and 4 comarcas', '10 provinces and 6 comarcas', '9 provinces and 5 comarcas', '12 provinces and 6 comarcas'] },
    pt: { p: 'Em quantas províncias e comarcas está dividido o Panamá?', ops: ['8 províncias e 4 comarcas', '10 províncias e 6 comarcas', '9 províncias e 5 comarcas', '12 províncias e 6 comarcas'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuál es la capital de la provincia de Chiriquí?', ops: ['Santiago', 'Chitré', 'David', 'Penonomé'] },
    en: { p: 'What is the capital of Chiriquí province?', ops: ['Santiago', 'Chitré', 'David', 'Penonomé'] },
    pt: { p: 'Qual é a capital da província de Chiriquí?', ops: ['Santiago', 'Chitré', 'David', 'Penonomé'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuál es la capital de la provincia de Herrera?', ops: ['Las Tablas', 'Chitré', 'La Chorrera', 'Bocas del Toro'] },
    en: { p: 'What is the capital of Herrera province?', ops: ['Las Tablas', 'Chitré', 'La Chorrera', 'Bocas del Toro'] },
    pt: { p: 'Qual é a capital da província de Herrera?', ops: ['Las Tablas', 'Chitré', 'La Chorrera', 'Bocas del Toro'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuál es la capital de la provincia de Los Santos?', ops: ['Chitré', 'Santiago', 'Las Tablas', 'Penonomé'] },
    en: { p: 'What is the capital of Los Santos province?', ops: ['Chitré', 'Santiago', 'Las Tablas', 'Penonomé'] },
    pt: { p: 'Qual é a capital da província de Los Santos?', ops: ['Chitré', 'Santiago', 'Las Tablas', 'Penonomé'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuál es la capital de la provincia de Veraguas?', ops: ['Penonomé', 'Santiago', 'David', 'La Palma'] },
    en: { p: 'What is the capital of Veraguas province?', ops: ['Penonomé', 'Santiago', 'David', 'La Palma'] },
    pt: { p: 'Qual é a capital da província de Veraguas?', ops: ['Penonomé', 'Santiago', 'David', 'La Palma'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuál es la capital de la provincia de Darién?', ops: ['La Chorrera', 'La Palma', 'Colón', 'Buabidí'] },
    en: { p: 'What is the capital of Darién province?', ops: ['La Chorrera', 'La Palma', 'Colón', 'Buabidí'] },
    pt: { p: 'Qual é a capital da província de Darién?', ops: ['La Chorrera', 'La Palma', 'Colón', 'Buabidí'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuál es la capital de la provincia de Coclé?', ops: ['Chitré', 'Colón', 'Penonomé', 'Santiago'] },
    en: { p: 'What is the capital of Coclé province?', ops: ['Chitré', 'Colón', 'Penonomé', 'Santiago'] },
    pt: { p: 'Qual é a capital da província de Coclé?', ops: ['Chitré', 'Colón', 'Penonomé', 'Santiago'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuál es la capital de la provincia de Panamá Oeste?', ops: ['Ciudad de Panamá', 'Penonomé', 'La Chorrera', 'Arraiján'] },
    en: { p: 'What is the capital of Panamá Oeste province?', ops: ['Panama City', 'Penonomé', 'La Chorrera', 'Arraiján'] },
    pt: { p: 'Qual é a capital da província de Panamá Oeste?', ops: ['Cidade do Panamá', 'Penonomé', 'La Chorrera', 'Arraiján'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuál es la cabecera de la Comarca Kuna Yala?', ops: ['Buabidí', 'Akua Yala', 'El Porvenir', 'Unión Chocó'] },
    en: { p: 'What is the seat of the Kuna Yala Comarca?', ops: ['Buabidí', 'Akua Yala', 'El Porvenir', 'Unión Chocó'] },
    pt: { p: 'Qual é a sede da Comarca Kuna Yala?', ops: ['Buabidí', 'Akua Yala', 'El Porvenir', 'Unión Chocó'] } },

  { catKey: 'geografia', c: 3,
    es: { p: '¿Cuál es la cabecera de la Comarca Ngäbe-Buglé?', ops: ['Akua Yala', 'El Porvenir', 'Sieyic', 'Buabidí'] },
    en: { p: 'What is the seat of the Ngäbe-Buglé Comarca?', ops: ['Akua Yala', 'El Porvenir', 'Sieyic', 'Buabidí'] },
    pt: { p: 'Qual é a sede da Comarca Ngäbe-Buglé?', ops: ['Akua Yala', 'El Porvenir', 'Sieyic', 'Buabidí'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuál es la cabecera de la Comarca Emberá Wounaán?', ops: ['El Porvenir', 'Buabidí', 'Unión Chocó', 'Akua Yala'] },
    en: { p: 'What is the seat of the Emberá Wounaán Comarca?', ops: ['El Porvenir', 'Buabidí', 'Unión Chocó', 'Akua Yala'] },
    pt: { p: 'Qual é a sede da Comarca Emberá Wounaán?', ops: ['El Porvenir', 'Buabidí', 'Unión Chocó', 'Akua Yala'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuál es la forma del Istmo de Panamá?', ops: ["Forma de 'Z' acostada", "Forma de 'S' acostada", "Forma de 'L'", "Forma de 'C'"] },
    en: { p: 'What is the shape of the Isthmus of Panama?', ops: ["A lying-down 'Z' shape", "A lying-down 'S' shape", "An 'L' shape", "A 'C' shape"] },
    pt: { p: 'Qual é a forma do Istmo do Panamá?', ops: ["Forma de 'Z' deitado", "Forma de 'S' deitado", "Forma de 'L'", "Forma de 'C'"] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuál es la superficie del Istmo de Panamá?', ops: ['65,000 km²', '80,000 km²', '75,517 km²', '90,000 km²'] },
    en: { p: 'What is the surface area of the Isthmus of Panama?', ops: ['65,000 km²', '80,000 km²', '75,517 km²', '90,000 km²'] },
    pt: { p: 'Qual é a superfície do Istmo do Panamá?', ops: ['65.000 km²', '80.000 km²', '75.517 km²', '90.000 km²'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuál es la altura máxima del Istmo de Panamá?', ops: ['El Cerro Ancón, 1,000 m, en Panamá', 'El Volcán Barú, 3,475 metros, en la provincia de Chiriquí', 'El Cerro Pirre, 2,000 m, en Darién', 'El Volcán Barú, 4,200 m, en Veraguas'] },
    en: { p: 'What is the maximum elevation of the Isthmus of Panama?', ops: ['Cerro Ancón, 1,000 m, in Panama', 'Barú Volcano, 3,475 meters, in Chiriquí province', 'Cerro Pirre, 2,000 m, in Darién', 'Barú Volcano, 4,200 m, in Veraguas'] },
    pt: { p: 'Qual é a altitude máxima do Istmo do Panamá?', ops: ['O Cerro Ancón, 1.000 m, no Panamá', 'O Vulcão Barú, 3.475 metros, na província de Chiriquí', 'O Cerro Pirre, 2.000 m, em Darién', 'O Vulcão Barú, 4.200 m, em Veraguas'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuáles son las principales provincias ganaderas?', ops: ['Panamá, Colón y Darién', 'Chiriquí, Los Santos y Veraguas', 'Coclé, Herrera y Los Santos', 'Chiriquí, Bocas del Toro y Coclé'] },
    en: { p: 'What are the main cattle-ranching provinces?', ops: ['Panamá, Colón and Darién', 'Chiriquí, Los Santos and Veraguas', 'Coclé, Herrera and Los Santos', 'Chiriquí, Bocas del Toro and Coclé'] },
    pt: { p: 'Quais são as principais províncias pecuaristas?', ops: ['Panamá, Colón e Darién', 'Chiriquí, Los Santos e Veraguas', 'Coclé, Herrera e Los Santos', 'Chiriquí, Bocas del Toro e Coclé'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Cuáles son las principales hidroeléctricas de Panamá?', ops: ['Fortuna, Gatún y Miraflores', 'Bayano (en Panamá) y Fortuna, Esti, Estrella y Los Valles (en Chiriquí)', 'Fortuna, Bayano y Estrella en Veraguas', 'Changuinola en Bocas del Toro'] },
    en: { p: 'What are the main hydroelectric plants of Panama?', ops: ['Fortuna, Gatún and Miraflores', 'Bayano (in Panamá) and Fortuna, Esti, Estrella and Los Valles (in Chiriquí)', 'Fortuna, Bayano and Estrella in Veraguas', 'Changuinola in Bocas del Toro'] },
    pt: { p: 'Quais são as principais hidrelétricas do Panamá?', ops: ['Fortuna, Gatún e Miraflores', 'Bayano (no Panamá) e Fortuna, Esti, Estrella e Los Valles (em Chiriquí)', 'Fortuna, Bayano e Estrella em Veraguas', 'Changuinola em Bocas del Toro'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cuándo fue inaugurado el Puente de las Américas?', ops: ['15 de agosto de 1914', '10 de octubre de 1955', '12 de octubre de 1962', '3 de noviembre de 1903'] },
    en: { p: 'When was the Bridge of the Americas inaugurated?', ops: ['August 15, 1914', 'October 10, 1955', 'October 12, 1962', 'November 3, 1903'] },
    pt: { p: 'Quando foi inaugurada a Ponte das Américas?', ops: ['15 de agosto de 1914', '10 de outubro de 1955', '12 de outubro de 1962', '3 de novembro de 1903'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cómo se llamaba originalmente el Puente de las Américas?', ops: ['Puente Centenario', 'Puente Miraflores', 'Puente Thatcher', 'Puente Balboa'] },
    en: { p: 'What was the Bridge of the Americas originally called?', ops: ['Centenario Bridge', 'Miraflores Bridge', 'Thatcher Bridge', 'Balboa Bridge'] },
    pt: { p: 'Como se chamava originalmente a Ponte das Américas?', ops: ['Ponte Centenário', 'Ponte Miraflores', 'Ponte Thatcher', 'Ponte Balboa'] } },

  { catKey: 'geografia', c: 1,
    es: { p: '¿Dónde está el aeropuerto internacional principal de Panamá?', ops: ['En Albrook, Ciudad de Panamá', 'En Tocumen, Ciudad de Panamá', 'En David, Chiriquí', 'En Colón'] },
    en: { p: "Where is Panama's main international airport located?", ops: ['In Albrook, Panama City', 'In Tocumen, Panama City', 'In David, Chiriquí', 'In Colón'] },
    pt: { p: 'Onde está o principal aeroporto internacional do Panamá?', ops: ['Em Albrook, Cidade do Panamá', 'Em Tocumen, Cidade do Panamá', 'Em David, Chiriquí', 'Em Colón'] } },

  { catKey: 'geografia', c: 2,
    es: { p: '¿Cómo se llama el aeropuerto internacional en David, Chiriquí?', ops: ['Aeropuerto Marcos A. Gelabert', 'Aeropuerto Capitán Alonso Valderrama', 'Aeropuerto Enrique Malek', 'Aeropuerto Rubén Cantú'] },
    en: { p: 'What is the name of the international airport in David, Chiriquí?', ops: ['Marcos A. Gelabert Airport', 'Captain Alonso Valderrama Airport', 'Enrique Malek Airport', 'Rubén Cantú Airport'] },
    pt: { p: 'Qual é o nome do aeroporto internacional em David, Chiriquí?', ops: ['Aeroporto Marcos A. Gelabert', 'Aeroporto Capitão Alonso Valderrama', 'Aeroporto Enrique Malek', 'Aeroporto Rubén Cantú'] } },

  // ══ HISTORIA ═══════════════════════════════════════════════
  { catKey: 'historia', c: 2,
    es: { p: '¿Cuál fue la primera población fundada en el Istmo?', ops: ['La ciudad de Panamá, por Pedrarias Dávila', 'Portobelo, por Cristóbal Colón', 'Santa María la Antigua del Darién, fundada por Vasco Núñez de Balboa en 1510', 'Nombre de Dios, por los españoles'] },
    en: { p: 'What was the first settlement founded on the Isthmus?', ops: ['Panama City, by Pedrarias Dávila', 'Portobelo, by Christopher Columbus', 'Santa María la Antigua del Darién, founded by Vasco Núñez de Balboa in 1510', 'Nombre de Dios, by the Spanish'] },
    pt: { p: 'Qual foi a primeira povoação fundada no Istmo?', ops: ['A cidade do Panamá, por Pedrarias Dávila', 'Portobelo, por Cristóvão Colombo', 'Santa María la Antigua del Darién, fundada por Vasco Núñez de Balboa em 1510', 'Nombre de Dios, pelos espanhóis'] } },

  { catKey: 'historia', c: 3,
    es: { p: '¿Quién es considerado el conquistador del Istmo?', ops: ['Vasco Núñez de Balboa', 'Cristóbal Colón', 'Rodrigo Galván de Bastidas', 'Pedrarias Dávila, quien fundó la ciudad de Panamá el 15 de agosto de 1519'] },
    en: { p: 'Who is considered the conqueror of the Isthmus?', ops: ['Vasco Núñez de Balboa', 'Christopher Columbus', 'Rodrigo Galván de Bastidas', 'Pedrarias Dávila, who founded Panama City on August 15, 1519'] },
    pt: { p: 'Quem é considerado o conquistador do Istmo?', ops: ['Vasco Núñez de Balboa', 'Cristóvão Colombo', 'Rodrigo Galván de Bastidas', 'Pedrarias Dávila, que fundou a cidade do Panamá em 15 de agosto de 1519'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Quién descubrió el Mar del Sur (Océano Pacífico) y cuándo?', ops: ['Cristóbal Colón, 12 de octubre de 1492', 'Vasco Núñez de Balboa, el 25 de septiembre de 1513', 'Rodrigo Galván de Bastidas, en 1501', 'Pedrarias Dávila, en 1519'] },
    en: { p: 'Who discovered the South Sea (Pacific Ocean) and when?', ops: ['Christopher Columbus, October 12, 1492', 'Vasco Núñez de Balboa, on September 25, 1513', 'Rodrigo Galván de Bastidas, in 1501', 'Pedrarias Dávila, in 1519'] },
    pt: { p: 'Quem descobriu o Mar do Sul (Oceano Pacífico) e quando?', ops: ['Cristóvão Colombo, 12 de outubro de 1492', 'Vasco Núñez de Balboa, em 25 de setembro de 1513', 'Rodrigo Galván de Bastidas, em 1501', 'Pedrarias Dávila, em 1519'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Quién es considerado el descubridor del Istmo de Panamá?', ops: ['Cristóbal Colón', 'Vasco Núñez de Balboa', 'Rodrigo Galván de Bastidas, que llegó en 1501 antes que Cristóbal Colón', 'Pedrarias Dávila'] },
    en: { p: 'Who is considered the discoverer of the Isthmus of Panama?', ops: ['Christopher Columbus', 'Vasco Núñez de Balboa', 'Rodrigo Galván de Bastidas, who arrived in 1501 before Christopher Columbus', 'Pedrarias Dávila'] },
    pt: { p: 'Quem é considerado o descobridor do Istmo do Panamá?', ops: ['Cristóvão Colombo', 'Vasco Núñez de Balboa', 'Rodrigo Galván de Bastidas, que chegou em 1501 antes de Cristóvão Colombo', 'Pedrarias Dávila'] } },

  { catKey: 'historia', c: 1,
    es: { p: "¿Por qué se llamó al Istmo 'Garganta del Perú'?", ops: ['Fue descubierto por exploradores peruanos', 'Por su condición geográfica y porque por su territorio pasaba todo el oro y la plata del Perú rumbo a Europa', 'Tenía la misma forma que el territorio peruano', 'Los incas dominaron el istmo'] },
    en: { p: "Why was the Isthmus called the 'Throat of Peru'?", ops: ['It was discovered by Peruvian explorers', "Because of its geographic position and because all the gold and silver of Peru bound for Europe passed through its territory", 'It had the same shape as Peruvian territory', 'The Incas ruled the isthmus'] },
    pt: { p: "Por que o Istmo foi chamado de 'Garganta do Peru'?", ops: ['Foi descoberto por exploradores peruanos', 'Por sua condição geográfica e porque por seu território passava todo o ouro e a prata do Peru rumo à Europa', 'Tinha a mesma forma do território peruano', 'Os incas dominaram o istmo'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Cuándo se independizó Panamá de España?', ops: ['El 3 de noviembre de 1903', 'El 10 de noviembre de 1821', 'El 28 de noviembre de 1821', 'El 15 de agosto de 1519'] },
    en: { p: 'When did Panama gain independence from Spain?', ops: ['On November 3, 1903', 'On November 10, 1821', 'On November 28, 1821', 'On August 15, 1519'] },
    pt: { p: 'Quando o Panamá se tornou independente da Espanha?', ops: ['Em 3 de novembro de 1903', 'Em 10 de novembro de 1821', 'Em 28 de novembro de 1821', 'Em 15 de agosto de 1519'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Qué fue el Grito de Independencia de La Villa de Los Santos?', ops: ['La separación de Colombia el 3 de noviembre de 1903', 'La primera expresión de independencia de Panamá de España, ocurrida el 10 de noviembre de 1821', 'La firma del Tratado Hay-Bunau Varilla', 'La fundación de la ciudad de Panamá'] },
    en: { p: 'What was the Cry of Independence of La Villa de Los Santos?', ops: ['The separation from Colombia on November 3, 1903', "The first expression of Panama's independence from Spain, which occurred on November 10, 1821", 'The signing of the Hay-Bunau Varilla Treaty', 'The founding of Panama City'] },
    pt: { p: 'O que foi o Grito de Independência de La Villa de Los Santos?', ops: ['A separação da Colômbia em 3 de novembro de 1903', 'A primeira manifestação de independência do Panamá em relação à Espanha, ocorrida em 10 de novembro de 1821', 'A assinatura do Tratado Hay-Bunau Varilla', 'A fundação da cidade do Panamá'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Cuánto tiempo estuvo Panamá unida a la Gran Colombia?', ops: ['50 años', '100 años', '82 años, separándose definitivamente el 3 de noviembre de 1903', '60 años'] },
    en: { p: 'How long was Panama united with Gran Colombia?', ops: ['50 years', '100 years', '82 years, separating definitively on November 3, 1903', '60 years'] },
    pt: { p: 'Por quanto tempo o Panamá esteve unido à Grã-Colômbia?', ops: ['50 anos', '100 anos', '82 anos, separando-se definitivamente em 3 de novembro de 1903', '60 anos'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Quiénes conformaron la Junta Provisional de Gobierno de 1903?', ops: ['Manuel Amador Guerrero, Belisario Porras y Tomás Arias', 'José Agustín Arango, Federico Boyd y Tomás Arias', 'Omar Torrijos, Arnulfo Arias y Guillermo Endara', 'Justo Arosemena, Pablo Arosemena y Ricardo Alfaro'] },
    en: { p: 'Who made up the Provisional Governing Junta of 1903?', ops: ['Manuel Amador Guerrero, Belisario Porras and Tomás Arias', 'José Agustín Arango, Federico Boyd and Tomás Arias', 'Omar Torrijos, Arnulfo Arias and Guillermo Endara', 'Justo Arosemena, Pablo Arosemena and Ricardo Alfaro'] },
    pt: { p: 'Quem compôs a Junta Provisória de Governo de 1903?', ops: ['Manuel Amador Guerrero, Belisario Porras e Tomás Arias', 'José Agustín Arango, Federico Boyd e Tomás Arias', 'Omar Torrijos, Arnulfo Arias e Guillermo Endara', 'Justo Arosemena, Pablo Arosemena e Ricardo Alfaro'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Cuándo se firmó el Tratado Hay-Bunau Varilla?', ops: ['3 de noviembre de 1903', '18 de noviembre de 1903', '15 de agosto de 1914', '7 de septiembre de 1977'] },
    en: { p: 'When was the Hay-Bunau Varilla Treaty signed?', ops: ['November 3, 1903', 'November 18, 1903', 'August 15, 1914', 'September 7, 1977'] },
    pt: { p: 'Quando foi assinado o Tratado Hay-Bunau Varilla?', ops: ['3 de novembro de 1903', '18 de novembro de 1903', '15 de agosto de 1914', '7 de setembro de 1977'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Cuándo fue inaugurado el Canal de Panamá?', ops: ['3 de noviembre de 1903', '18 de noviembre de 1903', '15 de agosto de 1914', '31 de diciembre de 1999'] },
    en: { p: 'When was the Panama Canal inaugurated?', ops: ['November 3, 1903', 'November 18, 1903', 'August 15, 1914', 'December 31, 1999'] },
    pt: { p: 'Quando foi inaugurado o Canal do Panamá?', ops: ['3 de novembro de 1903', '18 de novembro de 1903', '15 de agosto de 1914', '31 de dezembro de 1999'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Cuántos kilómetros de largo tiene el Canal de Panamá?', ops: ['50 km', '65 km', '80 km', '100 km'] },
    en: { p: 'How many kilometers long is the Panama Canal?', ops: ['50 km', '65 km', '80 km', '100 km'] },
    pt: { p: 'Quantos quilômetros de comprimento tem o Canal do Panamá?', ops: ['50 km', '65 km', '80 km', '100 km'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Qué estableció el Tratado Torrijos-Carter de 1977?', ops: ['La construcción del Canal por EE.UU.', 'La creación de la Zona del Canal', 'A partir del mediodía del 31 de diciembre de 1999, el Canal pasó a control absoluto de la República de Panamá', 'La independencia de Colombia'] },
    en: { p: 'What did the 1977 Torrijos-Carter Treaty establish?', ops: ['The construction of the Canal by the U.S.', 'The creation of the Canal Zone', 'As of noon on December 31, 1999, the Canal passed to the full control of the Republic of Panama', 'Independence from Colombia'] },
    pt: { p: 'O que estabeleceu o Tratado Torrijos-Carter de 1977?', ops: ['A construção do Canal pelos EUA', 'A criação da Zona do Canal', 'A partir do meio-dia de 31 de dezembro de 1999, o Canal passou ao controle absoluto da República do Panamá', 'A independência da Colômbia'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Quién fue Manuel Amador Guerrero?', ops: ['El conquistador del Istmo', 'Fundador de la República y primer presidente a partir del 20 de febrero de 1904', 'El firmante del Tratado Torrijos-Carter', 'El primer diputado de la Asamblea'] },
    en: { p: 'Who was Manuel Amador Guerrero?', ops: ['The conqueror of the Isthmus', 'Founder of the Republic and first president starting February 20, 1904', 'The signer of the Torrijos-Carter Treaty', 'The first deputy of the Assembly'] },
    pt: { p: 'Quem foi Manuel Amador Guerrero?', ops: ['O conquistador do Istmo', 'Fundador da República e primeiro presidente a partir de 20 de fevereiro de 1904', 'O signatário do Tratado Torrijos-Carter', 'O primeiro deputado da Assembleia'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Quién fue Omar Torrijos Herrera?', ops: ['El presidente que aprobó el Canal francés', 'Militar que participó en el golpe de 1968; luego líder del proceso de gobierno. Aprobó la Constitución de 1972 y firmó los Tratados Torrijos-Carter en 1977', 'El primer presidente de Panamá', 'El fundador del Tribunal Electoral'] },
    en: { p: 'Who was Omar Torrijos Herrera?', ops: ['The president who approved the French Canal', 'A military officer who took part in the 1968 coup; later leader of the governing process. He approved the 1972 Constitution and signed the Torrijos-Carter Treaties in 1977', 'The first president of Panama', 'The founder of the Electoral Tribunal'] },
    pt: { p: 'Quem foi Omar Torrijos Herrera?', ops: ['O presidente que aprovou o Canal francês', 'Militar que participou do golpe de 1968; posteriormente líder do processo de governo. Aprovou a Constituição de 1972 e assinou os Tratados Torrijos-Carter em 1977', 'O primeiro presidente do Panamá', 'O fundador do Tribunal Eleitoral'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Qué ocurrió el 9 de enero de 1964?', ops: ['Se firmó el Tratado Torrijos-Carter', 'Panamá se separó de Colombia', 'Día de los Mártires: soldados de EE.UU. enfrentaron a estudiantes panameños que intentaban izar la bandera en la Zona del Canal; murieron 23 panameños', 'Se inauguró el Canal'] },
    en: { p: 'What happened on January 9, 1964?', ops: ['The Torrijos-Carter Treaty was signed', 'Panama separated from Colombia', "Martyrs' Day: U.S. soldiers confronted Panamanian students who were trying to raise the flag in the Canal Zone; 23 Panamanians died", 'The Canal was inaugurated'] },
    pt: { p: 'O que aconteceu em 9 de janeiro de 1964?', ops: ['Foi assinado o Tratado Torrijos-Carter', 'O Panamá se separou da Colômbia', 'Dia dos Mártires: soldados dos EUA enfrentaram estudantes panamenhos que tentavam hastear a bandeira na Zona do Canal; morreram 23 panamenhos', 'Foi inaugurado o Canal'] } },

  { catKey: 'historia', c: 2,
    es: { p: '¿Cuándo fue la invasión de Estados Unidos a Panamá?', ops: ['9 de enero de 1964', '7 de septiembre de 1977', '20 de diciembre de 1989', '31 de diciembre de 1999'] },
    en: { p: 'When was the United States invasion of Panama?', ops: ['January 9, 1964', 'September 7, 1977', 'December 20, 1989', 'December 31, 1999'] },
    pt: { p: 'Quando foi a invasão dos Estados Unidos ao Panamá?', ops: ['9 de janeiro de 1964', '7 de setembro de 1977', '20 de dezembro de 1989', '31 de dezembro de 1999'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Quién fue Arnulfo Arias Madrid?', ops: ['Presidente de Panamá una sola vez', 'Tres veces presidente (1940, 1951, 1968); en su último mandato fue derrocado por la Guardia Nacional. Fundador de la doctrina Panameñista', 'El presidente que negoció el Canal', 'El fundador de la República'] },
    en: { p: 'Who was Arnulfo Arias Madrid?', ops: ['President of Panama only once', 'Three-time president (1940, 1951, 1968); in his last term he was overthrown by the National Guard. Founder of the Panameñista doctrine', 'The president who negotiated the Canal', 'The founder of the Republic'] },
    pt: { p: 'Quem foi Arnulfo Arias Madrid?', ops: ['Presidente do Panamá apenas uma vez', 'Três vezes presidente (1940, 1951, 1968); em seu último mandato foi deposto pela Guarda Nacional. Fundador da doutrina Panameñista', 'O presidente que negociou o Canal', 'O fundador da República'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Quién destruyó la ciudad de Panamá en enero de 1671?', ops: ['Las fuerzas colombianas', 'El pirata inglés Henry Morgan', 'Las tropas españolas', 'Los piratas franceses'] },
    en: { p: 'Who destroyed Panama City in January 1671?', ops: ['Colombian forces', 'The English pirate Henry Morgan', 'Spanish troops', 'French pirates'] },
    pt: { p: 'Quem destruiu a cidade do Panamá em janeiro de 1671?', ops: ['As forças colombianas', 'O pirata inglês Henry Morgan', 'As tropas espanholas', 'Os piratas franceses'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Cuándo se fundó la ciudad de Panamá?', ops: ['1501', '15 de agosto de 1519', '1671', '1821'] },
    en: { p: 'When was Panama City founded?', ops: ['1501', 'August 15, 1519', '1671', '1821'] },
    pt: { p: 'Quando foi fundada a cidade do Panamá?', ops: ['1501', '15 de agosto de 1519', '1671', '1821'] } },

  { catKey: 'historia', c: 1,
    es: { p: '¿Cuántos conjuntos de esclusas tiene el Canal actualmente?', ops: ['3 (Pedro Miguel, Miraflores y Gatún)', '5 conjuntos: Pedro Miguel, Agua Clara, Miraflores, Gatún y Cocolí (ampliación 2009-2016)', '4 esclusas', '6 esclusas'] },
    en: { p: 'How many sets of locks does the Canal currently have?', ops: ['3 (Pedro Miguel, Miraflores and Gatún)', '5 sets: Pedro Miguel, Agua Clara, Miraflores, Gatún and Cocolí (2009-2016 expansion)', '4 locks', '6 locks'] },
    pt: { p: 'Quantos conjuntos de eclusas o Canal tem atualmente?', ops: ['3 (Pedro Miguel, Miraflores e Gatún)', '5 conjuntos: Pedro Miguel, Agua Clara, Miraflores, Gatún e Cocolí (ampliação 2009-2016)', '4 eclusas', '6 eclusas'] } },

  // ══ OTROS ASPECTOS ═════════════════════════════════════════
  { catKey: 'otros', c: 2,
    es: { p: '¿Quién fue la primera mujer presidenta de Panamá?', ops: ['Amelia Dennis de Icaza', 'María Olimpia de Obaldía', 'Mireya Moscoso Rodríguez, en el periodo constitucional 1999-2004', 'Rosa María Crespo de Britton'] },
    en: { p: 'Who was the first woman president of Panama?', ops: ['Amelia Dennis de Icaza', 'María Olimpia de Obaldía', 'Mireya Moscoso Rodríguez, in the constitutional term 1999-2004', 'Rosa María Crespo de Britton'] },
    pt: { p: 'Quem foi a primeira mulher presidente do Panamá?', ops: ['Amelia Dennis de Icaza', 'María Olimpia de Obaldía', 'Mireya Moscoso Rodríguez, no período constitucional 1999-2004', 'Rosa María Crespo de Britton'] } },

  { catKey: 'otros', c: 1,
    es: { p: '¿Cuál es el principal traje típico panameño?', ops: ['La montuna santeña', 'La pollera de gala', 'La basquiña', 'La ocueña'] },
    en: { p: 'What is the main traditional Panamanian costume?', ops: ['The montuna santeña', 'The gala pollera', 'The basquiña', 'The ocueña'] },
    pt: { p: 'Qual é o principal traje típico panamenho?', ops: ['A montuna santeña', 'A pollera de gala', 'A basquiña', 'A ocueña'] } },

  { catKey: 'otros', c: 2,
    es: { p: '¿Cuál es el plato típico más representativo de Panamá?', ops: ['El arroz con pollo', 'El tamal', 'El sancocho', 'El bollo preñao'] },
    en: { p: 'What is the most representative traditional dish of Panama?', ops: ['Arroz con pollo', 'Tamal', 'Sancocho', 'Bollo preñao'] },
    pt: { p: 'Qual é o prato típico mais representativo do Panamá?', ops: ['Arroz com frango', 'Tamal', 'Sancocho', 'Bollo preñao'] } },

  { catKey: 'otros', c: 2,
    es: { p: "¿Quién escribió el poema 'Patria'?", ops: ['Amelia Dennis de Icaza', 'Demetrio Korsi', 'Ricardo Miró', 'Rogelio Sinán'] },
    en: { p: "Who wrote the poem 'Patria'?", ops: ['Amelia Dennis de Icaza', 'Demetrio Korsi', 'Ricardo Miró', 'Rogelio Sinán'] },
    pt: { p: "Quem escreveu o poema 'Patria'?", ops: ['Amelia Dennis de Icaza', 'Demetrio Korsi', 'Ricardo Miró', 'Rogelio Sinán'] } },

  { catKey: 'otros', c: 2,
    es: { p: '¿Quién es la autora del poema al Cerro Ancón?', ops: ['María Olimpia de Obaldía', 'Ricardo Miró', 'Amelia Dennis de Icaza', 'Demetrio Korsi'] },
    en: { p: 'Who is the author of the poem to Cerro Ancón?', ops: ['María Olimpia de Obaldía', 'Ricardo Miró', 'Amelia Dennis de Icaza', 'Demetrio Korsi'] },
    pt: { p: 'Quem é a autora do poema ao Cerro Ancón?', ops: ['María Olimpia de Obaldía', 'Ricardo Miró', 'Amelia Dennis de Icaza', 'Demetrio Korsi'] } },

  { catKey: 'otros', c: 2,
    es: { p: '¿Cuándo se celebra el Día de la Separación de Panamá de Colombia?', ops: ['28 de noviembre', '10 de noviembre', '3 de noviembre', '9 de enero'] },
    en: { p: "When is Panama's Separation from Colombia Day celebrated?", ops: ['November 28', 'November 10', 'November 3', 'January 9'] },
    pt: { p: 'Quando é celebrado o Dia da Separação do Panamá da Colômbia?', ops: ['28 de novembro', '10 de novembro', '3 de novembro', '9 de janeiro'] } },

  { catKey: 'otros', c: 1,
    es: { p: '¿Qué se conmemora el 9 de enero en Panamá?', ops: ['La independencia de España', 'El Día de los Mártires', 'La separación de Colombia', 'La inauguración del Canal'] },
    en: { p: 'What is commemorated on January 9 in Panama?', ops: ['Independence from Spain', "Martyrs' Day", 'Separation from Colombia', 'The inauguration of the Canal'] },
    pt: { p: 'O que se comemora em 9 de janeiro no Panamá?', ops: ['A independência da Espanha', 'O Dia dos Mártires', 'A separação da Colômbia', 'A inauguração do Canal'] } },

  { catKey: 'otros', c: 2,
    es: { p: '¿Qué se celebra el 28 de noviembre en Panamá?', ops: ['La separación de Colombia', 'El Grito de Independencia de La Villa de Los Santos', 'La Independencia de España', 'La reafirmación de la separación en Colón'] },
    en: { p: 'What is celebrated on November 28 in Panama?', ops: ['Separation from Colombia', 'The Cry of Independence of La Villa de Los Santos', 'Independence from Spain', 'The reaffirmation of separation in Colón'] },
    pt: { p: 'O que se celebra em 28 de novembro no Panamá?', ops: ['A separação da Colômbia', 'O Grito de Independência de La Villa de Los Santos', 'A Independência da Espanha', 'A reafirmação da separação em Colón'] } },

  { catKey: 'otros', c: 1,
    es: { p: '¿Cuál es la música típica panameña?', ops: ['Salsa, merengue y cumbia', 'Pindín, tamborito, atravesao, cumbia, punto, tamborera y bailes congos', 'Vallenato, cumbia y porro', 'Marimba, punto y guaracha'] },
    en: { p: 'What is traditional Panamanian music?', ops: ['Salsa, merengue and cumbia', 'Pindín, tamborito, atravesao, cumbia, punto, tamborera and congo dances', 'Vallenato, cumbia and porro', 'Marimba, punto and guaracha'] },
    pt: { p: 'Qual é a música típica panamenha?', ops: ['Salsa, merengue e cumbia', 'Pindín, tamborito, atravesao, cumbia, punto, tamborera e danças congo', 'Vallenato, cumbia e porro', 'Marimba, punto e guaracha'] } },

  { catKey: 'otros', c: 2,
    es: { p: '¿Cuántos partidos políticos existen actualmente en Panamá?', ops: ['6 partidos', '7 partidos', '8 partidos', '10 partidos'] },
    en: { p: 'How many political parties currently exist in Panama?', ops: ['6 parties', '7 parties', '8 parties', '10 parties'] },
    pt: { p: 'Quantos partidos políticos existem atualmente no Panamá?', ops: ['6 partidos', '7 partidos', '8 partidos', '10 partidos'] } },

  { catKey: 'otros', c: 2,
    es: { p: '¿Cuándo toma posesión el presidente de la República?', ops: ['1 de enero', '3 de noviembre', '1 de julio, fecha que también es día de fiesta nacional', '15 de agosto'] },
    en: { p: 'When does the President of the Republic take office?', ops: ['January 1', 'November 3', 'July 1, a date that is also a national holiday', 'August 15'] },
    pt: { p: 'Quando toma posse o presidente da República?', ops: ['1º de janeiro', '3 de novembro', '1º de julho, data que também é feriado nacional', '15 de agosto'] } },

  // ══ SÍMBOLOS PATRIOS — BANDERA ════════════════════════════
  { catKey: 'simbolos', c: 1,
    es: { p: '¿Cuáles son los tres símbolos patrios de la República de Panamá?', ops: ['La Bandera, el Escudo y la Pollera', 'La Bandera Nacional, el Escudo Nacional y el Himno Nacional', 'La Bandera, el Himno y el Canal', 'El Escudo, el Himno y la Cédula'] },
    en: { p: 'What are the three national symbols of the Republic of Panama?', ops: ['The Flag, the Coat of Arms and the Pollera', 'The National Flag, the National Coat of Arms and the National Anthem', 'The Flag, the Anthem and the Canal', 'The Coat of Arms, the Anthem and the ID Card'] },
    pt: { p: 'Quais são os três símbolos pátrios da República do Panamá?', ops: ['A Bandeira, o Brasão e a Pollera', 'A Bandeira Nacional, o Brasão Nacional e o Hino Nacional', 'A Bandeira, o Hino e o Canal', 'O Brasão, o Hino e a Cédula'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué ley declara el 4 de noviembre como Día de los Símbolos de la Nación?', ops: ['La Ley 10 de 2001', 'La Ley 2 de 23 de enero de 2012', 'La Ley 48 de 1925', 'La Ley 64 de 1904'] },
    en: { p: 'Which law declares November 4 as the Day of the National Symbols?', ops: ['Law 10 of 2001', 'Law 2 of January 23, 2012', 'Law 48 of 1925', 'Law 64 of 1904'] },
    pt: { p: 'Qual lei declara o dia 4 de novembro como Dia dos Símbolos da Nação?', ops: ['A Lei 10 de 2001', 'A Lei 2 de 23 de janeiro de 2012', 'A Lei 48 de 1925', 'A Lei 64 de 1904'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Quién diseñó la Bandera Nacional y quiénes la confeccionaron?', ops: ['Jerónimo de la Ossa; confeccionada por Santos Jorge', 'Manuel Encarnación Amador; confeccionada por María de la Ossa de Amador y Angélica Bergamota de de la Ossa', 'Nicanor Villalaz; confeccionada por la Asamblea Constituyente', 'Santos Jorge; confeccionada por María de la Ossa'] },
    en: { p: 'Who designed the National Flag and who made it?', ops: ['Jerónimo de la Ossa; made by Santos Jorge', 'Manuel Encarnación Amador; made by María de la Ossa de Amador and Angélica Bergamota de de la Ossa', 'Nicanor Villalaz; made by the Constituent Assembly', 'Santos Jorge; made by María de la Ossa'] },
    pt: { p: 'Quem desenhou a Bandeira Nacional e quem a confeccionou?', ops: ['Jerónimo de la Ossa; confeccionada por Santos Jorge', 'Manuel Encarnación Amador; confeccionada por María de la Ossa de Amador e Angélica Bergamota de de la Ossa', 'Nicanor Villalaz; confeccionada pela Assembleia Constituinte', 'Santos Jorge; confeccionada por María de la Ossa'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Cómo está estructurada la Bandera Nacional?', ops: ['Tres franjas horizontales: azul, blanca y roja', 'Un rectángulo cuartelado: blanco con estrella azul (superior izq.), rojo (superior der.), azul (inferior izq.) y blanco con estrella roja (inferior der.)', 'Dos franjas verticales azul y roja con una estrella blanca al centro', 'Una franja diagonal roja sobre fondo azul y blanco'] },
    en: { p: 'How is the National Flag structured?', ops: ['Three horizontal stripes: blue, white and red', 'A quartered rectangle: white with a blue star (upper left), red (upper right), blue (lower left) and white with a red star (lower right)', 'Two vertical stripes, blue and red, with a white star in the center', 'A diagonal red stripe over a blue and white background'] },
    pt: { p: 'Como é estruturada a Bandeira Nacional?', ops: ['Três faixas horizontais: azul, branca e vermelha', 'Um retângulo quartelado: branco com estrela azul (superior esq.), vermelho (superior dir.), azul (inferior esq.) e branco com estrela vermelha (inferior dir.)', 'Duas faixas verticais azul e vermelha com uma estrela branca ao centro', 'Uma faixa diagonal vermelha sobre fundo azul e branco'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué representa el cuadrante azul en la Bandera Nacional?', ops: ['El Partido Liberal', 'El Partido Conservador', 'El campo de la paz', 'La honestidad de los ciudadanos'] },
    en: { p: 'What does the blue quadrant represent on the National Flag?', ops: ['The Liberal Party', 'The Conservative Party', 'The field of peace', 'The honesty of citizens'] },
    pt: { p: 'O que representa o quadrante azul na Bandeira Nacional?', ops: ['O Partido Liberal', 'O Partido Conservador', 'O campo da paz', 'A honestidade dos cidadãos'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué representa el cuadrante rojo en la Bandera Nacional?', ops: ['El Partido Conservador', 'El Partido Liberal', 'La sangre de los mártires', 'La autoridad del Estado'] },
    en: { p: 'What does the red quadrant represent on the National Flag?', ops: ['The Conservative Party', 'The Liberal Party', 'The blood of the martyrs', 'The authority of the State'] },
    pt: { p: 'O que representa o quadrante vermelho na Bandeira Nacional?', ops: ['O Partido Conservador', 'O Partido Liberal', 'O sangue dos mártires', 'A autoridade do Estado'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Qué representa la estrella azul en la Bandera?', ops: ['El Partido Liberal', 'La autoridad y la ley', 'La pureza y la honestidad en la vida cívica de la patria', 'El campo de la paz'] },
    en: { p: 'What does the blue star represent on the Flag?', ops: ['The Liberal Party', 'Authority and law', 'Purity and honesty in the civic life of the homeland', 'The field of peace'] },
    pt: { p: 'O que representa a estrela azul na Bandeira?', ops: ['O Partido Liberal', 'A autoridade e a lei', 'A pureza e a honestidade na vida cívica da pátria', 'O campo da paz'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué representa la estrella roja en la Bandera?', ops: ['El Partido Conservador', 'La autoridad y la ley', 'La pureza y la honestidad', 'El campo de la paz'] },
    en: { p: 'What does the red star represent on the Flag?', ops: ['The Conservative Party', 'Authority and law', 'Purity and honesty', 'The field of peace'] },
    pt: { p: 'O que representa a estrela vermelha na Bandeira?', ops: ['O Partido Conservador', 'A autoridade e a lei', 'A pureza e a honestidade', 'O campo da paz'] } },

  { catKey: 'simbolos', c: 3,
    es: { p: '¿Qué representa el color blanco en la Bandera?', ops: ['El Partido Conservador', 'El Partido Liberal', 'La pureza y honestidad', 'El campo de la paz para hacer patria en la nueva nación'] },
    en: { p: 'What does the color white represent on the Flag?', ops: ['The Conservative Party', 'The Liberal Party', 'Purity and honesty', 'The field of peace to build a homeland in the new nation'] },
    pt: { p: 'O que representa a cor branca na Bandeira?', ops: ['O Partido Conservador', 'O Partido Liberal', 'A pureza e a honestidade', 'O campo da paz para construir a pátria na nova nação'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Cómo se coloca la Bandera en posición horizontal?', ops: ['El cuadrante rojo queda arriba a la izquierda', 'El cuadrante blanco con la estrella azul queda en su posición original, en la esquina superior izquierda', 'El cuadrante azul queda arriba a la derecha', 'El cuadrante blanco con estrella roja queda arriba'] },
    en: { p: 'How is the Flag positioned horizontally?', ops: ['The red quadrant stays at the top left', 'The white quadrant with the blue star stays in its original position, in the upper left corner', 'The blue quadrant stays at the top right', 'The white quadrant with the red star stays on top'] },
    pt: { p: 'Como se coloca a Bandeira na posição horizontal?', ops: ['O quadrante vermelho fica em cima à esquerda', 'O quadrante branco com a estrela azul fica em sua posição original, no canto superior esquerdo', 'O quadrante azul fica em cima à direita', 'O quadrante branco com estrela vermelha fica em cima'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Cómo se coloca la Bandera en posición vertical?', ops: ['El cuadrante azul queda a la izquierda del observador', 'El cuadrante blanco con la estrella azul queda a la izquierda del observador y el cuadrante azul hacia la derecha', 'El cuadrante rojo queda a la izquierda', 'El cuadrante blanco con estrella roja queda arriba'] },
    en: { p: 'How is the Flag positioned vertically?', ops: ["The blue quadrant stays to the observer's left", "The white quadrant with the blue star stays to the observer's left and the blue quadrant toward the right", 'The red quadrant stays to the left', 'The white quadrant with the red star stays on top'] },
    pt: { p: 'Como se coloca a Bandeira na posição vertical?', ops: ['O quadrante azul fica à esquerda do observador', 'O quadrante branco com a estrela azul fica à esquerda do observador e o quadrante azul à direita', 'O quadrante vermelho fica à esquerda', 'O quadrante branco com estrela vermelha fica em cima'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Cuándo NO debe usarse la Bandera Nacional?', ops: ['En días de lluvia', 'Como anuncio comercial, en cantinas, clubes nocturnos, salas de baile o disfraces; tampoco antes de las 7:00 a.m. ni después de las 6:00 p.m.', 'Los días de semana', 'En actos escolares'] },
    en: { p: 'When should the National Flag NOT be used?', ops: ['On rainy days', 'As a commercial ad, in bars, nightclubs, dance halls or costumes; also not before 7:00 a.m. or after 6:00 p.m.', 'On weekdays', 'At school events'] },
    pt: { p: 'Quando a Bandeira Nacional NÃO deve ser usada?', ops: ['Em dias de chuva', 'Como anúncio comercial, em bares, boates, salões de dança ou fantasias; também não antes das 7h nem depois das 18h', 'Nos dias de semana', 'Em eventos escolares'] } },

  // ══ SÍMBOLOS PATRIOS — ESCUDO ══════════════════════════════
  { catKey: 'simbolos', c: 2,
    es: { p: '¿Quién ideó el Escudo Nacional de Panamá?', ops: ['Manuel Amador Guerrero', 'Santos Jorge', 'Nicanor Villalaz (concepción); interpretado artísticamente por Max Lemm; pintado en versión final por Sebastián Villalaz', 'Jerónimo de la Ossa'] },
    en: { p: 'Who conceived the National Coat of Arms of Panama?', ops: ['Manuel Amador Guerrero', 'Santos Jorge', 'Nicanor Villalaz (concept); artistically interpreted by Max Lemm; painted in its final version by Sebastián Villalaz', 'Jerónimo de la Ossa'] },
    pt: { p: 'Quem idealizou o Brasão Nacional do Panamá?', ops: ['Manuel Amador Guerrero', 'Santos Jorge', 'Nicanor Villalaz (concepção); interpretado artisticamente por Max Lemm; pintado na versão final por Sebastián Villalaz', 'Jerónimo de la Ossa'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Sobre qué color de fondo descansa el Escudo Nacional y qué simboliza?', ops: ['Fondo blanco, símbolo de paz', 'Fondo azul, símbolo del mar Caribe', 'Fondo verde, símbolo de la vegetación del país', 'Fondo dorado, símbolo de riqueza'] },
    en: { p: 'What background color does the National Coat of Arms rest on and what does it symbolize?', ops: ['White background, a symbol of peace', 'Blue background, a symbol of the Caribbean Sea', "Green background, a symbol of the country's vegetation", 'Golden background, a symbol of wealth'] },
    pt: { p: 'Sobre qual cor de fundo repousa o Brasão Nacional e o que ela simboliza?', ops: ['Fundo branco, símbolo de paz', 'Fundo azul, símbolo do mar do Caribe', 'Fundo verde, símbolo da vegetação do país', 'Fundo dourado, símbolo de riqueza'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Qué ave aparece en la cimera (parte superior) del Escudo Nacional?', ops: ['Un cóndor andino', 'Un tucán tropical', 'Un águila harpía adulta, símbolo de autonomía', 'Una garza real'] },
    en: { p: 'What bird appears in the crest (top part) of the National Coat of Arms?', ops: ['An Andean condor', 'A tropical toucan', 'An adult harpy eagle, a symbol of autonomy', 'A royal heron'] },
    pt: { p: 'Qual ave aparece na cimeira (parte superior) do Brasão Nacional?', ops: ['Um condor andino', 'Um tucano tropical', 'Uma harpia adulta, símbolo de autonomia', 'Uma garça-real'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué lleva el águila harpía en su pico en el Escudo Nacional?', ops: ['Una rama de olivo', "Una cinta de plata con la divisa 'Pro Mundi Beneficio'", 'Una estrella dorada', 'Las armas de la nación'] },
    en: { p: 'What does the harpy eagle carry in its beak on the National Coat of Arms?', ops: ['An olive branch', "A silver ribbon with the motto 'Pro Mundi Beneficio'", 'A golden star', "The nation's coat of arms"] },
    pt: { p: 'O que a harpia carrega no bico no Brasão Nacional?', ops: ['Um ramo de oliveira', "Uma fita de prata com o lema 'Pro Mundi Beneficio'", 'Uma estrela dourada', 'As armas da nação'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: "¿Qué significa la divisa 'Pro Mundi Beneficio' del Escudo Nacional?", ops: ['Por la gloria de la nación', 'A beneficio del mundo', 'Por el progreso del istmo', 'Para el bien de los ciudadanos panameños'] },
    en: { p: "What does the motto 'Pro Mundi Beneficio' on the National Coat of Arms mean?", ops: ['For the glory of the nation', 'For the benefit of the world', 'For the progress of the isthmus', 'For the good of Panamanian citizens'] },
    pt: { p: "O que significa o lema 'Pro Mundi Beneficio' do Brasão Nacional?", ops: ['Pela glória da nação', 'Em benefício do mundo', 'Pelo progresso do istmo', 'Para o bem dos cidadãos panamenhos'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Qué representan las estrellas de oro en arco sobre el águila del Escudo?', ops: ['Los héroes de la independencia', 'Las estrellas de la bandera nacional', 'Las provincias del país', 'Los tratados internacionales de Panamá'] },
    en: { p: 'What do the golden stars arched above the eagle on the Coat of Arms represent?', ops: ['The heroes of independence', 'The stars of the national flag', "The country's provinces", "Panama's international treaties"] },
    pt: { p: 'O que representam as estrelas de ouro em arco sobre a águia do Brasão?', ops: ['Os heróis da independência', 'As estrelas da bandeira nacional', 'As províncias do país', 'Os tratados internacionais do Panamá'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Cuántas estrellas aparecen en arco sobre el águila del Escudo Nacional?', ops: ['6 estrellas (una por comarca)', '8 estrellas', '10 estrellas, una por cada provincia del país', '12 estrellas'] },
    en: { p: 'How many stars appear arched above the eagle on the National Coat of Arms?', ops: ['6 stars (one per comarca)', '8 stars', '10 stars, one for each province in the country', '12 stars'] },
    pt: { p: 'Quantas estrelas aparecem em arco sobre a águia do Brasão Nacional?', ops: ['6 estrelas (uma por comarca)', '8 estrelas', '10 estrelas, uma para cada província do país', '12 estrelas'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué muestra la faja central (banda horizontal) del Escudo Nacional?', ops: ['El Canal de Panamá con sus esclusas', 'El Istmo con sus dos mares y su cielo: el sol poniéndose por el oeste y la luna elevándose por el este, simbolizando la hora de la Separación de Colombia el 3 de noviembre de 1903', 'Un volcán activo y selva tropical', 'El Puente de las Américas'] },
    en: { p: 'What does the central band (horizontal stripe) of the National Coat of Arms show?', ops: ['The Panama Canal with its locks', "The Isthmus with its two seas and its sky: the sun setting in the west and the moon rising in the east, symbolizing the hour of the Separation from Colombia on November 3, 1903", 'An active volcano and tropical jungle', 'The Bridge of the Americas'] },
    pt: { p: 'O que mostra a faixa central (banda horizontal) do Brasão Nacional?', ops: ['O Canal do Panamá com suas eclusas', 'O Istmo com seus dois mares e seu céu: o sol se pondo a oeste e a lua se elevando a leste, simbolizando a hora da Separação da Colômbia em 3 de novembro de 1903', 'Um vulcão ativo e selva tropical', 'A Ponte das Américas'] } },

  { catKey: 'simbolos', c: 3,
    es: { p: 'En el cantón de campo BLANCO (plata) de la parte SUPERIOR del Escudo, ¿qué se ve?', ops: ['Una pala y un azadón cruzados (símbolo del trabajo)', 'Una cornucopia de oro con monedas', 'Una rueda alada de madera', 'Un sable y un fusil colgados y cruzados en posición de abandono, para significar el fin de las guerras fratricidas'] },
    en: { p: 'In the WHITE (silver) canton of the UPPER part of the Coat of Arms, what is seen?', ops: ['A crossed shovel and hoe (symbol of labor)', 'A golden cornucopia with coins', 'A winged wooden wheel', 'A sword and a rifle hung and crossed in a position of abandonment, signifying the end of the fratricidal wars'] },
    pt: { p: 'No quartel de campo BRANCO (prata) da parte SUPERIOR do Brasão, o que se vê?', ops: ['Uma pá e uma enxada cruzadas (símbolo do trabalho)', 'Uma cornucópia de ouro com moedas', 'Uma roda alada de madeira', 'Um sabre e um fuzil pendurados e cruzados em posição de abandono, para significar o fim das guerras fratricidas'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué simbolizan el sable y el fusil en posición de abandono en el Escudo Nacional?', ops: ['El poderío militar de Panamá', 'El fin de las guerras fratricidas', 'La defensa del Canal de Panamá', 'La conquista española del Istmo'] },
    en: { p: 'What do the sword and rifle in a position of abandonment symbolize on the National Coat of Arms?', ops: ["Panama's military power", 'The end of the fratricidal wars', 'The defense of the Panama Canal', 'The Spanish conquest of the Isthmus'] },
    pt: { p: 'O que simbolizam o sabre e o fuzil em posição de abandono no Brasão Nacional?', ops: ['O poderio militar do Panamá', 'O fim das guerras fratricidas', 'A defesa do Canal do Panamá', 'A conquista espanhola do Istmo'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: 'En el cantón de campo ROJO de la parte SUPERIOR del Escudo, ¿qué se ve?', ops: ['Un sable y un fusil cruzados', 'Una cornucopia de monedas de oro', 'Una pala y un azadón cruzados y relucientes, símbolo del trabajo', 'Una rueda alada de madera con alas de oro'] },
    en: { p: 'In the RED canton of the UPPER part of the Coat of Arms, what is seen?', ops: ['A crossed sword and rifle', 'A cornucopia of gold coins', 'A crossed, gleaming shovel and hoe, a symbol of labor', 'A winged wooden wheel with golden wings'] },
    pt: { p: 'No quartel de campo VERMELHO da parte SUPERIOR do Brasão, o que se vê?', ops: ['Um sabre e um fuzil cruzados', 'Uma cornucópia de moedas de ouro', 'Uma pá e uma enxada cruzadas e reluzentes, símbolo do trabalho', 'Uma roda alada de madeira com asas de ouro'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué simbolizan la pala y el azadón cruzados y relucientes en el Escudo Nacional?', ops: ['La guerra y la defensa nacional', 'El trabajo honrado del pueblo panameño', 'La conquista española', 'La industria minera del país'] },
    en: { p: 'What do the crossed, gleaming shovel and hoe symbolize on the National Coat of Arms?', ops: ['War and national defense', 'The honest labor of the Panamanian people', 'The Spanish conquest', "The country's mining industry"] },
    pt: { p: 'O que simbolizam a pá e a enxada cruzadas e reluzentes no Brasão Nacional?', ops: ['A guerra e a defesa nacional', 'O trabalho honrado do povo panamenho', 'A conquista espanhola', 'A indústria mineira do país'] } },

  { catKey: 'simbolos', c: 3,
    es: { p: 'En el cantón de campo AZUL de la parte INFERIOR del Escudo, ¿qué se ve?', ops: ['Un sable y un fusil en posición de abandono', 'Una rueda alada de madera con alas de oro', 'Una pala y un azadón cruzados', 'Una cornucopia de oro rebosante de monedas, emblema de riqueza'] },
    en: { p: 'In the BLUE canton of the LOWER part of the Coat of Arms, what is seen?', ops: ['A sword and rifle in a position of abandonment', 'A winged wooden wheel with golden wings', 'A crossed shovel and hoe', 'A golden cornucopia overflowing with coins, an emblem of wealth'] },
    pt: { p: 'No quartel de campo AZUL da parte INFERIOR do Brasão, o que se vê?', ops: ['Um sabre e um fuzil em posição de abandono', 'Uma roda alada de madeira com asas de ouro', 'Uma pá e uma enxada cruzadas', 'Uma cornucópia de ouro transbordando de moedas, emblema de riqueza'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué simboliza la cornucopia de oro rebosante de monedas en el Escudo Nacional?', ops: ['La historia colonial española', 'La riqueza o prosperidad de Panamá', 'El Canal de Panamá', 'La agricultura panameña'] },
    en: { p: 'What does the golden cornucopia overflowing with coins symbolize on the National Coat of Arms?', ops: ['Spanish colonial history', 'The wealth or prosperity of Panama', 'The Panama Canal', 'Panamanian agriculture'] },
    pt: { p: 'O que simboliza a cornucópia de ouro transbordando de moedas no Brasão Nacional?', ops: ['A história colonial espanhola', 'A riqueza ou prosperidade do Panamá', 'O Canal do Panamá', 'A agricultura panamenha'] } },

  { catKey: 'simbolos', c: 3,
    es: { p: 'En el cantón de campo BLANCO (plata) de la parte INFERIOR del Escudo, ¿qué se ve?', ops: ['Un sable y un fusil en posición de abandono', 'Una cornucopia de oro con monedas', 'Una pala y un azadón cruzados', 'Una rueda alada de madera con alas de oro, símbolo de progreso'] },
    en: { p: 'In the WHITE (silver) canton of the LOWER part of the Coat of Arms, what is seen?', ops: ['A sword and rifle in a position of abandonment', 'A golden cornucopia with coins', 'A crossed shovel and hoe', 'A winged wooden wheel with golden wings, a symbol of progress'] },
    pt: { p: 'No quartel de campo BRANCO (prata) da parte INFERIOR do Brasão, o que se vê?', ops: ['Um sabre e um fuzil em posição de abandono', 'Uma cornucópia de ouro com moedas', 'Uma pá e uma enxada cruzadas', 'Uma roda alada de madeira com asas de ouro, símbolo de progresso'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué simboliza la rueda alada de madera con alas de oro en el Escudo Nacional?', ops: ['La industria aeronáutica', 'El progreso del país', 'El Canal de Panamá', 'La revolución industrial'] },
    en: { p: 'What does the winged wooden wheel with golden wings symbolize on the National Coat of Arms?', ops: ['The aeronautical industry', "The country's progress", 'The Panama Canal', 'The industrial revolution'] },
    pt: { p: 'O que simboliza a roda alada de madeira com asas de ouro no Brasão Nacional?', ops: ['A indústria aeronáutica', 'O progresso do país', 'O Canal do Panamá', 'A revolução industrial'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Qué elementos aparecen como soportes a los lados del Escudo Nacional?', ops: ['Dos leones rampantes', 'Dos ramas de laurel', 'Dos Banderas Nacionales en astas con puntas de lanza que se recogen en la parte inferior', 'Dos figuras indígenas'] },
    en: { p: 'What elements appear as supports on the sides of the National Coat of Arms?', ops: ['Two rampant lions', 'Two laurel branches', 'Two National Flags on poles with spear points, gathered at the bottom', 'Two indigenous figures'] },
    pt: { p: 'Quais elementos aparecem como suportes nas laterais do Brasão Nacional?', ops: ['Dois leões rampantes', 'Dois ramos de louro', 'Duas Bandeiras Nacionais em hastes com pontas de lança que se recolhem na parte inferior', 'Duas figuras indígenas'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿En cuántas secciones principales está dividido el interior del Escudo Nacional?', ops: ['Dos secciones: superior e inferior', 'Tres secciones: dos cantones superiores, una faja central y dos cantones inferiores', 'Cuatro cuarteles iguales', 'Una sola sección con todos los elementos'] },
    en: { p: 'Into how many main sections is the interior of the National Coat of Arms divided?', ops: ['Two sections: upper and lower', 'Three sections: two upper cantons, a central band, and two lower cantons', 'Four equal quarters', 'A single section with all the elements'] },
    pt: { p: 'Em quantas seções principais está dividido o interior do Brasão Nacional?', ops: ['Duas seções: superior e inferior', 'Três seções: dois quartéis superiores, uma faixa central e dois quartéis inferiores', 'Quatro quartéis iguais', 'Uma única seção com todos os elementos'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Cuál de los siguientes elementos NO aparece en el Escudo Nacional de Panamá?', ops: ['Un águila harpía', 'Una cornucopia de oro', 'Un volcán activo', 'Una rueda alada'] },
    en: { p: 'Which of the following elements does NOT appear on the National Coat of Arms of Panama?', ops: ['A harpy eagle', 'A golden cornucopia', 'An active volcano', 'A winged wheel'] },
    pt: { p: 'Qual dos seguintes elementos NÃO aparece no Brasão Nacional do Panamá?', ops: ['Uma harpia', 'Uma cornucópia de ouro', 'Um vulcão ativo', 'Uma roda alada'] } },

  { catKey: 'simbolos', c: 3,
    es: { p: 'La escena del sol poniéndose y la luna elevándose en la faja central del Escudo representa:', ops: ['El inicio de la República el 3 de noviembre de 1903', 'El ciclo del día y la noche en el trópico', 'La diferencia horaria entre el Caribe y el Pacífico', 'El atardecer del 3 de noviembre de 1903, hora solemne de la Separación de Panamá de Colombia'] },
    en: { p: 'The scene of the sun setting and the moon rising on the central band of the Coat of Arms represents:', ops: ['The beginning of the Republic on November 3, 1903', 'The cycle of day and night in the tropics', 'The time difference between the Caribbean and the Pacific', "The dusk of November 3, 1903, the solemn hour of Panama's Separation from Colombia"] },
    pt: { p: 'A cena do sol se pondo e da lua se elevando na faixa central do Brasão representa:', ops: ['O início da República em 3 de novembro de 1903', 'O ciclo do dia e da noite no trópico', 'A diferença de fuso horário entre o Caribe e o Pacífico', 'O entardecer de 3 de novembro de 1903, hora solene da Separação do Panamá da Colômbia'] } },

  // ══ SÍMBOLOS PATRIOS — HIMNO NACIONAL ══════════════════════
  // Nota: los versos citados del Himno se mantienen en su idioma original (español)
  // en las tres versiones, ya que son texto oficial patrio, no contenido a traducir.
  { catKey: 'simbolos', c: 1,
    es: { p: '¿Cuántas estrofas y cuántos coros tiene el Himno Nacional que debe aprenderse?', ops: ['Dos estrofas y un coro', 'Cuatro estrofas y un coro', 'Tres estrofas y dos coros', 'Cinco estrofas y un coro'] },
    en: { p: 'How many verses and choruses does the required National Anthem have?', ops: ['Two verses and one chorus', 'Four verses and one chorus', 'Three verses and two choruses', 'Five verses and one chorus'] },
    pt: { p: 'Quantas estrofes e quantos coros tem o Hino Nacional que deve ser aprendido?', ops: ['Duas estrofes e um coro', 'Quatro estrofes e um coro', 'Três estrofes e dois coros', 'Cinco estrofes e um coro'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Con qué palabras comienza el CORO del Himno Nacional?', ops: ["'En tu suelo cubierto de flores'", "'Adelante la pica y la pala'", "'Alcanzamos por fin la victoria, en el campo feliz de la unión'", "'El progreso acaricia tus lares'"] },
    en: { p: 'What words does the CHORUS of the National Anthem begin with?', ops: ["'En tu suelo cubierto de flores'", "'Adelante la pica y la pala'", "'Alcanzamos por fin la victoria, en el campo feliz de la unión'", "'El progreso acaricia tus lares'"] },
    pt: { p: 'Com quais palavras começa o CORO do Hino Nacional?', ops: ["'En tu suelo cubierto de flores'", "'Adelante la pica y la pala'", "'Alcanzamos por fin la victoria, en el campo feliz de la unión'", "'El progreso acaricia tus lares'"] } },

  { catKey: 'simbolos', c: 1,
    es: { p: "¿Qué estrofa dice 'Es preciso cubrir con un velo, del pasado el calvario y la cruz; y que adorne el azul de tu cielo, de concordia la espléndida luz'?", ops: ['El coro', 'La primera estrofa', 'La segunda estrofa', 'La tercera estrofa'] },
    en: { p: "Which verse says 'Es preciso cubrir con un velo, del pasado el calvario y la cruz; y que adorne el azul de tu cielo, de concordia la espléndida luz'?", ops: ['The chorus', 'The first verse', 'The second verse', 'The third verse'] },
    pt: { p: "Qual estrofe diz 'Es preciso cubrir con un velo, del pasado el calvario y la cruz; y que adorne el azul de tu cielo, de concordia la espléndida luz'?", ops: ['O coro', 'A primeira estrofe', 'A segunda estrofe', 'A terceira estrofe'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: "¿Qué estrofa dice 'El progreso acaricia tus lares, al compás de sublime canción; ves rugir a tus pies ambos mares, que dan rumbo a tu noble misión'?", ops: ['El coro', 'La primera estrofa', 'La segunda estrofa', 'La tercera estrofa'] },
    en: { p: "Which verse says 'El progreso acaricia tus lares, al compás de sublime canción; ves rugir a tus pies ambos mares, que dan rumbo a tu noble misión'?", ops: ['The chorus', 'The first verse', 'The second verse', 'The third verse'] },
    pt: { p: "Qual estrofe diz 'El progreso acaricia tus lares, al compás de sublime canción; ves rugir a tus pies ambos mares, que dan rumbo a tu noble misión'?", ops: ['O coro', 'A primeira estrofe', 'A segunda estrofe', 'A terceira estrofe'] } },

  { catKey: 'simbolos', c: 3,
    es: { p: "¿Qué estrofa dice 'En tu suelo cubierto de flores, a los besos del tibio terral, terminaron guerreros fragores; sólo reina el amor fraternal'?", ops: ['El coro', 'La primera estrofa', 'La segunda estrofa', 'La tercera estrofa'] },
    en: { p: "Which verse says 'En tu suelo cubierto de flores, a los besos del tibio terral, terminaron guerreros fragores; sólo reina el amor fraternal'?", ops: ['The chorus', 'The first verse', 'The second verse', 'The third verse'] },
    pt: { p: "Qual estrofe diz 'En tu suelo cubierto de flores, a los besos del tibio terral, terminaron guerreros fragores; sólo reina el amor fraternal'?", ops: ['O coro', 'A primeira estrofe', 'A segunda estrofe', 'A terceira estrofe'] } },

  { catKey: 'simbolos', c: 3,
    es: { p: "¿Qué estrofa dice 'Adelante la pica y la pala, al trabajo sin más dilación; y seremos así prez y gala, de este mundo feraz de Colón'?", ops: ['El coro', 'La segunda estrofa', 'La tercera estrofa', 'La cuarta y última estrofa'] },
    en: { p: "Which verse says 'Adelante la pica y la pala, al trabajo sin más dilación; y seremos así prez y gala, de este mundo feraz de Colón'?", ops: ['The chorus', 'The second verse', 'The third verse', 'The fourth and final verse'] },
    pt: { p: "Qual estrofe diz 'Adelante la pica y la pala, al trabajo sin más dilación; y seremos así prez y gala, de este mundo feraz de Colón'?", ops: ['O coro', 'A segunda estrofe', 'A terceira estrofe', 'A quarta e última estrofe'] } },

  { catKey: 'simbolos', c: 2,
    es: { p: '¿Quién escribió la letra del Himno Nacional de Panamá?', ops: ['Santos Jorge', 'Ricardo Miró', 'Jerónimo de la Ossa', 'Ernestina Sucre Tapia'] },
    en: { p: 'Who wrote the lyrics of the National Anthem of Panama?', ops: ['Santos Jorge', 'Ricardo Miró', 'Jerónimo de la Ossa', 'Ernestina Sucre Tapia'] },
    pt: { p: 'Quem escreveu a letra do Hino Nacional do Panamá?', ops: ['Santos Jorge', 'Ricardo Miró', 'Jerónimo de la Ossa', 'Ernestina Sucre Tapia'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Quién compuso la música del Himno Nacional de Panamá?', ops: ['Jerónimo de la Ossa', 'Santos Jorge', 'Ricardo Miró', 'Manuel Amador Guerrero'] },
    en: { p: 'Who composed the music of the National Anthem of Panama?', ops: ['Jerónimo de la Ossa', 'Santos Jorge', 'Ricardo Miró', 'Manuel Amador Guerrero'] },
    pt: { p: 'Quem compôs a música do Hino Nacional do Panamá?', ops: ['Jerónimo de la Ossa', 'Santos Jorge', 'Ricardo Miró', 'Manuel Amador Guerrero'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué canción patriótica se cantaba antes del actual Himno Nacional?', ops: ["'La Panameñita'", 'El Himno Istmeño, con letra de Juan Agustín Torres y música de Santos Jorge', "'Patria', de Ricardo Miró", 'El himno de la Gran Colombia'] },
    en: { p: 'What patriotic song was sung before the current National Anthem?', ops: ["'La Panameñita'", 'The Isthmian Anthem, with lyrics by Juan Agustín Torres and music by Santos Jorge', "'Patria', by Ricardo Miró", 'The anthem of Gran Colombia'] },
    pt: { p: 'Qual canção patriótica era cantada antes do atual Hino Nacional?', ops: ["'La Panameñita'", 'O Hino Istmeño, com letra de Juan Agustín Torres e música de Santos Jorge', "'Patria', de Ricardo Miró", 'O hino da Grã-Colômbia'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Por qué se adoptó el actual Himno Nacional?', ops: ['Porque el anterior era demasiado largo', 'Santos Jorge, director de la Banda Republicana, ya tenía la música y pidió a Jerónimo de la Ossa la letra para presentarla ante el embajador de EE.UU. William I. Buchanan', 'Porque la Asamblea Nacional lo ordenó por ley', 'Porque fue un regalo de Colombia'] },
    en: { p: 'Why was the current National Anthem adopted?', ops: ['Because the previous one was too long', 'Santos Jorge, director of the Republican Band, already had the music and asked Jerónimo de la Ossa for the lyrics to present it before U.S. Ambassador William I. Buchanan', 'Because the National Assembly ordered it by law', 'Because it was a gift from Colombia'] },
    pt: { p: 'Por que foi adotado o atual Hino Nacional?', ops: ['Porque o anterior era longo demais', 'Santos Jorge, diretor da Banda Republicana, já tinha a música e pediu a Jerónimo de la Ossa a letra para apresentá-la ao embaixador dos EUA William I. Buchanan', 'Porque a Assembleia Nacional determinou por lei', 'Porque foi um presente da Colômbia'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Cuál es el texto del Juramento a la Bandera Nacional?', ops: ["'Juro defender la patria con mi vida'", "'Bandera panameña: juro a Dios y a la Patria, amarte, respetarte y defenderte, como símbolo sagrado de nuestra Nación'", "'Prometo ser fiel a Panamá y a su bandera'", "'Juro lealtad a la Bandera Nacional y a la República que representa'"] },
    en: { p: 'What is the text of the Oath to the National Flag?', ops: ["'Juro defender la patria con mi vida'", "'Bandera panameña: juro a Dios y a la Patria, amarte, respetarte y defenderte, como símbolo sagrado de nuestra Nación'", "'Prometo ser fiel a Panamá y a su bandera'", "'Juro lealtad a la Bandera Nacional y a la República que representa'"] },
    pt: { p: 'Qual é o texto do Juramento à Bandeira Nacional?', ops: ["'Juro defender la patria con mi vida'", "'Bandera panameña: juro a Dios y a la Patria, amarte, respetarte y defenderte, como símbolo sagrado de nuestra Nación'", "'Prometo ser fiel a Panamá y a su bandera'", "'Juro lealtad a la Bandera Nacional y a la República que representa'"] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Quién es la autora del Juramento a la Bandera Nacional?', ops: ['María de la Ossa de Amador', 'Ernestina Sucre Tapia', 'Angélica Bergamota', 'Amelia Dennis de Icaza'] },
    en: { p: 'Who is the author of the Oath to the National Flag?', ops: ['María de la Ossa de Amador', 'Ernestina Sucre Tapia', 'Angélica Bergamota', 'Amelia Dennis de Icaza'] },
    pt: { p: 'Quem é a autora do Juramento à Bandeira Nacional?', ops: ['María de la Ossa de Amador', 'Ernestina Sucre Tapia', 'Angélica Bergamota', 'Amelia Dennis de Icaza'] } },

  { catKey: 'simbolos', c: 1,
    es: { p: "¿Qué línea del Himno sigue a 'con ardientes fulgores de gloria'?", ops: ["'en el campo feliz de la unión'", "'se ilumina la nueva nación'", "'ves rugir a tus pies ambos mares'", "'al compás de sublime canción'"] },
    en: { p: "Which line of the Anthem follows 'con ardientes fulgores de gloria'?", ops: ["'en el campo feliz de la unión'", "'se ilumina la nueva nación'", "'ves rugir a tus pies ambos mares'", "'al compás de sublime canción'"] },
    pt: { p: "Qual verso do Hino segue 'con ardientes fulgores de gloria'?", ops: ["'en el campo feliz de la unión'", "'se ilumina la nueva nación'", "'ves rugir a tus pies ambos mares'", "'al compás de sublime canción'"] } },

  { catKey: 'simbolos', c: 1,
    es: { p: '¿Qué dice el Himno sobre los dos mares de Panamá?', ops: ["'entre dos mares el istmo reposa'", "'ves rugir a tus pies ambos mares, que dan rumbo a tu noble misión'", "'dos mares besan tus costas'", "'los mares guardan tu soberanía'"] },
    en: { p: "What does the Anthem say about Panama's two seas?", ops: ["'entre dos mares el istmo reposa'", "'ves rugir a tus pies ambos mares, que dan rumbo a tu noble misión'", "'dos mares besan tus costas'", "'los mares guardan tu soberanía'"] },
    pt: { p: 'O que o Hino diz sobre os dois mares do Panamá?', ops: ["'entre dos mares el istmo reposa'", "'ves rugir a tus pies ambos mares, que dan rumbo a tu noble misión'", "'dos mares besan tus costas'", "'los mares guardan tu soberanía'"] } },
];
