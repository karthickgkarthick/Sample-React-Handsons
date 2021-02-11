import React from 'react';

const ListofPlayers=({players})=>{

return(
    players.map((item)=>{
        return(
            <ul>
            <li>Mr.{item.name} <span> {item.Score}</span></li>
            </ul>

        )
    })
)
}
export default ListofPlayers;