import React from 'react'

export const Newsletter = () => {
    return (
        <section className='bg-gray-100 w-full gap-5 py-16 flex flex-col items-center'>

            <p className='text-xl font-semibold'>¡Suscribite a nuestro newsletter y te regalamos 10% OFF en tu primera compra!</p>

            <form className='flex flex-col gap-5 justify-center'>
                <input className='bg-transparent border-2 border-gray-400/70 rounded-md px-2 py-1 outline-none shadow-none focus:border-gray-400 transition-all' type="email" placeholder='Email' />
                <span className='text-gray-400 text-sm'>Al registrar y confirmar sus datos, acepta nuestra política de privacidad.</span>
                <button className='font-bold border-2 text-zinc-800/80 hover:text-zinc-800 border-zinc-800/80 hover:border-zinc-800 transition-all rounded-md px-4 py-2 w-fit mx-auto'>Suscribite</button>
            </form>
        </section>
    )
}
