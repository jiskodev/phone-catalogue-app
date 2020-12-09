import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {MdArrowBack} from 'react-icons/md'
import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
    width: 100%;
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        height: auto;
    }
`

export const Wrapper = styled.div`
    width: 50%;
    min-width: 400px;
    margin: 0 auto;
    padding: 4%;
    @media (max-width: 768px ) {
        width: 100%;
        min-width: 100%;
    }
`

export const Back = styled(Link)`
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 22px;
    :hover {
        font-weight: 500;
    }
`


export const BackArrow = styled(MdArrowBack)`
    color: black;
`


export const PhotoWrapper = styled.div`
    position: relative;
    width: 50%;
    min-width: 400px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    overflow: hidden;
    @media (max-width: 768px ) {
        width: 100%;
        min-width: 100%;
    }
`

export const Image = styled.img`
    height: 80%;
    max-height: 600px;
`

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        font-size: 30px;
        margin-bottom: 30px;
    }
`

export const Price = styled.p`
    font-size: 32px;
    color: #4a4a4a;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
`
export const Tags = styled.span`
    border-radius: 16px;
    background-color: black;
    color: white;
    text-align: center;
    padding: 8px 24px;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    margin-right: 20px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 30px;
    }
`

export const SmallText = styled.p``
export const Text = styled.p`
    font-size: 18px;
    color: black;
    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 30px;
    }
`