import { Card, Box, Text, Badge, Button, Group } from '@mantine/core';

interface PosteosForoProps {
  title: string;
  description: string;
  key: string;
  type: string;
}

const ForoCard: React.FC<PosteosForoProps> = ({ title, description, type}) => {
  
  return (
    <div className='w-[300px] md:w-[640px] xl:w-[950px]'>
      <Card color='orange' withBorder className='shadow-md rounded-lg p-8 mb-2'>
        <Card.Section>
          <Box>
            <Text size='md' weight={500} className='text-gray-400'>{type}</Text>
            <Text size="xl" weight={700} className='text-[#144F60]'>{title}</Text>
            <Text size="sm" weight={450}>{description}</Text>
          </Box>
        </Card.Section>
      </Card>
    </div>
  );
};

export default ForoCard;
