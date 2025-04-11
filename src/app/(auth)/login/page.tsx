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
                    <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
                    <form className="mt-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">E-mail</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Senha</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 mt-6 text-yellow-500 bg-black font-bold rounded-full shadow-md hover:bg-yellow-600"
                        >
                            Entrar
                        </button>
                    </form>

                    {/* Cadastro */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Não tem uma conta?
                        </p>
                        <div className="mt-2 inline-block px-4 py-2 rounded-md">
                            <Link href="/register" className="text-yellow-500 font-semibold hover:underline">
                                Cadastre-se
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}