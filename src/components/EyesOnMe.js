// Code EyesOnMe Component Here
import React from "react"
function EyesOnMe(){
function handleOnfocus(){
  console.log('Good!')
}
function handleOnBlur(){
  console.log('Hey! Eyes on me!')
}
  return(
    <button
     onFocus={handleOnfocus} 
     onBlur={handleOnBlur}>Eyes on me
     </button>
  )
}
export default EyesOnMe