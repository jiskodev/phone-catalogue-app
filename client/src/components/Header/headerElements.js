import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
`

export const Logo = styled.h2`
    font-size: 16px;
    font-weight: 500;
`

export const LinkToPage = styled(Link)`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    color: black;
`