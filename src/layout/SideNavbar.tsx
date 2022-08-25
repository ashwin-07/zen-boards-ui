import React from 'react'
import { Navbar, NavLink } from '@mantine/core';
import { IconHome2, IconPin } from '@tabler/icons';
import {Link} from 'react-router-dom';

const SideNavbar = () => {
    return (<Navbar p="xs" width={{ base: 200 }} hidden={true}>
      <Navbar.Section >ZenBoards</Navbar.Section>
      <Navbar.Section grow mt="md">
      <NavLink component={Link} to="/" label="Home" icon={<IconHome2 size={24} stroke={1.5} />} active/>
      <NavLink label="Pinned Boards" childrenOffset={28} icon={<IconPin size={24} stroke={1.5} />}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </Navbar.Section>
      <Navbar.Section>
      </Navbar.Section>
    </Navbar>)
}

export default SideNavbar