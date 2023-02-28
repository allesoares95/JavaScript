
  JavaScript -> é uma linguagem que, além de ser a padrão nos navegadores atuas, vem expandindo para outras áreas como servidores, banco de dados e até plataformas de Internet of Things (IoT).

  O Javascript cresceu bastante e hoje em dia pode ser encontrado nas mais diversas plataformas de desenvolvimento. Dominá-la é essencial se você deseja desenvolver sites para a Web, já que ela é a linguagem que funciona em todos os navegadores e responsável por dar interatividade e dinamismo as páginas web.

  ## DOM -> Document Object Model;
    O document é uma variável muito importante do Javascript. Ela contém o DOM ou Document Object Model, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página.

    O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir  dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável document é quem contêm o DOM.

    Por isso, quando dizemos que com o Javascript nós estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Então ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o seu site.

    Outra caracteristica interessante, é que como manipulamos o DOM , quando trocamos um texto de um <h1> ou um estilo de um elemento, na verdade estamos alterando a representação em memória , o que faz com que o arquivo fonte que contêm seu HTML fique intacto!

---

  ## If - Else
    Condicionais:
    O comando if - else. Permite executar alguns comandos se uma condição for verdadeira e outros se ela for falsa. De acordo com a lógica a ser implementada, pode haver necessidade de utilizar não apenas um, mas um conjunto de ifs subordinados uns aos outros.

    A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

    if (condiçao) {

    }else (condição) {

    }
---

  ## For()
    O For é a estrutura de repetição que utilizamos quando sabemos a quantidade de repetições que um bloco de código deve ser executado. A sintaxe é composta por três expressões separadas por ponto e vírgula. Elas controlam o início do loop e as condições de como cada iteração irá executar.
---
  ### toFixed()
    recebe como parâmetro a quantidade de casas decimais a serem exibidas depois do ponto.
---
  ### classList.add()
    É um DOMTokenList que representa o atributo de classe de elementNodeReference. Se o atributo de classe não foi definido ou está vazio elementClasses.length retorna 0. element.classList propriamente dito é somente leitura, embora você possa modificá-lo usando os métodos add() e remove().

---
  ### addEventListener()
    registra uma única espera de evento em um único alvo.
---

  ## preventDefault()
    impede de você ser redirecionado, mas o outro handler ainda será executado.
---

  ## createElement()
    irá criar um elemento HTML para ser, posteriormente, inserido em um documento HTML.
---

  ## appendChild()
    insere um elemento filho (children) ao elemento pai (parent) na última posição, ela auxilia na criação de um elemento DOM
---

  ## push()
    A função push para colocar elementos dentro de um array
---

  ## for()
    determina que uma ação deve ser executada a partir de uma condição inicial até que seja encontrada outra que interrompa o laço. O fluxo de repetição é controlado por uma variável, que é testada a cada repetição até que se encontre a condição de parada.
---

  ## forEach()
    é executar uma função callback em todos os elementos de um array. Por isso, ela é passada como parâmetro para a execução do loop.
---

  ## innerHTML 
    innerHTML é uma propriedade, não uma função, então ela recebe o novo conteúdo, ou seja, utilizamos um sinal de igual (=)
    document.querySelector("#id").innerHTML = "Novo texto"

    E para obter o HTML interno, fazemos:
    ObjetoDeUmElementoHTML.innerHTML

    O seu retorno será todo o conteúdo HTML, tanto tags, atributos, classes, etc, no formato de uma String.
