import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePhone } from '../actions/phones'
import { Button, ButtonsWrapper, LinkToEdit, List, ListItem } from '../components/commonElements/commonElements'
import { animateScroll as scroll } from 'react-scroll'

import Form from '../components/Form'
import Header from '../components/Header'
import TransitionContainer from '../components/TransitionContainer'

function Admin({ currentId, setCurrentId, loading, setLoading }) {
    const phones = useSelector((state) => state.phones)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deletePhone(id))
    }

    const scrollToTop = () => {
        scroll.scrollToTop()
    }
    
    return (
        <>  
            <TransitionContainer />
            <Header />
            {loading ? <h3>Submitted</h3> : null}
            <List>
                {phones.map((phone) => (
                    (<ListItem key={phone._id}>
                        {phone.manufacturer} {phone.name}
                        <ButtonsWrapper>
                        <LinkToEdit to='form'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"  onClick={() => setCurrentId(phone._id)}>Edit</LinkToEdit>
                        <Button delete onClick={() => handleDelete(phone._id)}>Delete</Button>
                        </ButtonsWrapper>
                        
                    </ListItem>)
                ))}
            </List>
            
            <Form currentId={currentId} setCurrentId={setCurrentId} loading={loading} setLoading={setLoading} scrollToTop={scrollToTop} />
        </>
    )
}

export default Admin