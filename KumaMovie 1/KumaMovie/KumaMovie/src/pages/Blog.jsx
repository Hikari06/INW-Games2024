import infos from '../../contato.json'


function Blog(){
    return (
        <section className="pt-6 pb-6 bg-primary-claro">
            <div className="max-w-screen-xl mx-auto">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-primary-ocre text-3xl font-extrabold sm:text-4xl">Comunidade</h1>
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
                                        <p className="text-primary-ocre text-sm duration-150 group-hover:text-gray-800">{items.total}</p><p>{items.coment}</p>
                                        <hr className='bg-primary-ocre' />
                                    </div>
                                </a>
                            </li>
                        ))
                    } 
                </ul>
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