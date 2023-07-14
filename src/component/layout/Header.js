import React from 'react'

function Header(props ) {
  
  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href=".." onClick={()=> props.handleShow(false)}><b>Online Store</b></a>
  
       
      <button class="btn btn-outline-success" onClick={()=> props.handleShow(true)}>Cart <sup>{props.count}</sup></button>
      
    
  </div>
</nav>
    

 

    
    </>
  )
}

export default Header