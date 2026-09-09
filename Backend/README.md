# TechStore API

![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.1.1-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Demo](https://img.shields.io/badge/Status-Demo%2FEstudo-4CAF50?style=for-the-badge)

Esta é a camada de backend do projeto TechStore, responsável por fornecer a API que sustenta a loja fictícia. Desenvolvida em Java com Spring Boot, essa parte do sistema centraliza regras de negócio, autenticação, armazenamento de dados e lógica de acesso. A ideia é criar uma base sólida para que o frontend possa consumir informações e apresentar uma experiência de e-commerce de maneira organizada e funcional.

A API foi pensada como uma estrutura prática para estudo de desenvolvimento back end, com foco em autenticação, segmentação de usuários, persistência e controle de fluxo de compra simulado. Ela não é um sistema real de vendas, e também não aceita pagamentos reais. Tudo aqui é demonstrativo e foi montado para aprendizado de arquitetura e integração de software.

> ⚠️ Este backend não processa pagamentos reais, não integra gateways financeiros e não realiza cobrança ou transações de valor em produção. Qualquer compra ou checkout descrito no sistema é apenas simulado para fins educacionais.

## ✅ Funcionalidades principais

| Módulo       | Descrição                                                   |
| ------------ | ----------------------------------------------------------- |
| Autenticação | Registro, login e proteção de rotas com autenticação segura |
| Usuários     | Cadastro e gerenciamento de perfis e contas                 |
| Produtos     | Cadastro, consulta e organização do catálogo                |
| Carrinho     | Adição, remoção e cálculo de itens do carrinho              |
| Segurança    | Configuração de regras de acesso e endpoints protegidos     |
| Persistência | Integração com PostgreSQL por meio do JPA                   |

## 🧱 Estrutura principal

| Caminho                                               | Função                                     |
| ----------------------------------------------------- | ------------------------------------------ |
| `src/main/java/kauan/projetcts/TechStore/Controllers` | Endpoints da API                           |
| `src/main/java/kauan/projetcts/TechStore/Domain`      | Entidades, DTOs e modelos do domínio       |
| `src/main/java/kauan/projetcts/TechStore/Security`    | Configuração de autenticação e autorização |
| `src/main/java/kauan/projetcts/TechStore/Services`    | Lógica de negócio                          |
| `src/main/resources/application.properties`           | Configurações da aplicação                 |

## 🔧 Tecnologias e bibliotecas

| Tecnologia      | Uso                              |
| --------------- | -------------------------------- |
| Java 17         | Linguagem principal              |
| Spring Boot 4   | Framework principal da API       |
| Spring Security | Proteção de rotas e autenticação |
| Spring Data JPA | Persistência e acesso ao banco   |
| PostgreSQL      | Banco relacional                 |
| JWT             | Tokens de autenticação           |
| Lombok          | Redução de boilerplate           |
| Validation      | Validação de dados de entrada    |

## ▶️ Como rodar

No diretório do backend, execute:

```bash
./mvnw clean install
./mvnw spring-boot:run
```

Se o ambiente local estiver corretamente configurado com PostgreSQL, a aplicação pode ser iniciada normalmente e a API irá responder conforme a porta e host definidos no arquivo de configuração.

## 🧪 Ambiente e configuração

O arquivo principal de configuração está em:

```properties
src/main/resources/application.properties
```

Ali ficam as configurações do banco de dados, porta da aplicação e demais parâmetros utilizados para execução local. Esse tipo de organização é importante porque deixa o backend preparado para rodar com pequenas mudanças conforme o ambiente de desenvolvimento ou produção demonstrativa.

## 📌 Visão geral da API

O backend do TechStore funciona como a espinha dorsal da aplicação. Ele centraliza a lógica de negócio, valida regras, protege endpoints e mantém a consistência das informações do sistema. Esse papel é essencial porque toda a experiência da loja depende de dados organizados e acessados de forma segura.

A estrutura da API permite que o frontend consuma informações de produto, usuário e carrinho sem precisar conhecer os detalhes internos do banco ou das regras de negócio. Isso deixa a aplicação mais modular e facilita a manutenção em projetos maiores.

## 🎯 Por que esse backend importa

Mesmo sendo um projeto de estudo, ele demonstra práticas importantes de desenvolvimento back end, como:

- criação de endpoints REST
- modelagem de domínio
- autenticação com token
- validação de entradas
- manipulação de dados em banco relacional
- isolamento de regras de negócio em serviços

Esses conceitos são muito úteis para quem quer evoluir rumo a projetos mais robustos e escaláveis.

## 📝 Resumo curto

O TechStore API é a base do sistema: um backend em Java com Spring Boot, autenticação segura, banco PostgreSQL e lógica para usuários, produtos e carrinho. É uma aplicação educacional, voltada para aprendizado e demonstração, sem processamento de pagamentos reais.
