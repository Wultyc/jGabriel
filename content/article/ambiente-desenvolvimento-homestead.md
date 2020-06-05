---
title: "Ambiente Desenvolvimento Homestead"
date: 2020-05-03T12:02:26Z
images: ["laravel.png"]
categories: ["How to", "Artigo Pessoal"]
tags: []
authors: ["Jorge Gabriel Azevedo"]
sources: []
draft: false
---
Não é segredo nenhum que eu tenho uma preferência clara pelo desenvolvimento web, em especial com PHP e Laravel.
<!--more-->
Sendo a maioria dos backend web desenvolvidos em PHP alojados em servidores Linux, a equipa do Laravel disponibiliza uma solução muito interessante para criar um ambiente de desenvolvimentos Laravel em minutos: o Homestead!  
O Homestead é uma máquina virtual construída usando o Vagrant. Esta máquina virtual executa uma versão do Ubuntu Server pré-carregada com a maioria das ferramentas necessárias para desenvolver um projeto web: PHP, Composer, Node.JS, NPM, MySQL e muitas outas. Além disso ainda é possível parametrizar a ativação ou não de outras ferramentas como o Docker e Python ou MariaDB para quem prefira este DBMS no lugar do MySQL.

### Instalação do Homestead
Primeiro que tudo é necessário ter instalado um *hypervisor* (no meu caso é virtualbox), o vagrant e o git.  
Em seguida clonamos o repositório do Homestead, e criamos um ficheiro ```Homestead.yaml``` com base no exemplo existente.
```bash
$ git clone https://github.com/laravel/homestead.git ~/Homestead
$ cd ~/Homestead
$ cp Homestead.yaml.example Homestead.yaml
```
O conteúdo deste ficheiro que criamos será semelhante ao seguinte.
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
Aqui é possível configurar todos os parâmetros do ambiente. Eu recomendo que consulte a [documentação oficial] para ficar a par de todas as possibilidades.
Além de modificar este ficheiro, eu ainda customizo o ficheiro ```after.sh```. Neste ficheiro faço configurações não suportadas por padrão pelo Homestead, mas porque por baixo dos panos é uma máquina virtual com Ubuntu, podemos expandir as suas funcionalidades.  
Atualmente a única modificação que eu faço é a instalação do HUGO para manter os meus sites estáticos. Confirme este artigo para saber mais sobre o HUGO [neste artigo]({{< relref "/article/criar-site-hugo" >}}) aqui neste site.

### Algumas considerações sobre o Homestead
O Homestead é um ambiente de desenvolvimento e devemos ter isso em atenção no momento de o utilizar. Ele deve poder ser descartado sem que a sua aplicação seja afetada por isso. Inclusivamente, a atualização da VM depende da destruição da antiga e criação de uma nova com a imagem da versão e as configurações. Sim é possível utilizar esta VM para servir as aplicações, mas por não ter sido configurada para o efeito, poderá comprometer a segurança da aplicação.  
Os meus conselhos para o uso desta ferramenta são:
* Instalar a versão mais atualizada
* No YAML fazer o share de um único diretório 
* Criar os projetos dentro desse mesmo diretório
* Apontar os virtual *hosts* para os projetos nesse diretório (quando aplicável)
* Caso seja necessária alguma funcionalidade que não seja entregue por padrão, usar o ficheiro ```after.sh``` para implementar essa funcionalidade. Caso contrário usar as opções no ficheiro YAML.

Por hoje é tudo.  
Um abraço.
