---
title: "Connect MariaDB server on Homestead on Host computer"
date: 2020-05-23T20:10:13Z
image: "articles/mariadb.png" # The image resolution should be 900x500 or a proportional resolution
categories: ["How to"]
#tags: ["MariaDB","Homestead","conexão remota","DBeaver",]
authors: ["Jorge Gabriel Azevedo"]
sources: []
home: true
draft: false
---
During software development it is often necessary to test how information is being stored in the database, and this becomes a little more complicated when the database management system is not installed locally.
Not allowing remote access (even more so with the root user) is a strategy that database management systems (Database Management Systems - DBMS) use to increase your security. However, if the application using that DBMS is in development, access to the DBMS with users with higher permissions may be required. This is particularly difficult if the server is on a remote system, such as a virtual machine as is the case for those using Homestead to develop.
So let's look at the procedure to get around this difficulty.
>This procedure was developed based on Homestead, but can be followed in other scenarios with minimal changes.

### Allow remote access
>First of all, something very important: Never do this in a production system. This is for development purposes only. If you need to do this on a production system, I highly recommend reviewing your safety procedures!
Allowing remote access varies from system to system. You should check your system documentation to find out what to do. In the case of Homestead it is not necessary to do anything as this is already activated by default.

### Configure the client
The client that will be used to consult the database is the choice of each programmer or team. In my case I will use DBeaver.
We created a new MariaDB connection and filled it out with the server information, which for Homestead are
```
Host: 192.168.10.10
Port: 3306
User: homestead
Password: secret
```
![](/images/articles/mariadb-homestead/01.png)

The database is an optional field. We tested the connection and the result should be as follows.

![](/images/articles/mariadb-homestead/02.png)

Finally click on "Finish" and the connection will be added to the list of recorded connections.

![](/images/articles/mariadb-homestead/03.png)

We can now do all the necessary operations.

That's all for today, see you next time.
