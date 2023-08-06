import React, { useState } from 'react';
import CustomizedTabs from './Components/tabs';
import Encontrados from './encontrados'; // Import Encontrados component
import Perdidos from './perdidos'; // Import Perdidos component
import Navigation from './Components/navigation';
import {useMediaQuery} from "@mantine/hooks";

const Publicaciones = () => {
  const [value, setValue] = useState<number>(0);
  const mediumScreen = useMediaQuery('(min-width: 768px)');
  // Actualizar el valor de la tab seleccionada
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className ='background h-screen overflow-hidden'>
        <div className="h-auto flex items-center flex-col justify-start font-Poppins">
            <div className = 'mt-10'>
              <CustomizedTabs value={value} onChange={handleChange} />
            </div>
            {value === 1 ? <Perdidos /> : <Encontrados />}
        </div>
        {mediumScreen ?
        <nav><Navigation/></nav> : <footer><Navigation/></footer>}

    </div>
  );
};

export default Publicaciones;
