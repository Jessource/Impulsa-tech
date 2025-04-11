import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Hexagonal Background */}
            <div className="absolute inset-0 bg-[url('/assets/LoginBackground.svg')]"></div>
            <div className="z-10">
                <div className="flex justify-center mb-6">
                    <Image src="/assets/Logo.svg" alt="Impulsa Tech" width={500} height={50} />
                </div>
                <div className="w-full p-8 bg-white rounded-2xl shadow-lg">
                    {/* Login Form */}
                    <h2 className="text-3xl font-bold text-center text-gray-800">Cadastro</h2>

                    {/* Fundo hexagonal */}
                    <div className="absolute inset-0 bg-[url('/bg-hexagonal.png')] bg-cover opacity-30"></div>

                    {/* Card de Cadastro */}
                    <div className="relative bg-white p-8 rounded-lg  w-full max-w-md">
                        {/* Logo */}


                        <form className="space-y-3">
                            {/* Nome */}
                            <p>Nome Completo</p>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700"
                            />

                            {/* Email */}
                            <p>E-mail</p>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700"
                            />

                            {/* Telefone */}
                            <p>Telefone</p>
                            <input
                                type="tel"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700"
                            />

                            {/* Senha */}
                            <p>Senha</p>
                            <input
                                type="password"
                                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700"
                            />

                            {/* Estado */}
                            <p>Qual a sua faixa étaria?</p>
                            <select className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-700">
                                <option>Selecione</option>
                                <option>SP</option>
                                <option>RJ</option>
                                <option>MG</option>
                            </select>

                            {/* Cidade */}
                            <p>Qual a sua etnia?</p>
                            <select className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-700">
                                <option>Selecione</option>
                                <option>São Paulo</option>
                                <option>Rio de Janeiro</option>
                            </select>

                            {/* Gênero */}
                            <p>Você é mãe?</p>
                            <select className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-700">
                                <option>Selecione</option>
                                <option>Sim</option>
                                <option>Não</option>
                            </select>

                            {/* Áreas de interesse */}
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-900">Selecione suas áreas de interesse:</label>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Frontend', 'Backend', 'Full Stack', 'Design',
                                        'Gestão de Projetos', 'QA', 'Segurança', 'IA',
                                        'Automação', 'Blockchain', 'Dados', 'Cloud', 'Redes',
                                    ].map((area) => (
                                        <span
                                            key={area}
                                            className="px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-200 text-gray-700"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Nível de conhecimento */}
                            <p>Qual seu nível de conhecimento na(s) área(s) de interesse? (Em caso de mais de uma área de interesse, selecione o da maioria)</p>
                            <select className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-700">
                                <option>Selecione</option>
                                <option>Iniciante</option>
                                <option>Intermediário</option>
                                <option>Avançado</option>
                            </select>

                            {/* Botão */}
                            <button
                                type="submit"
                                className="w-full py-2 mt-6 text-yellow-500 bg-black font-bold rounded-full shadow-md hover:bg-yellow-600"
                            >
                                Concluir cadastro
                            </button>
                        </form>

                        {/* Link login */}
                        <p className="mt-4 text-center text-sm text-black">
                            Já tem uma conta?{' '}
                            <Link href="#" className="text-black font-medium hover:underline">
                                Faça login
                            </Link>
                        </p>
                    </div>



                    {/* Cadastro */}

                </div>
            </div>
        </div>
    );
}