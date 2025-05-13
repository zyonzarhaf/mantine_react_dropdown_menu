import { useState } from 'react';
import { useClipboard } from '@mantine/hooks';

import {
  Button,
  Center,
  Code,
  Container,
  Flex,
  Stack,
  Text,
  Title 
} from '@mantine/core';

const Hero = () => {
  const [value] = useState('npx create-some-app@latest');
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Container pt='136px'>
      <Stack gap='50px'>
        <Title fz={'58px'} ta='center'>
          Build powerful digital experiences with ease
        </Title>
        <Text size='lg' ta='center'>
          Create and manage your content effortlessly using a flexible, open-source headless CMS designed for developers and content creators alike. Empower your projects with customizable components and seamless integrations that scale with your needs.
        </Text>
        <Center>
          <Stack>
            <Flex 
              align='center'
              bd='1px solid darkgrey'
              style={{ borderRadius: 'var(--mantine-radius-md)' }}
            >
              <Code pl='md' py='md' pr='xs' bg='none'>
                {value}
              </Code>
              <Button
                size='xs'
                w='60px'
                pr='md'
                pl={0}
                variant='transparent'
                radius='md'
                onClick={() => clipboard.copy(value)}
              >
                {clipboard.copied ? 'Copied!' : 'Copy'} 
              </Button>
            </Flex >
            <Button size='md'>
              Start a Demo
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Container>
  );
};

export default Hero;
