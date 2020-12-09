// eslint-disable-next-line import/no-anonymous-default-export
export default (phones = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
            return phones.map((phone) => phone._id === action.payload._id ? action.payload : phone);
        case 'DELETE':
            return phones.filter((phone) => phone._id !== action.payload)
        case 'CREATE':
            return [...phones, action.payload];
        default:
            return phones;
    }
}