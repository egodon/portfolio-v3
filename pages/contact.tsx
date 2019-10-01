import React, { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import PageContainer from 'components/layout/PageContainer';
import WorkExperience from 'components/WorkExperience';
import Title from 'components/Title';
import Button from 'components/Button';
import H1 from 'components/H1';
import Input from 'components/Input';
import { Send, CheckCircle } from 'react-feather';

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

  function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Contact', ...values }),
    })
      .then(() => {
        setMessageSent(true);
      })
      .catch((error) => alert(error));

    event.preventDefault();
  }

  const HiddenNetlifyForm = () => (
    <>
      <input type="hidden" value={values.name} readOnly />
      <input type="hidden" value={values.email} readOnly />
      <input type="hidden" value={values.message} readOnly />
      <input type="hidden" name="form-name" value="contact" />
    </>
  );

  return (
    <>
      <Title title="Contact" />
      <PageContainer>
        <H1 largeMargin>Contact</H1>
        <Content>
          {messageSent ? (
            <MessageSent>
              <CheckCircle /> <span>Message Sent</span>
            </MessageSent>
          ) : (
            <Form autoComplete="off" data-netlify onSubmit={handleSubmit}>
              <HiddenNetlifyForm />
              <Input
                required
                label="Name"
                name="name"
                onChange={handleChange('name')}
                value={values.name}
              />
              <Input
                required
                label="Email"
                name="email"
                type="email"
                onChange={handleChange('email')}
                value={values.email}
              />
              <Input
                required
                label="Message"
                name="message"
                onChange={handleChange('message')}
                value={values.message}
                as="textarea"
              />
              <SendButton type="submit">
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

const MessageSent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  color: var(--color-secondary);
  border: 1px solid currentColor;
  padding: 2rem;

  svg {
    margin-right: 0.8rem;
  }
`;

const NetlifyForm = styled.form`
  display: none;
`;

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export default contact;
