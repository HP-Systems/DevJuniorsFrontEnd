import React, { useState } from 'react';

export const EtapasProyecto = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full p-4">
      {/* Navegación de etapas */}
      <nav aria-label="Progress" className="w-full">
        <ol role="list" className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
          <li className={`flex-1 ${currentStep === 1 ? 'border-red-600' : 'border-gray-300'} border-l-4 md:border-l-0 md:border-t-4`}>
            <a className="group flex flex-col py-2 pl-4 md:pl-0 md:pt-4">
              <span className={`text-sm font-medium ${currentStep === 1 ? 'text-red-600' : 'text-gray-500'}`}>
                Etapa 1: En Proceso
              </span>
              <span className="text-sm font-medium">Analizando detalles de funcionalidades y diseño</span>
            </a>
          </li>
          <li className={`flex-1 ${currentStep === 2 ? 'border-black' : 'border-gray-300'} border-l-4 md:border-l-0 md:border-t-4`}>
            <a className="group flex flex-col py-2 pl-4 md:pl-0 md:pt-4">
              <span className={`text-sm font-medium ${currentStep === 2 ? 'text-black' : 'text-gray-600'}`}>
                Etapa 2: En Desarrollo
              </span>
              <span className="text-sm font-medium">El proyecto está en desarrollo y avances entregables</span>
            </a>
          </li>
          <li className={`flex-1 ${currentStep === 3 ? 'border-gray-700' : 'border-gray-300'} border-l-4 md:border-l-0 md:border-t-4`}>
            <a className="group flex flex-col py-2 pl-4 md:pl-0 md:pt-4">
              <span className={`text-sm font-medium ${currentStep === 3 ? 'text-gray-700' : 'text-gray-500'}`}>
                Etapa 3: Finalizado
              </span>
              <span className="text-sm font-medium">El proyecto ha finalizado con éxito. Esperamos que los resultados hayan sido de su agrado.</span>
            </a>
          </li>
        </ol>
      </nav>

      {/* Foro de comentarios */}
      <div className="w-full mt-8 bg-white p-6 rounded-lg shadow-lg">
        {currentStep === 1 && (
          <div>
            <h3 className="text-lg font-semibold">Foro de la Etapa 1</h3>
            <p className="text-sm">Comentarios relacionados con la fase de análisis y diseño.</p>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h3 className="text-lg font-semibold">Foro de la Etapa 2</h3>
            <p className="text-sm">Comentarios sobre el desarrollo y avances.</p>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h3 className="text-lg font-semibold">Foro de la Etapa 3</h3>
            <p className="text-sm">Comentarios finales y evaluación del proyecto.</p>
          </div>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={handleNextStep}
          disabled={currentStep === 3}
          className={`px-4 py-2 rounded-md ${currentStep === 3 ? 'bg-gray-200' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
