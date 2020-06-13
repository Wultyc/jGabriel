---
title: "Deploy website para netlify"
date: 2020-06-05T23:10:07Z
images: ["articles/netlify.jpg"] # The image resolution should be 900x500 or a proportional resolution
categories: ["How to"]
tags: ["Netlify", "JAMStack", "HUGO"]
authors: ["Jorge Gabriel Azevedo"]
sources: []
draft: false
---
Netlify é uma plataforma para a disponibilização de sites estáticos que se tem vindo a popularizar pela sua CDN pública para disponibilização de sites e conteúdos estáticos.<!--more-->
A plataforma da Netlify, de um modo muito simplista, é uma Content Delivery Network (CDN) alojada na AWS. Por ser um serviço sem grande esforço computacional a Netlify oferece um plano gratuito bastante interessant. Em conjunto com as suas ferramentas e plugins extras, tornou-se um serviço bastante interessante para indivíduos e empresas que pretendem publicar um site ou app baseado no JAM Stack.

### Criação do conteúdo
Neste artigo não vamos aprofundar muito sobre a criação de um site estático para publicar na plataforma da Netlify. [Neste artigo]({{< relref "/article/criar-site-hugo" >}}) explico em detalhe o procedimento de construir um website com o gerador de sites estáticos HUGO.

### Preparação inicial
Primeiro que tudo é necessário ter o projeto do site num repositório git local. Este procedimento é descrito no artigo que mencionei anteriormente. Depois devemos fazer push do conteúdo local para um repositório remoto no Github, GitLab ou Bitbucket. Isto é importante porque é daqui que o Netlify vai puxar as atualizações para fazer deploy automático das novas versões do site.  
Sim, é possível fazer um procedimento manual, fazendo o upload de um zip com o site, mas esse procedimento é ordens de grandeza menos eficiente. Por isso vamos seguir com a abordagem recomendada que é usando o repositório git. No meu caso vou usar o a minha própria conta do Github e vou fazer deploy do site exemplo que montei aqui.  
O site que vamos fazer deploy é o seguinte.

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/0.png">}}
</div>

Como podem ver, o endereço é o da minha máquina virtual de desenvolvimento.

### Criação da conta
Primeiro acedemos ao site do Netlify, [www.netlify.com](https://www.netlify.com) e criamos uma conta. Para este caso a conta gratuita serve, mas para sites com um volume de tráfego maior, pode ser necessário um plano pago. Criada a conta e a equipa, vamos começar a criação do site. Primeiro carregamos no botão “New site from git”.

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/1.png">}}
</div>

Neste momento é apresentada uma breve explicação do motivo pelo qual é sugerido o git e são dadas a três opções de serviços suportados: Github, GitLab e Bitbucket. Eu vou escolher Github, mas a decisão é de quem vai publicar o site onde pretende alojar o código.

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/1-1.png">}}
</div>

De seguida aparece uma nova janela para fazer login no Github.

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/2.png">}}
</div>

Depois de fazer login, vão aparecer alguns passos de configuração de privacidade. No meu caso eu optei por apenas mostrar o repositório do qual pretendo fazer deploy

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/3.png">}}
</div>

Depois de selecionado o repositório, vai aparecer uma página com a equipa, a branch do repositório que pretendemos associar, e algumas definições de build. As opções de build eu deixo em branco porque na raiz do meu repositório eu criei um ficheiro ```netlify.toml``` com todas estas informações.
```toml
[build]
publish = "public"
command = "hugo --gc --minify"

[context.production.environment]
HUGO_VERSION = "0.69.2"
HUGO_ENV = "production"
HUGO_ENABLEGITINFO = "true"

[context.split1]
command = "hugo --gc --minify --enableGitInfo"

[context.split1.environment]
HUGO_VERSION = "0.69.2"
HUGO_ENV = "production"

[context.deploy-preview]
command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"

[context.deploy-preview.environment]
HUGO_VERSION = "0.69.2"

[context.branch-deploy]
command = "hugo --gc --minify -b $DEPLOY_PRIME_URL"

[context.branch-deploy.environment]
HUGO_VERSION = "0.69.2"

[context.next.environment]
HUGO_ENABLEGITINFO = "true"
```

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/4.png">}}
</div>

Depois disto o deploy do site vai começar de imediato. Podemos ver na secção “Production deploys” que o deploy já começou.

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/4-1.png">}}
</div>

Não deverá demorar muito até aparecer uma mensagem a verde “Published” no lugar do “Enqueued”. Neste momento podemos ver que nos foi atribuído um URL aleatório, mas mais à frente vamos mudar-lo.

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/5.png">}}
</div>

Carregando em “Production deploys” temos uma lista dos deploys que já foram feitos. Se carregarmos em algum em específico é possível ver os logs desse deploy. Isto é principalmente útil quando ocorre algum erro para se poder fazer debug.  
Voltando à página onde estávamos, vamos seguir o guia que no é apresentado. Se carregarmos no “2” vamos ser levado para uma página para definir um domínio próprio. Neste caso eu não tenho nenhum e quero manter o domínio da netlify, mas simplesmente alterar “sleepy-galileo-b616f9” para “deploy-netlify-example”. Para isso carregamos no botão “Domain Settings”. Na nova página que se abre carregamos no notão “Options” do nosso subdomínio netlify e em seguida “Edit site name”

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/6.png">}}
</div>

Inserimos o URL que queremos e gravamos
> Atenção que caso o subdomínio não esteja disponível, não vai ser possível avançar.

Voltando para a homepage já podemos ver o nosso subdomínio definido. 

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/7.png">}}
</div>

Carregando nele somos levados para o nosso site publicado. Como podem ver o URL na barra de endereço é aquele que definimos nos passos anteriores.

<div align="center">
    {{<figure src="/images/articles/deploy-website-netlify/8.png">}}
</div>

Caso queiramos atualizar alguma coisa no site basta atualizar na versão local, fazer push para o repositório remoto que o netlify vai fazer o deploy da nova versão automaticamente.

Por hoje fico por aqui, até uma próxima  
Abraço
