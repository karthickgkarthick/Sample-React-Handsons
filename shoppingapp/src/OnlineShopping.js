import {React,Component} from 'react';
import Cart from './Cart';
import './OnlineShopping.css'

export class OnlineShopping extends Component{

render(){

const CartInfo=[{Itemname:"laptop",price:80000},
                {Itemname:"TV",price:120000},
                {Itemname:"Washing Machine",price:50000},
                {Itemname:"Fridge",price:70000}
               ]    
    return(
<div className="mydiv">
<h1>Items Ordered :</h1>
<table className="table">
    <thead>
        <th>Name</th>
        <th>Price</th>
    </thead>
    <tbody>
    <Cart item={CartInfo}/>
    </tbody>
</table>

</div>)

    
}


}