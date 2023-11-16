import { Card, Box, Text, Badge, Button, Group } from '@mantine/core';

interface PosteosForoProps {
  title: string;
  description: string;
  key: string;
}

const AccordionForo: React.FC<PosteosForoProps> = ({ title, description }) => {
  
  return (
    <div className='w-[340px] md:w-[940px]'>
      <Card>
        <Card.Section>
          <Box>
            <Text size="xl" weight={500}>{title}</Text>
            <Text size="sm" weight={300}>{description}</Text>
          </Box>
        </Card.Section>
      </Card>
    </div>
  );
};

export default AccordionForo;
