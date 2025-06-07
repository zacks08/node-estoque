import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

// Criar produto
app.post('/produtos', async (req, res) => {
  try {
    const produto = await prisma.produto.create({
      data: {
        preço: req.body.preço,
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        descriçao: req.body.descriçao,
        id: req.body.id, // Adicionando o campo id 
      },
    });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// Listar todos os produtos ou filtrar por query
app.get('/produtos', async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany({
      where: {
        preço: req.query.preço ? Number(req.query.preço) : undefined,
        nome: req.query.nome,
        quantidade: req.query.quantidade,
        descriçao: req.query.descriçao,
      },
    });
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Listar produto por ID
app.get('/produtos/:id', async (req, res) => {
  try {
    const produto = await prisma.produto.findUnique({
      where: { id: req.params.id },
    });
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// Atualizar produto
app.put('/produtos/:id', async (req, res) => {
  try {
    const produto = await prisma.produto.update({
      where: { id: req.params.id },
      data: {
        preço: req.body.preço,
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        descriçao: req.body.descriçao,
      },
    });
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// Deletar produto
app.delete('/produtos/:id', async (req, res) => {
  try {
    const produto = await prisma.produto.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: 'Produto deletado com sucesso', produto });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// Deletar todos os produtos forma temporária
// (Cuidado: isso irá remover todos os produtos do banco de dados)


/*app.delete('/produtos', async (req, res) => {
  try {
    await prisma.produto.deleteMany({});
    res.status(200).json({ message: 'Todos os produtos foram deletados com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar todos os produtos' });
  }
});*/





app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});

  



/* 
Criar api de produtos
    listar produtos
    listar produto    
    deletar produto 
    deletar todos os produtos
    criar produto
    atualizar produto
   


    usuario:isaacchagas011
    senha:p2BQilFQ7n7opiPq
   
   */