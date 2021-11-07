import styled from "styled-components";

export const RepositionWrapper = styled.div`
  width: 20vw;

  background: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);
  padding: 4rem;
  border-radius: 16px;
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  transition: 0.2s ease-in-out;
  transform: translateX(-50%)
    translateY(${(props) => (props.active ? "10%" : "120%")});
`;
