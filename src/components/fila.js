function Fila(props){
    return (
        <div>
            {props.items.map((item,i)=>{
                <tr>{item.titulo}</tr>
                <tr>{items.duracion}</tr>
                <tr>{item.rating}</tr>
                <tr>{item.generos}</tr>
                <tr>{item.premios}</tr>
            })}
        </div>
    )
}

export default Fila

/* 
<tr>{props.titulo}</tr>
                <tr>{props.duracion}</tr>
                <tr>{props.rating}</tr>
                <tr>{props.generos}</tr>
                <tr>{props.premios}</tr>
*/