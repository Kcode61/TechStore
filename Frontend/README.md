# TechStore Frontend

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Demo](https://img.shields.io/badge/Status-Demo%2FEstudo-4CAF50?style=for-the-badge)

Este é o frontend do projeto TechStore, a parte visual da loja fictícia. Desenvolvido com Next.js, React e TypeScript, ele foi pensado para entregar uma experiência moderna, fluida e organizada, com foco em apresentar um catálogo de produtos, autenticação de usuários, troca de dados com a API e navegação clara entre as principais telas da aplicação.

A interface foi construída para deixar a experiência de compra e navegação parecida com o que se vê em lojas online reais, mas mantendo o caráter educacional do projeto. A ideia central é demonstrar como uma aplicação web moderna consegue consumir dados da API, organizar componentes reutilizáveis e oferecer uma boa experiência para quem acessa a plataforma.

> ⚠️ Este frontend é apenas uma simulação de loja. Ele não aceita pagamentos reais, não integra processamento financeiro e não possui cobrança ou transações financeiras de verdade. Qualquer checkout ou valor mostrado na tela é fictício e foi criado exclusivamente para estudos e demonstração.

## ✅ Funcionalidades visíveis

| Área     | Descrição                                                                      |
| -------- | ------------------------------------------------------------------------------ |
| Home     | Página inicial com apresentação da marca, destaques e chamada para os produtos |
| Produtos | Visualização do catálogo e detalhes de cada item                               |
| Login    | Área de autenticação para usuários                                             |
| Cadastro | Registro de novos clientes                                                     |
| Perfil   | Espaço para informações do usuário                                             |
| Carrinho | Listagem e gerenciamento dos itens selecionados                                |
| Admin    | Estrutura para painel e gestão do sistema                                      |

## 📁 Estrutura principal

| Pasta         | Descrição                                     |
| ------------- | --------------------------------------------- |
| `app/`        | Páginas e rotas da aplicação                  |
| `components/` | Componentes reutilizáveis                     |
| `public/`     | Arquivos estáticos e assets                   |
| `Services/`   | Comunicação com a API do backend              |
| `types/`      | Definições TypeScript para dados e estruturas |

## 🧩 Tecnologias utilizadas

| Tecnologia   | Uso                                    |
| ------------ | -------------------------------------- |
| Next.js 16   | Framework principal da aplicação       |
| React 19     | Construção da interface e renderização |
| TypeScript   | Tipagem estática do projeto            |
| Tailwind CSS | Estilização moderna e responsiva       |
| Lucide React | Ícones de interface                    |
| Biome        | Formatação e validação do código       |

## ▶️ Como executar

Dentro da pasta do frontend, rode:

```bash
npm install
npm run dev
```

Depois, abra o navegador em:

```text
http://localhost:3000
```

## 📡 Integração com o backend

A aplicação consumes a API do backend por meio de arquivos de serviço e tipagens organizadas em diretórios específicos. Isso ajuda a manter o código limpo, facilita a manutenção e deixa a comunicação entre interface e dados bem clara. Em outras palavras, o frontend não fica preso a regras internas do banco ou da lógica do backend; ele apenas usa os dados que a API disponibiliza.

## 🎯 Objetivo da interface

A proposta do frontend é demonstrar como uma loja online pode ser organizada em uma aplicação moderna. Ele não se limita apenas a mostrar páginas estáticas; a ideia é criar uma navegação funcional, apresentar dados em telas bem distribuídas e mostrar como a experiência do usuário pode ser melhorada com organização, componentes reutilizáveis e integração com uma API.

Essa parte do projeto é extremamente útil para estudar desenvolvimento de interfaces, boas práticas de componentização e como estruturar uma experiência de usuário em aplicações reais.

## 🧠 Por que esse frontend é importante

Mesmo sendo uma interface de demonstração, ela ajuda a entender como projetos full stack se comunicam na prática. O usuário interage com a loja, o frontend envia e recebe dados da API, o backend interpreta as requisições e a aplicação inteira parece funcionar como um sistema real, mesmo sendo um projeto educacional.

## 📝 Resumo curto

O frontend do TechStore é a camada visual da loja: uma aplicação em Next.js com páginas de catálogo, autenticação, carrinho e perfil. Ele simula uma loja online em ambiente acadêmico, sem pagamentos reais e com foco em aprendizado de front end e integração com API.
