import React, { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import PageContainer from 'components/layout/PageContainer';
import WorkExperience from 'components/WorkExperience';
import Title from 'components/Title';
import Button from 'components/Button';
import H1 from 'components/H1';
import Input from 'components/Input';
import { Send } from 'react-feather';

type State = {
  name: string;
  email: string;
  message: string;
};

const contact: NextPage = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  function handleChange(name: keyof State) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setValues({ ...values, [name]: value });
    };
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    console.log({ values });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        setMessageSent(true);
      })
      .catch((error) => alert(error));

    event.preventDefault();
  }

  return (
    <>
      <Title title="Contact" />
      <PageContainer>
        <H1 largeMargin>Contact</H1>
        <Content>
          {messageSent ? (
            <div>Message Sent</div>
          ) : (
            <Form autoComplete="off" name="contact" data-netlify>
              <Input
                label="Name"
                name="name"
                onChange={handleChange('name')}
                value={values.name}
              />
              <Input
                label="Email"
                name="email"
                onChange={handleChange('email')}
                value={values.email}
              />
              <Input
                label="Message"
                name="message"
                onChange={handleChange('message')}
                value={values.message}
                as="textarea"
              />
              <SendButton type="submit" onClick={handleSubmit}>
                <Send />
                Send
              </SendButton>
            </Form>
          )}
        </Content>
      </PageContainer>
    </>
  );
};

const Content = styled.div`
  max-width: 45rem;
  width: 100%;
`;

const Form = styled.form``;

const SendButton = styled(Button)`
  margin-left: auto;

  svg {
    margin-right: 0.8rem;
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default contact;
