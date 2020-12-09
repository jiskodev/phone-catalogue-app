import styled from 'styled-components'
import { Link }  from 'react-scroll'

export const Container = styled.div`
    width: 100%;
`

export const PhonesWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
`

export const List = styled.ul`
    list-style: none;
    width: 40%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const ListItem = styled.li`
    padding: 16px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const Button = styled.button`
    background-color: ${(props) => props.delete ? 'black' : 'white'};
    border: 1px solid black;
    padding: 8px 16px;
    margin: 10px;
    color: ${(props) => props.delete ? 'white' : 'black'};
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    font-family: Montserrat;
    @media (max-width: 768px) {
        font-size: 16px;
        margin-right: 0px;
        margin-left: 5px;
    }
`

export const LinkToEdit = styled(Link)`
    background-color: ${(props) => props.delete ? 'black' : 'white'};
    border: 1px solid black;
    padding: 8px 16px;
    margin: 10px;
    color: ${(props) => props.delete ? 'white' : 'black'};
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 16px;
        margin-left: auto;
    }
`

export const ButtonsWrapper = styled.div`
    min-width: 200px;
`