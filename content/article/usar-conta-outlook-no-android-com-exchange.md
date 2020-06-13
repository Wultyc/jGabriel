---
title: "Usar conta Outlook no Android com Microsoft Exchange"
date: 2020-05-09T23:07:36Z
images: ["articles/microsoft-exchange.png"] # The image resolution should be 900x500 or a proportional resolution
categories: ["How to"]
tags: []
authors: ["Jorge Gabriel Azevedo"]
sources: []
draft: false
---
Configurar uma conta do serviço Outlook.com no android com o protocolo Microsoft Exchange traz inúmeras vantagens e não é assim tão difícil de configurar.
<!--more-->

## Um pouco de história
A primeira vez que tive contacto com um serviço de email foi com o antigo hotmail da Microsoft. Nunca fiz um uso muito intensivo desta conta. Entretanto quando adquiri o meu primeiro smartphone fiz uma migração completa para a suite google para poder usufruir melhor dos serviços cloud para sincronizar email, calendário e contactos. Era fantástico. Fui usando a suite Google durante muito tempo. Quando comecei a frequentar a licenciatura no ISEP, foi-me atribuída uma conta do Office 365 e eu comecei a explorar as funcionalidades da plataforma. Acabei por criar uma conta no agora Outlook.com para explorar num âmbito mais pessoal. Inevitavelmente um dos meus requisitos era sincronizar a minha caixa de email, o calendário e os contactos. Para isso eu tinha de usar o protocolo Microsoft Exchange. Com a minha conta do Office 365 foi muito fácil, mas com o meu a conta gratuita do Outlook.com eu nem sempre conseguia. Tudo piorou com a implementação do oAuth 2 na app do Gmail, porque a Microsoft usa servidores de autenticação diferentes para os diferentes tipos de contas e o Gmail não conseguia lidar com isso. Tentei mudar um pouco o meu *workflow* usando a conta google para sincronizar o calendário e contactos e Outlook para o email via IMAP. Considerei inclusive em regressar em definitivo à Google Suite, mas eu gostava realmente da solução da Microsoft e queria fazer uma migração completa.

## O Android, o Outlook.com e o Exchange
A app do Gmail para Android consegue ter acesso direto às contas de email guardadas no sistema. Isso faz com que seja muito fácil adicionar uma conta de email no sistema e ler os emails na app do Gmail pois já existe uma pré-seleção de configurações para os serviços de email mais populares. No entanto a opção do Outlook.com é bastante limitada por usar o serviço IMAP em vez do Exchange. Talvez seja uma opção proposital pois um utilizador desinformado acabaria por migrar para a Google Suite para poder ter um acesso fácil aos seus dados na cloud. Nada conta isso, mas eu prefiro o serviço da Microsoft. Para usar o Microsoft Exchange teria de usar uma conta do Office365 e quando tentava autenticar-me com a minha conta Outlook.com obtida sempre um erro. Até que um dia eu pensei: será que eu não consigo “enganar” o recurso de contas do Android configurando manualmente uma conta Otlook.com com o protocolo Microsoft Exchange.

## Configurando o Android
O processo é até bastante simples. Primeiro vamos ter de inciar o processo de criação de uma nova conta. Isto pode ser feito nas definições do sistema ou na app do Gmail como eu fiz.
<div align="center">
    {{<figure src="/images/articles/ms_exchange-on-android/01.jpg" width="200">}}
</div>
Selecionamos a opção adicionar uma conta, e a seguir escolhemos a opção “Exchange e Office 365”
<div align="center">
    {{<figure src="/images/articles/ms_exchange-on-android/02.jpg" width="200">}}
</div>
Introduzimos o email, mas em vez de carregar no botão “Seguinte”, selecionamos a opção “Configurar Manualmente”. Se carregarmos em “Seguinte”, vamos receber o erro de não ser uma conta Office365 e a sugestão para usar a opção “Outlook, Hotmail e Live” que usa o protocolo IMAP.  
Nas configurações manuais, vamos preenchei com os dados da nossa conta. Preenchemos o campo email, com o email da conta que queremos sincronizar bem como o campo password. No campo “Domínio\Nome de Utilizador” é novamente o email. O servidor e porta são os seguintes:

```
Servidor: smtp.office365.com
Porta: 443
Tipo de segurança: SSL/TLS
```

<div align="center">
    {{<figure src="/images/articles/ms_exchange-on-android/03.jpg" width="200">}}
</div>

Não deixa de ser curioso que o servidor seja do Office365.  
Carregamos em “Seguinte” e o processo deve seguir sem demais problemas. 
<div align="center">
    {{<figure src="/images/articles/ms_exchange-on-android/04.jpg" width="200">}}
</div>

No final a conta estará registada no dispositivo e podemos verificar que esta a sincronizar email, contactos e calendário.
<div align="center">
    {{<figure src="/images/articles/ms_exchange-on-android/05.jpg" width="200">}}
</div>

## Concluindo
Este procedimento não é o mais imediato nem usa o protocolo oAuth2 para a autenticação, mas é um modo muito fácil de integrar uma conta Outlook.com com as apps nativas de email, calendário e contactos. 

Por hoje é tudo.  
Um abraço. Fiquem bem.