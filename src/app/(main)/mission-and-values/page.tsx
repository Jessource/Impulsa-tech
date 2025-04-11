"use client";
import Image from 'next/image';
import React from 'react'
const MissionAndValues = () => {
  return (
    <section className="bg-neutral-800 text-white py-16 px-4 h-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-bold flex items-center justify-center gap-2">
          <Image src="/assets/sobrenos.svg" alt="Impulsa Tech" width={30} height={30} />
          Missão
        </h2>
        <p className="mt-2">
          Nossa missão é cultivar transformações profundas através da tríade que move 
          montanhas: educação que liberta, conexões que abrem portas e visibilidade que quebra barreiras. 
          Sonhamos e construímos, dia após dia, um futuro onde nenhum talento feminino 
          fique escondido nas sombras das circunstâncias, onde cada mulher possa florescer profissionalmente, 
          independente dos ventos contrários que tenha enfrentado em sua jornada.
          <br/> <br />
          Carregamos a convicção inabalável de que, ao entrelaçarmos nossas histórias, 
          experiências e forças, estamos tecendo um novo mercado de trabalho – um ambiente mais justo, 
          acolhedor e repleto de possibilidades para todas. Não é apenas sobre criar oportunidades isoladas, 
          mas sobre redesenhar todo um sistema para que a igualdade deixe de ser sonho e se torne nossa realidade 
          compartilhada.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-xl font-bold flex items-center justify-center gap-2">
          <Image src="/assets/sobrenos.svg" alt="Impulsa Tech" width={30} height={30} />
          Valores
        </h2>
        <div className="grid grid-cols-3 mt-12">
          <p className="mt-2 flex gap-6">
            <div className="mt-3">
              <Image src="/assets/message.svg" alt="Impulsa Tech" width={100} height={100} />
            </div>
            <div>
              <p className="mt-2 text-yellow-400 font-semibold text-xl">Empoderamento</p>
              Acreditamos profundamente no potencial transformador que habita em cada mulher. 
              Não apenas motivamos, mas fornecemos as ferramentas necessárias para que você 
              redesenhe sua história profissional e conquiste seu espaço no mercado com confiança e autoridade.
            </div>
          </p>
          <p className="mt-2 flex gap-6">
            <div className="mt-3">
              <Image src="/assets/message.svg" alt="Impulsa Tech" width={100} height={100} />
            </div>
            <div>
              <p className="mt-2 text-yellow-400 font-semibold text-xl">Acolhimento</p>
              Cultivamos um porto seguro onde sua voz é ouvida e sua jornada é compreendida. 
              Em nosso espaço, cada experiência é valorizada, cada dúvida respeitada, e cada 
              passo celebrado, permitindo que você se sinta verdadeiramente em casa.
            </div>
          </p>
          <p className="mt-2 flex gap-6">
            <div className="mt-3">
              <Image src="/assets/message.svg" alt="Impulsa Tech" width={100} height={100} />
            </div>
            <div>
              <p className="mt-2 text-yellow-400 font-semibold text-xl">Desenvolvimento</p>
              Desenhamos jornadas de aprendizado personalizadas que acompanham seu ritmo e suas necessidades. 
              Nossas mentorias e capacitações não apenas transmitem conhecimento, mas despertam habilidades
              adormecidas e preparam você para abraçar desafios com preparação e confiança.
            </div>
          </p>
        </div>
        <div className="flex justify-center mt-12 gap-12">
          <p className="mt-2 flex gap-6 max-w-sm">
            <div className="mt-3">
              <Image src="/assets/message.svg" alt="Impulsa Tech" width={100} height={100} />
            </div>
            <div>
              <p className="mt-2 text-yellow-400 font-semibold text-xl">Conexão</p>
              Somos tecelãs de oportunidades, criando pontes significativas entre mulheres talentosas
              e empresas visionárias. Essas conexões vão além do profissional são sementes de transformação
              social que florescem em novos paradigmas no mundo do trabalho.
            </div>
          </p>
          <p className="mt-2 flex gap-6 max-w-sm">
            <div className="mt-3">
              <Image src="/assets/message.svg" alt="Impulsa Tech" width={100} height={100} />
            </div>
            <div>
              <p className="mt-2 text-yellow-400 font-semibold text-xl">Visibilidade</p>
              Iluminamos talentos que por muito tempo permaneceram nas sombras. Criamos palcos onde suas
              competências ganham destaque, seu conhecimento é reconhecido, e sua presença profissional ressoa,
              mostrando ao mundo a força e a excelência do trabalho feminino.
            </div>
          </p>
        </div>
      </div>
    </section>
  )
}

export default MissionAndValues