import styled from "styled-components";

export const ContainerMor = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 9, 1) 35%,
    rgba(0, 212, 255, 1) 58%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;

`;

export const ContainerLibrary = styled.div`
  margin-top: 100px;
  width: 500px;
  height: 800px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  padding-top: 40px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const LabelTeacher = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin-right: 150px;
  margin-bottom: 3px;
`;

export const LabelAge = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin-right: 273px;
  margin-bottom: 3px;
`;

export const LabelNameOfStudent = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin-right: 170px;
  margin-top: 20px;
  margin-bottom: 3px;
`;

export const LabelRoomClass = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  margin-right: 220px;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  padding-left: 25px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CadastrarButton = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  background: #ff6600;
  border: none;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.6;
  }
`;

export const Student = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  width: 342px;
  height: 150px;
  margin-top: 20px;
`;

export const TableStudents = styled.table`
  margin-top: 40px;
`;

export const TDLabel = styled.td`
  padding-right: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #000;
  line-height: normal;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

export const TD = styled.td`
  text-align: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  line-height: normal;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;
