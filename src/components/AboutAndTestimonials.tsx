import Image from "next/image";
import Depoimento from "./Depoimento";

export default function AboutAndTestimonials() {
    return (
        <section className="bg-neutral-800 text-white py-16 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-xl font-bold flex items-center justify-center gap-2">
                    <Image src="/assets/sobrenos.svg" alt="Impulsa Tech" width={30} height={30} />
                    Sobre nós
                </h2>

                <p className="mt-4">
                    Nascemos de um sonho compartilhado:

                </p>
                <span className="text-yellow-400 font-semibold">transformar o brilho que vemos em cada mulher em caminhos concretos de realização.</span>
                <p className="mt-2">
                    A Impulsa não é apenas uma plataforma - somos uma comunidade viva, criada com carinho por
                    mulheres que entendem suas lutas diárias. Além disso, dedicamos um cuidado especial às mães solo,
                    guerreiras que equilibram múltiplos mundos enquanto buscam reconstruir ou dar um novo fôlego às suas carreiras.
                    <br /> <br />
                    Quando você se junta a nós, não encontra apenas recursos digitais, mas abraços virtuais e
                    mãos seguras. Somos aquela amiga que acredita em você mesmo quando as dúvidas aparecem.
                    Somos uma rede que sustenta, que compreende seus desafios sem julgamentos e que transforma obstáculos em degraus.
                </p>
                <p className="mt-2 text-yellow-400 font-semibold">Juntas, vamos muito além do saber – vamos realizar.</p>
            </div>

            {/* Depoimentos */}
            <div className="text-center mb-8 text-xl font-bold text-yellow-400 flex justify-center items-center gap-2">
                <Image src="/assets/sobrenos.svg" alt="Impulsa Tech" width={30} height={30} />
                Depoimentos
            </div>

            <Depoimento />
        </section>
    );
}
