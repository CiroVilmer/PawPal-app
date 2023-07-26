import React, { useState } from 'react';
import CustomizedTabs from './Components/tabs';
import Encontrados from './encontrados'; // Import Encontrados component
import Perdidos from './perdidos'; // Import Perdidos component
import Navigation from './Components/navigation';
import Link from 'next/link';

const Publicaciones = () => {
  const [value, setValue] = useState<number>(0);

  // Actualizar el valor de la tab seleccionada
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
        <div className="h-auto flex items-center flex-col justify-start mt-10">
            <h1 className="mb-10 font-semibold text-xl font-mono text-pink-400">Publicaciones</h1>
            <div>
              <CustomizedTabs value={value} onChange={handleChange} />
              {value === 0 ? <Perdidos /> : <Encontrados />}            
            </div>
        </div>
        <footer><Navigation></Navigation></footer>

    </div>
  );
};

export default Publicaciones;
