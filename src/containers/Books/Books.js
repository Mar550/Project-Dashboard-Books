import React, { Component } from 'react';
import {dataBook} from '../../helpers/constant';
import Book from '../Book/Book'
import "bootstrap/dist/css/bootstrap.min.css"


class Books extends Component {

    state = {

           dataBook
         

    }
    render() {
        console.log(this.state.dataBook)
        return (
            <div>
                <Book />
            </div>
        );
    }
}

export default Books;