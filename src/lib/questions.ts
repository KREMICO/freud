// src/lib/questions.ts

export type Pergunta = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
};

export const perguntasPorFase: Record<string, Pergunta[]> = {
  oral: [
    {
      pergunta: "Um bebê coloca objetos na boca constantemente. Isso representa:",
      opcoes: ["Fase Oral", "Fase Anal", "Fase Genital"],
      correta: 0,
      explicacao:
        "A resposta correta é Fase Oral, porque nessa fase a boca é o principal meio de contato e prazer da criança.",
    },
    {
      pergunta: "Qual ação está ligada à fase oral?",
      opcoes: ["Controle do corpo", "Sucção", "Relações sociais"],
      correta: 1,
      explicacao:
        "A sucção está ligada à Fase Oral, pois envolve a boca e a alimentação.",
    },
    {
      pergunta: "A fase oral está relacionada principalmente a:",
      opcoes: ["Alimentação e boca", "Escola", "Amizades"],
      correta: 0,
      explicacao:
        "A Fase Oral está ligada à alimentação e ao uso da boca como principal forma de interação.",
    },
    {
      pergunta: "Em qual fase o bebê interage com o mundo pela boca?",
      opcoes: ["Fase Oral", "Fase Latência", "Fase Fálica"],
      correta: 0,
      explicacao:
        "Na Fase Oral, o bebê explora o mundo principalmente pela boca.",
    },
    {
      pergunta: "O prazer na fase oral está ligado a:",
      opcoes: ["Mãos", "Boca", "Pés"],
      correta: 1,
      explicacao:
        "O prazer nessa fase está ligado à boca, como sugar, morder e se alimentar.",
    },
  ],

  anal: [
    {
      pergunta: "O controle do corpo ocorre em qual fase?",
      opcoes: ["Fase Oral", "Fase Anal", "Fase Fálica"],
      correta: 1,
      explicacao:
        "A Fase Anal envolve o desenvolvimento do controle corporal e da disciplina.",
    },
    {
      pergunta: "A fase anal está ligada a:",
      opcoes: ["Alimentação", "Controle corporal", "Socialização"],
      correta: 1,
      explicacao:
        "Ela está ligada ao controle corporal, especialmente ao aprendizado de limites e organização.",
    },
    {
      pergunta: "Durante qual fase a criança aprende disciplina?",
      opcoes: ["Fase Genital", "Fase Anal", "Fase Oral"],
      correta: 1,
      explicacao:
        "A Fase Anal se relaciona com disciplina, controle e organização.",
    },
    {
      pergunta: "A fase anal envolve principalmente:",
      opcoes: ["Impulsos", "Organização e controle", "Brincadeiras"],
      correta: 1,
      explicacao:
        "Essa fase envolve organização, controle corporal e noção de limites.",
    },
    {
      pergunta: "Essa fase está relacionada ao desenvolvimento de:",
      opcoes: ["Controle", "Imaginação", "Reflexos"],
      correta: 0,
      explicacao:
        "A principal ideia da Fase Anal é o desenvolvimento do controle.",
    },
  ],

  falica: [
    {
      pergunta: "Em qual fase a criança observa mais o próprio corpo?",
      opcoes: ["Fase Oral", "Fase Fálica", "Fase Latência"],
      correta: 1,
      explicacao:
        "Na Fase Fálica, a criança passa a perceber mais o próprio corpo.",
    },
    {
      pergunta: "A fase fálica está ligada a:",
      opcoes: ["Alimentação", "Autoconhecimento", "Escola"],
      correta: 1,
      explicacao:
        "Essa fase está ligada ao autoconhecimento e à construção da identidade.",
    },
    {
      pergunta: "Durante qual fase ocorre maior percepção do corpo?",
      opcoes: ["Fase Fálica", "Fase Anal", "Fase Genital"],
      correta: 0,
      explicacao:
        "A maior percepção do corpo aparece na Fase Fálica.",
    },
    {
      pergunta: "Essa fase está relacionada ao desenvolvimento da:",
      opcoes: ["Identidade", "Disciplina", "Coordenação"],
      correta: 0,
      explicacao:
        "A Fase Fálica contribui para o desenvolvimento da identidade.",
    },
    {
      pergunta: "A criança começa a entender melhor:",
      opcoes: ["O próprio corpo", "A escola", "As regras sociais"],
      correta: 0,
      explicacao:
        "Nessa fase, a criança começa a compreender melhor o próprio corpo.",
    },
  ],

  latencia: [
    {
      pergunta: "Maior foco nos estudos ocorre em qual fase?",
      opcoes: ["Fase Anal", "Fase Latência", "Fase Genital"],
      correta: 1,
      explicacao:
        "Na Latência, a energia se volta mais para estudos, amizades e socialização.",
    },
    {
      pergunta: "A fase de latência é marcada por:",
      opcoes: ["Impulsos", "Aprendizado e socialização", "Alimentação"],
      correta: 1,
      explicacao:
        "A Latência é marcada por aprendizado, convivência social e escola.",
    },
    {
      pergunta: "Durante qual fase há maior desenvolvimento escolar?",
      opcoes: ["Fase Oral", "Fase Latência", "Fase Fálica"],
      correta: 1,
      explicacao:
        "O desenvolvimento escolar ganha mais destaque na Fase de Latência.",
    },
    {
      pergunta: "A energia nessa fase vai para:",
      opcoes: ["Corpo", "Estudos e amizades", "Instintos"],
      correta: 1,
      explicacao:
        "Na Latência, a energia é direcionada para estudos, amizades e convivência.",
    },
    {
      pergunta: "Essa fase envolve principalmente:",
      opcoes: ["Socialização", "Reflexos", "Sucção"],
      correta: 0,
      explicacao:
        "A socialização é uma característica importante da Fase de Latência.",
    },
  ],

  genital: [
    {
      pergunta: "Qual é a última fase do desenvolvimento?",
      opcoes: ["Fase Anal", "Fase Genital", "Fase Oral"],
      correta: 1,
      explicacao:
        "A Fase Genital é considerada a última fase do desenvolvimento psicossexual.",
    },
    {
      pergunta: "A fase genital está relacionada a:",
      opcoes: ["Imaturidade", "Maturidade emocional", "Infância"],
      correta: 1,
      explicacao:
        "Ela está ligada à maturidade emocional e ao desenvolvimento mais adulto.",
    },
    {
      pergunta: "Durante a fase genital ocorre:",
      opcoes: ["Desenvolvimento completo", "Aprendizado básico", "Reflexos"],
      correta: 0,
      explicacao:
        "Na Fase Genital, ocorre uma organização mais madura do desenvolvimento.",
    },
    {
      pergunta: "Essa fase representa:",
      opcoes: ["Início da vida", "Desenvolvimento adulto", "Fase escolar"],
      correta: 1,
      explicacao:
        "A Fase Genital representa uma etapa mais próxima do desenvolvimento adulto.",
    },
    {
      pergunta: "A principal característica dessa fase é:",
      opcoes: ["Maturidade", "Dependência", "Impulsividade"],
      correta: 0,
      explicacao:
        "A principal característica da Fase Genital é a maturidade.",
    },
  ],
};