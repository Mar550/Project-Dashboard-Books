import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import App from '../../App'
import { dataBook } from '../../helpers/constant'
import Button from '../../components/Button/Button'


const Book  = () => {
    const [items, setItems] = useState(dataBook);
  const [createForm, setCreateForm] = useState({
    title: '',
    author: '',
    nbpages: '',
    category: '',
  })

  const [toggle,setToggle] = useState(false)

  const [buttonValue,setButtonValue] = useState()
  
  const clickCreateForm = (e) => {
    e.preventDefault();

    const inputName = e.target.getAttribute('name')
    const inpuValue = e.target.value;

    const newDataForm = { ...createForm};
    newDataForm[inputName]= inpuValue;

    setCreateForm(newDataForm);
  };

  const clickSubmitForm = (e) => {
    e.preventDefault();
    
    const newItem = {
      // Add id ?
      title: createForm.title,
      author: createForm.author,
      nbpages: createForm.nbpages,
      category: createForm.category,
    }

    const newItems = [...items, newItem];
    setItems(newItems);
  }

  const toggleForm = () => {
    
    if(toggle === true){
        setToggle(false)
    }
    else{
      setToggle(true)

    }
  }
  
    return (
        <>
            <div>
                <div class="container d-flex"> 
                <table class="table">
                    <thead>
                        <tr class="headbar">
                        <th scope="col">Identifier</th>
                        <th scope="col">Book name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">NB Pages</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {items.map((item) => (     
                        <tr>
                        <th scope="row">{item.id}</th>
                        <td> {item.title} </td>
                        <td> {item.author} </td>
                        <td> {item.category} </td>
                        <td> {item.nbpages} </td>
                        </tr>
                    ))} 
                    </tbody>
                </table>
            </div>
        </div>

         

  
   <div className="d-grid col-2 mx-auto">
    <button className = "btn btn-primary" onClick={toggleForm} type="button"> { toggle===true ? <span>CLOSE</span> : <span>ADD BOOK</span>} </button> 
  </div> 
{
  toggle ? 

   <form onSubmit={clickSubmitForm}>
     
  <div className="divForm d-grid col-8 mx-auto ">

    <div className="d-grid col-8 mx-auto">
  
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"></label>
    <h3> Book Info </h3>
    
    <input 
    type="text"
    name= "title" 
    class="form-control" 
    id="exampleFormControlInput1" 
    required="required"
    placeholder="Book name*"
    onChange={clickCreateForm} />
   
    </div>
</div>

<div className="d-grid col-8 mx-auto">
    <div class="mb-3">
    <input 
    type="text" 
    name="author"
    class="form-control" 
    id="exampleFormControlInput1" 
    required="required"
    placeholder="Author name*" 
    onChange={clickCreateForm} />
    </div>
</div>

<div className="d-grid col-8 mx-auto">
  <div class="mb-3">
    <input 
    type="text" 
    name="nbpages"
    class="form-control" 
    id="exampleFormControlInput1" 
    required="required"
    placeholder="Pages number"
    onChange={clickCreateForm} />
  </div>
</div>

<label for="exampleDataList" className="d-grid col-8 mx-auto">Categories</label>
    <input
  name="category"
  className="d-grid col-8 mx-auto categoryook naboo" 
  list="datalistOptions" 
  id="exampleDataList" 
  placeholder="Choose the category..."
  required="required"
  onChange={clickCreateForm} />
  
<datalist id="datalistOptions" >
  <option value="Default"/>
  <option value="Classics"/>
  <option value="Fantasy"/>
  <option value="Literaly Fiction"/>

</datalist>


<div className="d-grid col-3 mx-auto"> 
<Button class= "btn btn-primary" type="submit" value="CREATE"/>

</div>

</div>

  
</form>


: null
}


    </>
    )
    
}




export default Book







