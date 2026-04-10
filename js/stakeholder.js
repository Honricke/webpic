const params = new URLSearchParams(window.location.search);
const category = params.get("category") || "Moda";

const categoryMap = {
  Moda: {
    imageUrl: {
      mainBanner: "top-dressmaker.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "order-production.webp",
      cardSecond: "raw-material.webp",
      cardThird: "product-share.webp",

      sectionFirst: "order-production.webp",
      sectionSecond: "frequent-order.webp",
      sectionThird: "min-stock.webp",
      sectionFourth: "pizza-graph.webp",
    },
    mainTitle:
      "Moda sem caos: controle sua coleção do planejamento ao faturamento",
    mainText:
      "Na moda, o problema quase nunca é só vender. O desafio é fazer a coleção andar com prazo, custo e organização, sem virar uma corrida diária para apagar incêndio. Quando muitos modelos entram ao mesmo tempo, qualquer descontrole afeta produção, estoque, faturamento e entrega. Com o Dapic, sua confecção ganha mais clareza sobre o que precisa ser produzido, o que já está comprometido e onde a operação está travando, para a coleção rodar com mais previsibilidade.",
    enterpriseTitle: "Confecções de Moda que já operam com o Dapic:",
    contactTitle:
      "Sua coleção precisa andar com mais controle, não com mais correria",
    contactText:
      "Se sua confecção já vende, mas sofre para transformar venda em produção, faturamento e entrega com consistência, o Dapic pode colocar essa rotina no eixo.",
    cards: {
      firstTitle: "Coleção atrasada vira correria, desgaste e venda perdida",
      firstText:
        "Quando a produção anda sem prioridade clara, o comercial promete prazo que a fábrica não consegue sustentar. A coleção começa a sair torta: peça parada no meio do caminho, gargalo escondido, atraso acumulado e cliente cobrando posição o tempo todo. Com o Dapic, sua equipe passa a acompanhar melhor o andamento da produção, entender o que precisa ganhar prioridade e enxergar antes onde a coleção começou a travar. Isso reduz a correria de última hora e melhora a confiança nos prazos.",
      secondTitle: "Custo mal enxergado corrói seu lucro sem avisar",
      secondText:
        "Tem confecção que vende bem, trabalha bastante e mesmo assim sente que o dinheiro não sobra. Isso acontece quando consumo, compra, produção e movimentações não estão organizados. A operação roda, mas a margem vai escapando em silêncio. Com o Dapic, você passa a ter mais clareza sobre custo, consumo e histórico dos produtos, o que ajuda a ajustar compra, produção e preço com mais segurança, em vez de decidir no escuro.",
      thirdTitle: "Estoque bagunçado trava caixa e mata oportunidade",
      thirdText:
        "Quando você não confia no estoque, tudo fica mais difícil: compra errado, produz o que não precisava, deixa faltar o que vende e ainda prende dinheiro em peça parada. O problema deixa de ser só estoque e vira problema de decisão. Com o Dapic, entradas, saídas e reservas ficam mais organizadas, e sua equipe consegue enxergar melhor o que realmente está disponível, o que está comprometido e onde o capital está parado.",
    },
    sections: {
      firstTitle: "Quando a coleção tem muita coisa rodando ao mesmo tempo",
      firstText:
        "Na moda, o caos costuma começar quando vários modelos entram juntos e ninguém mais sabe com clareza o que precisa sair primeiro. O Dapic ajuda a organizar essa fila da produção, dando mais noção de prioridade, etapa e andamento para a coleção não depender de memória, pressão ou improviso.",
      secondTitle:
        "Quando o pedido entra de um jeito e a operação recebe de outro",
      secondText:
        "Muita venda se perde no meio do caminho porque o pedido chega solto, incompleto ou mal repassado. Com o Dapic, o fluxo comercial e operacional fica mais amarrado, reduzindo retrabalho entre atendimento, separação, faturamento e expedição.",
      thirdTitle: "Quando o estoque para de ajudar e começa a atrapalhar",
      thirdText:
        "Na confecção de moda, não basta ter produto. É preciso saber onde ele está, o que já foi comprometido e o que está parado sem necessidade. O Dapic ajuda a transformar o estoque em base de decisão, e não em fonte de dúvida.",
      fourthTitle:
        "Quando você precisa decidir com mais segurança e menos achismo",
      fourthText:
        "Em vez de tocar a operação só no “feeling”, o Dapic ajuda a enxergar o que está andando, o que está travado e o que está pesando no caixa. Isso dá mais firmeza para agir antes que o problema cresça.",
    },
    dropdown: {
      firstTitle:
        "O Dapic serve para confecção de moda com vários modelos por coleção?",
      firstText:
        "Sim. O Dapic ajuda justamente quando a operação precisa lidar com muitos modelos, prioridades, etapas e pedidos ao mesmo tempo.",
      secondTitle: "O sistema ajuda a controlar produção e estoque juntos?",
      secondText:
        "Sim. A ideia é evitar que produção, estoque, pedido e faturamento fiquem cada um de um lado.",
      thirdTitle:
        "O Dapic ajuda a reduzir retrabalho entre comercial e fábrica?",
      thirdText:
        "Sim. O fluxo mais organizado diminui erro de pedido, de separação e de repasse entre áreas.",
      fourthTitle: "Funciona para quem vende no atacado?",
      fourthText:
        "Sim. O fluxo mais organizado diminui erro de pedido, de separação e de repasse entre áreas.",
    },
  },
  Jeanswear: {
    imageUrl: {
      mainBanner: "jeans-stock.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "production-consultation.webp",
      cardSecond: "raw-material.webp",
      cardThird: "consult-stock.webp",

      sectionFirst: "yellow-red.webp",
      sectionSecond: "green-red.webp",
      sectionThird: "raw-material.webp",
      sectionFourth: "order-conference.webp",
    },
    mainTitle:
      "Jeanswear sem retrabalho: controle etapas, custos e prazo de entrega",
    mainText:
      "No jeans, o lucro escorre pelos detalhes. Lavagem, acabamento, terceirização, variações e etapas mal acompanhadas viram atraso, custo escondido e entrega fora do prazo. Com o Dapic, sua confecção ganha mais visão sobre o processo inteiro e reduz a chance de descobrir o problema só quando ele já virou prejuízo.",
    enterpriseTitle: "Confecções de Jeanswear que já operam com o Dapic:",
    contactTitle:
      "No jeans, atraso e custo escondido não se resolvem na correria",
    contactText:
      "Se sua confecção sofre com gargalo entre etapas, margem apertada e retrabalho na saída, o Dapic pode dar mais previsibilidade para o jeans sair no prazo e com mais controle.",
    cards: {
      firstTitle: "Lavagem e acabamento atrasados travam a coleção inteira",
      firstText:
        "No jeans, uma etapa parada não atrasa só uma peça. Ela contamina o fluxo todo. Quando a empresa perde controle dessas fases, o prazo comercial vira promessa arriscada. Com o Dapic, sua operação consegue acompanhar melhor o andamento por etapa, identificar onde a produção começou a parar e agir antes que a lavagem ou o acabamento virem um gargalo generalizado.",
      secondTitle: "O custo real da peça some no meio do processo",
      secondText:
        "Jeanswear costuma ter mais detalhe, mais passagem e mais interferência no custo. Sem organização, a confecção vende achando que está indo bem, mas só percebe depois que a margem foi embora. Com o Dapic, fica mais fácil enxergar o consumo, o histórico e os custos envolvidos no produto, dando mais base para precificar e negociar sem depender só de planilha ou suposição.",
      thirdTitle: "Grade errada ou estoque impreciso faz venda escapar",
      thirdText:
        "Quando modelo, cor e tamanho não estão bem controlados, a expedição erra, a venda emperra e a fábrica perde tempo corrigindo o que já deveria ter saído certo. Com o Dapic, o estoque ganha mais rastreio e organização, ajudando sua equipe a saber o que tem de fato, o que já está reservado e o que precisa de atenção antes de virar ruptura ou erro de saída.",
    },
    sections: {
      firstTitle: "Quando o jeans passa por muitas mãos e muitas etapas",
      firstText:
        "No jeans, a operação costuma ser mais industrial a mais sensível a gargalos. O Dapic ajuda a dar visibilidade para esse caminho, para você não descobrir tarde demais que uma etapa específica começou a segurar todo o restante.",
      secondTitle: "Quando parte do processo sai da fábrica",
      secondText:
        "Sempre que há terceirização, a chance de perder rastreio cresce. O Dapic ajuda a acompanhar melhor o que foi enviado, o que voltou, o que atrasou e onde esse movimento começou a pesar no prazo e no custo.",
      thirdTitle: "Quando vender bem não significa lucrar bem",
      thirdText:
        "Jeanswear pode girar bastante e ainda assim esconder perda de margem. O Dapic ajuda a organizar melhor as informações de custo e consumo, para o resultado não ser decidido no escuro.",
      fourthTitle: "Quando o erro aparece no final, mas começou muito antes",
      fourthText:
        "Muitas falhas de jeans só ficam visíveis na conferência ou na entrega. O Dapic ajuda a reduzir esse efeito dominó, melhorando o controle desde a produção até a expedição.",
    },
    dropdown: {
      firstTitle:
        "O Dapic ajuda a acompanhar etapas como lavagem e acabamento?",
      firstText:
        "Sim. A operação consegue enxergar melhor o que está em andamento, parado ou virando gargalo.",
      secondTitle: "O sistema ajuda no controle de facção?",
      secondText:
        "Sim. O Dapic ajuda a rastrear o que saiu, o que voltou e o que impacta prazo e custo.",
      thirdTitle: "O Dapic controla grade por modelo, cor e tamanho?",
      thirdText:
        "Sim. Isso ajuda a reduzir erro de estoque e melhora a separação dos pedidos.",
      fourthTitle: "Serve para atacado e produção própria?",
      fourthText:
        "Sim. O foco é justamente organizar o fluxo entre produção, estoque, venda e expedição.",
    },
  },
  Fitness: {
    imageUrl: {
      mainBanner: "middle-dressmaker.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "min-stock.webp",
      cardSecond: "consult-stock.webp",
      cardThird: "full-grid.webp",

      sectionFirst: "pizza-graph.webp",
      sectionSecond: "rainbow-progress.webp",
      sectionThird: "sale-order.webp",
      sectionFourth: "graph-screen.webp",
    },
    mainTitle: "Fitness sem ruptura: reponha rápido e proteja sua margem",
    mainText:
      "No fitness e esportivo, o ritmo é mais curto. O que vende bem precisa ser reposto sem demora. Quando a operação perde o compasso, vem falta de best-seller, sobra do que não gira, erro de grade e muito retrabalho. Com o Dapic, sua confecção ganha mais agilidade para decidir, produzir e repor no ritmo do mercado.",
    enterpriseTitle:
      "Confecções Fitness e Esportivas que já operam com o Dapic:",
    contactTitle:
      "Crescer no fitness sem bagunçar a operação é questão de controle",
    contactText:
      "Se sua confecção sofre com reposição atrasada, grade confusa e estoque que não acompanha o giro, o Dapic ajuda a colocar velocidade com mais organização.",
    cards: {
      firstTitle: "Reposição atrasada quebra o giro",
      firstText:
        "Nesse segmento, faltar o que vende bem custa caro. Não é só uma peça faltando: é oportunidade perdida e cliente comprando em outro lugar. Com o Dapic, fica mais fácil enxergar o que está girando, o que precisa ganhar prioridade e o que já está comprometido, ajudando sua equipe a reagir antes da ruptura.",
      secondTitle: "Erro de variação vira troca, retrabalho e desgaste",
      secondText:
        "Quando cor, tamanho e disponibilidade não batem, a operação sofre. O problema não para na venda errada; ele vai até a separação, devolução e atendimento. Com o Dapic, o controle de grade e estoque fica mais confiável, reduzindo a chance de vender, separar ou faturar com informação errada.",
      thirdTitle: "Estoque parado aperta o caixa",
      thirdText:
        "Produzir ou comprar mal consome espaço, dinheiro e atenção. O caixa trava porque sobra o que não gira e falta o que deveria estar disponível. Com o Dapic, relatórios e visão de giro ajudam a diferenciar o que merece reposição do que está só ocupando espaço e travando capital.",
    },
    sections: {
      firstTitle: "Quando o best-seller não pode esperar",
      firstText:
        "No fitness, o campeão de venda precisa voltar rápido. O Dapic ajuda a priorizar melhor a produção e a reposição, para a operação não reagir tarde demais.",
      secondTitle: "Quando vender rápido começa a gerar erro",
      secondText:
        "Quanto mais o giro aumenta, maior a chance de confusão entre comercial, estoque e expedição. O Dapic ajuda a manter esse fluxo mais amarrado, para a velocidade não virar bagunça.",
      thirdTitle: "Quando o estoque precisa acompanhar o ritmo do mercado",
      thirdText:
        "Não basta saber que tem produto. É preciso saber o que está livre, o que já foi reservado e onde está começando a faltar. O Dapic ajuda a dar essa leitura com mais segurança.",
      fourthTitle:
        "Quando a operação precisa decidir o que merece atenção primeiro",
      fourthText:
        "Com mais visão de giro e desempenho, o Dapic ajuda sua equipe a concentrar energia no que realmente puxa resultado, em vez de dispersar atenção em tudo ao mesmo tempo.",
    },
    dropdown: {
      firstTitle: "O Dapic ajuda a controlar reposição de best-sellers?",
      firstText:
        "Sim. O sistema ajuda a enxergar o que está girando mais e o que precisa ganhar prioridade.",
      secondTitle: "Ele ajuda a evitar erro de tamanho e cor?",
      secondText:
        "Sim. O controle mais organizado da grade reduz divergências na venda e na separação.",
      thirdTitle: "Funciona para atacado e venda por representantes?",
      thirdText:
        "Sim. O fluxo pode ser organizado para operações com pedido, catálogo, estoque e faturamento integrados.",
      fourthTitle: "O Dapic ajuda a reduzir estoque parado?",
      fourthText:
        "Sim. Os relatórios ajudam a enxergar melhor o que gira, o que encalha e onde o capital está travado.",
    },
  },
  Lingerie: {
    imageUrl: {
      mainBanner: "bottom-dressmaker.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "double-grid.webp",
      cardSecond: "frequent-order.webp",
      cardThird: "sales-order.webp",

      sectionFirst: "select-options.webp",
      sectionSecond: "min-stock.webp",
      sectionThird: "product-return.webp",
      sectionFourth: "pizza-graph.webp",
    },
    mainTitle:
      "Lingerie e pijamas sem confusão: controle variações e venda com mais segurança",
    mainText:
      "Em lingerie, pijamas e homewear, qualquer desorganização cresce rápido. São muitas combinações, detalhes, tamanhos, peças e acabamentos. Quando a operação perde o controle, o resultado aparece em troca, refação, sobra errada e dinheiro vazando sem alarde. Com o Dapic, sua confecção coloca ordem no fluxo e ganha mais confiança para produzir, vender e entregar.",
    enterpriseTitle:
      "Confecções de Lingerie, Pijamas e Homewear que já operam com o Dapic:",
    contactTitle:
      "Quanto mais variação você tem, mais perigoso fica operar no improviso",
    contactText:
      "Se sua confecção sente desgaste com erro de grade, retrabalho e estoque que não conversa com a venda, o Dapic ajuda a simplificar essa rotina.",
    cards: {
      firstTitle: "Variação mal controlada vira erro em cascata",
      firstText:
        "Quando a base do controle falha, o problema sai do cadastro e vai até a produção, estoque, venda e separação. Com o Dapic, sua equipe passa a trabalhar com mais organização sobre grade, variações e ficha do produto, reduzindo confusão entre o que foi planejado, o que foi produzido e o que foi vendido.",
      secondTitle: "Retrabalho consome tempo que deveria virar produtividade",
      secondText:
        "Refazer pedido, corrigir separação, revisar peça e reorganizar fluxo desgasta a equipe e derruba o ritmo da operação. Com o Dapic, o pedido entra de forma mais estruturada e o fluxo entre áreas fica mais alinhado, diminuindo os erros que normalmente explodem lá na frente.",
      thirdTitle: "Estoque desorganizado sabota a reposição",
      thirdText:
        "Você perde visão do que tem, do que está reservado e do que precisa voltar para o giro. Aí falta o que vende e sobra o que pesa no caixa. Com o Dapic, o estoque deixa de ser uma aposta e passa a ser uma base mais segura para repor, separar e decidir.",
    },
    sections: {
      firstTitle: "Quando muita combinação começa a virar confusão",
      firstText:
        "Esse segmento sofre quando modelo, tamanho, cor e composição deixam de conversar entre si. O Dapic ajuda a dar mais consistência a esse conjunto, para a operação não ficar remendando erro depois.",
      secondTitle: "Quando o pedido parece certo, mas chega torto na produção",
      secondText:
        "Um problema comum é o comercial repassar algo de um jeito e o operacional entender de outro. O Dapic ajuda a reduzir esse ruído, conectando melhor pedido, estoque e andamento da operação.",
      thirdTitle: "Quando a troca ou a refação começam a virar rotina",
      thirdText:
        "Troca demais e correção demais são sinais de desorganização, não de azar. O Dapic ajuda a reduzir essas falhas ao melhorar a clareza do processo desde o início.",
      fourthTitle: "Quando falta visão do que gira e do que só ocupa espaço",
      fourthText:
        "Com mais leitura operacional, sua equipe consegue perceber melhor onde o estoque está saudável, onde está furado e onde o capital começou a ficar preso sem necessidade.",
    },
    dropdown: {
      firstTitle: "O Dapic ajuda a controlar muitas variações por modelo?",
      firstText:
        "Sim. O objetivo é organizar o fluxo para reduzir erro entre cadastro, estoque, venda e produção.",
      secondTitle: "Ele ajuda a reduzir troca e retrabalho?",
      secondText:
        "Sim. Com mais controle do pedido e da separação, a operação tende a errar menos.",
      thirdTitle: "O sistema serve para atacado?",
      thirdText:
        "Sim. Ele foi pensado para operações que precisam de mais organização no fluxo de pedido, grade e faturamento.",
      fourthTitle:
        "Ajuda a saber o que está disponível e o que já está reservado?",
      fourthText: "Sim. Isso melhora a segurança para vender e separar.",
    },
  },
  Praia: {
    imageUrl: {
      mainBanner: "left-dressmaker.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "double-grid.webp",
      cardSecond: "frequent-order.webp",
      cardThird: "sales-order.webp",

      sectionFirst: "select-options.webp",
      sectionSecond: "min-stock.webp",
      sectionThird: "product-return.webp",
      sectionFourth: "pizza-graph.webp",
    },
    mainTitle:
      "Moda Praia sem perder a temporada: produza no prazo e venda com mais controle",
    mainText:
      "Na moda praia, atraso custa mais caro. O que não ficou pronto na hora certa pode perder o melhor momento de venda. E o que sobra depois da temporada pesa no caixa. Com o Dapic, sua confecção ganha mais previsibilidade para produzir, repor, faturar e expedir sem deixar a alta demanda virar bagunça.",
    enterpriseTitle: "Confecções de Moda Praia que já operam com o Dapic:",
    contactTitle: "Em moda praia, o relógio vende junto com a coleção",
    contactText:
      "Se sua confecção sofre para manter prazo, repor o que gira e despachar bem na alta temporada, o Dapic pode ajudar sua operação a vender com mais segurança.",
    cards: {
      firstTitle: "Temporada não espera sua operação se organizar",
      firstText:
        "Quando a produção se atrasa, você não perde só prazo. Perde o melhor momento comercial. Com o Dapic, sua equipe consegue acompanhar com mais clareza o andamento da produção e agir antes que o atraso comprometa a temporada.",
      secondTitle:
        "Faltar campeão de venda e sobrar peça errada destrói resultado",
      secondText:
        "Sem visão clara do giro, a confecção cai no pior dos mundos: ruptura no que vende e excesso no que não anda. Com o Dapic, relatórios, estoque e leitura de giro ajudam a proteger o que realmente puxa venda e reduzem a chance de deixar dinheiro parado em peça errada.",
      thirdTitle: "Vender muito e travar na saída também dói",
      thirdText:
        "No pico da demanda, atendimento, separação, faturamento e expedição precisam andar juntos. Se um trava, todos travam. Com o Dapic, o pedido entra mais organizado no fluxo e a saída ganha mais consistência, reduzindo erro e gargalo justamente quando a pressão aumenta.",
    },
    sections: {
      firstTitle: "Quando o calendário vale quase tanto quanto o produto",
      firstText:
        "Na moda praia, atrasar produção significa perder o timing. O Dapic ajuda a dar mais previsibilidade para a fábrica não reagir só depois que o prazo já apertou.",
      secondTitle: "Quando o campeão de venda precisa ser protegido",
      secondText:
        "Nem toda peça merece a mesma atenção. O Dapic ajuda a identificar melhor o que gira mais, o que precisa ser reposto e o que está com risco de faltar.",
      thirdTitle: "Quando o pós-temporada pode virar peso no caixa",
      thirdText:
        "Sobra mal distribuída dói mais nesse segmento. O Dapic ajuda a enxergar melhor o que está ficando para trás, para a confecção não carregar encalhe sem perceber.",
      fourthTitle: "Quando o pico comercial exige uma operação mais redonda",
      fourthText:
        "Em alta demanda, pedido mal organizado vira retrabalho em escala. O Dapic ajuda a deixar entrada, separação, faturamento e expedição mais alinhados.",
    },
    dropdown: {
      firstTitle: "O Dapic ajuda a planejar melhor a produção da temporada?",
      firstText:
        "Sim. A ideia é dar mais visibilidade para ajustar rota antes do problema explodir.",
      secondTitle: "Ele ajuda a evitar falta de best-seller?",
      secondText:
        "Sim. Com mais clareza do estoque e do comprometido, a reposição fica mais segura.",
      thirdTitle: "O sistema ajuda no pico de pedidos?",
      thirdText:
        "Sim. O fluxo mais organizado reduz travas entre atendimento, faturamento e expedição.",
      fourthTitle: "Serve para atacado?",
      fourthText:
        "Sim. Principalmente quando há necessidade de mais controle entre estoque, pedido e entrega.",
    },
  },
  Infantil: {
    imageUrl: {
      mainBanner: "right-dressmaker.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "double-grid.webp",
      cardSecond: "min-stock.webp",
      cardThird: "profit.webp",

      sectionFirst: "pizza-grid.webp",
      sectionSecond: "min-stock.webp",
      sectionThird: "order-production.webp",
      sectionFourth: "sales-shipment.webp",
    },
    mainTitle:
      "Infantil sem confusão: pare de perder venda por falta do tamanho certo",
    mainText:
      "Na moda infantil, não basta ter estoque. Tem que ter o tamanho certo, na hora certa. Quando a grade sai do controle, a operação começa a falhar em sequência: falta o que vende, sobra o que gira menos, a expedição erra e o retrabalho cresce. Com o Dapic, sua confecção ganha mais segurança para produzir, repor e entregar com menos improviso.",
    enterpriseTitle: "Confecções de Moda Infantil que já operam com o Dapic:",
    contactTitle:
      "Na moda infantil, ter produto sem ter o tamanho certo não resolve nada",
    contactText:
      "Se sua confecção sofre com grade furada, reposição mal priorizada e produção sem previsibilidade, o Dapic ajuda a transformar isso em operação mais estável.",
    cards: {
      firstTitle:
        "Se sua confecção sofre com grade furada, reposição mal priorizada e produção sem previsibilidade, o Dapic ajuda a transformar isso em operação mais estável.",
      firstText:
        "No infantil, um detalhe de tamanho já muda tudo. Quando a grade está desorganizada, vender e separar passa a ser um campo minado. Com o Dapic, a empresa passa a enxergar melhor a distribuição por tamanho, reduzindo erro de pedido, de estoque e de expedição.",
      secondTitle: "Faltar o tamanho certo é perder venda na hora",
      secondText:
        "O cliente não quer ouvir que “tem parecido”. Se o tamanho que gira não está disponível, a venda escapa. Com o Dapic, fica mais fácil acompanhar rupturas, mínimos e necessidades de reposição antes que o tamanho crítico desapareça do estoque.",
      thirdTitle: "Produção sem previsibilidade atrasa coleção e aperta o time",
      thirdText:
        "Quando prioridades não estão claras, a operação anda na correria e a entrega perde consistência. Com o Dapic, a produção ganha mais leitura de andamento e prioridade, ajudando sua equipe a reagir antes do atraso virar rotina.",
    },
    sections: {
      firstTitle: "Quando ter produto não significa ter a grade certa",
      firstText:
        "No infantil, estoque “cheio” pode esconder falta justamente nos tamanhos que mais saem. O Dapic ajuda a separar quantidade de disponibilidade real.",
      secondTitle: "Quando a reposição precisa acontecer antes da ruptura",
      secondText:
        "Esperar faltar para agir costuma sair caro. O Dapic ajuda a identificar com mais antecedência onde a grade está afinando e o que precisa voltar para o giro.",
      thirdTitle: "Quando a produção precisa acompanhar o que realmente vende",
      thirdText:
        "Nem sempre o problema é produzir pouco; às vezes é produzir errado. O Dapic ajuda a alinhar melhor a operação à demanda real.",
      fourthTitle: "Quando a expedição não pode errar num detalhe simples",
      fourthText:
        "No infantil, erro de tamanho gera troca, desgaste e retrabalho muito rápido. O Dapic ajuda a dar mais firmeza para a saída acontecer com menos falha.",
    },
    dropdown: {
      firstTitle: "O Dapic ajuda a controlar estoque por tamanho?",
      firstText:
        "Sim. Isso é central para reduzir ruptura e erro de separação.",
      secondTitle: "Ele ajuda a repor antes de faltar?",
      secondText:
        "Sim. O uso de mínimo e de visão de giro ajuda a agir mais cedo.",
      thirdTitle: "O sistema serve para coleção com muitos modelos?",
      thirdText:
        "Sim. Ele ajuda justamente quando a operação precisa lidar com muitas combinações ao mesmo tempo.",
      fourthTitle: "O Dapic ajuda a reduzir troca por erro de grade?",
      fourthText:
        "Sim. O controle mais claro da disponibilidade diminui esse tipo de problema.",
    },
  },
  Uniformes: {
    imageUrl: {
      mainBanner: "uniforme-banner.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "red-yellow-green.webp",
      cardSecond: "order-production.webp",
      cardThird: "sales-shipment.webp",

      sectionFirst: "sales-arrow.webp",
      sectionSecond: "red-grid.webp",
      sectionThird: "rainbow-progress.webp",
      sectionFourth: "order-production.webp",
    },
    mainTitle: "Uniformes sem atraso: produza por lote e entregue certo de primeira",
    mainText: "Em uniformes, o cliente costuma comprar com data, quantidade e expectativa bem definidas. Se a operação falha, o problema aparece rápido: pedido errado, grade trocada, atraso na entrega e desgaste direto com a empresa compradora. Com o Dapic, sua confecção organiza melhor o fluxo do lote ao faturamento.",
    enterpriseTitle: "Confecções de Uniformes que já operam com o Dapic:",
    contactTitle: "Uniforme errado ou atrasado pesa no relacionamento e no caixa",
    contactText: "Se sua confecção precisa entregar pedidos por lote com mais organização, rastreio e segurança, o Dapic pode ajudar sua operação a sair do improviso.",
    cards: {
      firstTitle: "Pedido grande com erro vira prejuízo grande",
      firstText: "Em uniformes, um erro pequeno na produção ou na separação pode afetar um lote inteiro. Com o Dapic, o fluxo do pedido fica mais organizado e rastreável, o que ajuda a reduzir desencontro entre comercial, produção, estoque e saída.",
      secondTitle: "Prazo fechado sem controle real gera promessa arriscada",
      secondText: "Quando a fábrica não enxerga bem capacidade, etapa e andamento, o comercial vende no otimismo e a operação paga a conta. Com o Dapic, a equipe ganha mais visibilidade do que está em andamento e do que ainda precisa acontecer, melhorando a confiança nos prazos prometidos.",
      thirdTitle: "Grade e entrega erradas desgastam o relacionamento",
      thirdText: "O cliente corporativo quer receber certo. Erro de quantidade, tamanho ou prazo pesa na confiança. Com o Dapic, a conferência e a organização da expedição ajudam a reduzir falhas na saída e a proteger a reputação da sua operação.",
    },
    sections: {
      firstTitle: "Quando o pedido precisa nascer organizado",
      firstText: "Uniforme não combina com improviso. O Dapic ajuda a deixar o pedido mais estruturado desde a origem, para a operação não precisar decifrar informação no meio do caminho.",
      secondTitle: "Quando o lote precisa andar com prioridade clara",
      secondText: "Pedidos maiores exigem acompanhamento mais firme. O Dapic ajuda a dar leitura de andamento para a produção não se perder entre várias frentes.",
      thirdTitle: "Quando errar na saída custa mais caro",
      thirdText: "Nesse segmento, erro de separação ou de entrega tem impacto direto na relação com o cliente. O Dapic ajuda a tornar essa etapa mais segura e mais conferida.",
      fourthTitle: "Quando faturar e entregar precisam conversar",
      fourthText: "Não adianta produzir certo e travar no final. O Dapic ajuda a conectar melhor pedido, faturamento e expedição para a operação fechar o ciclo com mais consistência.",
    },
    dropdown: {
      firstTitle: "O Dapic serve para pedidos grandes por lote?",
      firstText: "Sim. Ele ajuda a organizar melhor produção, estoque, faturamento e expedição nesses cenários.",
      secondTitle: "O sistema ajuda a evitar erro de grade em uniformes?",
      secondText: "Sim. O controle mais claro reduz divergências na produção e na saída.",
      thirdTitle: "Ele ajuda a cumprir prazo?",
      thirdText: "Ajuda a dar mais visibilidade da operação, o que melhora a capacidade de planejar e ajustar antes do atraso.",
      fourthTitle: "O Dapic ajuda no faturamento e na nota fiscal?",
      fourthText: "Sim. O fluxo pode seguir da venda até a emissão com mais organização.",
    },
  },
  Camisaria: {
    imageUrl: {
      mainBanner: "camisaria-banner.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "min-stock.webp",
      cardSecond: "pizza-graph.webp",
      cardThird: "rainbow-progress.webp",

      sectionFirst: "consult-stock.webp",
      sectionSecond: "full-grid.webp",
      sectionThird: "triple-grid.webp",
      sectionFourth: "rainbow-progress.webp",
    },
    mainTitle: "Camisaria sem grade furada: produza, reponha e entregue com mais precisão",
    mainText: "Na camisaria, vender bem depende de equilíbrio. Falta justamente a cor e o tamanho que mais saem; sobra o que gira menos; a expedição erra onde não podia; e o caixa fica preso no mix errado. Com o Dapic, sua operação passa a enxergar melhor a grade e tomar decisão com mais segurança.",
    enterpriseTitle: "Camisarias que já operam com o Dapic:",
    contactTitle: "Na Camisaria, grade desequilibrada vira venda perdida e caixa travado",
    contactText: "Se sua operação sofre com falta do que gira, sobra do que anda menos e retrabalho na expedição, o Dapic pode ajudar a organizar essa rotina.",
    cards: {
      firstTitle: "Grade furada faz a venda escapar",
      firstText: "Quando falta o tamanho ou a cor certa, a venda não espera a operação se organizar. Com o Dapic, a empresa passa a ter uma leitura mais clara da grade disponível, reduzindo venda perdida por falta de visibilidade.",
      secondTitle: "Sobra mal distribuída trava capital",
      secondText: "Ter estoque não significa estar bem abastecido. Muitas vezes há excesso do que anda pouco e falta do que realmente gira. Com o Dapic, os dados de giro ajudam a entender melhor onde está o excesso e onde a reposição merece prioridade.",
      thirdTitle: "Erro de separação gera retrabalho desnecessário",
      thirdText: "Na camisaria, detalhes importam. Quando a saída erra, o retrabalho volta rápido. Com o Dapic, conferência e organização da expedição ajudam a reduzir esses erros antes que eles cheguem ao cliente.",
    },
    sections: {
      firstTitle: "Quando a grade precisa ser lida com mais inteligência",
      firstText: "Na camisaria, não basta olhar estoque total. O Dapic ajuda a enxergar a distribuição real por cor e tamanho, que é onde o problema costuma morar.",
      secondTitle: "Quando o que mais vende precisa ser protegido",
      secondText: "Sem visibilidade de giro, a operação trata tudo como igual. O Dapic ajuda a destacar o que realmente tem peso comercial.",
      thirdTitle: "Quando a produção precisa seguir a demanda, não o palpite",
      thirdText: "Produzir porque “sempre foi assim” tende a repetir erro. O Dapic ajuda a alinhar melhor produção e reposição ao comportamento real das vendas.",
      fourthTitle: "Quando a saída precisa acontecer certa, não só rápida",
      fourthText: "Na camisaria, o detalhe errado vira troca. O Dapic ajuda a reduzir esse tipo de falha com mais organização no fim do processo.",
    },
    dropdown: {
      firstTitle: "O Dapic ajuda a controlar grade por cor e tamanho?",
      firstText: "Sim. Isso é uma das bases para melhorar estoque e reposição.",
      secondTitle: "Ele ajuda a decidir melhor o que produzir?",
      secondText: "Sim. Os relatórios ajudam a enxergar o que tem giro e o que pesa no estoque.",
      thirdTitle: "O sistema ajuda a reduzir erro de separação?",
      thirdText: "Sim. O fluxo mais organizado ajuda a conferência e a saída certa.",
      fourthTitle: "Funciona para atacado?",
      fourthText: "Sim. Principalmente quando há necessidade de controlar pedido, grade e faturamento juntos.",
    },
  },
  Plus: {
    imageUrl: {
      mainBanner: "plus-banner.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "triple-grid.webp",
      cardSecond: "consult-stock.webp",
      cardThird: "full-grid.webp",

      sectionFirst: "most-sale.webp",
      sectionSecond: "triple-grid.webp",
      sectionThird: "pizza-graph.webp",
      sectionFourth: "four-grid.webp",
    },
    mainTitle: "Plus Size sem ruptura: pare de perder venda por falta do tamanho certo",
    mainText: "No plus size, a grade precisa ser tratada com inteligência. Quando a operação trabalha no escuro, faltam justamente os tamanhos mais procurados e sobra o que gira menos. O resultado é venda perdida de um lado e capital preso do outro. Com o Dapic, sua confecção ganha mais leitura para equilibrar produção, estoque e reposição.",
    enterpriseTitle: "Confecções Plus Size que já operam com o Dapic:",
    contactTitle: "Plus Size exige mais leitura de grade e menos improviso",
    contactText: "Se sua confecção quer parar de perder venda por ruptura e reduzir sobra em tamanhos errados, o Dapic pode ajudar a equilibrar sua operação.",
    cards: {
      firstTitle: "Falta do tamanho certo derruba a venda na hora",
      firstText: "Aqui a ruptura pesa ainda mais, porque o cliente sente rápido quando a grade não foi pensada com coerência. Com o Dapic, a empresa passa a enxergar melhor onde estão os buracos da grade e consegue agir antes que os tamanhos mais importantes desapareçam.",
      secondTitle: "Sobra desequilibrada aperta o caixa",
      secondText: "Estoque mal distribuído por tamanho vira dinheiro parado. Com o Dapic, relatórios e leitura de giro ajudam a perceber onde está o excesso e onde a produção ou a compra precisam ser corrigidas.",
      thirdTitle: "Produção sem leitura da demanda repete erro",
      thirdText: "Quando a confecção não aprende com o giro, ela insiste na mesma distribuição ruim. Com o Dapic, a operação ganha mais base para produzir e repor com coerência, em vez de repetir um padrão que já mostrou problema.",
    },
    sections: {
      firstTitle: "Quando a grade ampla começa a esconder problema",
      firstText: "No plus size, olhar estoque de forma genérica não resolve. O Dapic ajuda a detalhar melhor a disponibilidade por tamanho, que é onde a dor realmente aparece.",
      secondTitle: "Quando a ruptura poderia ter sido evitada",
      secondText: "Muitas perdas acontecem porque a empresa só reage depois que o tamanho já acabou. O Dapic ajuda a antecipar esse movimento.",
      thirdTitle: "Quando o capital fica preso no tamanho errado",
      thirdText: "Nem toda sobra pesa igual. O Dapic ajuda a mostrar onde o dinheiro está mal distribuído e o que merece correção.",
      fourthTitle: "Quando vender com mais segurança depende de enxergar melhor",
      fourthText: "Quanto mais confiança a operação tem no que está disponível, menos ela promete errado e menos ela retrabalha depois.",
    },
    dropdown: {
      firstTitle: "O Dapic ajuda a controlar grade ampla?",
      firstText: "Sim. Esse controle é essencial para reduzir ruptura e excesso.",
      secondTitle: "Ele ajuda a repor os tamanhos mais importantes?",
      secondText: "Sim. O sistema ajuda a identificar melhor o que precisa de prioridade.",
      thirdTitle: "O Dapic serve para atacado?",
      thirdText: "O Dapic serve para atacado?",
      fourthTitle: "Ajuda a reduzir capital preso em estoque?",
      fourthText: "Sim. A visão de giro e distribuição por tamanho ajuda a tomar decisão melhor.",
    },
  },
  Streetwear: {
    imageUrl: {
      mainBanner: "street-banner.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "lemon-green.webp",
      cardSecond: "sales-order.webp",
      cardThird: "rainbow-progress.webp",

      sectionFirst: "four-grid.webp",
      sectionSecond: "yellow-drop.webp",
      sectionThird: "full-grid.webp",
      sectionFourth: "sales-shipment.webp",
    },
    mainTitle: "Streetwear sem bagunça: lance, reponha e despache no ritmo certo",
    mainText: "No streetwear, o lançamento precisa entrar com energia, mas sem virar caos operacional. Quando pedido entra por vários lados, o estoque não acompanha e a expedição trava, a marca perde ritmo e credibilidade. Com o Dapic, sua operação ganha mais consistência para sustentar lançamento, reposição e entrega.",
    enterpriseTitle: "Marcas e Confecções Streetwear que já operam com o Dapic:",
    contactTitle: "Streetwear pede velocidade, mas sem controle a velocidade cobra caro",
    contactText: "Se sua operação precisa acompanhar lançamento, reposição e expedição com mais ritmo e menos confusão, o Dapic pode ser o eixo dessa organização.",
    cards: {
      firstTitle: "Drop forte com operação fraca vira confusão",
      firstText: "Vender rápido é ótimo. Não conseguir organizar o que foi vendido é o problema. Com o Dapic, o pedido entra de forma mais estruturada e o fluxo operacional acompanha melhor a pressão do lançamento.",
      secondTitle: "Estoque sem confiança faz a marca prometer errado",
      secondText: "Se o disponível não bate com a realidade, o comercial acelera e o operacional freia. Com o Dapic, o estoque passa a oferecer uma base mais segura para vender, reservar e separar.",
      thirdTitle: "Expedição travada mata experiência",
      thirdText: "No streetwear, prazo e organização também fazem parte da imagem da marca. Com o Dapic, a conferência e a expedição ganham mais processo, reduzindo erro justo quando o cliente mais percebe.",
    },
    sections: {
      firstTitle: "Quando o lançamento precisa escalar sem virar bagunça",
      firstText: "Streetwear pede ritmo. O Dapic ajuda a suportar esse volume com mais ordem entre entrada de pedido, estoque e saída.",
      secondTitle: "Quando vender por vários canais começa a gerar ruído",
      secondText: "A operação sofre quando cada canal parece um mundo à parte. O Dapic ajuda a centralizar melhor esse fluxo e reduzir retrabalho.",
      thirdTitle: "Quando o giro muda rápido e a decisão precisa acompanhar",
      thirdText: "Peça que hoje performa muito pode amanhã esfriar. O Dapic ajuda a enxergar esse comportamento com mais clareza.",
      fourthTitle: "Quando a reputação da marca depende da execução",
      fourthText: "No streetwear, a entrega faz parte da experiência. O Dapic ajuda a proteger esse momento com mais consistência operacional.",
    },
    dropdown: {
      firstTitle: "O Dapic ajuda em operações com lançamentos frequentes?",
      firstText: "Sim. O fluxo ajuda a organizar melhor pedido, estoque e saída.",
      secondTitle: "Ele serve para marcas que vendem por vários canais?",
      secondText: "Sim. Principalmente quando a operação precisa centralizar melhor o pedido.",
      thirdTitle: "Ajuda a reduzir erro no envio?",
      thirdText: "Sim. O processo de conferência melhora a segurança da expedição.",
      fourthTitle: "O sistema ajuda a enxergar o que mais gira?",
      fourthText: "Sim. Os relatórios ajudam a dar mais leitura comercial e operacional.",
    },
  },
  Private: {
    imageUrl: {
      mainBanner: "private-banner.webp",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "order-production.webp",
      cardSecond: "raw-material.webp",
      cardThird: "green-red.webp",

      sectionFirst: "sales-arrow.webp",
      sectionSecond: "red-yellow-green.webp",
      sectionThird: "raw-material.webp",
      sectionFourth: "red-grid.webp",
    },
    mainTitle: "Private Label sem caos: entregue para marcas com prazo, custo e produção no controle",
    mainText: "Quem produz para marcas carrega uma pressão diferente. Não basta fabricar; é preciso cumprir combinado, controlar custo, lidar com terceiros, organizar etapas e sustentar confiança. Quando a operação falha, o desgaste vem rápido. Com o Dapic, sua confecção ganha mais rastreio e previsibilidade para atender private label com mais segurança.",
    enterpriseTitle: "Operações Private Label que já trabalham com o Dapic:",
    contactTitle: "Private Label exige controle de bastidor tão forte quanto a costura",
    contactText: "Se sua confecção atende marcas e precisa ganhar mais previsibilidade em prazo, custo e rastreabilidade, o Dapic pode ajudar a segurar essa operação com mais firmeza.",
    cards: {
      firstTitle: "Prazo apertado e muitas etapas viram um campo de risco",
      firstText: "Quando há vários pedidos, marcas diferentes e produção em paralelo, a operação pode perder prioridade e ritmo. Com o Dapic, a confecção ganha mais clareza sobre andamento, sequência e pendências, o que ajuda a proteger prazo com mais firmeza.",
      secondTitle: "Custo invisível destrói resultado ",
      secondText: "No private label, margem mal calculada dói ainda mais, porque o combinado costuma ser mais apertado. Com o Dapic, fica mais fácil organizar informações de consumo, custo e histórico, dando mais base para negociar e produzir sem susto no resultado.",
      thirdTitle: "Terceiro no processo sem controle vira atraso e ruído",
      thirdText: "Quando há facção ou mão de obra externa, perder rastreio gera cobrança, desorganização e custo escondido. Com o Dapic, a operação acompanha melhor o que saiu, o que voltou, o que atrasou e onde esse movimento começou a comprometer a entrega.",
    },
    sections: {
      firstTitle: "Quando cada pedido precisa ser tratado com mais disciplina",
      firstText: "No private label, promessa mal acompanhada vira desgaste com outra marca. O Dapic ajuda a tornar esse fluxo mais confiável do início ao fim.",
      secondTitle: "Quando parte do trabalho acontece fora da fábrica",
      secondText: "Sempre que o processo se espalha, o risco aumenta. O Dapic ajuda a manter visibilidade sobre terceiros e reduzir a sensação de operação “sumida”.",
      thirdTitle: "Quando a margem é apertada demais para aceitar desorganização",
      thirdText: "Private label exige mais precisão. O Dapic ajuda a reduzir decisões cegas sobre custo, consumo e andamento.",
      fourthTitle: "Quando produção, faturamento e entrega precisam falar a mesma língua",
      fourthText: "Não adianta fabricar bem e perder controle nas pontas. O Dapic ajuda a conectar essas etapas para a relação com a marca cliente ficar mais sólida.",
    },
    dropdown: {
      firstTitle: "O Dapic serve para confecção que produz para outras marcas?",
      firstText: "Sim. Esse é um cenário em que o controle operacional faz muita diferença.",
      secondTitle: "O sistema ajuda a acompanhar facção?",
      secondText: "Sim. Ele ajuda a organizar o que foi enviado, o que voltou e o impacto disso no fluxo.",
      thirdTitle: "O Dapic ajuda na formação de custo?",
      thirdText: "Sim. A organização das informações ajuda a dar mais clareza para custo e resultado.",
      fourthTitle: "Ele ajuda a ligar produção, faturamento e entrega?",
      fourthText: "Sim. O objetivo é justamente evitar áreas desconectadas.",
    },
  },
  default: {
    imageUrl: {
      mainBanner: "",

      firstCarousel: "zax.webp",
      secondCarousel: "shopee.webp",
      thirdCarousel: "zax.webp",
      fourthCarousel: "shopee.webp",
      fifythCarousel: "zax.webp",
      sixthCarousel: "shopee.webp",

      cardFirst: "",
      cardSecond: "",
      cardThird: "",

      sectionFirst: "",
      sectionSecond: "",
      sectionThird: "",
      sectionFourth: "",
    },
    mainTitle: "",
    mainText: "",
    enterpriseTitle: "",
    contactTitle: "",
    contactText: "",
    cards: {
      firstTitle: "",
      firstText: "",
      secondTitle: "",
      secondText: "",
      thirdTitle: "",
      thirdText: "",
    },
    sections: {
      firstTitle: "",
      firstText: "",
      secondTitle: "",
      secondText: "",
      thirdTitle: "",
      thirdText: "",
      fourthTitle: "",
      fourthText: "",
    },
    dropdown: {
      firstTitle: "",
      firstText: "",
      secondTitle: "",
      secondText: "",
      thirdTitle: "",
      thirdText: "",
      fourthTitle: "",
      fourthText: "",
    },
  },
};

const curMap = categoryMap[category];
const basePath = "./assets/img/commom/stakeholder/";

function getValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function hydrateContent(data) {
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    const value = getValue(data, key);

    if (value !== undefined) {
      el.textContent = value;
    }
  });
}

function hydrateImages(imageConfig) {
  const images = imageConfig;

  const elements = document.querySelectorAll("[data-image]");

  elements.forEach((el) => {
    const key = el.dataset.image;
    const type = el.dataset.type;

    // 👉 tenta override, senão usa padrão
    const file = images[key] || `${key}.jpg`;
    const fullPath = `${basePath}${file}`;

    if (type === "background") {
      el.style.backgroundImage = `url(${fullPath})`;
      return;
    }

    if (type === "src") {
      el.setAttribute("src", fullPath);
      return;
    }
  });
}

hydrateContent(categoryMap[category]);
hydrateImages(categoryMap[category].imageUrl);
