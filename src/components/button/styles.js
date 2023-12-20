import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
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
  margin-top: 120px;
  background: transparent;
  border: 1px solid #fff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img{
    transform: ${rest => rest.isOrange ? `` : `rotate(180deg)`};
  }

  ${rest => rest.isOrange && `
    background: #ff6600;
    color: #fff;
    &:hover{
      opacity: 0.8;
    }

    &:active{
      opacity: 0.6;
    }`}
`;