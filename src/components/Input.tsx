import React from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

type Props = {
  label: string;
  type?: string;
  name: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  as?: 'textarea';
  required?: boolean;
};

const Input: React.FC<Props> = ({
  label,
  name,
  type = 'text',
  onChange,
  value,
  as,
  required = false,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      {as === 'textarea' ? (
        <Textarea
          rows={5}
          minRows={5}
          name={name}
          maxRows={16}
          onChange={onChange}
          value={value}
          required={required}
        />
      ) : (
        <InputStyled
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          as={as}
          required={required}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};

  input,
  textarea {
    outline: none;

    &:focus {
      border: 1px solid var(--color-secondary);
    }
  }

  textarea {
    resize: vertical;
    min-height: 12rem;
    padding: 1.2rem;
    background-color: var(--bg-color);
    color: ${({ theme }) =>
      theme.inDarkMode ? theme.__grey_300 : theme.__grey_400};
  }
`;

const Label = styled.label`
  font-size: var(--fs-small);
  margin-bottom: 0.8rem;
`;

const InputStyled = styled.input`
  border: 1px solid
    ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_300)};
  background-color: var(--bg-color);
  padding: 1.2rem;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
`;

export default Input;
