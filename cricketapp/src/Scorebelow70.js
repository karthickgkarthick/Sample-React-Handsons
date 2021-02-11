import React from 'react';


const Scorebelow70=({players})=>{

  

    return(
    players.map((item)=>{
        
            if(item.Score<=70)
            {
                return(
                    <ul>
                    <li>Mr.{item.name} <span>{item.Score}</span></li>
                    </ul>
                )

            }      
    })
    
   )

    
            
          
   
       

    
  
}
export default Scorebelow70;