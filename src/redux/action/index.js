// this product is used to add the to pdroduct to the cart

export const addCart =(product)=>{
return{ 
    type:"ADDITEM",
payload:product
}
}

export const delCart =(product)=>{
    return{ 
        type:"DELITEM",
    payload:product
    }
    }