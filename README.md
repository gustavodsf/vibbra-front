#### Stack Utilizada

A stack escolhida para o desenvolvimento foi o `react` , juntamente com `typescript`, para a criação do projeto foi utilizado `create react app`.

> Instanando dependências

```sh
npm run install
```

> Rodando em modo desenvolvimento

```sh
npm run start
```

#### Endereço da aplicação

A aplicação está hospedada no [heroku](https://vibbra-app.herokuapp.com/), para o deploys ser automatizado no no mesmo, em vez de fazer uso do gitlab fornecido pela Vibbra, fiz uso do meu github foi facilita a integração, sendo assim, o endereço do código é o este [gustavodsf/vibbra-front](https://github.com/gustavodsf/vibbra-front)

#### Estrutua de diretórios

```shell
  .
  ├── src/
  │   ├── assets/  # componente estáticos que não necessitam ficar públicos.
  │   ├── components/  # componentes que são reutilizados pela aplicação.
  │   ├── pages/   # páginas da aplicação que agregam vários componentes
  │   ├── styles/  # diretório que contém os estilização da aplicação
  │   ├── App.tsx  # componente base da aplicação
  │   └── index.tsx # arquivo prinpial que é chamado pelo servidor e adicionado o componente App
  ├── public/   # diretório que contém arquivos, que devem ser executados no build e serem públicos
  ├── README.md # arquivo descrevendo o projeto
  └── Procfile  # arquivo utilizado pelo heroku, para deploy da applicaçãp
```

#### Escopo

Seguem abaixo, o itens que foram exigidos a confecção para o desafio da `vibbra, foi inforamdo que tinha de fazer os tópicos de 1 até 5.

##### Tela de configuração

Usuário deve criar um aplicativo, para que possa fazer a integração com seu sistema, informando:

- Nome de identificação do aplicativo
- Canais desejados de integração `(Web Push, E-mail, SMS)`
- Posteriormente, o usuário deve fazer configurações adicionais por canal

##### Tela de setup Web Push

Usuário deve informar os seguintes dados para configurar o Web Push
Dados básicos

- Nome do site que irá enviar a notificação
- Endereço do site que irá enviar a notificação
- Imagem do ícone do site

Configuração da notificação de permissão, permitindo personalizar a mensagem de notificação web

- Texto da mensagem
- Texto do botão Permitir
- Texto do botão Negar

Configuração da notificação de boas vindas, permitindo personalizar a mensagem da notificação web
-Título da notificação
-Texto da mensagem
-Habilitar / Desabilitar link de destino, ao clicar na notificação
-Endereço do link de destino

##### Tela de setup de e-mail

Usuário deve informar os seguintes dados para configurar o Email
Dados técnicos do servidor

-Nome do Servidor SMTP
-Porta de envio
-Login
-Senha

Dados de envio

-Nome do remetente
-Email do remetente

Submissão de templates

-Usuário é permitido submeter templates de e-mail, subindo um ou vários arquivos com extensão .html, sendo cada arquivo considerado um template

##### Tela setup SMS

Usuário deve informar os seguintes dados para configurar o envio de SMS

-Provedor de SMS integrado
-Login
-Senha
