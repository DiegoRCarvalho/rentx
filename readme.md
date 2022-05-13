#RentalX

- /src -> Diretório que contém todos os códigos fonte da aplicação.
  
- /src/model -> Camada responsável por criar modelos das classes da aplicação.

- /src/repositories -> Camada responsável por fazer a manipulação de dados da aplicação.

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


- /src/routes -> Camada responsável por conter as rotas da aplicação. As rotas devem receber uma requisição, encaminhar para um repositório ou para um serviço para que esses façam as manipulações necessárias e devolvam apenas a resposta para a rota, que irá receber e redirecionar a resposta para o caminho correto..

- /src/services -> Camada responsável por fazer verificações e validações dos serviços.

- /src/server.ts -> Arquivo utilizado como servidor principal da aplicação.
