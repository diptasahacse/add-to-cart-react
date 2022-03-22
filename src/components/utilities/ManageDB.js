const add = (element)=>{
    const {id} = element;
    let pId = "p"+id;

    // store data from local storage
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'))
    //if shopping cart does not exist then make an empty obj
    if(!shoppingCart){
        shoppingCart = {};

    }
    // get value for specific id
    const quantity = shoppingCart[pId];

    if(quantity){
        shoppingCart[pId] = quantity+1;

    }
    else{
        shoppingCart[pId] = 1;

    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

}
// remove
const remove = (id) =>{
    let pId = "p"+id;
    let localStorageObj = JSON.parse(localStorage.getItem('shopping-cart'));
    if(localStorageObj){
        delete localStorageObj[pId];
        localStorage.setItem('shopping-cart',JSON.stringify(localStorageObj))
    }
    

}
export {add,remove}