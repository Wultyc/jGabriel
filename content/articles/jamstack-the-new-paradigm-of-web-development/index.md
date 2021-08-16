---
title: "JAMStack: the new paradigm of web development"
date: 2020-06-06T17:41:48Z
image: "articles/jamstack.jpg" # The image resolution should be 900x500 or a proportional resolution
categories: ["Conceito"]
#tags: ["JAMStack", "CDN", "Desenvolvimento Web", "Netlify", "HUGO", "Gatsby"]
authors: ["Jorge Gabriel Azevedo"]
sources: []
home: true
draft: false
---
JAMStack is a new approach to web development that allows scalable websites and webapps to be made available in a simpler and more effective way with considerable cost savings.
In the early days of the internet, the way to make a website available was essentially to write several HTML files, one for each page of the website. It was undoubtedly an inefficient process and, over time, solutions appeared to make this process more dynamic, from sharing common code to pages (e.g. styles) to generating HTML code dynamically. And to assist in this dynamism, databases were included to store data in a more organized way and the end result is what we see in the image below.

![](/images/articles/jamstack-novo-paradigma-desenvolvimento-web/0.jpg)

>In this diagram we use the term server, referring to the software that is being executed and not necessarily to physical or virtual machines.

In theory this system is ideal, but in the case of a website that has a lot of daily accesses (a news site for example), the database server can become a problem. Thousands of simultaneous accesses can cause the system to go down and consequently the site is unavailable. The solution could be to replace the current hardware with more powerful hardware. This action is called scaling the service vertically and is usually the most expensive method as it involves purchasing new, more expensive components without in most cases taking advantage of the previous components. But knowing from the outset that the database was most often serving exactly the same result, a more efficient solution would be to create a cache of the database response and update that cache periodically.

![](/images/articles/jamstack-novo-paradigma-desenvolvimento-web/1.jpg)

With the increase in the number of visits, the problem may be on the web server, the cache server or even both can no longer be able to handle this high number of daily visits. Again, scaling vertically is an option, but then another option arose, scaling horizontally. In this process, instead of acquiring new hardware to replace the old one, one acquires hardware (usually in the same range as the current one), the new hardware is used to share the work with existing machines. This is a more viable solution as the number of orders that can be processed will be the largest without the investment being so large. If necessary, just add more hardware in parallel to increase capacity. Usually in this approach, a new entity appears in the system, the load balancer which, as its name implies, will distribute the work among the existing machines.

![](/images/articles/jamstack-novo-paradigma-desenvolvimento-web/2.jpg)

At this stage, the problems may be several: having too many requests to the database, the load balancer reaching its limit, energy consumption, maintenance (physical and digital) of all this infrastructure, hiring qualified professionals to manage all these machines etc…

Let's do a cost comparison

| Máquina         | Traditional Architecture | Architecture with cache | Load balance Architecture                               |
|-----------------|--------------------------|-------------------------|---------------------------------------------------------|
| Web server      | 1                        | 1                       | One for each redundant unit                             |
| Database server | 1                        | 1                       | At least one but could be necessary more for redundancy |
| Cache server    | 0                        | 1                       | One for each redundant unit                             |
| Load balancer   | 0                        | 0                       | 1                                                       |



2016/5000
Assuming that each service is performed on a single machine, that machine costs exactly the same, regardless of its function and that its monthly cost is 100 € / machine, we arrive at the following conclusion:
- Traditional architecture: 2 machines => 200 € / month
- Architecture with cache: 3 machines => 300 € / month
- Load-balanced architecture: 1 load balancer + 1 database server + 2 machines for redundancy, assuming there are 2 => 600 €

And these costs increase with the increase in the number of machines and it is important not to forget the human capital that needs to be included. Is all this necessary to maintain a website?

### Learn looking back
The solution that was built became more and more complex, but there is a conclusion drawn in the architecture with cache that was not sufficiently explored. It was concluded that in most requests, the database response is the same as the one already delivered. If the response from the database is the same it means that what will be delivered to the customer will also be the same. So why are we always computing the same data? Always performing the same operations on the same data to get exactly the same answer. Is it not possible to save one of these generated responses and deliver them to the customer? So we had the best of both worlds: on the one hand we did not have to write each file individually and on the other hand we did not need to be always computing the same data. The truth is that the answer is in JAMStack.

### The JAMStack proposal
JAMStack JAM means: **J**avaScript, **A**PIs and **M**arkup. And this basically describes the approach I was referring to earlier. Static HTML, CSS and JavaScript files that are served to customers. And although a server is still needed, it has a much lower workload as it does not have to consult the database, render pages, etc ... which allows to increase the number of requests answered that each machine can handle.
Enviar feedback e opiniões
Histórico
Guardado
Comunidade


