import styled from '@emotion/styled'
import { Avatar } from '@mantine/core'
import React from 'react'

type Props = {}

const HeaderContainer = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: row;
    height: 50px;
    float: right

`

const Header = (props: Props) => {
    return (
        <HeaderContainer>
            <Avatar color="cyan" radius="xl">MK</Avatar>
        </HeaderContainer>
    )
}

export default Header