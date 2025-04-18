import Image from 'next/image';

export default function Depoimento() {
    return (
        <section className="bg-neutral-800 py-10 px-2 text-white">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border border-0 rounded-lg p-6 mb-10">
                    <Image
                        src="/assets/avatar1.svg"
                        alt="Ana Maria"
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                    />
                    <div className="text-sm p-4 border-[#FFB000] border rounded-lg bg-[#1E1E1E]">
                        <p className="mb-4">
                            “Ser mãe solo significava ouvir muitos ‘nãos’ disfarçados, portas que se fechavam quando
                            mencionava minhas responsabilidades familiares. A maternidade, que deveria ser vista
                            como uma escola de gestão e resiliência, era tratada como uma limitação. Foi quando
                            encontrei na Impulsa não apenas oportunidades, mas um olhar que enxergava minha
                            realidade completa. Hoje, trabalho em uma empresa que valoriza não apenas minhas
                            habilidades técnicas, mas também as competências que desenvolvi equilibrando uma
                            família sozinha. A Impulsa não mudou apenas minha carreira — transformou a forma como
                            eu mesma enxergo meu valor no mundo profissional.”
                        </p>
                        <p className="font-semibold">Ana Maria Aparecida da Silva</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border border-0 rounded-lg p-6 mb-10">
                    <Image
                        src="/assets/avatar2.svg"
                        alt="Ana Maria"
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                    />
                    <div className="text-sm p-4 border-[#FFB000] border rounded-lg bg-[#1E1E1E]">
                        <p className="mb-4">
                            “Antes da Impulsa, eu carregava sonhos adormecidos e uma 
                            voz interior que insistia que `não era para mim`. Hoje, não apenas trabalho na área que 
                            fazia meu coração bater mais forte, mas me reconheço como a profissional capaz que sempre 
                            fui – só precisava de alguém que também acreditasse. A Impulsa não foi apenas uma plataforma,
                            foi o espelho que me mostrou a mulher poderosa que eu nem sabia que existia dentro de mim.”
                        </p>
                        <p className="font-semibold">Mariana S.</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 
