import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Product from '../components/Product'
import TransitionContainer from '../components/TransitionContainer'

function ProductPage() {
    const { handle } = useParams()
    const phone = useSelector((state) => state.phones.find((item) => item._id === handle))
    console.log(phone)

    return (
        <>
            <TransitionContainer />
            <Product {...phone} />
        </>
    )
}

export default ProductPage
