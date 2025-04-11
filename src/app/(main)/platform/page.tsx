"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Platform = () => {
  const router = useRouter()
  return (
    <section className="bg-neutral-800 text-white py-16 px-4 h-full flex items-center">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-bold flex items-center justify-center gap-2">
          <Image src="/assets/sobrenos.svg" alt="Impulsa Tech" width={30} height={30} />
          Plataforma
        </h2>
        <p className="mt-2">
          A Impulsa é uma plataforma que impulsiona mulheres em suas carreiras através de capacitação 
          personalizada, networking estratégico e visibilidade no mercado de trabalho.
          <br /> <br />
          O primeiro passo é efetuar o seu cadastro. Em seguida, escolha uma trilha e se aprofunde em seu portfólio.
          Oferecemos workshops especializados e mentorias com profissionais, além de uma comunidade de apoio que 
          compreende os desafios femininos no ambiente profissional. Conectamos talentos diretamente às empresas 
          que valorizam diversidade e excelência. Nosso propósito vai além da colocação profissional: 
          construímos jornadas de sucesso baseadas em conhecimento, oportunidades e autoconfiança.

          <p className="mt-4 text-yellow-400">
            Bem-vinda à Impulsa. Transformamos potencial em realizações!
          </p>
          <button
            onClick={() => router.push('/login')} 
            className="py-2 mt-6 text-[#232322] bg-yellow-500 
              font-bold rounded-full shadow-md hover:bg-yellow-600 w-[200px]"
          >
            Entrar na plataforma
          </button>
        </p>
      </div>
    </section>
  )
}

export default Platform