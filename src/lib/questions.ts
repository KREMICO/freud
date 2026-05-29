export type Pergunta = {
  pergunta: string;
  opcoes: string[];
  correta: number;
};

export const perguntasPorFase: Record<string, Pergunta[]> = {
  oral: [
    {
      pergunta: "Um bebê coloca objetos na boca constantemente. Isso representa:",
      opcoes: ["Fase Oral", "Fase Anal", "Fase Genital"],
      correta: 0,
    },
    {
      pergunta: "Qual ação está ligada à fase oral?",
      opcoes: ["Controle do corpo", "Sucção", "Relações sociais"],
      correta: 1,
    },
    {
      pergunta: "A fase oral está relacionada principalmente a:",
      opcoes: ["Alimentação e boca", "Escola", "Amizades"],
      correta: 0,
    },
    {
      pergunta: "Em qual fase o bebê interage com o mundo pela boca?",
      opcoes: ["Fase Oral", "Fase Latência", "Fase Fálica"],
      correta: 0,
    },
    {
      pergunta: "O prazer na fase oral está ligado a:",
      opcoes: ["Mãos", "Boca", "Pés"],
      correta: 1,
    },
  ],

  anal: [
    {
      pergunta: "O controle do corpo ocorre em qual fase?",
      opcoes: ["Fase Oral", "Fase Anal", "Fase Fálica"],
      correta: 1,
    },
    {
      pergunta: "A fase anal está ligada a:",
      opcoes: ["Alimentação", "Controle corporal", "Socialização"],
      correta: 1,
    },
    {
      pergunta: "Durante qual fase a criança aprende disciplina?",
      opcoes: ["Fase Genital", "Fase Anal", "Fase Oral"],
      correta: 1,
    },
    {
      pergunta: "A fase anal envolve principalmente:",
      opcoes: ["Impulsos", "Organização e controle", "Brincadeiras"],
      correta: 1,
    },
    {
      pergunta: "Essa fase está relacionada ao desenvolvimento de:",
      opcoes: ["Controle", "Imaginação", "Reflexos"],
      correta: 0,
    },
  ],

  
  falica: [
    {
      pergunta: "Em qual fase a criança observa mais o próprio corpo?",
      opcoes: ["Fase Oral", "Fase Fálica", "Fase Latência"],
      correta: 1,
    },
    {
      pergunta: "A fase fálica está ligada a:",
      opcoes: ["Alimentação", "Autoconhecimento", "Escola"],
      correta: 1,
    },
    {
      pergunta: "Durante qual fase ocorre maior percepção do corpo?",
      opcoes: ["Fase Fálica", "Fase Anal", "Fase Genital"],
      correta: 0,
    },
    {
      pergunta: "Essa fase está relacionada ao desenvolvimento da:",
      opcoes: ["Identidade", "Disciplina", "Coordenação"],
      correta: 0,
    },
    {
      pergunta: "A criança começa a entender melhor:",
      opcoes: ["O próprio corpo", "A escola", "As regras sociais"],
      correta: 0,
    },
  ],

  // 🔥 SEM ACENTO
  latencia: [
    {
      pergunta: "Maior foco nos estudos ocorre em qual fase?",
      opcoes: ["Fase Anal", "Fase Latência", "Fase Genital"],
      correta: 1,
    },
    {
      pergunta: "A fase de latência é marcada por:",
      opcoes: ["Impulsos", "Aprendizado e socialização", "Alimentação"],
      correta: 1,
    },
    {
      pergunta: "Durante qual fase há maior desenvolvimento escolar?",
      opcoes: ["Fase Oral", "Fase Latência", "Fase Fálica"],
      correta: 1,
    },
    {
      pergunta: "A energia nessa fase vai para:",
      opcoes: ["Corpo", "Estudos e amizades", "Instintos"],
      correta: 1,
    },
    {
      pergunta: "Essa fase envolve principalmente:",
      opcoes: ["Socialização", "Reflexos", "Sucção"],
      correta: 0,
    },
  ],

  genital: [
    {
      pergunta: "Qual é a última fase do desenvolvimento?",
      opcoes: ["Fase Anal", "Fase Genital", "Fase Oral"],
      correta: 1,
    },
    {
      pergunta: "A fase genital está relacionada a:",
      opcoes: ["Imaturidade", "Maturidade emocional", "Infância"],
      correta: 1,
    },
    {
      pergunta: "Durante a fase genital ocorre:",
      opcoes: ["Desenvolvimento completo", "Aprendizado básico", "Reflexos"],
      correta: 0,
    },
    {
      pergunta: "Essa fase representa:",
      opcoes: ["Início da vida", "Desenvolvimento adulto", "Fase escolar"],
      correta: 1,
    },
    {
      pergunta: "A principal característica dessa fase é:",
      opcoes: ["Maturidade", "Dependência", "Impulsividade"],
      correta: 0,
    },
  ],
};