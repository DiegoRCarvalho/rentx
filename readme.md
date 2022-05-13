#RentalX

- /src -> Diretório que contém todos os códigos fonte da aplicação.
  
- /src/model -> Camada responsável por criar modelos das classes da aplicação.

- /src/repositories -> Camada responsável por fazer a manipulação de dados da aplicação.
  
- /src/routes -> Camada responsável por conter as rotas da aplicação. As rotas devem receber uma requisição, encaminhar para um repositório realizar as manipulações necessárias, receber e redirecionar a resposta que vem do repositório.

- /src/server.ts -> Arquivo utilizado como servidor principal da aplicação.