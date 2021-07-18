---
title: "Create a website with Hugo"
date: 2020-04-30T22:30:30Z
image: "articles/configurar-hugo/00.jpg"
categories: ["How to"]
#tags: ["JAMStack", "HUGO","Go Hugo","gohugo.io","criação de sites","site estático"]
authors: ["Jorge Gabriel Azevedo"]
sources: ["https://gohugo.io/","https://github.com/puresyntax71/hugo-theme-chunky-poster"]
home: true
draft: false
---
HUGO is a framework that allows the creation of static websites without the need for a deep knowledge of HTML, JavaScript or CSS.
It is an alternative to other popular platforms like Wordpress and one of its great advantages is that it does not need a very complex back-end infrastructure, which allows a website made with HUGO to be hosted on platforms such as Netlify. This is possible because the site structure is made in HTML, CSS and JS and the content is stored in the [MarkDown](https://wikipedia.org/wiki/Markdown) file format. This language is widely used by people linked to software development to create their project documentation files due to its simple and intuitive syntax.

### Preparation of the local environment
To create a website with HUGO, it is most advisable to have HUGO installed on the local machine. There are a few ways to use a pre-created project, but I chose to install HUGO on my development VM. This VM is running Ubuntu 18.04 and so I installed the package via snap.
```bash
$ sudo snap install hugo --channel=extended
```
I install the extended version to have some extra functionality.
The installation process for Windows or MacOS is available (here)[https://gohugo.io/getting-started/installing/].
After this step we are ready to create the website.

### Create a project
To create a project with HUGO just open the terminal and execute the following command
```bash
$ hugo new site
```
The message on the terminal should look similar to the following.

![](/images/articles/configurar-hugo/01.jpg)

To view the site, we can use the embedded server that HUGO carries with it. To do this, just run the following command in the project's root folder.
```bash
$ hugo server --bind "0.0.0.0"
```
In my case, as I am running HUGO inside a VM, I need to use the argument *–bind* with the value *“0.0.0.0”* to be able to access the site through my physical machine. The result should be something similar to the one in the following image.

![](/images/articles/configurar-hugo/02.jpg)

As it is still an empty project, it is not surprising that the result is a blank page.

### Theme installation
Defining the look of the website is a very important task. It is possible to create our own theme, but in this case we will use one made available by the community. For this the first step is to create a GIT repository for our project. At the root of the project we execute the command
```bash
$ git init
```
The initialization of the GIT repository is necessary because most of the themes for HUGO are made available via GIT and in this way we can add the theme repository as a sub-module of the project repository and thus receive the updates that the person responsible for the theme will make available.
There are several places to get themes for HUGO, but in this case we go directly to the official HUGO website (http://gohugo.io) and open the “Themes” page.
For this project we chose the theme [Chunky Poster](https://themes.gohugo.io/hugo-theme-chunky-poster/). Opening the GitHub page we have access to the theme's source code and some information on how to install the theme. This information should always be analyzed because each theme has its own way of installation.
At the root of the project, we execute the following command:
```bash
$ git submodule add https://github.com/puresyntax71/hugo-theme-chunky-poster.git themes/hugo-theme-chunky-poster
```
This will clone the theme repository into the folder `` themes / hugo-theme-chunky-poster``` and add it as a sub-module of our repository.
>Although we keep a local copy of the theme, we must avoid modifying the files inside this folder. These changes will hinder the future process of updating the theme. Making customizations to the theme will be discussed more ahead.
To finish the process we copy some files of the theme to our root folder.
```bash
// copy the site configuration
$ cp themes/hugo-theme-chunky-poster/exampleSite/config.toml ./config.toml
//copies the example contents of the site
$ cp -r themes/hugo-theme-chunky-poster/exampleSite/content/* ./content/
//copy some image files
$ cp -r themes/hugo-theme-chunky-poster/exampleSite/static/* ./static/
```
After this process is over, restarting the server and accessing the website, the result will be as follows.

![](/images/articles/configurar-hugo/03.jpg)

### Customizing the site
At this stage, the sky is the limit. Everything can be modified and we will see some examples below.
First, in the file ```config.toml``` and we will add the following code in the section ```[menu]``` after the Home entry
```toml
  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    url = "/post/"
    weight = 10
```
Reloading the page we see that a new entry ```Posts``` appeared in the navigation menu. If no changes occur, restart the server.
> The file ```config.toml``` should be further explored and its settings modified according to the wishes of those who are making the site

Now let's change the layout of the homepage a little bit by removing the posts that are appearing. As I mentioned above, we should not modify the original files of the theme, but we can create our copy of those files. HUGO offers several resources that allow the overlapping of theme files. In this way, by creating a copy of our original theme file, we can modify the layout at will without jeopardizing future updates.
To use the overlay feature, we must create a copy of the original file within the folder analogous to the one where the file resides in the theme. In this case we want to modify the ```index.html``` file itself. For that we copy the original file for our project.
```bash
$ cp themes/hugo-theme-chunky-poster/layouts/index.html ./layouts/
```
Now let's delete the list of posts that appears. To do this, delete the relevant HTML code and the result should be as follows.

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

Reloading the page will result in the homepage without the list of posts.
We get the homepage much cleaner. Going back to the post list, we noticed that there is no pagination. This means that the selector will never appear at the bottom of the page to show more posts and if we have 1000 posts they will all be presented at once. To change this, we will modify the list of posts and for that we will copy the post and list layout files
```bash
$ cp -r themes/hugo-theme-chunky-poster/layouts/post ./layouts/
$ cp themes/hugo-theme-chunky-poster/layouts/_default/list.html ./layouts/_default
```
In the file ```list.html```, where we have ```{{range .Pages}}``` we will add ```{{. .Paginator}}``` immediately before ```.Page```and after this ```div``` we add ```{{template" _internal / pagination.html ". }}```.
In the first change we indicate that only the number of elements that we define in the parameter ```paginate``` in the file ```config.toml``` should be presented. The second change will serve to display the page selector.

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

### Creating sections
Let's assume that on this site we want to keep two different types of content: News and projects. The best way is to create a different section for each type of content. Let's start by copying the post template file for our project and then create a copy of that same file with the name project.

```bash
$ cp themes/hugo-theme-chunky-poster/archetypes/post.md ./archetypes/
$ cp archetypes/post.md archetypes/project.md
```

These files that we just copied are the files that we will use as the basis for our publications, they are the models. For this example it would not be necessary to copy the file ```post```, but I like to copy it anyway. So I keep all the models in the same folder.
Next, we will replicate the ```content/post``` and ```layouts/post``` folders.

```bash
$ cp -r content/post content/project
$ cp -r layouts/post layouts/project
```

In the file ```config.toml``` we add a new entry for project
```toml
  [[menu.main]]
    identifier = "projects"
    name = "Projects"
    url = "/project/"
    weight = 10
```
And finally we changed the file ```content/project/_index.md```

```markdown
+++
aliases = ["projects","articles","blog","showcase","docs"]
title = "Projects"
author = "Hugo Authors"
tags = ["index"]
+++
```

If we restart the server and click on “Projects” the list of projects will be displayed.
> The content presented is exactly the same as that which exists in Posts, because we copy the folder ```content/post``` to ```content/project```. Changing the content in ```content/project``` this page will be updated with that same content.

### Inserting content
To create a post just run the following command at the root of the project
```bash
$ hugo new post/my-new-post.md
```
And a file ```my-new-post.md``` will be created inside the ```content/post```. To create a project, just change “post” to “project”.

### Publishing the site
To see the procedure for publishing the site, just follow the steps I present [in this article](/articles/deploy-website-netlify).

### Conclusion
HUGO is an exceptional platform to build a static website, abstracting much of what is part of HTML / CSS / JS leaving only the user with the need to work with markdown files.
This article only served to demonstrate a little of what HUGO is capable of, but at https://gohugo.io/documentation/ you have access to all the functionality that the platform offers.

In a future article I will demonstrate how to deploy a website made with HUGO to Netlify.