![](/images/articles/jamstack-novo-paradigma-desenvolvimento-web/3.jpg)

Starting a project using the JAMStack philosophy is quite simple with the help of tools like HUGO or Gatsby among many others. [In this article](/articles/create-a-website-with-hugo) I discuss the use of HUGO for the creation of static websites.

### Content Delivery Network
Let's think now that we want to create a high redundancy network for this site. Because these servers are much cheaper when compared to traditional servers (I mean the cost per request), creating a large network for the distribution of these static sites becomes very cheap. And it is based on this that some companies, such as Netlify, offer the free service quite generous and sufficient to support medium-sized sites. Platforms like this are called Content Delivery Network or simply CDN and serve exclusively to host static files to be used on websites, such as JS scripts, CSS files and media content on the websites. This means of sharing was the strategy used before for the distribution of static and normally heavier components on servers closer to the customers and thus reducing the time that the page takes to load. CDNs like these can have thousands of us all over the world.

![](/images/articles/jamstack-novo-paradigma-desenvolvimento-web/4.jpg)

### Static site, but not so much
At this point, a question may arise: will changing my current site for a static one not decrease my possibilities and increase my work to maintain it? No, and the justification for this is in the **A** of JAMStack: APIs. All over the world, programmers have adopted micro service architectures. Instead of writing a gigantic application with all the necessary functionalities, small, simpler applications are developed, each responsible for only a very specific part of the system and all of these applications communicate via APIs. In the case of the website, it is exactly the same thing. The website or app, taking advantage of JavaScript will consume APIs and upon the response of these APIs model the content presented to the user. And here we have two great options:
1. Make available on CDN the app that will consume an API hosted directly from our own infrastructure.
2. Keep the entire content on the CDN and use your own machine that will update the CDN content periodically.

![](/images/articles/jamstack-novo-paradigma-desenvolvimento-web/5.jpg)

This will have to be a decision of the team itself that will have to evaluate the pros and cons. Even if you choose the first alternative, the load on your own servers will no longer be as high as there is no need to render HTML pages. Furthermore, there is nothing to prevent a hybrid solution. Returning to the example of the news site, the publications would be stored statically at the CDN, but the user area, where he manages his subscription to the newsletter would use an API that communicates directly with the company's servers So we reduced the load of the original infrastructure without having to renounce everything that had already been done. It's all about analyzing how best to take advantage of available resources.

### JAMStack is not just for websites or large apps
After all this time it is easy to fall into the fallacy that this Stack only serves for large sites with thousands of daily accesses, but it is not so. So let's consider a new case: make personal portfolio available online. The options would be:
1. Hire a shared hosting service
2. Hire a Virtual Private Server (VPS) service
3. Create a personal server taking advantage of hardware you already owned or buying new
4. Use a CDN to make the site available statically

We will analyze individually. In the first case, we have a monthly cost of around € 3 / month. We have very limited storage space and bandwidth yet services are available that may not be needed. In addition to all this, the performance in this type of service is usually the worst because the server is being shared with other clients.

In option 2, we have a VPS that is nothing more than a virtual machine in the provider's datacenter. We no longer have to share the server with others and usually the resource limits are higher. But in this case we will have to configure the entire environment to make the site available and ensure that there are no security flaws. In addition, the server must receive maintenance (updates, security audits, etc.) that involves technical knowledge that the user often does not have. The most affordable VPS are around € 5 / month.

In the third option we have all the aspects of maintaining the server that we had in option 2, but in this case we still have to maintain the physical machine and cover its energy consumption. It still requires the machine to be connected 24/7 and with a good internet connection so as not to cause unavailability of the service. Usually the hardware used in these environments is not intended for use on servers and this can also compromise the availability of the website. Of all the options, it has the worst cost / benefit. Monthly spending will vary depending on the machine used and the internet plan.

Finally, we have the option of hosting the site on a CDN. In the case of Netlify the free plan is already quite complete but we can still opt for a paid plan.


### JAMStack is not a silver bullet
There is nothing that is a solution to all problems! In all cases the benefits of adopting a technology must be evaluated and there may be situations that JAMStack will not be the best choice to make, and that is fine with that. At the end of the day, what matters is that the user is satisfied with what is delivered to him so that he continues to enjoy the service.

For today I'll stay here, until a next
hug

Sources:
>   [JAMStack](https://jamstack.org/)  
>   [Netlify](https://www.netlify.com/jamstack/)