import React from "react"

function Fila(props){
    return (
            <React.Fragment>
                <tr>
                    <td>{props.item.titulo}</td>
                    <td>{props.item.duracion}</td>
                    <td>{props.item.rating}</td>
                    <td>{props.item.generos}</td>
                    <td>{props.item.premios}</td>
                </tr>
            </React.Fragment>
            )
        }

export default Fila