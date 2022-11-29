import Link from 'next/link';

export default function Impressum() {
    return (
        <div className="mx-auto w-fit mt-20 h-fit text-center flex flex-col">
            <h1 className="text-5xl py-5">Impressum</h1>
            <h2 className="text-3xl py-3">Angaben gemäß §5 TMG</h2>
            <p className="text-left">
                Kevin Schüler
                <br />
                Olvenstedter Straße 21 <br />
                39018 Magdeburg
            </p>

            <h2 className="text-3xl py-3">Kontakt</h2>
            <p className="text-left">
                Telefon: +49 (0) 1626063773 <br />
                E-Mail: kevinschueler2000@gmail.com
            </p>
            <p className="text-left">
                Quelle:{' '}
                <a
                    href="https://www.e-recht24.de"
                    className="decoration-white decoration-solid underline">
                    e-recht24.de
                </a>
            </p>
            <Link
                href="/"
                className="rounded-lg border-solid border-slate-200 border-2 p-2 mt-5 hover:border-slate-400 hover:scale-105 hover:text-gray-100">
                Home
            </Link>
        </div>
    );
}
