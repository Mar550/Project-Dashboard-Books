import React from 'react';
import classes from './title.module.css';

const Title = (props) => {


    const myClass = `${classes.heading}`;
    return(
        <h1 className={myClass}>{props.value}</h1>
    );

}

export default Title;