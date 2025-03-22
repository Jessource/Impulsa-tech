import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".sidebar") && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <div className="relative">
            <button
                className="p-2 m-2 text-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>
            <div
                className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} sidebar`}
            >
                <nav className="p-4">
                    <ul className="space-y-2">
                        <li><Link href="/projetos" className="block" onClick={() => setIsOpen(false)}>Projetos</Link></li>
                        <li><Link href="/cursos" className="block" onClick={() => setIsOpen(false)}>Cursos</Link></li>
                        <li><Link href="/mentorias" className="block" onClick={() => setIsOpen(false)}>Mentorias</Link></li>
                        <li><Link href="/valores" className="block" onClick={() => setIsOpen(false)}>Valores</Link></li>
                        <li><Link href="/depoimentos" className="block" onClick={() => setIsOpen(false)}>Depoimentos</Link></li>
                        <li><Link href="/sobre" className="block" onClick={() => setIsOpen(false)}>Sobre Nós</Link></li>
                    </ul>
                    <div className="mt-4 border-t pt-4 text-sm">
                        <p>*Bolsas</p>
                        <p>*Certificações</p>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
