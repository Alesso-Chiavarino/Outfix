import { ICategory } from "@/models/ICategory"
import Link from "next/link"


export const CardsModuleThree = ({ categories }: { categories: ICategory[] }) => {
    return (
        <section className="bg-zinc-900 w-full flex justify-center py-10">
            <div className="container">
                <ul className="grid grid-cols-4 items-center gap-5">
                    {categories && categories.map(category => (
                        <li className="relative overflow-hidden" key={category.id}>
                            <Link href={`/${category.slug}`}>
                                <img className="h-full w-full object-cover" src={category.banner} alt={category.title} />
                            </Link>
                            <h3 className="absolute bottom-3 left-3 text-2xl tracking-wide text-white font-bold">{category.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
