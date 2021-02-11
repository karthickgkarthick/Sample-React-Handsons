import React from 'react'

export const ListofItem = (props) => {
    return (
        <div>
            {props.item.map((item)=>{
                return(
                    <div key={item.Name}>
                    <h1>Name:{item.Name}</h1>
                    <h3 style={{color:item.Rent<=60000?'red':'green'}}>Rent:Rs.{item.Rent}</h3>
                    <h3>Address:{item.Address}</h3>
                    </div>
                )
            })}
        </div>
    )
}
