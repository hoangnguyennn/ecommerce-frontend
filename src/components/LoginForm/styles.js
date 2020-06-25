import styled from "styled-components";

const LoginForm = styled.form`
  padding: 30px;
  width: 360px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 4;
  position: relative;

  .close {
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
  }

  .title {
    margin-bottom: 16px;
    font-size: 24px;
    text-align: center;
  }

  .form-group {
    position: relative;

    :not(:last-child) {
      margin-bottom: 16px;
    }

    input {
      padding: 6px 3px;
      width: 100%;
      height: 40px;
      font-size: 16px;
      border: none;
      border-bottom: 2px solid #69b3fe;
      border-radius: 0;
      box-sizing: border-box;
      outline: none;

      :focus {
        border-color: #69b3fe;
      }

      :focus + label,
      :valid + label {
        top: -20px;
        left: 0;
        color: #69b3fe;
        font-size: 13px;
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 3px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #666;
      font-size: 15px;
      font-weight: 400;
      pointer-events: none;
      transition: top 0.2s ease;
    }
  }
`;

export { LoginForm as LoginFormStyled };
