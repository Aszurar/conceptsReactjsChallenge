# #4 - React: **<https://todo-aszurar.netlify.app//>**

<div align="center">
    <img src="https://i.imgur.com/aFpVrUT.png" width="1000">
</div>

## to.do

- O projeto **to.do** é um projeto focado na aprendizagem e prática do uso do **[React](https://pt1.br.react.dev/)** em conjunto com **[Tailwind CSS](https://tailwindcss.com/)** para o desenvolvimento web. Para isso, criamos um aplicação de
lista de tarefas.
- O propósito aqui é praticar o conceito da **Context API em conjunto do useReducer** do React para **compartilhamento de dados e métodos**, além do uso de TailwindCSS e Radix UI para estilização.

- A acessibilidade foi levada em consideração, com o uso da lib **[axe-core](https://www.npmjs.com/package/@axe-core/react)** para testes e correções de acessibilidade assim como leitor de tela ChromeVox e o uso do **[Radix UI](https://www.radix-ui.com/)** para componentes acessíveis como Modais e Tooltips.
- O site foi publicado com CI/CD por meio da plataforma **[Netlify](https://www.netlify.com/)**.
- Acesse e teste o projeto em: **<https://todo-aszurar.netlify.app>**

  <div align="center">
    <h3><a href="https://todo-aszurar.netlify.app">to.do</a></h3>





    https://github.com/Aszurar/to.do/assets/64987824/01a1e77e-3950-4833-a2f0-d78f57bda8d2




  </div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/3b9ff421-260b-4411-966e-183baa6e739d/deploy-status)](https://app.netlify.com/sites/todo-aszurar/deploys)  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/) [![React](https://img.shields.io/badge/-React-%2320232a.svg?style=flat&logo=react&link=https://react.dev)](https://react.dev/)  [![Context-API](https://img.shields.io/badge/Context--Api-000000?style=flat&logo=react)](https://react.dev/learn/scaling-up-with-reducer-and-context)  [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white&link=https://tailwindcss.com/)](https://tailwindcss.com/) [![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=flat&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)  [![TypeScript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=?style=flat-square&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/-JavaScript-%23323330.svg?style=flat&logo=javascript&link=https://www.javascript.com/)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://developer.mozilla.org/pt-BR/docs/Web/HTML)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://www.w3schools.com/css/)](https://www.w3schools.com/css/) [![Yarn](https://img.shields.io/badge/-yarn-%232C8EBB?style=flat&logo=yarn&logoColor=white&link=https://yarnpkg.com/)](https://yarnpkg.com/) [![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white)](https://www.figma.com/)


</div>
 
<div align="center">
      <h2>
        <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
        <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
        <a href="#art-design">Design</a>&nbsp;|&nbsp;
        <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
        <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
        <a
        href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
        <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
      </h2>
</div>

---

<div align="center">
    <img src="https://i.imgur.com/JUTlzuT.gif" width="400">
</div>

<div align="center" >

**[Vídeo no Youtube](https://www.youtube.com/watch?v=JYvJrERvdV4)**

</div>

---

## :information_source: Sobre

- O projeto **to.do** é uma lista de tarefas simples, mas que foi abordado conceitos importantes para o desenvolvimento de interfaces com **tailwindcss** e React.
- Praticamos conceitos básicos como componentização, composição, responsividade, acessibilidade, CI/CD, entre outros assim como nos projetos anteriores como o [tododark](https://github.com/Aszurar/tododark/).
- Além disso, **abordarmos o uso do useReducer** e sua aplicação em conjunto com o **Context API** do React para o gerenciamento de estado da aplicação e separando a lógica em **actions** e **reducers**.
- Usamos bibliotecas que auxiliam na estilização com tailwindcss como **tailwind-variants** para criarmos variações dos componentes.
- Esse projeto foi reformulado e refeito com tecnologias atuais a partir de um projeto de desafio da trilha de 2021 de React da **[Rocketseat](https://www.rocketseat.com.br/)**. Assim, temos algumas adições e incrementos como a criação do **tema escuro** e a possibilidade de trocar entre eles, a **construção do design do projeto no Figma**, dentre outros que serão abordados a seguir.
- Usamos **[React](https://react.dev)** com **[TypeScript](https://www.typescriptlang.org/)** como principais tecnologias.
- A animação da listagem é feita com a lib **[AutoAnimate](https://auto-animate.formkit.com/)**.
  
  **Tela inicial**

<div align="center" >
      <img src="https://i.imgur.com/rkt4Jjc.png" width="1000" alt="Tela inicial">
      <img src="https://i.imgur.com/20MSuT6.png" width="1000">
</div>

---

## :interrobang: Motivo

- Esse projeto tem o objetivo ensinar e praticar o uso do **React em conjunto tailwindcss** assim como outras ferramentas que podem auxiliar no desenvolvimento com essa tecnologia.

### Funcionalidades novas em relação ao projeto original:  
  1. **Troca de temas** com **tailwindcss** respeitando o tema escolho no sistema operacional do usuário;
  2. Marcação de todas as tarefas como concluídas;
  3. Desmarcação de todas as tarefas como concluídas;
  4. Remoção de todas as tarefas concluídas;
  5. Construção do **protótipo completo no Figma** com as variações entre tema escuro e claro.
  6. **Animação** na listagem de tarefas com **AutoAnimate**;
  7. **Componentes acessíveis** com **Radix UI** e integração com **tailwindcss**;
  8. **Uso do useReducer** e **Context API** do React para o gerenciamento de estado da aplicação em conjunto com a divisão da lógica de **actions** e **reducers** para o gerenciamento de estado;
  9. Entender e praticar construção de interfaces com **tailwindcss** aplicando responsividade, breakpoints e variações de componentes com **tailwindcss-variants** e **tailwindcss**;
  10. **Acessibilidade** com **axe-core** e **ChromeVox**;
  11. **Publicação** com **CI/CD** por meio da plataforma **Netlify**.

### O que foi aprendido de novo?

  1. Uso do **useReducer** e **Context API** do React para o gerenciamento de estado da aplicação em conjunto com a divisão da lógica de **actions** e **reducers** para o gerenciamento de estado;
  2. Implementação da **troca de temas** com **tailwindcss** respeitando o tema escolho no sistema operacional do usuário;
  3. Construção do **protótipo completo no Figma** com as variações entre tema escuro e claro.

- **Campos preenchidos**

  <div align="center" >
      <img src="https://i.imgur.com/YNCL4G2.png" width="400">_<img src="https://i.imgur.com/Q0sWWZm.png" width="400">
      <img src="https://i.imgur.com/OJg74mE.png" width="400">_<img src="https://i.imgur.com/Kz9U7hJ.png" width="400">
  </div>

---

## :art: Design

- Apesar de ser um desafio da Rockeseat, o Design no Figma não foi cedido aos alunos.
- Assim, **recriei no Figma o design do projeto** com base no projeto original e com algumas adições e incrementos como a criação do tema escuro e a possibilidade de trocar entre eles.

<div align="center">
  <h3><a href="https://www.figma.com/file/yPeqs0tJEOnvdkkrr3dr26/to.do-%E2%80%A2-Desafio-React-%E2%9C%85?type=design&node-id=0-1&mode=design&t=GQdCHqO0rHD73Nft-0">to.do</a></h3>

  [![Design](https://i.imgur.com/UBNFr4w.png)](https://www.figma.com/file/yPeqs0tJEOnvdkkrr3dr26/to.do-%E2%80%A2-Desafio-React-%E2%9C%85?type=design&node-id=0-1&mode=design&t=GQdCHqO0rHD73Nft-0)
</div>

**Marcação de todas tarefas**

<div align="center" >
      <img src="https://i.imgur.com/D2cS4mv.png" width="1000">
      <img src="https://i.imgur.com/arMHYUu.png" width="1000">
</div>

---

## :seedling: Requisitos Mínimos

  1. NodeJS
  2. React
  3. Vite
  4. Yarn(ou NPM)
  
 **Remoção de todas tarefas**

<div align="center" >
      <img src="https://i.imgur.com/y1Mosmb.png" width="1000">
      <img src="https://i.imgur.com/lz1VBpU.png" width="1000">
</div>

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[axe-core/react](https://www.npmjs.com/package/@axe-core/react)**
  2. **[AutoAnimate](https://auto-animate.formkit.com/)**
  3. **[autoprefixer](https://www.npmjs.com/package/autoprefixer)**
  4. **[Date FNS](https://date-fns.org/)**
  5. **[JavaScript](https://developer.mozilla.org/pt1.BR/docs/Web/JavaScript)**
  6. **[Feather Icons](https://feathericons.com/)**
  7. **[Phosphor Icons](https://phosphoricons.com/)**
  8. **[Netlify](https://www.netlify.com/)**
  9. **[NodeJS](https://nodejs.org/en/)**
  10. **[Radix UI](https://www.radix-ui.com/)**
  11. **[React](https://pt1.br.react.dev/)**
  12. **[Sentry](https://sentry.io/welcome/)**
  13. **[TailwindCSS](https://tailwindcss.com/)**
  14. **[TailwindCSS Variants](https://www.tailwind-variants.org/)**
  15. **[TypeScript](https://www.typescriptlang.org/)**
  16. **[Vite](https://vitejs.dev/)**
  17. **[Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)**

**Responsividade**

<div align="center" >
      <img src="https://i.imgur.com/aDZUgHG.png" width="270">
      <img src="https://i.imgur.com/2z6UBlb.png" width="270">
      <img src="https://i.imgur.com/HgtKe0N.png" width="270">
</div>


---

## :truck: Entrega e distribuição continua

**<https://todo-aszurar.netlify.app///>**

- Para a publicação da aplicação foi por meio da plataforma **[Netlify](https://www.netlify.com/)** onde é possível publicar de forma rápida, fácil e simples projetos React que estão hospedados no GitHub, GitLab, dentre outras plataformas de repositório remoto de graça.
- Com isso, o CI/CD já é aplicado automaticamente por meio dessa plataforma definindo a branch de produção, sempre que houver uma atualização nela, será gerado uma nova versão do projeto e já publicado.
- Além disso, podemos customizar o próprio endereço do site, adicionar ferramentas dentre outras funcionalidades facilmente.

<div align="center">
   <img src="https://i.imgur.com/95151dy.png" width="1000" alt="">
</div>

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/to.do
  ```

- É necessário ter o Node.js e um gerenciador de pacotes, como o Yarn, instalados em seu sistema. Se você ainda não os tem, siga estas instruções:
  - [Instalação do NodeJS](https://nodejs.org/en/)
  - [Instalação do Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto

    ```bash
      yarn
    ```

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:

  ```bash
    yarn dev
  ```

---

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
