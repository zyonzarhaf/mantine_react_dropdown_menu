import React from 'react';

import {
  Button,
  Center,
  Divider,
  Flex,
  Menu,
  NavLink,
  Stack,
  Text,
  useMantineTheme
} from '@mantine/core';

const DropdownMenu = ({ mainSection, lowerSection }) => {
  const theme = useMantineTheme();

  return (
    <Center>
      <Flex gap={50}>
        {mainSection.map((menu, idx) => (
          <Menu 
            key={idx}
            p={0}
            offset={25}
            trigger='hover'
            transitionProps={{
              transition: 'fade-down',
              duration: 300,
              exitDuration: 0
            }}
            styles={{
              dropdown: {
                width: '90%',
                position: 'absolute',
                margin: 'auto',
                left: 0,
                right: 0,
                background: 'white',
                color: theme.colors.dark[4],
                border: 'none'
              },
              label: {
                color: theme.colors.dark[4]
              },
              itemLabel: {
                color: theme.colors.dark[4]
              },
            }}
          >
            <Menu.Target> 
              <Button
                color='light'
                variant='transparent'
                rightSection={'⌄' }
              >
                {menu.label}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Flex
                align='start'
                justify='space-between'
                h={350}
              >
                {menu.dropdown.map((el, idx) => (
                  <React.Fragment key={idx}>
                    <Stack p='lg' align='start'>
                      <Menu.Label>
                        {el.heading}
                      </Menu.Label>
                      {el.links.map((link, idx) => (
                        <Menu.Item
                          key={idx}
                          leftSection={link.icon ?? null}
                          color={theme.colors.blue[8]}
                        >
                          <Text>{link.label}</Text>
                          <Text size='xs'>{link.description}</Text>
                        </Menu.Item>
                      ))}
                    </Stack>
                    {idx !== (menu.dropdown.length - 1) &&
                      <Divider orientation='vertical' color='lightgrey' />}
                  </React.Fragment>
                ))}
              </Flex>
              {lowerSection?.length > 0 &&
                <>
                  <Divider color='lightgrey' />
                  <Flex
                    justify='flex-start'
                    align='center'
                    p='lg'
                  >
                    {lowerSection.map((el, idx) => (
                      <NavLink
                        key={idx}
                        href={el.url}
                        label={el.label}
                        leftSection={el.icon ?? null}
                        w='fit-content'
                      />
                    ))}
                  </Flex>
                </>
              }
            </Menu.Dropdown>
          </Menu>
        ))}
      </Flex >
    </Center>
  );
};

export default DropdownMenu;
