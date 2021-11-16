import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"



const  Button = (props) => {
    const createClick = (e) => {
        console.log("Form validated")
    }

    const closeClick = (e) => {
        console.log("Close forms")
    }
    return (
        <>
        <div className="d-grid col-6 mx-auto"> 
    <Button className= "btn btn-primary" onclick={createClick} type="submit" value="Create"/>
</div>

<div className="d-grid col-6 mx-auto"> 
    <Button className= "btn btn-second" onclick={closeClick} type="submit" value="Close form"/>
</div>
        </>
    )
}



export default Button;

