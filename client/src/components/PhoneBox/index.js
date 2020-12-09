import React, {useEffect} from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { LinkWrapper, PhoneImage, PhonePrice, PhoneTitle, PhotoWrapper, Wrapper } from './phoneBoxElements'


// switch to admin -> import { deletePhone } from '../../actions/phones'

const BoxVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 }},
    hidden: { opacity: 0, y: 200 }
}

function PhoneBox({ _id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram }) {
    const controls = useAnimation()
    const [ ref, inView ] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])



    return (
        <> 
            <LinkWrapper to={`/${_id}`}>
            <Wrapper ref={ref}
            animate={controls}
            initial="hidden"
            variants={BoxVariants}>
                <PhotoWrapper>
                    <PhoneImage src={imageFileName} alt={`${name} Image`}></PhoneImage>
                </PhotoWrapper>
                <PhoneTitle to={`/${_id}`}>{manufacturer} {name}</PhoneTitle>
                <PhonePrice>${price}</PhonePrice>
            </Wrapper>
            </LinkWrapper>
        </>
    )
}

export default PhoneBox
