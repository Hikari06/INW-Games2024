import { useState } from 'react'



function Placeholder() {
    const [nome, setNome] = useState('')

    function onHandleNome(e){
        setNome (e.target.value)
    }
    return(
        <>
        <input type="text" 
        name="nome"
        id="nome"
        value={nome}
        onChange={onHandleNome} 
        className='h-10 rounded-3xl bg-primary-claro mt-5 mb-5 ml-5'
        />
        </>
    )
}

export default Placeholder