import React, { useState, useEffect } from "react";
import Trash from "../../assets/trash.svg";
import Arrow from "../../assets/arrow.svg"

import ContainerItens from "../../components/containerGray";

import Button from "../../components/button";

import Title from "../../components/title";

import {
  ContainerMor,
  Image,
  TDLabel,
  TD,
  TableStudents,
} from "./styles";
import LibraryImageLogo from "../../assets/library-img.png";
import GlobalStyle from "../../global";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function App() {

  const baseUrl = "project-estudante.vercel.app"

  const [students, setStudents] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    async function FetchUsers(){
    const {data: newStudents} = await axios.get(`${baseUrl}/students`)

  setStudents(newStudents);
    }
    FetchUsers()
  },[])

  async function deleteUser(studentId) {
    await axios.delete(`${baseUrl}/students/${studentId}`)
    const newStudents = students.filter((student) => student.id !== studentId);
    setStudents(newStudents)
  }

  function goBackPage(){
    navigate("/")
  }

  return (
    <ContainerMor>
        <ContainerItens isLarge={true}>
        <Image alt="logo-library" src={LibraryImageLogo}></Image>
          <Title>Estudantes 👨‍🎓</Title>
          <TableStudents>
            <tbody>
            <tr>
              <TDLabel>Nome do Estudante</TDLabel>
              <TDLabel>Idade</TDLabel>
              <TDLabel>Professor Responsável</TDLabel>
              <TDLabel>Sala de Aula</TDLabel>
            </tr>
            {students.map((student) => (
              <tr key={student.id}>
                <TD>{student.nameOfStudent}</TD>
                <TD>{student.age}</TD>
                <TD>{student.responsibleTeacher}</TD>
                <TD>{student.room}</TD>
                <TD>
                  <button onClick={() => deleteUser(student.id)}>
                  <img alt="logo-lixeira" src={Trash} />
                  </button>
                </TD>
              </tr>
            ))}
            </tbody>
          </TableStudents>
          <Button onClick={goBackPage}><img alt="Seta para a outra página" src={Arrow} />Voltar</Button>
        </ContainerItens>
      <GlobalStyle />
    </ContainerMor>
  );
}

export default App;
