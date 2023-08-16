import getData from "./getData"
import renderGoods from "./renderGoods"
import { categoryFilter } from "./filters"

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog li')

    // console.dir(catalogModalItems);


    let isOpen = false

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen

        if(isOpen) {
            catalogModal.style.display = 'block'
        } else {
            catalogModal.style.display = ''
        }

    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {    
            const text = item.textContent
            // console.log(text);

            getData().then((data) => {
                renderGoods(categoryFilter(data, text))
            }) 
        });
    })
}


export default catalog