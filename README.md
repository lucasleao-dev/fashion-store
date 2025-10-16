# Fashion Store

**Projeto de estudo**: Loja de roupas online desenvolvida com **React**, **TypeScript** e **Vite**.  
O objetivo é praticar conceitos de React, componentes, gerenciamento de estado (carrinho de compras) e design responsivo.
<img width="1246" height="531" alt="storeApp" src="https://github.com/user-attachments/assets/ef1e14de-f313-434e-97bc-4048af11b766" />

---

## Tecnologias Utilizadas

- **React 18** – biblioteca para construção da interface
- **TypeScript** – tipagem estática e mais segurança no código
- **Vite** – bundler rápido para desenvolvimento
- **CSS3** – layout moderno com Grid e Flexbox
- **Git / GitHub** – versionamento de código
- Imagens de produtos e fundo armazenadas localmente em `public/`
- Fonte do Google Fonts: `'Poppins', sans-serif`

---

## Funcionalidades

- Lista de produtos com:
  - Imagem
  - Nome
  - Preço
- Carrinho de compras:
  - Adicionar itens
  - Remover itens
  - Atualizar quantidade
  - Limpar carrinho
- Layout responsivo
- Hover effects e sombras nos cards de produto
- Background estilizado com transparência para melhor leitura

---

## Estrutura do Projeto

react-store/
│
├─ public/
│ ├─ fundo.webp

│ └─ imagens dos produtos
│
├─ src/
│ ├─ App.tsx

│ ├─ main.tsx

│ └─ App.css
│
├─ package.json
└─ tsconfig.json

---

## Como Instalar

1. Clone o repositório:
```bash
git clone git@github.com:lucasleao-dev/fashion-store.git
Entre na pasta do projeto:

festança
cd react-store
Instale as dependências:

festança

npm install
Como Rodar
Inicie o servidor de desenvolvimento:

festança

npm run dev
Abra o navegador:

Arduino

http://localhost:5173/
Observações
Projeto criado com foco em estudo, não é uma aplicação para produção.

Para alterar o fundo do site, substitua public/fundo.webp ou altere o caminho no App.css.

As imagens dos produtos estão no public/ e podem ser trocadas por fotos reais.

Autor
Lucas Souza Leão

