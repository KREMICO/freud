export type FaseId = "oral" | "anal" | "falica" | "latencia" | "genital";

export type Pergunta = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
};

export type PerguntasDaPartida = Record<FaseId, Pergunta[]>;

export const TOTAL_PERGUNTAS_POR_FASE = 5;

export const fases = [
  {
    id: "oral",
    nome: "Oral",
    periodo: "0 a 1 ano",
    titulo: "Fase Oral",
    texto:
      "A primeira etapa do desenvolvimento psicossexual. A boca aparece como principal zona de prazer, exploração e contato com o mundo.",
  },
  {
    id: "anal",
    nome: "Anal",
    periodo: "1 a 3 anos",
    titulo: "Fase Anal",
    texto:
      "A criança passa a lidar com controle corporal, limites, autonomia e organização, especialmente durante o desfralde.",
  },
  {
    id: "falica",
    nome: "Fálica",
    periodo: "3 a 6 anos",
    titulo: "Fase Fálica",
    texto:
      "A curiosidade sobre o próprio corpo cresce, junto com conflitos importantes para a identidade e a formação do superego.",
  },
  {
    id: "latencia",
    nome: "Latência",
    periodo: "6 anos à puberdade",
    titulo: "Fase de Latência",
    texto:
      "A energia psíquica fica menos evidente e se volta para estudos, amizades, regras sociais e convivência em grupo.",
  },
  {
    id: "genital",
    nome: "Genital",
    periodo: "Puberdade em diante",
    titulo: "Fase Genital",
    texto:
      "A etapa final, marcada por maturidade afetiva, integração das fases anteriores e relações mais recíprocas.",
  },
] as const satisfies ReadonlyArray<{
  id: FaseId;
  nome: string;
  periodo: string;
  titulo: string;
  texto: string;
}>;

