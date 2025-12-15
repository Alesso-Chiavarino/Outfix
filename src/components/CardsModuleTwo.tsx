import React from 'react'
import { CollectionLink } from './CollectionLink'

export const CardsModuleTwo = () => {
    return (
        <section className="container mx-auto">
            <ul className="flex flex-col gap-14 text-white">

                {/* MUJERES / HOMBRES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

                    {/* MUJERES */}
                    <li>
                        <article className="relative overflow-hidden rounded-xl">
                            <img
                                src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_3_A.jpg?v=638451656232770000"
                                alt="Mujeres"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Texto */}
                            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                                    Mujeres
                                </h2>

                                <p className="text-gray-200 text-sm md:text-base max-w-md drop-shadow-md">
                                    Diseños pensados para acompañarte todos los días.
                                    Prendas cómodas, actuales y versátiles que se adaptan a tu ritmo,
                                    sin perder estilo.
                                </p>

                                {/* <CollectionLink link="/women" /> */}
                            </div>
                        </article>
                    </li>

                    {/* HOMBRES */}
                    <li>
                        <article className="relative overflow-hidden rounded-xl">
                            <img
                                src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_3_B.jpg?v=638451656233700000"
                                alt="Hombres"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                                    Hombres
                                </h2>

                                <p className="text-gray-200 text-sm md:text-base max-w-md drop-shadow-md">
                                    Estilo urbano, funcional y atemporal.
                                    Ropa diseñada para el día a día, con materiales de calidad
                                    y un look que nunca pasa de moda.
                                </p>

                                {/* <CollectionLink link="/men" /> */}
                            </div>
                        </article>
                    </li>
                </div>

                {/* NIÑOS */}
                <li className="relative overflow-hidden rounded-xl max-h-[600px]">
                    <article className="relative">
                        <img
                            src="https://res.cloudinary.com/dotaebdx8/image/upload/v1765721598/calvin-12_ybtaij.jpg"
                            alt="Niños"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

                        <div className="absolute bottom-8 left-6 right-6 flex flex-col gap-3">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                                Niños
                            </h2>

                            <p className="text-gray-200 text-sm md:text-base max-w-md drop-shadow-md">
                                Comodidad, resistencia y libertad de movimiento.
                                Prendas pensadas para acompañar cada aventura,
                                todos los días.
                            </p>

                            {/* <CollectionLink link="/kids" /> */}
                        </div>
                    </article>
                </li>

            </ul>
        </section>
    )
}