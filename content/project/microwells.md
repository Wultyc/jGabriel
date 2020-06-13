---
title: "Microwells"
date: 2019-01-14
images: ["projects/microwells.png"] # The image resolution should be 900x500 or a proportional resolution
categories: ["Projeto Académico", "Licenciatura"]
tags: ["Licenciatura", "3º Ano 1º Semestre", "Laboratórios de Sistemas 2", "Java", "PHP", "Laravel", "MariaDB", "Arduino"]
authors: ["Jorge Gabriel Azevedo"]
repo: "https://github.com/Wultyc/ISEP_1819_3A1S_LSIS2"
docs: "https://docs.jgabriel.eu/docs/projetos-academicos/licenciatura/microwells/"
draft: true
---
<!--more-->
O projeto Microwells foi um projeto desenvolvido durante o primeiro semestre do terceiro ano da licenciatura na unidade curricular de Laboratórios de Sistemas 2. Consistia num aparelho capaz de comunicar com vários medidores de sinais vitais e enviar essa informação para um serviço de armazenamento online.

Durante o projeto foram construídos os seguintes elementos:
- Medidor de pulso cardíco: implementação do circuito de medição e tratamento do sinal analogico em par com um microcontrolador (arduino) para comunicação dos dados via usb.
- Microwells Box: interface de comunicação entre o medidor e o serviço cloud.
- Microwells Cloud: Serviço de armazenamento de registos online.

Para mais detalhes, visitem a [documentação](.docs) do projeto e o repositório no [Github](.repo).