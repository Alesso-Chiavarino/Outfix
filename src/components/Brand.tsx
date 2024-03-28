import { Fira_Sans_Condensed } from 'next/font/google';
import Link from 'next/link';

const firaSansCondensed = Fira_Sans_Condensed({
    subsets: ["latin"],
    weight: ['400'],
});

export const Brand = () => {
    return (
        <Link href="/">
            <h1 className={`${firaSansCondensed.className} text-3xl tracking-wide`}>Outfix</h1>
        </Link>
    )
}
