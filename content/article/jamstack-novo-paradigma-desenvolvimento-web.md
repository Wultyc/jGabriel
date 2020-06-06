---
title: "JAMStack: o novo paradigma do desenvolvimento web"
date: 2020-06-06T17:41:48Z
images: ["jamstack-novo-paradigma-desenvolvimento-web.jpg"] # The image resolution should be 900x500 or a proportional resolution
categories: ["Conceito"]
tags: ["JAMStack", "CDN", "Desenvolvimento Web", "Netlify", "HUGO", "Gatsby"]
authors: ["Jorge Gabriel Azevedo"]
sources: []
draft: false
---
JAMStack é uma nova abordagem no desenvolvimento web que permite a disponibilizarão de websites e webapps escaláveis de uma forma mais simples e eficaz com uma considerável redução de custos.
<!--more-->
Nos primórdios da internet o modo de disponibilizar um website era essencialmente escrever vários ficheiros HTML, um para cada página do site. Era sem dúvida um processo ineficiente e com o passar do tempo foram aparecendo soluções para tornar este processo mais dinâmico desde a partilha de código comum às páginas (p.e. estilos) até a gerar código HTML dinamicamente. E para auxiliar nesse dinamismo, ainda se incluiu as bases de dados para armazenar os dados de uma forma mais organizada e o resultado final é o que vemos na imagem abaixo.

<div align="center">
    {{<figure src="/images/jamstack-novo-paradigma-desenvolvimento-web/0.jpg">}}
</div>

>Neste diagrama usamos o termo servidor sendo referente ao software que está a ser executado e não necessariamente a máquinas físicas ou virtuais.

Em teoria este sistema é o ideal, mas no caso de um site que tenha muitos acessos diários (um site de notícias por exemplo), o servidor de base de dados pode-se tornar um problema. Milhares de acessos simultâneos podem fazer com que o sistema vá abaixo e por consequência o site fique indisponível. A solução poderia partir trocar o hardware atual por hardware mais potente. Esta ação é chamada de escalar verticalmente o serviço e é normalmente o método mais caro pois envolve adquirir novos componentes mais caros sem que na maioria dos casos se aproveite os componentes anteriores. Mas sabendo à partida que a base de dados estava na maioria das vezes a servir exatamente o mesmo resultado, uma solução mais eficiente passaria por criar uma cache da resposta da base de dados e atualizar essa cache periodicamente.

<div align="center">
    {{<figure src="/images/jamstack-novo-paradigma-desenvolvimento-web/1.jpg">}}
</div>

Com o aumento do número de visitas o problema pode passar a estar no servidor web, o servidor de cache ou até os dois podem deixar de ter capacidade de lidar com este número elevado de visitas diárias. Mais uma vez escalar verticalmente é uma opção, mas surgiu então uma outra opção, escalar horizontalmente. Neste processo, em vez de adquirir hardware novo para substituir o antigo, adquire-se hardware (normalmente da mesma gama do atual), o hardware novo serve para dividir o trabalho com a/as máquinas existentes. Esta é uma solução mais viável pois o número de pedidos que poderão ser processados será o maior sem que o investimento seja tão avultado. Caso necessário, basta adicionar mais hardware paralelamente para aumentar a capacidade. Normalmente nesta abordagem surge uma nova entidade no sistema, o balanceador de carga que como o próprio nome indica vai distribuir o trabalho pelas máquinas existentes.

<div align="center">
    {{<figure src="/images/jamstack-novo-paradigma-desenvolvimento-web/2.jpg">}}
</div>

Nesta fase os problemas podem ser vários: voltar a ter demasiados pedidos à base de dados, o balanceador de carga atingir o seu limite, consumo energético, manutenção (física e digital) de toda esta infraestrutura, contratação de profissionais capacitados para gerir todas estas máquinas etc…

Vamos fazer uma comparação de custos

| Máquina                   | Arquitetura Tradicional | Arquitetura com Cache  | Arquitetura com balanceamento de carga                     |
|---------------------------|:-----------------------:|:----------------------:|------------------------------------------------------------|
| Servidor Web              | 1                       | 1                      | 1 por cada redundância                                     |
| Servidor de Base de Dados | 1                       | 1                      | No mínimo 1, mas pode ser necessário mais para redundância |
| Servidor de Cache         | 0                       | 1                      | 1 por cada redundância                                     |
| Balanceador de carga      | 0                       | 0                      | 1                                                          |

