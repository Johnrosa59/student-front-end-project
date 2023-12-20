import React from "react";
import { ContainerItens as Container } from "./style";


function ContainerItens({children, isLarge}){
    console.log(isLarge)
    return <Container isLarge={isLarge} >{children}</Container>
}


export default ContainerItens