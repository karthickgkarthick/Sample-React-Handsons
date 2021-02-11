import React from 'react'

function ListOfIndianPlayers(props) {
    return (
       
            props.IndianPlayers.map((item)=>{
                return(
                    <ul>
                        <li>Mr.{item}</li>
                    </ul>

                )
            })
       
    )
}

export default ListOfIndianPlayers
