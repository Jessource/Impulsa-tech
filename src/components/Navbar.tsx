import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-neutral-800 text-yellow-500 text-base py-2">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo e Nome */}
                <div className="flex items-center space-x-2">
                    <Image src="/assets/Logo.svg" alt="Impulsa Tech" width={250} height={50} />
                </div>

                {/* Navegação */}
                <nav className="flex items-center space-x-4 text-sm">
                    <Link href={'/'} className="hover:text-yellow-400 transition">
                        Página Inicial
                    </Link>
                    <Link href="/mission-and-values" className="hover:text-yellow-400 transition">
                        Missão e Valores
                    </Link>
                    <Link href="/platform" className="hover:text-yellow-400 transition">
                        Plataforma
                    </Link>
                    <Link href="/login" className="bg-white text-black px-3 py-1 rounded hover:bg-zinc-200 transition">
                        Entrar
                    </Link>
                    <Link href="/register" className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 transition">
                        Cadastre-se
                    </Link>
                </nav>
            </div>
        </header>
    );
}

    ;

export default Navbar;


