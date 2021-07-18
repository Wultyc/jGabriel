---
title: "Use Outlook account on Android with Microsoft Exchange"
date: 2020-05-09T23:07:36Z
image: "articles/microsoft-exchange.png" # The image resolution should be 900x500 or a proportional resolution
categories: ["How to"]
#tags: []
authors: ["Jorge Gabriel Azevedo"]
sources: []
home: true
draft: false
---
Setting up an Outlook.com service account on android with the Microsoft Exchange protocol has numerous advantages and is not that difficult to set up.

## A little of history
The first time I had contact with an email service was with the old Microsoft hotmail. I have never used this account very intensively. However, when I purchased my first smartphone, I made a complete migration to the google suite to be able to make better use of cloud services to synchronize email, calendar and contacts. It was fantastic. I've been using the Google suite for a long time. When I started attending the degree at ISEP, I was assigned an Office 365 account and I started to explore the platform's features. I ended up creating an account on now Outlook.com to explore on a more personal level. Inevitably one of my requirements was to synchronize my mailbox, calendar and contacts. For that, I had to use the Microsoft Exchange protocol. With my Office 365 account it was very easy, but with my free Outlook.com account I couldn't always get it. It all got worse with the implementation of oAuth 2 in the Gmail app, because Microsoft uses different authentication servers for different types of accounts and Gmail couldn't handle it. I tried to change my * workflow * a little using the google account to synchronize the calendar and contacts and Outlook to email via IMAP. I even considered going back to Google Suite permanently, but I really liked Microsoft's solution and wanted to do a complete migration.

## Android, Outlook.com and Exchange
The Gmail app for Android has direct access to email accounts stored on the system. This makes it very easy to add an email account to the system and read emails in the Gmail app as there is already a pre-selection of settings for the most popular email services. However, Outlook.com's option is quite limited by using the IMAP service instead of Exchange. Perhaps it is a purposeful option because an uninformed user would end up migrating to Google Suite in order to have easy access to their data in the cloud. Nothing says that, but I prefer the Microsoft service. To use Microsoft Exchange I would have to use an Office365 account and when I tried to authenticate myself with my Outlook.com account I always got an error. Until one day I thought: will I be able to “cheat” the Android account feature by manually configuring an Otlook.com account with the Microsoft Exchange protocol.

## Setting up Android
The process is quite simple. First we will have to start the process of creating a new account. This can be done in the system settings or in the Gmail app as I did.

![](/images/articles/ms_exchange-on-android/01.jpg)

We select the option to add an account, and then we choose the option “Exchange and Office 365”

![](/images/articles/ms_exchange-on-android/02.jpg)

We enter the email, but instead of pressing the “Next” button, we select the option “Manually configure”. If we click on “Next”, we will receive the error of not being an Office365 account and the suggestion to use the option “Outlook, Hotmail and Live” that uses the IMAP protocol.
In manual settings, we will fill in with our account data. We fill in the email field, with the email of the account we want to synchronize as well as the password field. In the “Domain \ Username” field, the email is again. The server and port are as follows:

```
Servidor: smtp.office365.com
Porta: 443
Tipo de segurança: SSL/TLS
```

![](/images/articles/ms_exchange-on-android/03.jpg)

It is still curious that the server is Office365.
We click on “Next” and the process should proceed without too much trouble. 

![](/images/articles/ms_exchange-on-android/04.jpg)

In the end the account will be registered on the device and we can verify that it is synchronizing email, contacts and calendar.

![](/images/articles/ms_exchange-on-android/05.jpg)

## Concluding
This procedure is not the most immediate nor does it use the oAuth2 protocol for authentication, but it is a very easy way to integrate an Outlook.com account with native email, calendar and contacts apps.

That's all for today.
See you next time.