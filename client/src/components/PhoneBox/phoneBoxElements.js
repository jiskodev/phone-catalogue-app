import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: black;

`

export const Wrapper = styled(motion.div)`
    width: 420px;
    margin-bottom: 120px;
    margin-left: 15px;
    margin-right: 15px;
    @media (max-width: 468px) {
        width: 320px;
        margin-left: 0;
        margin-right: 0;
    }
`

export const PhotoWrapper = styled.div`
    width: 100%;
    height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    
    background-color: #F2F2F2;
    @media (max-width: 768px) {
        height: 480px;
    }
`

export const PhoneImage = styled.img`
    max-height: 70%;
    width: auto;
    max-width: 90%;
    transition: 0.2s;
    :hover {
    transform: scale(1.04);
    }
`

export const PhoneTitle = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: black;
    margin-bottom: 14px;
`

export const PhonePrice = styled.p`
    font-size: 14px;
    color: #4A4A4A;
`