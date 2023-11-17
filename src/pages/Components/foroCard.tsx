import { Card, Box, Text, Badge, Button, Group } from '@mantine/core';

interface PosteosForoProps {
  title: string;
  description: string;
  key: string;
}

const ForoCard: React.FC<PosteosForoProps> = ({ title, description }) => {
  
  return (
    <div className='w-[340px] md:w-[940px]'>
      <Card color='orange' withBorder className='shadow-lg rounded-lg p-8 mb-2'>
        <Card.Section>
          <Box>
            <Text size="xl" weight={700} className='text-[#144F60]'>{title}</Text>
            <Text size="sm" weight={450}>{description}</Text>
          </Box>
        </Card.Section>
      </Card>
    </div>
  );
};

export default ForoCard;
