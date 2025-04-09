import Image from "next/image";

const Navbar = () => {
    // components/Header.js
    return (
        <header className="bg-neutral-800 text-yellow-500 text-base py-2">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo e Nome */}
                <div className="flex items-center space-x-2">
                    <Image src="/assets/Logo.svg" alt="Impulsa Tech" width={250} height={50} />
                </div>

                {/* Navegação */}
                <nav className="flex items-center space-x-4 text-sm">
                    <a href="#" className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 transition">
                        Página Inicial
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition">
                        Missão e Valores
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition">
                        Plataforma
                    </a>
                    <a href="#" className="bg-white text-black px-3 py-1 rounded hover:bg-zinc-200 transition">
                        Entrar
                    </a>
                    <a href="#" className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 transition">
                        Cadastre-se
                    </a>
                </nav>
            </div>
        </header>
    );
}

    ;

export default Navbar;


