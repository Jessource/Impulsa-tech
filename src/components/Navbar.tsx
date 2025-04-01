import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-yellow-400  p-6 text-center font-bold">
            <p className="text-2xl">Bem vindo</p>
            <div className="mt-8 flex gap-4 justify-center">
                <Link href="/cursos" className="bg-white px-4 py-2 rounded-md !font-normal">Encontrar um curso</Link>
                <Link href="/projetos" className="bg-white px-4 py-2 rounded-md !font-normal">Fazer um projeto</Link>
                <Link href="/mentorias" className="bg-white px-4 py-2 rounded-md !font-normal">Marcar mentoria</Link>
            </div>
        </nav>
    );
};

export default Navbar;


