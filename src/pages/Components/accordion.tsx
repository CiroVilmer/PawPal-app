import { Accordion } from '@mantine/core';

interface PosteosForoProps {
  title: string;
  description: string;
}

const AccordionForo: React.FC<PosteosForoProps> = ({ title, description }) => {
  return (
    <div className='w-[340px] md:w-[940px]'>
      <Accordion variant='separated' radius='md'>
        <Accordion.Item value={title}>
          <Accordion.Control>{title}</Accordion.Control>
          <Accordion.Panel>{description}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionForo;
