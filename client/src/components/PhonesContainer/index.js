import React from 'react'
import { Container, PhonesWrapper } from '../commonElements/commonElements'
import PhoneBox from '../PhoneBox'
import { useSelector } from 'react-redux'

function PhonesContainer({ admin }) {
    const phones = useSelector((state) => state.phones)
    return (
        <>
            <Container>
                <PhonesWrapper>
                    {phones.map((phone) => (
                        <PhoneBox key={phone._id} {...phone} />
                    ))}
                </PhonesWrapper>
            </Container>
        </>
    )
}

export default PhonesContainer
