import React from "react"
import TopBar from "./topBar"
import ContentRowTop from "./contentRowTop"
import Footer from "./footer"
import Tabla from "./tabla"
import Fila from "./fila"

function ContentWrapper(){
    return (
    <div>
        <TopBar />
        <ContentRowTop />
        <Tabla items={[{"titulo":"Billy Eliot","duracion":122,"rating":5,"generos":["drama","comedia"],"premios":2}]} />
        <Footer /> 
    </div>
    )
}

export default ContentWrapper