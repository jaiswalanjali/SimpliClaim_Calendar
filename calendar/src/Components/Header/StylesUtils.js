import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root:{
        width: '64px',
        height: '18px',
        margin: '0 55px 16px 56px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.29',
        letterSpacing: '0.6px',
        color: '#999999'
    },
 table: {
     minWidth: "176px"
 }, 
 tableRow:{
    border: "hidden"
 },
 slider: {
    width: "3px",
    height: "74px",
    margin: "-20px 12px 0 0",
    backgroundColor: "#0f6ebe",
    position:"absolute"
 },
 calendar:{
    width: "1280px",
    height: "720px",
    padding: "16px 10px 8px",
    backgroundColor: "#121212"
 },
 headerCell: {
    width: "182px"
},
grid:{
    marginRight: '22px',
    marginLeft: '22px'
},
days:{
    height: "18px",
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: 1.29,
    letterSpacing: "0.6px",
    color: "#999999",
    textAlign:"center"
   
},
greyCell:{
    width: "182px",
    height:"100px",
    maxHeight: "100px",
    opacity: 0.4,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    border: "hidden"
},
blackCell:{
    width: "182px",
    height:"100px",
    maxHeight: "100px",
    opacity: 0.8,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    border: "hidden"
},
dateText:{
    width: "25px",
    height: "28px",
    margin: "0 2px 0 0",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: 1.17,
    color: "#e6e6e6",
    marginLeft: "27px",
},
calendarIcon: {
    width: "12px",
    height: "12px",
    margin: "2px 4px 0 0",
},
monthString:{
    display: "contents",
    width: "45px",
    height: "18px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: 1.29,
    color: "rgba(255, 255, 255, 0.9)"
}
})

