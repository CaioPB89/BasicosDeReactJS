// De https://nextjs.org/learn

// Isto foi imperativo

// const app = document.getElementById("app"); // pegando elemento
// const header = document.createElement("h1"); //criando elemento
// const text = "Desenvolva. Previá. Upload";
// header.textContent = text;

// app.appendChild(header);

// Declarativo

/*
Este projeto usa page.js como main. Ele possui um componente header com uma propriedade titulo e uma função default(main) que:
Roda uma array com uso de .map, adicionando o output em um elemento HTML;
Chama o componente Header com e sem uma propriedade title;
Chama o LikeButton, que foi importado de outro arquivo, que está usando o Componente Cliente;

O package.json especifica que será um script next dev e quais são as dependencias;
O arquivo layout possui alguns elementos para modificação das paginas;

O arquivo LikeButton faz o export de uma função que faz handle do click no botão Like. Importante mencionar que o LikeButton é importado para page.js;
LikeButton importa o useState do react;
*/

import LikeButton from "./LikeButton";

// Componente -> Funções JS que retornam elementos HTML
// Este Header retorna um h1, e o HomePage retorna uma call pelas funções, um elemento ul que roda por uma array e faz a call do componente LikeButton
function Header({ title }) {
    // Propriedade -> Usando propriedade que foi enviada ao se chamar o componente
  return <h1> {title ? title : "Default title"} </h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  return (
    <div>
      <Header />
      <Header title="React" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
