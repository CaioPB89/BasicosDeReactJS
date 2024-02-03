"use client"; // Componente Cliente

import {useState} from "react";

export default function LikeButton(){   
    // State -> Um state possuir o useState, que retorna uma array com 2 valores. O valor e uma função para atualizar o valor.     
    const [likes, setLikes] = useState(0);
    function handleClick (){ 
        // Ao se clicar no botão
        console.log("increment like count");
        setLikes(likes + 1); // usando o setLikes
    }
    // Retorna o elemento botão com a função já presa  
    return <button onClick={handleClick}>{`Like(${likes})`}</button>
}