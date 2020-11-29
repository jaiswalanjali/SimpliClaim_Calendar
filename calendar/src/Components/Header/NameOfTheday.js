import React from 'react';
import { useStyles } from './StylesUtils';
import '../../App.css';
import { Button } from '@material-ui/core';
import { EventAvailable } from '@material-ui/icons';

export default function NameOfTheDay(props) {
    const styles = useStyles();
        return (
            <Button startIcon={<EventAvailable className={styles.calendarIcon}/>}  color="primary">
             {props.nameOfTheDay}
          </Button>
        )

}