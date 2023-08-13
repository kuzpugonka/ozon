const getData = () => {
    return fetch('https://ozonbd-46860-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
        
}

export default getData