import React from "react"
import TopBar from "./topBar"
import ContentRowTop from "./contentRowTop"
import Footer from "./footer"

function ContentWrapper(){
    return (
    <div>
        <TopBar />
        <ContentRowTop />
        <Footer /> 
    </div>
    )
}

export default ContentWrapper