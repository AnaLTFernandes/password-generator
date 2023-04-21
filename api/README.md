# :key: Password Generator API

## Índice

- [Sobre](#Sobre)
- [Rotas](#Rotas)
  - [Criar senha](#Criar-senha)
- [Como rodar em desenvolvimento](#Como-rodar-em-desenvolvimento)
- [Como rodar em desenvolvimento com o Docker](#Como-rodar-em-desenvolvimento-com-o-Docker)

<br/>

## Sobre

API do Password Generator.

<br/>

## Rotas

**URL base**: http://ec2-44-201-243-200.compute-1.amazonaws.com/api

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

<br/>

## Como rodar em desenvolvimento com o Docker

**Atenção:** para rodar o projeto é preciso ter o [Docker](https://docs.docker.com/engine/install/) instalado na sua máquina.

<br/>

1. Configure o projeto seguindo até, pelo menos, o passo 4 da seção [Como rodar em desenvolvimento](#Como-rodar-em-desenvolvimento)

2. Crie a imagem do projeto:

   > ```bash
   > npm run docker:build
   > ```

3. Inicie o container Docker:

   > ```bash
   > # caso seja a primeira vez rodando o projeto no Docker, rode:
   > npm run docker:run {IMAGE_ID}
   > # caso contrário, rode:
   > npm run docker:start
   > ```

4. Divirta-se nas rotas usando de URL base: `http://localhost:5000`

5. [*Opcional*] Rode o comando para parar o container.
   > ```bash
   > npm run docker:stop
   > ```
