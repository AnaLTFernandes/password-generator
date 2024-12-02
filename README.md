# :key: Password Generator

![Badge Finalizado](https://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=success&style=for-the-badge)

Site para gerar senhas aleatórias com tamanho entre 1 e 25, o qual é escolhido pelo usuário.

<div align=center>
 
  <img alt="Password Generator preview" src="https://raw.githubusercontent.com/AnaLTFernandes/password-generator/main/frontend/src/assets/password-generator-preview.png" />
  
</div>

<br />

## :hammer_and_wrench: Rodar o projeto

**Atenção:** para rodar o projeto é preciso ter o [Docker](https://docs.docker.com/engine/install/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalado na sua máquina.

1. Clone esse repositório:

   > ```bash
   > git clone https://github.com/anatfernandes/password-generator.git
   > ```

2. Configure o arquivo `.env` do front-end e do back-end utilizando como base seus respectivos arquivos `.env.example`

3. Na raiz da pasta criada, inicie o projeto:

   > ```bash
   > docker compose up --build -d
   > ```

4. Acesse http://localhost:80 no seu navegador e aproveite <3

5. [*Opcional*] Acesse http://localhost:80/api para usar somente o back-end

6. [*Opcional*] Encerre o projeto:

   > ```bash
   > docker compose down
   > ```
