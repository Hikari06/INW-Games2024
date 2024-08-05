/*import { useState } from 'react';

export default function Contador(){
    const [contador, setContador]= useState(0)

  function handleClick(){
    setContador((anterior) => (
      anterior + 1
    ))
    console.log(contador)
  }
  return (
    <>
    <p>{contador}</p>
    <button onClick={handleClick}>Aumentar</button>
    </>
  )
  
}
*/

import { useState } from "react";

export default function Contador (){
    const [textoBotao, settextoBotao] = useState('Rebeca')
    
    function handleClick(){
        settextoBotao(textoBotao === "Rebeca" ? "Ouro" : "Rebeca")
    }

    return (
        <>
        <button onClick={handleClick}>{textoBotao}</button>
        </>
    )
}
