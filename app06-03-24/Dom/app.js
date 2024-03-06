const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

//btn1.addEventListener('click', function clicar(){   })

/*
btn1.addEventListener('click', ()=>{ 
    window.alert('Clicoooooooooooooooou!')
})´


btn1.addEventListener('click', ()=>{ 
    //pega o valor input
    const campoUsuario = document.createElement('#filmeInput').value
    //cria um novo li 
   const itemLista = document.createElement('li')
   //adiciona conteudo a lista
   listaFilmes.append(itemLista)
   ///itemLista.innerHTML = `campoUsuario`
   itemLista.innerHTML = `<strong>Este filme é ${campoUsuario}</strong>`
   ///itemLista.innerHTML = '<strong> Harry Potter </strong>'
})


window.onload = ('click', ()=>{ 


}

*/

btn1.addEventListener('click', ()=>{ 
    //pega o valor input
    const campoUsuario = document.querySelector('#filmeInput').value
    //cria um novo li 
   const itemLista = document.createElement('li')
   //adiciona conteudo a lista
   listaFilmes.append(itemLista)
    //adiciona conteudo a lista
   itemLista.innerHTML = `<strong>Este filme é ${campoUsuario}</strong>`
  /*  //muda o estilo
   itemLista.style.backgroundColor = 'red'
   //adiciona classe
   itemLista.classList.add('ativo')
    //liga / desliga uma classe
    itemLista.classList.toggle('ativo') */
})