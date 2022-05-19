/** Desafio Seti-03 Back-end
 * 
 * tipo de dados de entrada JSON
 * Modelo de Dados utilizados para teste
 *  
 * {
 *  "id":3,
 * 	"nome":"Junc@",
 * 	"email":"junca@gmail.com",
 * 	"username":"Junca539@",
 * 	"password":"123456@"
 * }
 *  
 * 
 * Cadastrar Usuário => método Post rota => /users
 * Listar Todos Usuários =>  método get na rota /users 
 * Listar Usuário Específico => Método Get na rota /users/:id
 * Editar Usuário Específico => Método Put na rota /users/:id
 * Deletar Usuário Específico => Método Delete na rota /users/:id
 * 
 **/

const port = process.env.PORT || 3000;
const { body, validationResult } = require("express-validator");
const express = require("express");
const app = express();

app.use(express.json());

var users = [
  {
    id: 1,
    nome: "AnDev@dev",
    email: "JuncaDev@dev",
    senha: "123456",
    username: "andrew2022"
  },
  {
    id: 2,
    nome: "JuncaDev@dev",
    email: "JuncaDev@dev",
    senha: "123456",
    username: "junca2022"
  }
];

app.get("/", (req, res) => {
  res.status(200).send("Seti Challenge 3 BackEnd");
});

/* Lista Todos Usuários */
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

/* Lista Usuários pelo Id */
app.get("/users/:id", (req, res) => {
  let i = buscaUser(req.params.id);
  res.status(200).json(users[i]);
});

/* Adiciona Usuários */
app.post(
  "/users",
  [
    body("id").notEmpty().withMessage("Campo ID Está Vazio"),
    body("nome").notEmpty().withMessage("Campo Nome não pode estar vazio"),
    body("email").notEmpty().withMessage("Campo email não pode estar vazio"),
    body("email")
      .isEmail()
      .withMessage("E-mail Invalido Verifique e tente novamente"),
    body("username")
      .notEmpty()
      .withMessage("Campo username não pode estar vazio"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Senha precisa ter no mínimo 6 Digitos")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    users.push(req.body);
    res.json({ msg: "Sucesso!" });
  }
);
/* Edita Usuários */
app.put("/users/:id", (req, res) => {
  let i = buscaUser(req.params.id);
  users[i].nome = req.body.nome;

  res.status(200).send(users);
});

/* Deleta Usuários */
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  let i = buscaUser(id);
  users.splice(i, 1);
  res.status(200).send(`User ${id} Removido`);
});

function buscaUser(id) {
  return users.findIndex((users) => users.id === id);
}

app.listen(port, () => {
  console.log(`escutando em http://localhost:${port}`);
});
