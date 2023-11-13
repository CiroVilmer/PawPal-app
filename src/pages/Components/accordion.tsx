import {Accordion} from '@mantine/core';



const groceries = [
        {
          value: '¿Cómo puedo ayudar a un perro callejero?',
          description:
            'Quisiera saber como puedo ayudar a un perro callejero que vive en mi barrio, no se si adoptarlo o no, pero me da mucha pena verlo en la calle. ¿Qué puedo hacer?',
        },
        {
          value: 'Juntada de perros salchicha en el parque el domingo',
          description:
            'Este domingo a las 16hs en el parque de la ciudad se va a hacer una juntada de perros salchicha, todos los que quieran ir son bienvenidos.',
        },
        {
          value: 'Adopte un perro salchicha y es un gordo bachicha',
          description:
            'Hola, adopte un perro salchicha y es un gordo bachicha, no se que hacer, no para de comer y no se si es normal. ¿Alguien sabe si es normal?',
        },
      ];
const AccordionForo : React.FC = () => {
    // function body goes here
    
    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control >{item.value}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <div className='w-[940px]'>
            <Accordion variant='separated' radius={"md"} >{items}</Accordion>
        </div>
    )
      
};

export default AccordionForo;