Assumindo que cada serviço é executado numa única máquina, que máquina custa exatamente o mesmo, independentemente da sua função e que o seu custo mensal é 100€/máquina, chegamos à seguinte conclusão:
- Arquitetura tradicional: 2 máquinas => 200€/mês
- Arquitetura com cache: 3 máquinas => 300€/mês
- Arquitetura com balanceamento de carga: 1 balanceador de carga + 1 servidor de base de dados + 2 máquinas por redundância, assumindo que existem 2 => 600€

E estes custos crescem mediante o crescimento do número de máquinas e é importante não esquecer do capital humano que é preciso incluir. Será necessário tudo isto para manter um site?

### Aprender olhando para trás
A solução que construída foi-se tornando cada vez mais complexa, mas há uma conclusão tirada na arquitetura com cache que não foi suficientemente explorada. Concluiu-se que na maioria dos pedidos, a resposta da base de dados é igual à que já foi entregue. Se a resposta da base de dados é igual significa que o que vai ser entregue ao cliente também vai ser igual. Então por que motivo estamos sempre a computar os mesmos dados? Sempre a executar as mesmas operações sobre os mesmos dados para obter exatamente a mesma resposta. Será que não é possível guardar uma dessas respostas geradas e entregar para o cliente? Assim tínhamos o melhor dos dois mundos: por um lado não tínhamos de escrever cada um dos ficheiros individualmente e por outro não necessitávamos de estar sempre a computar os mesmos dados. A verdade é que a resposta está no JAMStack.

### A proposta do JAMStack
JAM de JAMStack significa: **J**avaScript, **A**PIs e **M**arkup. E basicamente isto descreve a abordagem a que me referia há pouco. Ficheiros HTML, CSS e JavaScript estáticos que são servidos aos clientes. E apesar de ser necessário um servidor na mesma, este tem uma carga de trabalho muito mais reduzida pois não tem de consultar base de dados, renderizar páginas, etc… que permite aumentar o número de pedidos respondidos que cada máquina consegue comportar.

<div align="center">
    {{<figure src="/images/jamstack-novo-paradigma-desenvolvimento-web/3.jpg">}}
</div>

Começar um projeto usando a filosofia JAMStack é bastante simples com ajuda de ferramentas como HUGO ou o Gatsby entre muitos outros. [Neste artigo]({{< relref "/article/criar-site-hugo" >}}) abordo o uso do HUGO para a criação de sites estáticos.

### Content Delivery Network
Vamos pensar agora que queremos criar uma rede de alta redundância para este site. Pelo facto destes servidores serem muito mais baratos quando comparados com os servidores tradicionais (refiro-me ao custo por request), criar uma grande rede para a distribuição destes sites estáticos torna-se muito barato. E é com base nisso que algumas empresas, como a Netlify, disponibiliza o serviço gratuito bastante generoso e suficiente para comportar sites de tamanho médio. Plataformas como esta são chamadas de Content Delivery Network ou simplesmente CDN e servem exclusivamente para alojar ficheiros estáticos para sere usados em sites, como por exemplo, scripts JS, ficheiros CSS e conteúdo media dos sites. Este meio de partilha era a estratégia usada antes para a distribuição de componentes estáticos e normalmente mais pesados em servidores mais próximos dos clientes e assim diminuir o tempo que a página demora a carregar. CDNs como estas podem ter milhares de nós por todo o mudo.

<div align="center">
    {{<figure src="/images/jamstack-novo-paradigma-desenvolvimento-web/4.jpg">}}
</div>

