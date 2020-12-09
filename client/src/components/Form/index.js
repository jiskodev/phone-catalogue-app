import React, {useState,  useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FileBase64 from 'react-file-base64'
import { addPhone, updatePhone } from '../../actions/phones'
import { Container, FormWrapper, Label, TextInput, SubmitBtn } from './formElements'


function Form({ currentId, setCurrentId, setLoading, scrollToTop }) {
    const [ phoneData, setPhoneData ] = useState({
        name: '', manufacturer: '', description: '', color: '', price: '', imageFileName: '', screen: '', processor: '', ram: ''
    })

    const selectedPhone = useSelector((state) => currentId ? state.phones.find((phone) => phone._id === currentId) :  null)

    useEffect(() => {
        if(selectedPhone) {
            setPhoneData(selectedPhone)
        }
    }, [selectedPhone])

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId ===  0)  {
            dispatch(addPhone(phoneData))
            clear()
            setLoading(true)
        } else {
            dispatch(updatePhone(currentId, phoneData))
            console.log('done')
            setCurrentId(0)
            clear()
            console.log(currentId)
            setLoading(true)
        }
    }

    const clear = () => {
        
        setPhoneData({
            name: '', manufacturer: '', description: '', color: '', price: '', imageFileName: '', screen: '', processor: '', ram: ''
        })
    }

    return (
        <>
        <Container id='form'>
            {selectedPhone ? <h3>Edit Phone</h3> : <h3>Add Phone</h3>}
            <FormWrapper onSubmit={handleSubmit}>
                <Label htmlFor='name'>Name:
                <TextInput type="text"
                    name='name'
                    value = {phoneData.name}
                    onChange={(e) => setPhoneData({ ...phoneData, name: e.target.value })}
                    placeholder='Name'
                ></TextInput></Label>
                <Label htmlFor='manufacturer'>Manufacturer:
                <TextInput type="text"
                    name='anufacturer'
                    value = {phoneData.manufacturer}
                    onChange={(e) => setPhoneData({ ...phoneData, manufacturer: e.target.value })}
                    placeholder='Manufacturer'
                ></TextInput>
                </Label>
                <Label htmlFor='description'>Description:
                <TextInput type="text"
                    name='description'
                    value = {phoneData.description}
                    onChange={(e) => setPhoneData({ ...phoneData, description: e.target.value })}
                    placeholder='Description'
                ></TextInput>
                </Label>
                <Label htmlFor='color'>Color:
                <TextInput type="text"
                    name='color'
                    value = {phoneData.color}
                    onChange={(e) => setPhoneData({ ...phoneData, color: e.target.value })}
                    placeholder='Color'
                ></TextInput>
                </Label>
                <Label htmlFor='price'>Price:
                <TextInput type="text"
                    name='price'
                    value = {phoneData.price}
                    onChange={(e) => setPhoneData({ ...phoneData, price: e.target.value })}
                    placeholder='Price'
                ></TextInput>
                </Label>
                <Label htmlFor='screen'>Screen:
                <TextInput type="text"
                    name='screen'
                    value = {phoneData.screen}
                    onChange={(e) => setPhoneData({ ...phoneData, screen: e.target.value })}
                    placeholder='Screen'
                ></TextInput>
                </Label>
                <Label htmlFor='processor'>Processor:
                <TextInput type="text"
                    name='processor'
                    value = {phoneData.processor}
                    onChange={(e) => setPhoneData({ ...phoneData, processor: e.target.value })}
                    placeholder='Processor'
                ></TextInput>
                </Label>
                <Label htmlFor='ram'>RAM:
                <TextInput type="text"
                    name='ram'
                    value = {phoneData.ram}
                    onChange={(e) => setPhoneData({ ...phoneData, ram: e.target.value })}
                    placeholder='RAM'
                ></TextInput>
                </Label>
                <Label>
                <FileBase64
                    type='file'
                    multiple={false}
                    onDone={({base64}) => setPhoneData({...phoneData, imageFileName: base64})}
                />
                </Label>
                
                <SubmitBtn onClick={scrollToTop} type='submit'>Submit</SubmitBtn>
            </FormWrapper>
                <SubmitBtn onClick={clear}>Clear</SubmitBtn>
        </Container>

                
        </>
    )
}

export default Form
