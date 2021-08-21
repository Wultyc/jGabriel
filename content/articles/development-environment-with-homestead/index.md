---
title: "Development environment with Homestead"
date: 2020-05-03T12:02:26Z
image: "articles/laravel.png"
categories: ["How to"]
#tags: []
authors: ["Jorge Gabriel Azevedo"]
sources: []
home: true
draft: false
---
It is no secret that I have a clear preference for web development, especially with PHP and Laravel. Since most of the web backend developed in PHP is hosted on Linux servers, the Laravel team provides a very interesting solution to create a Laravel development environment in minutes: Homestead!
Homestead is a virtual machine built using Vagrant. This virtual machine runs a preloaded version of Ubuntu Server with most of the tools needed to develop a web project: PHP, Composer, Node.JS, NPM, MySQL and many other things. In addition, it is still possible to parameterize the activation or not of other tools such as Docker and Python or MariaDB for those who prefer this DBMS instead of MySQL.

### Installing Homestead
First of all it is necessary to have installed a *hypervisor* (in my case it is virtualbox), vagrant and git.
We then cloned the Homestead repository, and created a ```Homestead.yaml``` file based on the existing example.
```bash
$ git clone https://github.com/laravel/homestead.git ~ / Homestead
$ cd ~ / Homestead
$ cp Homestead.yaml.example Homestead.yaml
```
The file content we create will be similar to the following.
```yaml
---
ip: "192.168.10.10"
memory: 2048
cpus: 2
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: ~/code
      to: /home/vagrant/code

sites:
    - map: homestead.test
      to: /home/vagrant/code/public

databases:
    - homestead

features:
    - mariadb: false
    - ohmyzsh: false
    - webdriver: false

# ports:
#     - send: 50000
#       to: 5000
#     - send: 7777
#       to: 777
#       protocol: udp
```
Here it is possible to configure all the parameters of the environment. I recommend that you consult the [official documentation] to be aware of all the possibilities.
In addition to modifying this file, I still customize the `` `after.sh``` file. In this file I make configurations that are not supported by Homestead by default, but because underneath is a virtual machine with Ubuntu, we can expand its functionality.
Currently the only modification I make is installing HUGO to keep my sites static. Confirm this article to learn more about HUGO [in this article]("/articles/create-a-website-with-hugo") here on this site.

### Some considerations about Homestead
Homestead is a development environment and we must bear this in mind when using it. It must be able to be discarded without its application being affected by it. Even updating the VM depends on destroying the old one and creating a new one with the version image and settings. Yes, it is possible to use this VM to serve the applications, but because it has not been configured for this purpose, it may compromise the security of the application.
My advice for using this tool is:
* Install the most updated version
* In YAML share a single directory
* Create the projects within that same directory
* Point the virtual * hosts * to the projects in that directory (when applicable)
* If some functionality is required that is not delivered by default, use the ```after.sh``` file to implement that functionality. Otherwise, use the options in the YAML file.

That's all for today.
A hug.