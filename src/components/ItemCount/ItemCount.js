import React from "react";
import "./ItemCount.css"
import Button from '@mui/material/Button';

export const ItemCount = ({stock, count, setCount, onAdd}) => {

    function add () {
        if (count < stock) {
            setCount (count + 1)
        }
    }

    function subs () {
        if (count > 0) {
            setCount (count - 1)
        }
    }

    return (
        <div className="divBtn">
            <Button onClick={subs} variant="contained" color="error" disabled={count===1}>-</Button>
            <span>{count}</span>
            <Button onClick={add} variant="contained" color="success" disabled={count > stock-1}>+</Button>
            <Button onClick={onAdd} variant="contained" disabled={count > stock}>Agregar al carrito</Button>
        </div>
    )
}