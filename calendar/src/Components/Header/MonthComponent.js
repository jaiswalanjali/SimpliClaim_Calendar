import React, { useState } from 'react';

import '../../App.css';
import { Button } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';

export default function MonthComponent(props) {
 
    return (
        <Button startIcon={<ArrowLeft onClick={props.onClickLeft}/>} endIcon={<ArrowRight onClick={props.onClickRight}/>} color="primary">
           {props.currentMonth}
        </Button>
    );
}