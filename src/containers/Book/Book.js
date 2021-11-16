import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


const Book  = () => {
    return (
        <div class="container d-flex"> 
            <table class="table">
                <thead>
                <tr class="headbar">
        <th scope="col">Identifier</th>
        <th scope="col">Book name</th>
        <th scope="col">Autor</th>
        <th scope="col">Category</th>
        <th scope="col">NB Pages</th>
        <th scope="col">Actions</th>
                </tr>
                </thead>
    
            <tbody>
                
            <tr>
                <th scope="row">1</th>
                <td> A </td>
                <td> B </td>
                <td> C </td>
                <td> D </td>
                <td> E </td>
            </tr>

            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td> </td>
                <td> </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td> </td>
                <td> </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>   
    )
}

export default Book
