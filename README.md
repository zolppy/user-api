<div align="center">
  <h1>User API</h1>
  <ul>
    <img src="https://img.shields.io/badge/JAVASCRIPT-ES6-purple" />
    <img src="https://img.shields.io/badge/EXPRESS.JS-4.21.1-blue" />
    <img src="https://img.shields.io/badge/NODEMON-3.1.7-indigo" />
    <img src="https://img.shields.io/badge/PG-8.13.1-red" />
    <img src="https://img.shields.io/badge/DOTENV-16.4.5-magenta" />
    <img src="https://img.shields.io/badge/POSTGRESQL-15.8-red" />
    <img src="https://img.shields.io/badge/STATUS-DEVELOPMENT-green" />
    <img src="https://img.shields.io/badge/LICENSE-MIT-yellow" />
  </ul>
  <p>Simples API (<em>Application Programming Interface</em>), desenvolvida com Express.js, responsável por prover as quatro operações do CRUD (<em>Create, Read, Update, Delete</em>) para usuários.</p>
</div>

<h2>:hammer: em construção...</h2>

<h2><em>Endpoints</em> da API</h2>

<code>GET /users</code>

<p>Retorna a lista completa de usuários cadastrados.</p>

<p>Exemplo de resposta (dados fictícios):</p>

<pre>
  [
    {
      "id": 1,
      "name": "Nome Completo do Usuário Um",
      "birthday": "2004/02/12",
      "tel": "(11) 92222-3333",
      "e-mail": "exemplo-do-email-um@exemplo.com"
    },
    {
      "id": 2,
      "name": "Nome Completo do Usuário Dois",
      "birthday": "1999/12/30",
      "tel": "(21) 91234-4444",
      "e-mail": "exemplo-do-email-dois@exemplo.com"
    },
    {
      "id": 3,
      "name": "Nome Completo do Usuário Três",
      "birthday": "2001/11/11",
      "tel": "(44) 94444-4321",
      "e-mail": "exemplo-do-email-três@exemplo.com"
    }
  ]
</pre>

<code>GET /users/:id</code>

<p>Retorna dados de um usuário específico, de acordo com o id.</p>

<p>Exemplo de resposta (dados fictícios):</p>

<pre>
  {
    "id": 2,
    "name": "Nome Completo do Usuário Dois",
    "birthday": "1999/12/30",
    "tel": "(21) 91234-4444",
    "e-mail": "exemplo-do-email-dois@exemplo.com"
  }
</pre>

<h2>Configuração do banco de dados</h2>

<p>Será necessário alterar as variáveis de ambiente presentes no arquivo <code>.env</code> com sua própria instância de banco de dados PostgreSQL.</p>

<pre>
  DB_HOST=seu_host
  DB_PORT=sua_porta
  DB_NAME=seu_nome_do_banco
  DB_USER=seu_usuário
  DB_PASSWORD=sua_senha
</pre>

<h2>Diagrama Entidade-Relacionamento</h2>

![Captura de tela_2024-11-03_11-30-34](https://github.com/user-attachments/assets/3c05bcaa-cc3c-4c21-8bb2-9828c443b7ae)
