'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const [selectedMentor, setSelectedMentor] = useState(0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Seção de cursos */}
      <h2 className="text-xl font-bold text-center mb-4 text-2xl">Indicados para você</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {[1, 2, 3].map((course, index) => (
          <div key={index} className="bg-purple-200 p-8 rounded-md text-center">
            <h3 className="font-bold mb-2 text-xl">Curso de Front-End</h3>
            <button className="bg-black text-white px-4 py-2 rounded mt-4">Acessar</button>
          </div>
        ))}
      </div>
      <p className="text-right text-sm text-black-600 cursor-pointer font-semibold">Ver mais cursos</p>

      {/* Seção de mentoras */}
      <h2 className="text-xl font-bold text-center mt-8 mb-4">Chame sua mentora</h2>
      <div className="flex justify-center gap-4">
        {[0, 1, 2, 3, 4].map((mentor) => (
          <div
            key={mentor}
            className={`p-2 border-2 rounded-lg cursor-pointer ${selectedMentor === mentor ? 'border-purple-500' : 'border-gray-300'}`}
            onClick={() => setSelectedMentor(mentor)}
          >
            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-gray-400">Imagem</span>
            </div>
            <p className="text-center mt-2 text-sm">Fulana</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-4 text-sm text-black-600 cursor-pointer flex justify-center items-center gap-1 font-semibold">
        Ver mais mentoras <ChevronRight size={16} />
      </p>
    </div>
  );
}
