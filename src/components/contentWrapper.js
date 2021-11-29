import React from "react"
import TopBar from "./topBar"
import ContentRowTop from "./contentRowTop"
import Footer from "./footer"
import Tabla from "./tabla"

function ContentWrapper(){
    return (
    <div>
        <TopBar />
        <ContentRowTop />
        <Tabla />
        <Footer /> 
    </div>
    )
}

export default ContentWrapper