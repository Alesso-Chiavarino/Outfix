import React from 'react'

export const CardsModuleTwo = () => {
    return (
        <section className='container'>
            <ul className='flex flex-col gap-14 text-white'>
                <div className='grid grid-cols-2 gap-14'>
                    <li>
                        <article className='relative'>
                            <div>
                                <img src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_3_A.jpg?v=638451656232770000" alt="pic" />
                            </div>
                            <div className='absolute bottom-5 left-5 flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold drop-shadow-md'>Mujeres</h2>
                                <span className='text-gray-200 drop-shadow-sm'>
                                    Calvin Klein es una marca de moda y estilo de vida global que ejemplifica audacia progresiva y una estética seductora y a menudo minimalista.
                                </span>
                                <button className='px-2 py-1 border-2 border-gray-50 w-fit'>Ir a la colección</button>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className='relative'>
                            <div>
                                <img src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_3_B.jpg?v=638451656233700000" alt="pic" />
                            </div>
                            <div className='absolute bottom-5 left-5 flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold drop-shadow-md'>Hombres</h2>
                                <span className='text-gray-200 drop-shadow-sm'>
                                    Calvin Klein es una marca de moda y estilo de vida global que ejemplifica audacia progresiva y una estética seductora y a menudo minimalista.
                                </span>
                                <button className='px-2 py-1 border-2 border-gray-50 w-fit'>Ir a la colección</button>
                            </div>
                        </article>
                    </li>
                </div>
                <li className='max-h-[600px] overflow-hidden relative'>
                    <article className='relative'>
                        <div>
                            <img src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_4_A.jpg?v=638451656235270000" alt="pic" />
                        </div>
                        <div className='absolute top-[470px] left-5 flex flex-col gap-2'>
                            <h2 className='text-2xl font-bold drop-shadow-md'>Niños</h2>
                            <span className='text-gray-200 drop-shadow-sm'>
                                Calvin Klein es una marca de moda y estilo de vida global que ejemplifica audacia progresiva y una estética seductora y a menudo minimalista.
                            </span>
                            <button className='px-2 py-1 border-2 border-gray-50 w-fit'>Ir a la colección</button>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    )
}
