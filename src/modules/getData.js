import Notify from 'simple-notify'

const getData = (str) => {
    return fetch(`https://ozonbd-46860-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then((response) => {
        // new Notify({
        //     status: 'success',
        //     title: 'Firebase работает',
        //     text: 'notify text',
        //     effect: 'slide',
        //     type: 3,
        //     autoclose: true
        // })
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Ошибка запроса')
        }        
    })
    .catch(Error => {  
        new Notify({
            status: 'error',
            title: 'Ошибка!',
            text: Error.message,
            effect: 'slide',
            type: 3,
            autoclose: true
        });
    })
        
}

export default getData