### Site estático, mas nem tanto
Neste momento pode surgir uma questão: trocar o meu site atual por um estático não vai diminuir as minhas possibilidades e aumentar o meu trabalho para o manter? Não, e a justificação para isso está no **A** de JAMStack: APIs. Por todo o mundo, os programadores têm adotado arquiteturas de micro serviços. Em vez de escrever uma aplicação gigantesca com todas as funcionalidades necessárias, são desenvolvidas pequenas aplicações, mais simples, cada uma responsável apenas por uma parte muito especifica do sistema e todas estas aplicações comunicam por APIs. No caso do site é exatamente a mesma coisa. O site ou app, tirando partido do JavaScript vai consumir APIs e mediante a resposta dessas APIs modelam o conteúdo apresentado ao utilizador. E daqui temos duas grades opções:
1.	Disponibilizar na CDN a app que vai consumir uma API alojada diretamente da nossa infraestrutura própria.
2.	Manter o conteúdo todo na CDN e usar uma máquina própria que vai atualizar o conteúdo da CDN periodicamente.

<div align="center">
    {{<figure src="/images/jamstack-novo-paradigma-desenvolvimento-web/5.jpg">}}
</div>

Esta terá de ser uma decisão da própria equipa que terá de avaliar os prós e contras. Mesmo que se opte pela primeira alternativa, a carga provocada nos servidores próprios já não será tão alta pois não existe a necessidade de renderizar as páginas HTML. Além disso nada impede que haja uma solução híbrida. Voltando ao exemplo do site de notícias, as publicações seriam guardadas estaticamente na CDN, mas a área do utilizador, onde este gere a sua subscrição da newsletter usaria uma API que comunica diretamente com os servidores da empresa Assim reduzimos a carga da infraestrutura original sem ter de renunciar a tudo que já tinha sido feito. É tudo uma questão de analise sobre qual é a melhor maneira de aproveitar os recursos disponíveis.

### JAMStack não é só para sites ou apps grandes
Despois de todo este tempo é fácil cairmos na falacia que este Stack apenas serve para sites grandes com milhares de acessos diários, mas não é bem assim. Vamos então considerar um novo caso: disponibilizar portfolio pessoal online. As opções seriam:
1.	Contratar um serviço de hosting partilhado
2.	Contratar um serviço de Virtual Private Server (VPS)
3.	Criar um servidor pessoal aproveitando hardware que já possuía ou comprando novo
4.	Utilizar uma CDN para disponibilizar o site estaticamente

Vamos analisar individualmente. No primeiro caso temos um custo mensal a rondar os 3€/mês. Temos espaço de armazenamento e largura de banda bastante limitados ainda para mais é disponibilizado serviços que podem não ser necessários. Além de tudo isto a performance neste tipo de serviço costuma ser a pior porque o servidor está a ser partilhado com outros clientes.

Na opção 2, temos uma VPS que nada mais é do que uma máquina virtual no datacenter do provedor. Deixamos de ter de partilhar o servidor com outros e normalmente os limites de recursos são mais altos. Mas neste caso teremos de configurar todo o ambiente para disponibilizar o site e garantir que não vão existir falhas de segurança. Além disso o servidor tem de receber manutenção (atualizações, auditorias de segurança, etc…) que envolve um conhecimento técnico que muitas veses o utilizador não tem. As VPS mais em conta rondam os 5€/mês.

Na terceira opção temos todos os aspetos de manter o servidor que tinhamos na opção 2, mas neste caso ainda temos de manter a máquina física e cobrir o consumo energético da mesma. Ainda exige que a máquina esteja ligada 24/7 e com uma boa ligação à internet para não causar indisponibilidade do serviço. Normalmente o hardware usado nestes ambientes não é destinado a uso em servidores e isso também pode comprometer a disponibilidade do site. De todas as opções é a que tem o pior custo/beneficio. O gasto mensal vai variar consoante a máquina usada e o plano de internet.

Por fim temos a opção de alojar o site numa CDN. No caso da Netlify o plano gratuito já é bastante completo mas ainda podemos optar por um plano pago.


### JAMStack não é bala de prata
Não existe nada que seja solução para todos os problemas! Em todos os casos devem ser avaliados os benefícios da adoção de uma tecnologia e poderá haver situações que JAMStack não será a melhor escolha a fazer, e está tudo bem com isso. No final do dia o que importa é que o utilizador esteja satisfeito com o que lhe é entregue para que continue a usufruir do serviço.

Por hoje fico por aqui, até uma próxima  
Abraço

Fontes:  
>   [JAMStack](https://jamstack.org/)  
>   [Netlify](https://www.netlify.com/jamstack/)