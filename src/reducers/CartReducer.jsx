function CartItemFactory(title,img,price,quantity){
    return {title:title,img:img,price:price,quantity:quantity};
}

export default function CartReducer(state,action){
    const {title,img,price,quantity} = action.payload;
    let change = false;
    switch(action.type){
        case 'ADD_ITEM':{
            state.items.forEach(element => {
                if(title===element.title){
                    element.quantity+=1;
                    change = true;
                }

            })
            if(!change){
                state.items.push(CartItemFactory(title,img,price,1));            
            }
            state.numOfItems+=1;
            change = false;
            return state;
        }
        case 'DEL_ITEM':{
            return state.items.filter((elem)=>{if(elem.title===title)state.numOfItems-=elem.quantity;return false;});
        }
        case 'SET_QUANTITY':{
            state.items.forEach(element => {
                if(title===element.title){
                    state.numOfItems -=element.quantity;
                    element.quantity = quantity;
                    state.numOfItems+= element.quantity;
                }
            })
            return state;
        }   
        default :{
            console.log("Error wrong type",action);
            return state;
        }
    }
}