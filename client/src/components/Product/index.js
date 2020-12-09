import React from 'react'
import { Container,PhotoWrapper, Back, Wrapper, Image, Title, Price, Text, BackArrow, Tags } from './productElements'

function Product({ name, imageFileName, manufacturer, description, price, ram, processor, screen }) {
    return (
        <>
            <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <PhotoWrapper>
                    <Back to='/'><BackArrow></BackArrow>Home</Back>
                    <Image src={imageFileName}></Image>
                </PhotoWrapper>
                <Wrapper>
                    <Title>{manufacturer} {name}</Title>
                    <Price>${price}</Price>
                    <Tags>{screen}</Tags>
                    <Tags>{processor}</Tags>
                    <Tags>{ram}GB RAM</Tags>
                    <Text>{description}</Text>
                </Wrapper>
            </Container>
        </>
    )
}

export default Product