export const perguntasPorFase: Record<FaseId, Pergunta[]> = {
  oral: [
    {
      pergunta: "Um bebê coloca objetos na boca constantemente. Isso representa:",
      opcoes: ["Fase Oral", "Fase Anal", "Fase Genital"],
      correta: 0,
      explicacao:
        "A boca é a principal zona de prazer durante a fase oral, sendo utilizada para explorar o ambiente.",
    },
    {
      pergunta: "Qual ação está ligada à fase oral?",
      opcoes: ["Controle do corpo", "Sucção", "Relações sociais"],
      correta: 1,
      explicacao:
        "Sugar o peito ou a mamadeira é uma das principais formas de satisfação nessa fase.",
    },
    {
      pergunta: "A fase oral está relacionada principalmente a:",
      opcoes: ["Alimentação e boca", "Escola", "Amizades"],
      correta: 0,
      explicacao:
        "O prazer está concentrado na boca e nas atividades ligadas à alimentação.",
    },
    {
      pergunta: "Em qual fase o bebê interage com o mundo principalmente pela boca?",
      opcoes: ["Fase Oral", "Fase Latência", "Fase Fálica"],
      correta: 0,
      explicacao:
        "Nos primeiros meses de vida a boca é o principal meio de exploração do ambiente.",
    },
    {
      pergunta: "O prazer predominante na fase oral está ligado a:",
      opcoes: ["Mãos", "Boca", "Pés"],
      correta: 1,
      explicacao: "Sugar, morder e mastigar proporcionam satisfação ao bebê.",
    },
    {
      pergunta: "Em qual faixa etária ocorre a fase oral?",
      opcoes: [
        "Do nascimento até aproximadamente 1 ano",
        "Dos 3 aos 6 anos",
        "Dos 6 aos 12 anos",
      ],
      correta: 0,
      explicacao:
        "Segundo Freud, a fase oral inicia o desenvolvimento psicossexual.",
    },
    {
      pergunta: "Segundo Freud, a principal zona erógena da fase oral é:",
      opcoes: ["A boca", "O ânus", "Os órgãos genitais"],
      correta: 0,
      explicacao:
        "A satisfação psíquica está concentrada nas atividades realizadas com a boca.",
    },
    {
      pergunta: "Um bebê sente prazer durante a amamentação porque:",
      opcoes: [
        "A alimentação proporciona satisfação oral",
        "Já entrou na fase anal",
        "Está aprendendo regras sociais",
      ],
      correta: 0,
      explicacao:
        "A amamentação une necessidade biológica e satisfação psíquica.",
    },
    {
      pergunta: "Levar brinquedos à boca é considerado:",
      opcoes: [
        "Um comportamento esperado da fase oral",
        "Um comportamento exclusivo da fase anal",
        "Um sinal da fase genital",
      ],
      correta: 0,
      explicacao: "Explorar objetos pela boca é típico dessa etapa.",
    },
    {
      pergunta: "Qual destas atividades NÃO caracteriza a fase oral?",
      opcoes: ["Sugar chupeta", "Amamentação", "Controle dos esfíncteres"],
      correta: 2,
      explicacao: "O controle dos esfíncteres pertence à fase anal.",
    },
    {
      pergunta: "A fase oral representa:",
      opcoes: [
        "O início do desenvolvimento psicossexual",
        "O final da infância",
        "A adolescência",
      ],
      correta: 0,
      explicacao: "É a primeira das cinco fases descritas por Freud.",
    },
    {
      pergunta: "Segundo Freud, uma fixação na fase oral pode estar relacionada a:",
      opcoes: [
        "Roer unhas ou fumar na vida adulta",
        "Aprender a andar",
        "Desenvolver a escrita",
      ],
      correta: 0,
      explicacao:
        "Freud relacionava alguns comportamentos orais persistentes a possíveis fixações nessa fase.",
    },
    {
      pergunta: "O bebê utiliza a boca principalmente para:",
      opcoes: ["Explorar o ambiente", "Aprender matemática", "Desenvolver linguagem escrita"],
      correta: 0,
      explicacao:
        "A boca é o principal instrumento de exploração nos primeiros meses.",
    },
    {
      pergunta: "O prazer oral está ligado principalmente à:",
      opcoes: ["Alimentação e sucção", "Socialização escolar", "Competição esportiva"],
      correta: 0,
      explicacao: "Essas atividades proporcionam satisfação ao bebê.",
    },
    {
      pergunta: "Qual fase sucede imediatamente a fase oral?",
      opcoes: ["Fase Anal", "Fase Latência", "Fase Genital"],
      correta: 0,
      explicacao:
        "Após o primeiro ano de vida inicia-se, segundo Freud, a fase anal.",
    },
  ],

  anal: [
    {
      pergunta: "O controle do corpo ocorre em qual fase?",
      opcoes: ["Fase Oral", "Fase Anal", "Fase Fálica"],
      correta: 1,
      explicacao:
        "A fase anal envolve o desenvolvimento do controle corporal, especialmente o controle dos esfíncteres.",
    },
    {
      pergunta: "A fase anal está ligada a:",
      opcoes: ["Alimentação", "Controle corporal", "Socialização"],
      correta: 1,
      explicacao:
        "Nessa fase, o foco está no controle do corpo e no aprendizado de limites.",
    },
    {
      pergunta: "Durante qual fase a criança aprende disciplina?",
      opcoes: ["Fase Genital", "Fase Anal", "Fase Oral"],
      correta: 1,
      explicacao:
        "A fase anal está associada à disciplina, autonomia e organização.",
    },
    {
      pergunta: "A fase anal envolve principalmente:",
      opcoes: ["Impulsos", "Organização e controle", "Brincadeiras"],
      correta: 1,
      explicacao:
        "Organização e controle são aspectos centrais dessa etapa.",
    },
    {
      pergunta: "Essa fase está relacionada ao desenvolvimento de:",
      opcoes: ["Controle", "Imaginação", "Reflexos"],
      correta: 0,
      explicacao:
        "A criança começa a desenvolver noções de controle, limites e autonomia.",
    },
    {
      pergunta: "Em qual faixa etária ocorre a fase anal?",
      opcoes: ["Entre 1 e 3 anos", "Entre 6 e 12 anos", "Após a puberdade"],
      correta: 0,
      explicacao:
        "A fase anal corresponde ao período em que ocorre o aprendizado do controle dos esfíncteres.",
    },
    {
      pergunta: "Qual região do corpo predomina na fase anal?",
      opcoes: ["Boca", "Ânus", "Genitais"],
      correta: 1,
      explicacao:
        "Segundo Freud, a zona erógena predominante nessa fase é a região anal.",
    },
    {
      pergunta: "O desfralde está associado principalmente a:",
      opcoes: ["Fase Anal", "Fase Oral", "Fase Genital"],
      correta: 0,
      explicacao:
        "O desfralde envolve o aprendizado do controle corporal, típico da fase anal.",
    },
    {
      pergunta:
        "Segundo Freud, aprender a controlar os esfíncteres favorece o desenvolvimento de:",
      opcoes: ["Autonomia e controle", "Linguagem", "Memória"],
      correta: 0,
      explicacao:
        "Esse aprendizado fortalece experiências de autonomia, controle e limites.",
    },
    {
      pergunta:
        "Uma criança sente orgulho por conseguir usar o banheiro sozinha. Esse comportamento caracteriza:",
      opcoes: ["Fase Anal", "Fase Oral", "Fase Latência"],
      correta: 0,
      explicacao:
        "O orgulho pelo controle das necessidades fisiológicas é um exemplo ligado à fase anal.",
    },
    {
      pergunta:
        "O excesso de rigidez na educação durante essa fase pode contribuir para:",
      opcoes: [
        "Fixações relacionadas à organização excessiva",
        "Aprendizagem da leitura",
        "Desenvolvimento motor",
      ],
      correta: 0,
      explicacao:
        "Freud associava conflitos nessa etapa a possíveis traços de rigidez, teimosia ou organização excessiva.",
    },
    {
      pergunta: "Qual destas situações pertence à fase anal?",
      opcoes: [
        "Aprender a controlar as necessidades fisiológicas",
        "Aprender a escrever",
        "Desenvolver relacionamentos amorosos",
      ],
      correta: 0,
      explicacao:
        "O controle das necessidades fisiológicas é um aprendizado central da fase anal.",
    },
    {
      pergunta: "A fase anal sucede:",
      opcoes: ["A fase oral", "A fase genital", "A fase latência"],
      correta: 0,
      explicacao:
        "Na sequência freudiana, a fase anal ocorre logo após a fase oral.",
    },
    {
      pergunta:
        "Segundo Freud, conflitos nessa fase podem influenciar características como:",
      opcoes: ["Organização e teimosia", "Cor dos olhos", "Inteligência"],
      correta: 0,
      explicacao:
        "Freud relacionava conflitos dessa fase a traços de personalidade ligados a controle e organização.",
    },
    {
      pergunta: "Qual é o principal aprendizado psicológico da fase anal?",
      opcoes: ["Controle e limites", "Desenvolvimento da fala", "Formação de amizades"],
      correta: 0,
      explicacao:
        "A fase anal enfatiza o aprendizado de controle, autonomia e limites.",
    },
  ],

  falica: [
    {
      pergunta: "Em qual fase a criança observa mais o próprio corpo?",
      opcoes: ["Fase Oral", "Fase Fálica", "Fase Latência"],
      correta: 1,
      explicacao:
        "Na fase fálica, a criança passa a demonstrar maior curiosidade sobre o próprio corpo.",
    },
    {
      pergunta: "A fase fálica está ligada a:",
      opcoes: ["Alimentação", "Descoberta do próprio corpo e identidade", "Escola"],
      correta: 1,
      explicacao:
        "Essa fase envolve descoberta corporal, identidade e conflitos importantes para o desenvolvimento psíquico.",
    },
    {
      pergunta: "Durante qual fase ocorre maior percepção do próprio corpo?",
      opcoes: ["Fase Fálica", "Fase Anal", "Fase Genital"],
      correta: 0,
      explicacao:
        "A maior percepção do próprio corpo é uma característica da fase fálica.",
    },
    {
      pergunta: "Essa fase está relacionada ao desenvolvimento da:",
      opcoes: ["Identidade", "Disciplina", "Coordenação"],
      correta: 0,
      explicacao:
        "A fase fálica contribui para a construção da identidade.",
    },
    {
      pergunta: "A criança começa a compreender melhor:",
      opcoes: ["O próprio corpo", "A escola", "As regras do trânsito"],
      correta: 0,
      explicacao:
        "Nessa fase, há maior curiosidade e percepção sobre o próprio corpo.",
    },
    {
      pergunta: "Em qual idade ocorre a fase fálica?",
      opcoes: ["Entre 3 e 6 anos", "Entre 0 e 1 ano", "Após os 12 anos"],
      correta: 0,
      explicacao:
        "Freud situou a fase fálica aproximadamente entre os 3 e 6 anos.",
    },
    {
      pergunta: "Segundo Freud, qual conflito é característico dessa fase?",
      opcoes: ["Complexo de Édipo", "Fixação oral", "Latência"],
      correta: 0,
      explicacao:
        "O Complexo de Édipo é um dos conceitos associados por Freud à fase fálica.",
    },
    {
      pergunta: "Durante essa fase, a criança passa a:",
      opcoes: [
        "Demonstrar curiosidade sobre as diferenças entre os sexos",
        "Aprender a controlar os esfíncteres",
        "Desenvolver apenas habilidades motoras",
      ],
      correta: 0,
      explicacao:
        "A curiosidade sobre diferenças corporais e sexuais aparece como tema dessa etapa.",
    },
    {
      pergunta: "O Complexo de Édipo foi proposto por Freud para explicar conflitos da:",
      opcoes: ["Fase Fálica", "Fase Oral", "Fase Genital"],
      correta: 0,
      explicacao:
        "Freud relacionou o Complexo de Édipo aos conflitos próprios da fase fálica.",
    },
    {
      pergunta: "Ao final da fase fálica ocorre importante desenvolvimento do:",
      opcoes: ["Superego", "Sistema digestório", "Vocabulário"],
      correta: 0,
      explicacao:
        "A resolução dos conflitos dessa fase contribui para a formação do superego.",
    },
    {
      pergunta: "A identificação com o responsável do mesmo sexo contribui para:",
      opcoes: [
        "Formação da identidade e do superego",
        "Controle da alimentação",
        "Desenvolvimento da escrita",
      ],
      correta: 0,
      explicacao:
        "A identificação participa da construção da identidade e do superego.",
    },
    {
      pergunta: "Qual destas situações caracteriza a fase fálica?",
      opcoes: ["Curiosidade sobre o próprio corpo", "Aprender a ler", "Amamentação"],
      correta: 0,
      explicacao:
        "A curiosidade sobre o corpo é uma marca importante dessa fase.",
    },
    {
      pergunta: "A fase fálica ocorre antes de qual fase?",
      opcoes: ["Latência", "Genital", "Oral"],
      correta: 0,
      explicacao:
        "Na sequência proposta por Freud, a fase fálica antecede a latência.",
    },
    {
      pergunta: "Qual destas regiões é considerada predominante na fase fálica?",
      opcoes: ["Região genital", "Boca", "Ânus"],
      correta: 0,
      explicacao:
        "A região genital é considerada predominante nessa etapa.",
    },
    {
      pergunta:
        "Segundo Freud, a resolução adequada dos conflitos da fase fálica contribui para:",
      opcoes: [
        "Um desenvolvimento psicológico mais saudável",
        "Crescimento físico acelerado",
        "Aprendizagem da linguagem",
      ],
      correta: 0,
      explicacao:
        "A resolução desses conflitos favorece a organização psíquica e a formação da personalidade.",
    },
  ],

  latencia: [
    {
      pergunta: "Maior foco nos estudos ocorre em qual fase?",
      opcoes: ["Fase Anal", "Fase Latência", "Fase Genital"],
      correta: 1,
      explicacao:
        "Na fase de latência, a energia psíquica é direcionada principalmente para a aprendizagem, amizades e desenvolvimento social.",
    },
    {
      pergunta: "A fase de latência é marcada por:",
      opcoes: ["Impulsos intensos", "Aprendizado e socialização", "Alimentação"],
      correta: 1,
      explicacao:
        "O interesse pela escola, amizades e atividades em grupo torna-se predominante.",
    },
    {
      pergunta: "Durante qual fase há maior desenvolvimento escolar?",
      opcoes: ["Fase Oral", "Fase Latência", "Fase Fálica"],
      correta: 1,
      explicacao:
        "A escola passa a ocupar um papel importante durante a latência.",
    },
    {
      pergunta: "A energia psíquica nessa fase é direcionada para:",
      opcoes: ["Corpo", "Estudos e amizades", "Instintos"],
      correta: 1,
      explicacao:
        "Segundo Freud, a libido fica relativamente menos evidente e favorece atividades intelectuais e sociais.",
    },
    {
      pergunta: "Essa fase envolve principalmente:",
      opcoes: ["Socialização", "Reflexos", "Sucção"],
      correta: 0,
      explicacao:
        "O convívio social e o desenvolvimento de amizades tornam-se importantes.",
    },
    {
      pergunta: "Em qual faixa etária ocorre a fase de latência?",
      opcoes: ["Entre 6 anos e a puberdade", "Entre 1 e 3 anos", "Após os 18 anos"],
      correta: 0,
      explicacao:
        "A latência ocorre entre o final da fase fálica e o início da puberdade.",
    },
    {
      pergunta: 'Por que Freud chamou essa etapa de "latência"?',
      opcoes: [
        "Porque a libido fica relativamente menos evidente",
        "Porque a criança dorme mais",
        "Porque ocorre antes do nascimento",
      ],
      correta: 0,
      explicacao:
        "Os impulsos sexuais tornam-se menos aparentes e a energia é direcionada para outras atividades.",
    },
    {
      pergunta: "Qual atividade caracteriza melhor essa fase?",
      opcoes: ["Fazer amizades e frequentar a escola", "Amamentação", "Desfralde"],
      correta: 0,
      explicacao:
        "O desenvolvimento social e escolar ganha destaque nessa etapa.",
    },
    {
      pergunta: "Durante a fase de latência a criança costuma desenvolver:",
      opcoes: [
        "Habilidades sociais e acadêmicas",
        "Controle dos esfíncteres",
        "Reflexos de sucção",
      ],
      correta: 0,
      explicacao:
        "O foco está na aprendizagem e na convivência.",
    },
    {
      pergunta: "Em relação às fases anteriores, durante a latência ocorre:",
      opcoes: [
        "Maior investimento em estudos e convivência social",
        "Maior interesse pela alimentação",
        "Desenvolvimento do controle intestinal",
      ],
      correta: 0,
      explicacao:
        "A energia psíquica é direcionada para atividades intelectuais e sociais.",
    },
    {
      pergunta: "A fase de latência sucede:",
      opcoes: ["A fase fálica", "A fase genital", "A fase oral"],
      correta: 0,
      explicacao:
        "Ela ocorre após a fase fálica e antes da fase genital.",
    },
    {
      pergunta: "O interesse por brincadeiras em grupo é característico de qual fase?",
      opcoes: ["Latência", "Oral", "Anal"],
      correta: 0,
      explicacao:
        "O convívio com outras crianças torna-se importante nessa etapa.",
    },
    {
      pergunta: "Segundo Freud, durante a latência a libido:",
      opcoes: [
        "É direcionada para atividades intelectuais e sociais",
        "Desaparece completamente",
        "Volta para a fase oral",
      ],
      correta: 0,
      explicacao:
        "A libido não desaparece, apenas é canalizada para outros objetivos.",
    },
    {
      pergunta: "A convivência com colegas contribui principalmente para:",
      opcoes: ["Desenvolvimento social", "Controle dos esfíncteres", "Alimentação"],
      correta: 0,
      explicacao:
        "A socialização é uma das principais características dessa fase.",
    },
    {
      pergunta: "Qual fase sucede a fase de latência?",
      opcoes: ["Genital", "Oral", "Anal"],
      correta: 0,
      explicacao:
        "Após a puberdade inicia-se a fase genital.",
    },
  ],

  genital: [
    {
      pergunta: "Qual é a última fase do desenvolvimento psicossexual?",
      opcoes: ["Fase Anal", "Fase Genital", "Fase Oral"],
      correta: 1,
      explicacao:
        "A fase genital é a quinta e última etapa descrita por Freud.",
    },
    {
      pergunta: "A fase genital está relacionada a:",
      opcoes: ["Imaturidade", "Maturidade emocional e afetiva", "Infância"],
      correta: 1,
      explicacao:
        "O indivíduo busca relações mais maduras e equilibradas.",
    },
    {
      pergunta: "Durante a fase genital ocorre:",
      opcoes: [
        "Organização madura da sexualidade",
        "Aprendizagem do controle intestinal",
        "Reflexos de sucção",
      ],
      correta: 0,
      explicacao:
        "A sexualidade passa a ser direcionada para relacionamentos afetivos maduros.",
    },
    {
      pergunta: "Essa fase representa:",
      opcoes: ["Início da vida", "Desenvolvimento adulto", "Fase escolar"],
      correta: 1,
      explicacao:
        "É a etapa da adolescência em diante.",
    },
    {
      pergunta: "A principal característica dessa fase é:",
      opcoes: ["Maturidade", "Dependência", "Impulsividade"],
      correta: 0,
      explicacao:
        "A personalidade tende a apresentar maior equilíbrio emocional.",
    },
    {
      pergunta: "A fase genital inicia-se geralmente:",
      opcoes: ["Na puberdade", "No nascimento", "Aos dois anos"],
      correta: 0,
      explicacao:
        "Freud situou essa fase a partir do início da adolescência.",
    },
    {
      pergunta: "O principal objetivo da libido nessa fase é:",
      opcoes: [
        "Estabelecer relações afetivas maduras",
        "Aprender a falar",
        "Desenvolver o controle corporal",
      ],
      correta: 0,
      explicacao:
        "A energia psíquica volta-se para vínculos afetivos e sexuais saudáveis.",
    },
    {
      pergunta: "Segundo Freud, um desenvolvimento saudável depende:",
      opcoes: [
        "Da resolução adequada das fases anteriores",
        "Apenas da educação escolar",
        "Apenas da adolescência",
      ],
      correta: 0,
      explicacao:
        "As experiências das fases anteriores influenciam a vida adulta.",
    },
    {
      pergunta: "A fase genital sucede:",
      opcoes: ["A fase de latência", "A fase oral", "A fase anal"],
      correta: 0,
      explicacao:
        "Ela é a etapa final do desenvolvimento psicossexual.",
    },
    {
      pergunta: "Durante essa fase espera-se maior:",
      opcoes: ["Capacidade de amar e trabalhar", "Dependência dos pais", "Interesse pela amamentação"],
      correta: 0,
      explicacao:
        "Freud relacionava a maturidade à capacidade de amar e produzir.",
    },
    {
      pergunta: "Um relacionamento afetivo saudável caracteriza:",
      opcoes: ["A fase genital", "A fase oral", "A fase anal"],
      correta: 0,
      explicacao:
        "A sexualidade torna-se voltada para relações maduras.",
    },
    {
      pergunta: "Segundo Freud, conflitos não resolvidos na infância podem:",
      opcoes: ["Influenciar a personalidade adulta", "Alterar a altura da pessoa", "Mudar a cor dos olhos"],
      correta: 0,
      explicacao:
        "As experiências infantis podem repercutir ao longo da vida.",
    },
    {
      pergunta: "Na fase genital ocorre:",
      opcoes: [
        "Integração do desenvolvimento das fases anteriores",
        "Desenvolvimento da sucção",
        "Aprendizado do desfralde",
      ],
      correta: 0,
      explicacao:
        "As fases anteriores influenciam a organização da personalidade adulta.",
    },
    {
      pergunta: "A sexualidade nessa fase caracteriza-se por:",
      opcoes: [
        "Maior maturidade e reciprocidade",
        "Exclusivamente curiosidade infantil",
        "Ausência completa de libido",
      ],
      correta: 0,
      explicacao:
        "A libido passa a ser direcionada para relações afetivas recíprocas.",
    },
    {
      pergunta: "Segundo Freud, alcançar a fase genital de forma saudável significa:",
      opcoes: [
        "Desenvolver equilíbrio entre afetividade, responsabilidade e sexualidade",
        "Permanecer dependente dos pais",
        "Retornar às características da fase oral",
      ],
      correta: 0,
      explicacao:
        "A maturidade emocional é resultado do desenvolvimento adequado ao longo das fases anteriores.",
    },
  ],
};

export function criarPerguntasDaPartida(): PerguntasDaPartida {
  return fases.reduce((acc, fase) => {
    acc[fase.id] = embaralhar(perguntasPorFase[fase.id]).slice(
      0,
      TOTAL_PERGUNTAS_POR_FASE
    );
    return acc;
  }, {} as PerguntasDaPartida);
}

function embaralhar<T>(items: T[]): T[] {
  const copia = [...items];

  for (let index = copia.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copia[index], copia[randomIndex]] = [copia[randomIndex], copia[index]];
  }

  return copia;
}
