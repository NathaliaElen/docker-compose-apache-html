# 🐳 Docker Compose: Aplicação Web Estática (Apache, HTML, CSS, JS)

**Desafio de Projeto:** Criando um Container de uma Aplicação WEB. Este projeto demonstra a execução de uma aplicação HTML estática, com estilização CSS e interatividade JavaScript, utilizando um servidor Apache (HTTPD) e gerenciamento de contêineres com Docker Compose.

---

## 🎯 Objetivo do Desafio

O principal objetivo deste desafio foi construir um ambiente containerizado capaz de servir uma aplicação web estática. Isso incluiu:
* A criação de um servidor Apache (HTTPD) dentro de um contêiner Docker.
* O empacotamento de arquivos HTML, CSS e JavaScript para serem servidos por este Apache.
* A orquestração do contêiner Apache usando Docker Compose para facilitar a definição e execução do ambiente.
* O entendimento do ciclo de vida de uma aplicação em um ambiente isolado e portátil.

---

## ✨ Tecnologias Utilizadas

* **Docker:** Plataforma para desenvolver, empacotar e executar aplicações em contêineres.
* **Docker Compose:** Ferramenta para definir e executar aplicações Docker multi-contêiner.
* **Apache HTTP Server (httpd):** Servidor web responsável por servir os arquivos estáticos da aplicação.
* **HTML5:** Linguagem de marcação para a estrutura da página web (`index.html`).
* **CSS3:** Linguagem de estilização para a aparência da página web (`style.css`).
* **JavaScript (ES6+):** Linguagem de programação para adicionar interatividade à página web (`script.js`).

---

## 📁 Estrutura do Projeto

A organização dos arquivos no projeto é a seguinte:

<pre><code>
.
├── website/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── docker-compose.yml
</code></pre>

* **`website/`**: Este diretório contém todos os arquivos estáticos da aplicação web (HTML, CSS, JavaScript) que serão servidos pelo Apache.
    * `index.html`: A página principal da aplicação, contendo a estrutura e o conteúdo.
    * `style.css`: Folha de estilo responsável pela aparência visual da aplicação.
    * `script.js`: Script JavaScript para adicionar interatividade à página.
* **`docker-compose.yml`**: O arquivo de configuração principal do Docker Compose, que define o serviço do servidor Apache, o mapeamento de portas e a montagem do volume para os arquivos da aplicação.

---

## 🚀 Como Executar o Projeto

Para colocar esta aplicação web em funcionamento, siga os passos abaixo. Certifique-se de ter o [Docker](https://docs.docker.com/get-docker/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados em sua máquina.

1.  **Clone o Repositório:**
    Abra seu terminal e clone este repositório para sua máquina local:
    ```bash
    git clone [https://github.com/NathaliaElen/docker-compose-apache-html-css-js.git](https://github.com/NathaliaElen/docker-compose-apache-html-css-js.git)
    ```

2.  **Navegue até o Diretório do Projeto:**
    Entre na pasta do projeto clonado:
    ```bash
    cd docker-compose-apache-html-css-js
    ```

3.  **Inicie os Contêineres com Docker Compose:**
    No diretório raiz do projeto (onde está o `docker-compose.yml`), execute o comando para subir os serviços em modo detached (segundo plano):
    ```bash
    docker-compose up -d
    ```
    * Este comando fará o download da imagem `httpd:latest` (se ainda não tiver), construirá e iniciará o contêiner `my-apache-app`, e mapeará a porta `8081` do seu host para a porta `80` do contêiner.

4.  **Acesse a Aplicação no Navegador:**
    Abra seu navegador web preferido e acesse a aplicação utilizando o seguinte endereço:
    ```
    http://localhost:8081
    ```
    Você deverá ver a página web estática servida pelo Apache. Ao carregar, um alerta JavaScript será exibido com uma mensagem de boas-vindas! 

---

## 🛑 Como Parar e Remover os Contêineres
Para parar e remover todos os contêineres, redes e volumes criados pelo Docker Compose para este projeto:
```
docker-compose down
```