---

  ## this
    Primeiramente, é preciso saber que todas as funções em JavaScript têm propriedades, assim como os objetos têm propriedades. E quando uma função é executada, ela obtém a propriedade this — uma variável com o valor do objeto que invoca a função na qual this é usado.

    this é usado dentro de uma função (digamos função “A”) e ele contém o valor do objeto que invoca a função A. Isso é preciso para acessar métodos e propriedades do objeto que invoca a função A, especialmente porque nem sempre é possível saber o nome do objeto invocador e, às vezes, não há nenhum nome para usar para se referir ao objeto invocando. Na verdade, this é realmente apenas um atalho-referência ao “objeto antecedente” (ou o objeto invocador);

    ```js
    var person = {
        firstName    : "Penelope",
        lastName     : "Barrymore",
        // Já que a palavra-chave "this" é usada dentro do método showFullName() abaixo e este método 
        // é definido no objeto "person", "this" terá o valor do objeto "person" porque este 
        // invocará showFullName()​.
        showFullName : function() {
            console.log ( this.firstName + ' ' + this.lastName );
        }
    }
    ​
    person.showFullName(); // Penelope Barrymore 
    ```
---

  ## .remove()
    ele irá executar a função remove imediatamente.

---

  ## setTimeout()
    O  método setTimeout() define um cronômetro que executa uma função ou trecho de código especificado assim que expira. O setTimeout, por padrão, executa o código somente uma vez.
---

  ## RegExp()
   O construtor RegExp cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão.

   Há dois modos de criar um objeto RegExp: uma notação literal e um construtor. Para indicar strings, os parâmetros para a notação literal não usam aspas, enquanto os parâmetros para a função do construtor usam.

   O primeiro parâmetro que devemos passar para o construtor é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque). Por exemplo, podemos definir que não queremos que haja distinção entre letras maiúsculas e minúsculas, através da flag i.

---

### Como Utilizar e para que serve ?

  document.querySelector() -> Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.
  exemplo: 
  ```js
  document.querySelector("h1"); -> pela tag;
    ou
  document.querySelector(".classe"); -> pela classe;
  document.querySelector("#pelo-id"); -> pelo id;
  ```
  document.querySelectorAll() -> Retorna todos elementos dentro do documento.
  ```js
  document.querySelectorAll();
  ```

---

  textContent serve para obtermos o valor de no TEXT_NODE . Text_node são aqueles que possuem apenas texto. Por exemplo, usar textContent em um h2 , span ou div retorna o conteúdo textual deles.
  exemplo: 
  ```js
  var titulo = document.querySelector("h1");
  titulo.textContent = "alteração";
  ```


# Introdução AJAX

  AJAX significa Asynchronous JavaScript and XML, ou JavaScript e XML Assíncronos, em bom português. Ele é um conjunto de técnicas de desenvolvimento voltado para a web que permite que aplicações trabalhem de modo assíncrono, processando qualquer requisição ao servidor em segundo plano.

  O JavaScript é uma linguagem de programação bem conhecida. Entre suas funcionalidades, está a capacidade de gerenciar conteúdos dinâmicos de um site e permitir a interação dinâmica com o usuário. O XML  (eXtensible Markup Language), como o nome sugere, é uma variação de linguagem de marcação no estilo do HTML. Enquanto o HTML é utilizado para exibir dados, o XML os armazena e transmite.

  Tanto o JavaScript quanto o XML trabalham de forma assíncrona no AJAX. Assim, qualquer aplicação que use AJAX pode enviar e receber dados do servidor sem precisar recarregar a página inteira.

  ## Como o AJAX funciona ?
  É importante lembrar que o AJAX não é uma única tecnologia, ou até mesmo uma linguagem de programação. O AJAX é uma série de técnicas de desenvolvimento voltadas para web. O sistema geralmente é composto por:

    - HTML/XHTML para linguagem principal e CSS para a apresentação.

    - O Document Object Model (DOM) para exibição dinâmica dos dados e interação.

    - XML para a troca de dados e XSLT para a manipulação. Muitos desenvolvedores começaram a substituir pelo JSON por ser mais semelhante ao JavaScript.

    - O objeto XMLHttpRequest para a comunicação assíncrona.

    - Finalmente, a linguagem de programação JavaScript para juntar todas essas tecnologias.

---

  ## XMLHttpRequest()
    Criação de uma requisição HTTP com o Javascript.

    O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript. Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, este nome só se manteve devido a um legado histórico.

    E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new :

    ```js
    var xhr = new XMLHttpRequest();
    ```
---

