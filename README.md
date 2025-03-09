# Nome do Projeto

## Visão Geral
Este projeto é um desafio de código para a empresa MySide.

## Observações
- A FakeStoreAPI é limitada, muitas das funcionalidades (como pesquisa semântica) tiveram que ser aplicadas diretamente no front-end, o que não é adequado. Os filtros e pesquisa por nome ocorreriam no back-end em uma aplicação real, por isso tive que criar um context para "pesquisar com filtros".

## Pré-requisitos
- Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
- Instale todas as dependências necessárias executando:
  ```bash
  npm install
  ```

## Executando o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/stevancarlon/my-side.git
   cd my-side
   ```

2. Configure suas variáveis de ambiente. Crie um arquivo `.env` no diretório raiz e adicione as seguintes variáveis:
   ```plaintext
    FAKE_STORE_API=https://fakestoreapi.in/api/
    NEXT_API_BASE_URL=http://localhost:3000/api/
   ```

3. Inicie a aplicação:
   ```bash
   npm start
   ```

4. Acesse a aplicação em `http://localhost:3000` no seu navegador.

5. Para rodas os testes:
    ```bash
   npm test
   ```

