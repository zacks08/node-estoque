# 🛒 API de Estoque de Produtos


API REST para cadastro, consulta, atualização e remoção de produtos em estoque, desenvolvida com **Node.js**, **Express** e **Prisma ORM** utilizando **MongoDB**.

---

## ✨ Funcionalidades

- ✅ Cadastro de produtos
- ✅ Listagem de todos os produtos
- ✅ Consulta de produto por ID
- ✅ Atualização de produto
- ✅ Remoção de produto
- ⚠️ Remoção de todos os produtos (rota comentada por segurança)

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/node-estoque.git
cd node-estoque

# Instale as dependências
npm install
```

### ⚙️ Configuração do Banco de Dados

1. Crie um arquivo `.env` na raiz do projeto:
    ```
    DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/estoque"
    ```

2. Gere o Prisma Client e atualize o banco:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

3. Inicie o servidor:
    ```bash
    node --watch estoque.js
    ```
    O servidor rodará na porta **3001**.

---

## 📚 Rotas da API

### ➕ Criar produto

`POST /produtos`

```json
{
  "preço": 18.5,
  "nome": "garrafa térmica",
  "quantidade": "16",
  "descriçao": "garrafa térmica vermelha 1L"
}
```

---

### 📋 Listar todos os produtos

`GET /produtos`

Parâmetros de consulta opcionais: `preço`, `nome`, `quantidade`, `descriçao`

---

### 🔎 Listar produto por ID

`GET /produtos/:id`

---

### ✏️ Atualizar produto

`PUT /produtos/:id`

```json
{
  "preço": 20.0,
  "nome": "garrafa térmica atualizada",
  "quantidade": "10",
  "descriçao": "garrafa térmica azul 1L"
}
```

---

### ❌ Deletar produto

`DELETE /produtos/:id`

---

### ⚠️ Deletar todos os produtos (comentado no código)

`DELETE /produtos`

---

## ℹ️ Observações

- O campo `preço` deve ser enviado como número (`Float`).
- O campo `quantidade` está como `String` no banco, mas pode ser ajustado conforme necessidade.
- O projeto utiliza MongoDB Atlas, mas pode ser adaptado para outros bancos suportados pelo Prisma.

---

## 👨‍💻 Autor

Desenvolvido por [Isaac](https://github.com/zacks08) 🚀

---

> _Sinta-se à vontade para contribuir, sugerir melhorias ou reportar issues!_



© 2025 GitHub Copilot. Este README foi gerado com o auxílio da inteligência artificial GitHub Copilot para fins educacionais e profissionais.
