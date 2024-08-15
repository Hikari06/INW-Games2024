import { useState } from 'react';
import infos from '../../contato.json'


function Blog(){
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [message, setMessage]= useState('')
    
    
    return (
        <section className="pt-6 pb-6 bg-primary-claro">
            <div className="max-w-screen-xl mx-auto">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-primary-ocre text-3xl font-extrabold sm:text-4xl">Seus Contatos</h1>
                </div>
            
                <ul className="grid gap-x-8 gap-y-10 pt-8 w-full">
                    {
                        infos.map((items, key) => (
                            <li className="w-full mx-auto group " key={key}>
                                <a href={items.href}>
                                    <img src='../../Usuario.png' className="w-10 rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block font-extrabold text-primary-ocre text-sm">{items.nome}</span>
                                        <h3 className="text-lg  text-gray-800 duration-150 group-hover:text-primary-ocre font-semibold">{items.status}   </h3>
                                        <p className="text-primary-ocre text-sm duration-150 group-hover:text-gray-800">{items.total}</p>
                                        <hr className='bg-primary-ocre' />
                                    </div>
                                </a>
                            </li>
                        ))
                    } 
                </ul>
            </div> 
            <div className='w-85 h-xl bg-primary-ocre mt-5 ml-20 mr-20 mb-5 rounded-lg grid grid-cols item-center'>
                <h1 className='mt-5 mb-10 text-primary-claro text-xl font-extrabold sm:text-xl mx-auto text-center '>Envie uma mensagem para seus contatos!</h1>
                <form className='form  mx-auto ' onSubmit={() => {}}>
                    
                    <div className='mt-5 mb-3'>
                    <label for="email" class="block mb-1 ml-5 font-medium text-primary-claro">Seu Nome</label>
                      <input type="text" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} value={name} className='items-center mx-5 rounded-lg h-8 '/>  
                    </div>
                    <div className='mt-5 mb-3'>
                    <label for="email" class="block mb-1 ml-5 font-medium text-primary-claro">Seu Nome</label>
                     <input type="text" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email} className='items-center mx-5 rounded-lg h-8 ' />   
                    </div>
                    <div className='mt-5 mb-3'>
                    <label for="email" class="block mb-1 ml-5 font-medium text-primary-claro">Seu Nome</label>
                     <input type="text" placeholder='Digite sua mensagem' onChange={(e) => setMessage(e.target.value)} value={message} className='items-center mx-5 rounded-lg h-8 ' />  
                    </div>
                    <div className='mt-5 mb-3'>
                     <label for="email" class="block mb-1 ml-5 font-medium text-primary-claro">Seu Nome</label>
                      <textarea className='textarea rounded-lg mx-5 'placeholder='Digite sua mensagem' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>  
                    </div>
                    
                    
                    

                </form>
                
            </div> 

            <footer className="bg-primary-ocre max-w-screen-xl  shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
                <img src="../../KumaMovieLogo.png" className="h-20 mr-5 ml-5" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">KumaMovie</span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">© 2024 <a href="https://flowbite.com/" className="hover:underline">KumaMovie™</a>. All Rights Reserved.</span>
    </div>

                

</footer>

        </section>
    )
}
export default Blog;