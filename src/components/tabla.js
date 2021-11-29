import React from "react"
import Fila from "./fila"

function Tabla(){
    const items = [{"titulo":"Billy Eliot1","duracion":"123","rating":"5","genero":"['drama','comedia']","premios":"5"},
                   {"titulo":"Billy Eliot2","duracion":"123","rating":"5","genero":"['drama','comedia']","premios":"5"},
                   {"titulo":"Billy Eliot3","duracion":"123","rating":"5","genero":"['drama','comedia']","premios":"5"},
                   {"titulo":"Billy Eliot4","duracion":"123","rating":"5","genero":"['drama','comedia']","premios":"5"}]
    return (
        <div>
            <table>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Rating</th>
                    <th>Genero</th>
                    <th>Premios</th>

                {items.map((item,i)=>{
                    return <Fila item={item}/>
                })}
            </table>  
        </div>
    )
}

export default Tabla