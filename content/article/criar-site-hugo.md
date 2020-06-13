---
title: "Criar um site com o Hugo"
date: 2020-04-30T22:30:30Z
images: ["articles/configurar-hugo/00.jpg"]
categories: ["How to"]
tags: ["JAMStack", "HUGO","Go Hugo","gohugo.io","criação de sites","site estático"]
authors: ["Jorge Gabriel Azevedo"]
sources: ["https://gohugo.io/","https://github.com/puresyntax71/hugo-theme-chunky-poster"]
draft: false
---
O HUGO é um framework que possibilita a criação de sites estáticos sem a necessidade de um profundo conhecimento sobre HTML, JavaScript ou CSS.
<!--more-->
É uma alternativa a outras plataformas populares como o Wordpress e uma das suas grandes vantagens é não precisar de uma infraestrutura de back-end muito complexa, o que possibilita um site feito com o HUGO ser alojado em plataformas como o Netlify. Isto é possível porque a estrutura do site é feita em HTML, CSS e JS e o conteúdo é armazenado no formato de ficheiros [MarkDown](https://pt.wikipedia.org/wiki/Markdown). Esta linguagem é muito utilizada por pessoas ligadas ao desenvolvimento de software para criar os seus ficheiros de documentação dos seus projetos devido à sua sintaxe simples e intuitiva.

### Preparação do ambiente local
Para criar um site com o HUGO, o mais aconselhado é ter o HUGO instalado na máquina local. Existem algumas maneiras de utilizar um projeto pré-criado, mas eu optei por instalar o HUGO na minha VM de desenvolvimento. Esta VM esta a executar o Ubuntu 18.04 e por isso eu instalei o pacote via snap.
```bash
$ sudo snap install hugo --channel=extended
```
Eu instalo a versão extended para ter algumas funcionalidades extras.
O processo de instalação para Windows ou MacOS está disponível (aqui)[ https://gohugo.io/getting-started/installing/]. 
Após este passo já estamos prontos para criar o site.

### Criar um projeto
Para criar um projeto com o HUGO basta abrir o terminal e executar o seguinte comando
```bash
$ hugo new site
```
A mensagem no terminal deverá ser semelhante à seguinte.
{{< figure src="/images/articles/configurar-hugo/01.jpg" >}}
Para ver o site, podemos utilizar o servidor embutido que o HUGO carrega consigo. Para isso basta executar o seguinte comando na pasta raiz do projeto.
```bash
$ hugo server --bind "0.0.0.0"
```
No meu caso, como estou a executar o HUGO dentro de uma VM, necessito utilizar o argumento *–bind* com o valor *“0.0.0.0”* para poder aceder ao site pela minha máquina física. O resultado deverá ser algo similar ao da seguinte imagem.
{{< figure src="/images/articles/configurar-hugo/02.jpg" >}}
Tratando-se ainda de um projeto vazio, não é de espantar que o resultado seja uma página em branco.

### Instalação do tema
Definir o aspeto do site é uma tarefa muito importante. É possível criarmos o nosso próprio tema, mas neste caso vamos utilizar um disponibilizado pela comunidade. Para isso o primeiro passo é criar um repositório GIT para o nosso projeto. Na raiz do projeto executamos o comando
```bash
$ git init
```
A inicialização do repositório GIT é necessária porque a maioria dos temas para o HUGO é disponibilizado via GIT e desta forma podemos adicionar o repositório do tema como um submódulo do repositório do projeto e assim ir recebendo as atualizações que o responsável pelo tema vai disponibilizando.  
Existem vários locais para obter temas para o HUGO, mas neste caso vamos diretamente ao site oficial do HUGO (http://gohugo.io) e abrimos a página “Themes”.
Para este projeto escolhemos o tema [Chunky Poster](https://themes.gohugo.io/hugo-theme-chunky-poster/). Abrindo a página do GitHub temos acesso ao código fonte do tema e algumas informações de como instalar o tema. Estas informações devem ser sempre analisadas pois cada tema tem o seu modo de instalação.  
Na raiz do projeto, executamos o seguinte comando:
```bash
$ git submodule add https://github.com/puresyntax71/hugo-theme-chunky-poster.git themes/hugo-theme-chunky-poster
```
Isto vai clonar o repositório do tema dentro da pasta ```themes/hugo-theme-chunky-poster``` e adicioná-lo como um submódulo do nosso repositório. 
> Apesar de mantermos uma cópia local do tema, devemos evitar modificar os ficheiros dentro desta pasta. Essas modificações irão dificultar o futuro processo de atualização do tema. Fazer customizações do tema será abordado mais à fente.
Para finalizar o processo copiamos alguns ficheiros do tema para a nossa pasta raiz.
```bash
//copia a configuração do site
$ cp themes/hugo-theme-chunky-poster/exampleSite/config.toml ./config.toml
//copia os conteúdos exemplo do site
$ cp -r themes/hugo-theme-chunky-poster/exampleSite/content/* ./content/
//copia alguns ficheiros de imagem
$ cp -r themes/hugo-theme-chunky-poster/exampleSite/static/* ./static/
```
Finalizado este processo, re-inciando o servidor e acedendo ao site o resultado será o seguinte.
{{< figure src="/images/articles/configurar-hugo/03.jpg" >}}

### Personalizando o site
Chegada a esta fase o céu é o limite. Tudo pode ser modificado e vamos ver a seguir alguns exemplos.
Primeiro, no ficheiro ```config.toml``` e vamos adicionar o seguinte código na secção ```[menu]``` logo a seguir a entrada da Home
```toml
  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    url = "/post/"
    weight = 10
```
Recarregando a página vemos que apareceu uma nova entrada ```Posts``` no menu de navegação. Se não surgir nenhuma alteração, reiniciem o servidor.
> O ficheiro ```config.toml``` deve ser mais explorado e as suas definições modificadas consoante a vontade de quem esta a fazer o site

Vamos agora mudar um pouco o layout da homepage tirando os posts que estão a aparecer. Como referi acima, não devemos modificar os ficheiros originais do tema, mas podemos sim criar a nossa cópia desses ficheiros. O HUGO disponibiliza vários recursos que permitem a sobreposição de ficheiros dos temas. Deste modo, criando uma cópia nossa do ficheiro original do tema podemos modificar à vontade o layout sem prejudicar futuras atualizações.
Para usar o recurso de sobreposição, devemos criar uma cópia do ficheiro original dentro da pasta análoga àquela onde o ficheiro reside no tema. Neste caso queremos modificar o próprio ficheiro ```index.html```. Para isso copiamos o ficheiro original para o nosso projeto.
```bash
$ cp themes/hugo-theme-chunky-poster/layouts/index.html ./layouts/
```
Agora vamos apagar a lista dos posts que aparece. Para isso apagar o código HTML referente e o resultado deverá ser o seguinte.

```html
{{ define "main" }}
<main class="homepage container py-6">
    <!-- Hero -->
    <div class="hero row">
        <div class="col position-relative py-lg-7{{ if not .Site.Params.homepageImage }} py-7{{ else }} pb-5{{ end }}">
            {{- with .Site.Params.homepageImage -}}
                <div class="homepage-image">
                    <img src="{{ . | relURL }}" class="img-fluid">
                </div>
            {{- end -}}

            <h1 class="display-4">{{ .Site.Title }}</h1>
            {{- with .Site.Params.description -}}
                <h3 class="font-weight-normal">{{ . | safeHTML }}</h3>
            {{- end -}}
        </div>
    </div>
</main>
{{ end }}
```

Recarregando a página o resultado será o da homepage sem a lista de posts.  
Ficamos com a homepage muito mais limpa. Voltando à lista de post, observamos que não existe paginação. Isto significa que nunca irá aparecer o seletor no fundo da página para mostrar mais posts e caso tenhamos 1000 posts vão ser todos apresentados de uma só vez. Para alterar isto, vamos modificar a lista de posts e para isso vamos copiar os ficheiros de layout de post e list
```bash
$ cp -r themes/hugo-theme-chunky-poster/layouts/post ./layouts/
$ cp themes/hugo-theme-chunky-poster/layouts/_default/list.html ./layouts/_default
```
No ficheiro ```list.html```, onde temos ```{{ range .Pages }}``` vamos adicionar ```{{ .Paginator}}``` imediatamente antes ```.Page``` e após esta ```div``` adicionamos ```{{ template "_internal/pagination.html" . }}```.
Na primeira alteração indicamos que deve ser apenas apresentado o número de elementos que definimos no parâmetro ```paginate``` no ficheiro ```config.toml```. A segunda alteração servirá para apresentar o seletor da página.
```html
{{ define "main" }}
<main class="list container py-6">
    {{- if or .Title .Content -}}
    <div class="row py-3">
        <div class="col">
            {{ with .Title }}<h3 class="display-4">{{ . }}</h3>{{ end }}

            {{- with .Content -}}
            <div class="content">
                {{ . }}
            </div>
            {{- end -}}
        </div>
    </div>
    {{- end -}}

    <div class="row row-cols-1 row-cols-lg-3">
        {{ range .Paginator.Pages }}
            <div class="col mb-3">
                {{ .Render "card" }}
            </div>
        {{ end }}
    </div>
    {{ template "_internal/pagination.html" . }}
</main>
{{ end }}
```

### Criando secções
Vamos supor que neste site queremos manter dois tipos de diferentes de conteúdo: Noticias e projetos. A melhor maneira é criar uma secção diferente para cada tipo de conteúdo. Vamos começar por copiar o ficheiro de template de post para o nosso projeto e depois criar uma cópia desse mesmo ficheiro com o nome project.

```bash
$ cp themes/hugo-theme-chunky-poster/archetypes/post.md ./archetypes/
$ cp archetypes/post.md archetypes/project.md
```

Estes ficheiros que acabamos de copiar são os ficheiros que vamos usar como base para as nossas publicações, são os modelos. Para este exemplo não seria necessário copiar o ficheiro ```post```, mas eu gosto de o copiar na mesma. Assim fico com todos os modelos na mesma pasta.
De seguida vamos replicar as pastas ```content/post``` e ```layouts/post```

```bash
$ cp -r content/post content/project
$ cp -r layouts/post layouts/project
```

No ficheiro ```config.toml``` adicionamos uma nova entrada para project
```toml
  [[menu.main]]
    identifier = "projects"
    name = "Projects"
    url = "/project/"
    weight = 10
```
E por fim na alteramos o ficheiro ``` content/project/_index.md```

```markdown
+++
aliases = ["projects","articles","blog","showcase","docs"]
title = "Projects"
author = "Hugo Authors"
tags = ["index"]
+++
```

Se reiniciarmos o servidor e clicar-mos “Projects” vai ser apresentada a lista de projetos.
> O conteúdo apresentado é exatamente o mesmo que existe em Posts, porque nos copiamos a pasta ```content/post``` para ```content/project```. Alterando o conteúdo em ```content/project``` esta página será atualizada com esse mesmo conteúdo.

### Inserindo conteúdo
Para criar um post basta executar o seguinte comando na raiz do projeto
```bash
$ hugo new post/my-new-post.md
```
E será criado um ficheiro ```my-new-post.md``` dentro de ```content/post```. Para criar um projeto, basta mudar “post” por “project”.

### Publicando o site
Para ver o procedimento para publicar o site basta seguir os passos que apresento [neste artigo]({{< relref "/article/deploy-website-netlify" >}}).

### Conclusão
O HUGO é uma plataforma excecional para construir um site estático, abstraindo muito daquilo que é a parte do HTML/CSS/JS deixando apenas ao utilizador a necessidade de trabalhar com ficheiros markdown.
Este artigo serviu apenas para demostrar um pouco daquilo que o HUGO é capaz, mas em https://gohugo.io/documentation/ têm acesso a todas as funcionalidade que a plataforma oferece.

Num artigo futuro irei demostrar como fazer deploy de um site feito com o HUGO para o Netlify.
