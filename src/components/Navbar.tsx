import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-yellow-400 p-4 text-center font-bold">
            <p>Bem-vindo!</p>
            <div className="mt-2 flex gap-4 justify-center">
                <Link href="/cursos" className="bg-white px-4 py-2 rounded-md">Encontrar um curso</Link>
                <Link href="/projetos" className="bg-white px-4 py-2 rounded-md">Fazer um projeto</Link>
                <Link href="/mentorias" className="bg-white px-4 py-2 rounded-md">Marcar mentoria</Link>
            </div>
        </nav>
    );
};

export default Navbar;


