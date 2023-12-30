import React, { useState, useRef } from "react";
import Arrow from "../../assets/arrow.svg"

import { useNavigate } from "react-router-dom";

import ContainerItens from "../../components/containerGray";

import Button from "../../components/button";

import Title from "../../components/title";

import {
  ContainerMor,
  Image,
  ContainerLibrary,
  Input,
  LabelNameOfStudent,
  LabelTeacher,
  LabelAge,
  LabelRoomClass,
} from "./styles";
import LibraryImageLogo from "../../assets/library-img.png";
import GlobalStyle from "../../global";
import axios from "axios";

function App() {

  const baseUrl = "https://project-estudante.vercel.app"

  const [students, setStudents] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputResponsibleTeacher = useRef();
  const inputClassRoom = useRef()
  const navigate = useNavigate()

  async function addNewStudent() {

    const { data: newStudent } = await axios.post(`${baseUrl}/students`, {nameOfStudent: inputName.current.value, age: inputAge.current.value, responsibleTeacher: inputResponsibleTeacher.current.value, room: inputClassRoom.current.value})

    setStudents([...students, newStudent])

    navigate("/students")

  }

  return (
    <ContainerMor>
      <ContainerLibrary>
        <Image alt="logo-library" src={LibraryImageLogo}></Image>
        <ContainerItens>
          <Title>Estudantes 👨‍🎓</Title>
          <LabelNameOfStudent>Nome do Estudante</LabelNameOfStudent>
          <Input ref={inputName} placeholder="Nome do Estudante"></Input>
          <LabelAge>Idade</LabelAge>
          <Input ref={inputAge} placeholder="Idade"></Input>
          <LabelTeacher>Professor Responsável</LabelTeacher>
          <Input
            ref={inputResponsibleTeacher}
            placeholder="Professor Responsável"
          ></Input>
          <LabelRoomClass>Sala de Aula</LabelRoomClass>
          <Input ref={inputClassRoom} placeholder="Sala de Aula"></Input>
          <Button onClick={addNewStudent} isOrange={true}>Cadastrar<img alt="Seta para a outra página" src={Arrow}></img></Button>
        </ContainerItens>
      </ContainerLibrary>
      <GlobalStyle />
    </ContainerMor>
  );
}

export default App;
