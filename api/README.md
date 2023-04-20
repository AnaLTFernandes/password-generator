# :key: Password Generator API

## Índice

- [Sobre](#Sobre)
- [Rotas](#Rotas)
  - [Criar senha](#Criar-senha)
- [Como rodar em desenvolvimento](#Como-rodar-em-desenvolvimento)

<br/>

## Sobre

API do Password Generator.

<br/>

## Rotas

<br/>

## Criar senha

- Rota: `/generate-password`
- Método: `POST`
- Status code de sucesso: **200**
- Exemplo de Body:

  ```json
  {
  	"length": 7
  }
  ```

- Exemplo de Resposta:

  ```json
  {
  	"password": "nd30tQd"
  }
  ```

- Possíveis erros:

  | status code | motivo                                                            |
  | ----------- | ----------------------------------------------------------------- |
  | 400         | campo _length_ do body menor ou igual a 0 ou maior que 25         |
  | 422         | campo _length_ do body ausente, ou com tipo diferente de _number_ |
  | 500         | erro interno da api                                               |

<br/>

## Como rodar em desenvolvimento

**Atenção:** para rodar o projeto é preciso ter o [PostgreSQL](https://www.postgresql.org/download/) instalado em sua máquina.

<br/>

1. Clone esse repositório:

   > ```bash
   > git clone https://github.com/AnaLTFernandes/password-generator.git
   > ```

2. Vá para a raiz do projeto

   > ```bash
   > cd password-generator/api
   > ```

3. Instale as dependências:

   > ```bash
   > npm install
   > ```

4. Configure o arquivo `.env` usando como base o arquivo `.env.example`

5. Crie as tabelas no banco de dados:

   > ```bash
   > npm run prisma:migrate
   > ```

6. Inicie o projeto:

   > ```bash
   > npm run dev
   > ```

7. Divirta-se nas rotas usando de URL base: `http://localhost:{ENV_PORT}`

8. [*Opcional*] Rode os testes:

   > ```bash
   > npm run test
   > ```
