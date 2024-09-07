# DispositivosDeRede
Repositorio da Imersao da Alura 09/2024

- [Sobre o Projeto](#sobre-o-projeto)
- [Estrutura dos Diretórios](#estrutura-dos-diretórios)
- [Autor](#author)

# Sobre o Projeto
Um projeto utilizando HTML, CSS e JavaScript sobre alguns dispositivos de rede.
A ideia era de me forçar a estudar esse assunto que não tenho muita afinidade.

O projeto conta com algumas funcionalidades, tais como incluir novos
dispositivos, visualizar o dispositivos que já estão armazenados e tbm de
pesquisar por dispositivos que estão inseridos nos dados.

Durante o desenvolvimento passei por umas dificuldades, principalmente na hora
de inserir novos dispositivos, pois não havia como receber e armazenar uma
imagem diretamente pelo JS - não que eu tenha achado -  e por conta disso,
somente os dados escritos que são passados são integradados aos outros
dispositivos no site.

- [Link da Vercel sobre o projeto](https://dispositivos-de-rede.vercel.app/)

# Estrutura dos Diretórios
1. Data: contém os dados dos dispositivos que serão gerados no HTML via JS;

2. Imgs: contém imagens que serão usadas no projeto;

3. JS: arquivos JS que manipulam o site

    a. **`create.js`:** arquivo usado para criar novos dispositivos dentro do
    site;

        Infelizmente não encontrei nenhuma maneira simples de armazenar arquivos
        e modificar o JSON para que os dados ficassem persistentes.
        Nessa vou ficar devendo.

    b. **`data.js`:** mexe com os dados armazenados em JSON para que sejam
    exibidos no site;


    c. **`search.js`:** trabalha com a função de pesquisa dentro do site.

4. Styles: contém os arquivos CSS que dão o estilo para a página.

# Author
LinkedIn - [Lucas Samuel Lemos Rajão](https://www.linkedin.com/in/lucas-samuel-64846a253/)

GitHub - [@codeMaestroLucas](https://github.com/codeMaestroLucas)
