import React from "react";
import { ContainerItens as Container } from "./style";


function ContainerItens({children, isLarge}){
    return <Container isLarge={isLarge} >{children}</Container>
}


export default ContainerItens