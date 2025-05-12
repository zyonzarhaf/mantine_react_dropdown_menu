import {
  Button,
  Center,
  Container,
  Stack,
  Text,
  Title 
} from '@mantine/core';

const Hero = () => (
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
          <Button size='md'>
            npx create-some-app@latest
          </Button>
          <Button size='md'>
            Start a Demo
          </Button>
        </Stack>
      </Center>
    </Stack>
  </Container>
);

export default Hero;
