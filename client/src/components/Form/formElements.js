import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Label = styled.label`
    display: block;
    margin: 25px 80px;
    @media (max-width: 768px) {
        margin: 15px 20px;
        width: 100%;
        margin: 25px auto;
    }
`

export const TextInput = styled.input`
    display: block;
    padding: 16px 16px;
    font-size: 18px;
    margin-top: 5px;
`

export const FormWrapper = styled.form`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const SubmitBtn = styled.button`
    display: block;
    min-width: 220px;
    padding: 16px;
    margin: 30px 80px;
    border: none;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    font-family: Montserrat;
    :hover{
        background-color: black;
        color: white;
    }
`