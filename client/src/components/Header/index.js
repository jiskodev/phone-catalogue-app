import React from 'react'
import { Container } from '../commonElements/commonElements'
import { LinkToPage, Logo, Wrapper } from './headerElements'

function Header() {
    return (
        <>
            <Container>
                <Wrapper>
                    <LinkToPage to='/'><Logo>PHONE CATALOGUE</Logo></LinkToPage>
                    <LinkToPage to='/admin'>Admin</LinkToPage>
                </Wrapper>
            </Container>
        </>
    )
}

export default Header
