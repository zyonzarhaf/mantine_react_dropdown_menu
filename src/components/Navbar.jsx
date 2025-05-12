import { Button, Group, } from '@mantine/core';
import DropdownMenu from './DropdownMenu';
import { lowerSection, mainSection } from '../data';

const Navbar = () => (
  <Group justify='center' p='lg'>
    <DropdownMenu
      mainSection={mainSection} 
      lowerSection={lowerSection}
    />
    <Button>Contact</Button>
    <Button>Get Started</Button>
  </Group>
);

export default Navbar;
