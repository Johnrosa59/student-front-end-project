import styled from "styled-components";

export const ContainerMor = styled.div`
  width: 100%;
  height: 100%;
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

export const Image = styled.img`
  width: 150px;
  height: 150px;
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
