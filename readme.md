#RentalX

- /src -> Diretório que contém todos os códigos fonte da aplicação.

- /src/modules -> Camada responsável por modularizar a aplicação, criando um diretório para cada uma das entidades principais, e este diretório conterá as lógicas referentes ao módulo.

- /src/modules/cars -> Exemplo de uma das entidades principais da aplicação, citada anteriormente.
- 
- /src/modules/cars/model -> Camada responsável por criar modelos das classes da aplicação.

- /src/modules/cars/repositories -> Camada responsável por fazer a manipulação de dados da aplicação.
  
- /src/modules/cars/repositories/implementations -> Camada responsável por amazenar os repositórios da aplicação.

  - Tipos de arquivo dentro dos repositories:
  
    <table border="1">
      <tr>
        <th>
          Sub-tipo
          CategoriesRepository.ts
        </th>
        <th>
          Interface
          ICategoriesRepository.ts
        </th>
        <th>
          Sub-tipo
          PostgresCategoriesRepository.ts
        </th>
      </tr>
      <tr>
        <td>
          ------------------&gt;&gt;&gt;&gt;&gt;
        </td>
        <td>
          &lt;&lt;&lt;------------------------&gt;&gt;&gt;
        </td>
        <td>
          &lt;&lt;&lt;&lt;&lt;------------------
        </td>
      </tr>
      <tr>
        <td>
          Implementa a interface, e utiliza os métodos para receber os dados e manipular a aplicação.
        </td>
        <td>
          Interface que possui todos os formatos dos métodos necessários para os sub-tipos.
        </td>
        <td>
          Implementa a interface, e utiliza os métodos para se comunicar com o repositório.
        </td>
      </tr>
      <tr>
        <td colspan="3">
          LSP - Liskov substitution principle
        </td>
      </tr>
      <tr>
        <td colspan="3">
          DIP - Dependency inversion principle
        </td>
      </tr>
    </table>

- /src/modules/cars/services -> Camada responsável por fazer verificações e validações dos serviços. Deixaremos de utilizá-la, porque nela todos os serviços ficam misturados. Moveremos os serviços para o diretório useCases, assim eles serão separados por ação.
  
- /src/modules/cars/useCases -> Camada que ficará responsável pelos serviços(que aqui serão chamados de useCases) e pelos controllers, diferente da camada services onde todos os serviços ficavam juntos, aqui teremos um diretório contendo um useCase e um controller para cada ação.

- /src/modules/cars/useCases/createCategory -> Exemplo de uma ação citada anteriormente.
  
- /src/modules/cars/useCases/createCategory/CreateCategoryController.ts -> Essa camada sempre possuirá um request e um response, logo, ele terá a responsabilidade de comunicação entre a rota, o repository e o service(que agora chamamos de useCase).
  
- /src/modules/cars/useCases/createCategory/CreateCategoryUseCase.ts -> Camada responsável por fazer verificações e validações dos serviços, sua diferença para a antiga services que deixamos de utilizar, é que aqui ela estará contida no diretório referente a ação que a lógica pertence, neste exemplo é a ação de criar uma categoria.

- /src/routes -> Camada responsável por conter as rotas da aplicação. As rotas devem receber uma requisição, encaminhar para um controller para que esse faça o direcionamento necessário para o processamento de dados e devolva apenas a resposta para a rota, que irá receber e redirecionar para o caminho correto. Dessa forma, as rotas nunca irão enxergar os useCase ou os repositorios, elas ficam restritas a exergar os controllers.

- /src/server.ts -> Arquivo utilizado como servidor principal da aplicação.
