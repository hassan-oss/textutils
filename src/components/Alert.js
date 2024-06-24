import React from 'react'

export default function Alert(props) {

  
return (
    props.alert&&<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.typ}</strong>: {props.alert.msg }
    
</div>
  )
}
