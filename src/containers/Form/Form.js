import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"


const Form  = () => {

return (

<div className="divForm d-grid col-5 mx-auto ">

    <div className="d-grid col-5 mx-auto">
  
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"></label>
    <p> Book Info </p>
    <input 
    type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    required="required"
    placeholder="Book name*" />
    </div>
</div>

<div className="d-grid col-5 mx-auto">
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"></label>
    <input 
    type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    required="required"
    placeholder="Author name*" 
    />
    </div>
</div>

<div className="d-grid col-5 mx-auto">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"></label>
    <input 
    type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    required="required"
    placeholder="o"/>
  </div>
</div>

<label for="exampleDataList" className="d-grid col-5 mx-auto">Categories</label>
    <input 
  className="d-grid col-5 mx-auto" 
  list="datalistOptions" 
  id="exampleDataList" 
  placeholder="Choose the category..."
  required="required"
  />
  
<datalist id="datalistOptions" >
  <option value="Default"/>
</datalist>


</div>
)
};

export default Form;