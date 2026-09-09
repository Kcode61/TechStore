# TechStore

![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.1.1-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Demo](https://img.shields.io/badge/Status-Demo%2FEstudo-4CAF50?style=for-the-badge)

TechStore é um projeto de e-commerce em desenvolvimento, pensado como uma loja digital fictícia, mas com estrutura e fluxo bem próximos de uma aplicação real. Ele nasceu como uma forma de unir frontend e backend em um mesmo repositório, permitindo criar uma experiência completa de compra em ambiente de estudo, com autenticação, catálogo de produtos, carrinho, perfil e organização por módulos.

A proposta do projeto é mostrar como uma loja online pode ser montada de forma prática, com uma API robusta no backend e uma interface moderna no frontend. Em vez de se concentrar apenas em estética, o objetivo é também demonstrar arquitetura, comunicação entre camadas, regras de negócio, persistência e segurança.

> ⚠️ Importante: este projeto não aceita pagamentos reais, não integra gateways financeiros e não processa transações em produção. Qualquer valor, checkout ou compra dentro do sistema é apenas fictício, feito exclusivamente para fins de aprendizagem, demonstração e estudo de arquitetura de software.

## ✅ O que está sendo construído

| Área         | Funcionalidade                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------- |
| Frontend     | Interface para visualizar produtos, fazer login, se cadastrar, acessar perfil e gerenciar carrinho |
| Backend      | API REST para autenticação, usuários, catálogo, produtos e carrinho                                |
| Segurança    | Proteção de endpoints e controle de acesso com autenticação moderna                                |
| Persistência | Armazenamento de dados com PostgreSQL e JPA                                                        |
| Admin        | Estrutura para painel e gestão do sistema                                                          |

## 🏗️ Estrutura do repositório

| Pasta        | Descrição                                                    |
| ------------ | ------------------------------------------------------------ |
| `Backend/`   | Aplicação Java com Spring Boot, regras de negócio e API REST |
| `Frontend/`  | Interface web em Next.js para consumir a API                 |
| `.gitignore` | Arquivos e pastas ignorados no versionamento                 |

## 🧰 Tecnologias principais

| Camada         | Tecnologias                                                   |
| -------------- | ------------------------------------------------------------- |
| Backend        | Java 17, Spring Boot 4, Spring Security, Spring Data JPA, JWT |
| Frontend       | Next.js 16, React 19, TypeScript, Tailwind CSS                |
| Banco de dados | PostgreSQL                                                    |
| Ferramentas    | Maven, npm, Biome                                             |

## 🚀 Como executar

### Backend

```bash
cd Backend
./mvnw spring-boot:run
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Depois disso, a interface costuma ficar disponível em `http://localhost:3000`, enquanto a API do backend fica configurada conforme o ambiente local e arquivo de propriedades do projeto.

## 🔐 Como o projeto funciona

O TechStore foi pensado para funcionar como uma loja digital de estudo, com duas camadas bem definidas. O backend fornece os dados e a lógica, enquanto o frontend apresenta essas informações de maneira organizada para o usuário. Essa separação é importante porque permite que a aplicação fique mais mantenível, fácil de expandir e mais próxima de um ambiente real de desenvolvimento web.

Dentro desse fluxo, o usuário pode navegar por produtos, selecionar itens, autenticar-se no sistema e visualizar um carrinho de compras. Apesar de a experiência parecer real, o objetivo principal continua sendo o aprendizado: entender como um sistema completo de e-commerce pode ser estruturado e consumido em camadas diferentes.

## 🎯 Objetivo do projeto

O TechStore foi criado para demonstrar como um sistema de loja online pode ser organizado em um monorepo, separando claramente frontend, backend e dados. Ele serve como base prática para quem quer estudar:

- APIs REST em Java
- autenticação com JWT
- controle de usuários e permissões
- persistência com banco relacional
- comunicação entre frontend e backend
- organização de rotas, páginas e componentes
- construção de uma aplicação full stack funcional

## 🧠 Por que ele é interessante

Além de mostrar a parte visual da loja, o projeto também tem foco em boas práticas de desenvolvimento. Ele ajuda a entender como uma aplicação real organiza responsabilidades, como proteger rotas, como manter dados consistentes e como transformar requisitos de negócio em código funcional. Em outras palavras, o TechStore não é apenas uma loja fictícia; ele é uma espécie de estudo prático de full stack aplicando conceitos importantes de desenvolvimento moderno.

## 📌 Resumo curto

TechStore é um projeto de e-commerce fictício em desenvolvimento, com frontend em Next.js e backend em Java/Spring Boot. Ele simula um fluxo completo de loja digital com autenticação, catálogo, carrinho e área administrativa, mas sem aceitar pagamentos reais e com foco exclusivo em estudo e demonstração técnica.
