import { Accordion } from '@mantine/core';

interface PosteosForoProps {
  title: string;
  description: string;
  key: string;
}

const AccordionForo: React.FC<PosteosForoProps> = ({ title, description, key }) => {
  
  return (
    <div className='w-[340px] md:w-[940px]'>
      {/* <Accordion variant='separated' radius='md'>
        <Accordion.Item key={key} value={title}>
          <Accordion.Control>{title}</Accordion.Control>
          <Accordion.Panel>{description}</Accordion.Panel>
        </Accordion.Item>
      </Accordion> */}
    </div>
  );
};

export default AccordionForo;
