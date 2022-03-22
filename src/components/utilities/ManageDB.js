const ManageDb = (element)=>{
    const {id} = element;
    let pId = "p"+id;
    const quantity = +localStorage.getItem(pId)
    
    if(quantity){
        localStorage.setItem(pId,quantity+1);

    }
    else{
        localStorage.setItem(pId,1);

    }
    
    
    
    

}
export {ManageDb}