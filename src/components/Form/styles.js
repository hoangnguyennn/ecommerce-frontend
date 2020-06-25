import styled from "styled-components";

const FormGroup = styled.div`
  align-items: center;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Form = styled.form`
  ${FormGroup} {
    display: ${({ horizontal }) => (horizontal ? "flex" : "block")};
  }
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  padding: 6px 12px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const FormTextArea = styled(FormInput.withComponent("textarea"))`
  height: 80px;
  min-height: 40px;
  resize: vertical;
`;

export { Form, FormGroup, FormLabel, FormInput, FormTextArea };
