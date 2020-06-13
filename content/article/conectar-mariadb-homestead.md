---
title: "Conectar Servidor MariaDB instalado no Homestead a partir do Host"
date: 2020-05-23T20:10:13Z
images: ["articles/mariadb.png"] # The image resolution should be 900x500 or a proportional resolution
categories: ["How to"]
tags: ["MariaDB","Homestead","conexão remota","DBeaver",]
authors: ["Jorge Gabriel Azevedo"]
sources: []
draft: false
---
Durante o desenvolvimento de software é necessário muitas vezes testar o modo como a informação está a ser guardada na base de dados, e isso torna-se um pouco mais complicado quando o sistema de gestão de base de dados não está instalado localmente.
<!--more-->
Não permitir o acesso remoto (ainda para mais com o utilizador root) é uma estratégia que os sistemas de gestão de base de dados (Database Management Systems - DBMS) usam para aumentar a sua segurança. No entanto se a aplicação que usa esse DBMS estiver em desenvolvimento pode ser necessário o acesso o acesso com ao DBMS com utilizadores de permissões mais elevadas. Isto é particularmente difícil caso o servidor esteja num sistema remoto, como por exemplo uma máquina virtual como é o caso de quem usa o Homestead para desenvolver.  
Vamos então ver o procedimento para contornar esta dificuldade.
>Este procedimento foi desenvolvido com base no Homestead, mas poderá ser seguido em outros cenários com mínimas alterações.

### Permitir o acesso remoto
>Primeiro que tudo algo muito importante: Nunca faça isto num sistema de produção. Isto é apenas para fins de desenvolvimento. Se precisa de fazer isto num sistema de produção eu recomendo vivamente rever os seus procedimentos de segurança!
Permitir o acesso remoto varia de sistema para sistema. Devem conferir a documentação do sistema para descobrir o procedimento a seguir. No caso do Homestead não é necessário fazer nada pois isto já vem ativado por padrão.

### Configurar o cliente
O cliente que vai ser usado para consultar a base de dados é da escolha de cada programador ou equipa. No meu caso vou usar o DBeaver.  
Criamos uma nova conexão MariaDB e preenchemos com as informações do servidor, que para o Homestead são
```
Host: 192.168.10.10
Port: 3306
User: homestead
Password: secret
```
<div align="center">
    {{<figure src="/images/articles/mariadb-homestead/01.png">}}
</div>

A base de dados é um campo opcional. Testamos a conexão e o resultado deverá ser o seguinte. 

<div align="center">
    {{<figure src="/images/articles/mariadb-homestead/02.png">}}
</div>

Por fim clicamos em "Finish" e a conexão vai ser acrescentada à lista de conexões gravadas.

<div align="center">
    {{<figure src="/images/articles/mariadb-homestead/03.png">}}
</div>

Já podemos fazer todas as operações que forem necessárias.  

Por hoje é tudo, vemo-nos numa próxima.  
Abraço.
