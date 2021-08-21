---
title: "Deploy website on netlify"
date: 2020-06-05T23:10:07Z
image: "articles/netlify.jpg" # The image resolution should be 900x500 or a proportional resolution
categories: ["How to"]
#tags: ["Netlify", "JAMStack", "HUGO"]
authors: ["Jorge Gabriel Azevedo"]
sources: []
home: true
draft: false
---
Netlify is a platform for the provision of static websites that has been popularized by its public CDN for the provision of websites and static content.
Netlify's platform, in a very simplistic way, is a Content Delivery Network (CDN) hosted on AWS. As it is a service without great computational effort, Netlify offers a very interesting free plan. Together with its extra tools and plugins, it has become a very interesting service for individuals and companies looking to publish a website or app based on the JAM Stack.

### Content creation
In this article we will not go into much depth about creating a static website to publish on the Netlify platform. [In this article](/articles/create-a-website-with-hugo) I explain in detail the procedure of building a website with the HUGO static site generator.

### Initial preparation
First of all, it is necessary to have the site project in a local git repository. This procedure is described in the article I mentioned earlier. Then we must push the local content to a remote repository on Github, GitLab or Bitbucket. This is important because this is where Netlify will pull updates to automatically deploy new versions of the site.
Yes, it is possible to do a manual procedure, uploading a zip with the site, but this procedure is orders of magnitude less efficient. So let's move on to the recommended approach using the git repository. In my case I will use my own Github account and I will deploy the example site I set up here.
The site that we are going to deploy is the following.
![](/images/articles/deploy-website-netlify/0.png)


As you can see, the address is that of my development virtual machine.

### Account creation
First, we go to the Netlify website, [www.netlify.com](https://www.netlify.com) and create an account. In this case the free account will do, but for sites with a higher volume of traffic, a paid plan may be necessary. Having created the account and the team, let's start creating the site. First we click on the “New site from git” button.

![](/images/articles/deploy-website-netlify/1.png)

A brief explanation of why git is suggested is now presented and three options for supported services are given: Github, GitLab and Bitbucket. I will choose Github, but the decision is up to who will publish the site where they intend to host the code.

![](/images/articles/deploy-website-netlify/1-1.png)

Then a new window appears to log in to Github.

![](/images/articles/deploy-website-netlify/2.png)

After logging in, some privacy configuration steps will appear. In my case I chose to only show the repository from which I intend to deploy

![](/images/articles/deploy-website-netlify/3.png)

After selecting the repository, a page will appear with the team, the branch of the repository we want to associate, and some build definitions. The build options I leave blank because at the root of my repository I created a file ```netlify.toml``` with all this information.

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

![](/images/articles/deploy-website-netlify/4.png)

After that the deployment of the site will start immediately. We can see in the “Production deploys” section that the deployment has already started.

![](/images/articles/deploy-website-netlify/4-1.png)

It shouldn't be long before a green “Published” message appears instead of “Enqueued”. At this point we can see that we have been assigned a random URL, but later on we will change it.

![](/images/articles/deploy-website-netlify/5.png)

Clicking on “Production deploys” we have a list of the deploys that have already been made. If we click on a specific one it is possible to see the logs of that deploy. This is especially useful when there is an error to debug.
Returning to the page where we were, we will follow the guide that is not presented. If we press “2” we will be taken to a page to define our own domain. In this case I have none and I want to keep the domain of netlify, but simply change “sleepy-galileo-b616f9” to “deploy-netlify-example”. To do this, click on the “Domain Settings” button. On the new page that opens, click on the “Options” button of our netlify subdomain and then “Edit site name”

![](/images/articles/deploy-website-netlify/6.png)

We insert the URL we want and record
> Note that if the subdomain is not available, it will not be possible to proceed.

Returning to the homepage we can already see our subdomain defined.

![](/images/articles/deploy-website-netlify/7.png)

By clicking on it, we are taken to our published website. As you can see the URL in the address bar is the one we defined in the previous steps.

![](/images/articles/deploy-website-netlify/8.png)

In case we want to update something on the site, just update the local version, push to the remote repository and netlify will automatically deploy the new version.

For today I'll stop here, see you next time
