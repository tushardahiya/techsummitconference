import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Navbar from '../Navigation/Toolbar/Navbar';

const layout =(Props) => (
    <Auxiliary>
        <Navbar/>
        <main className={classes.Content}>
            {Props.children}
        </main>
    </Auxiliary>
);

export default layout;