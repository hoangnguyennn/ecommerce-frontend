import styled from "styled-components";

const ProgressItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .title {
    margin-bottom: 10px;
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background-color: ${({ active }) => (active ? "#69b3fe" : "#fff")};
    ${({ active }) => active && "color: #fff;"}
    border-radius: 50%;
    box-shadow: 0 0 4px #666;
  }

  .bar {
    position: absolute;
    top: 39px;
    left: 50%;
    width: 100%;
    height: 6px;
    background-color: ${({ active }) => (active ? "#69b3fe" : "#dae1e7")};
    z-index: -1;
  }
`;

export { ProgressItem as ProgressItemStyled };
