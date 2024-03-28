import Link from "next/link"


export const CardsModuleThree = () => {
    return (
        <section className="bg-zinc-900 w-full flex justify-center py-10">
            <div className="container">
                <ul className="grid grid-cols-4 items-center gap-5">
                    <li className="relative overflow-hidden">
                        <Link href="/ropa-interior">
                            <img className="h-full w-full object-cover" src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_1.jpg?v=638451656227430000" alt="pic" />
                        </Link>
                        <h3 className="absolute bottom-3 left-3 text-2xl tracking-wide text-white font-bold">Ropa Interior</h3>
                    </li>

                    <li className="relative overflow-hidden">
                        <Link href="/ropa-interior">
                            <img className="h-full w-full object-cover" src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_2.jpg?v=638451656228530000" alt="pic" />
                        </Link>
                        <h3 className="absolute bottom-3 left-3 text-2xl tracking-wide text-white font-bold">Chomba</h3>
                    </li>

                    <li className="relative overflow-hidden">
                        <Link href="/ropa-interior">
                            <img className="h-full w-full object-cover" src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_3.jpg?v=638451656229930000" alt="pic" />
                        </Link>
                        <h3 className="absolute bottom-3 left-3 text-2xl tracking-wide text-white font-bold">Buzos</h3>
                    </li>

                    <li className="relative overflow-hidden">
                        <Link href="/ropa-interior">
                            <img className="h-full w-full object-cover" src="https://www.calvinklein.ar/arquivos/MAR_2024_MODULO_2_CARRUSEL_4.jpg?v=638451656231370000" alt="pic" />
                        </Link>
                        <h3 className="absolute bottom-3 left-3 text-2xl tracking-wide text-white font-bold">Remeras</h3>
                    </li>
                </ul>
            </div>
        </section>
    )
}
