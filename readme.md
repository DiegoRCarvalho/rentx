#RentalX

- /src -> Diretório que contém todos os códigos fonte da aplicação.
  
- /src/model -> Camada responsável por criar modelos das classes da aplicação.

- /src/repositories -> Camada responsável por fazer a manipulação de dados da aplicação.
  
- /src/routes -> Camada responsável por conter as rotas da aplicação. As rotas devem receber uma requisição, encaminhar para um repositório ou para um serviço para que esses façam as manipulações necessárias e devolvam apenas a resposta para a rota, que irá receber e redirecionar a resposta para o caminho correto..

- /src/services -> Camada responsável por fazer verificações e validações dos serviços.

- /src/server.ts -> Arquivo utilizado como servidor principal da aplicação.