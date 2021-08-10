/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../styles/GlobalComponents/Button'
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const FormStyle = styled.form`
    @media ${(props) => props.theme.breakpoints.md} {
        width: 50%;
  }
  width: 30%;
  margin: auto;
  margin-bottom: 150px;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: black;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
    margin-bottom: 2rem;
    @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 150px;
  }
  }
    .success {
        background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export default function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/f/xpzkykqe',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks! Ill get back to you ASAP', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
      <>
        <Header/>
        <FormStyle onSubmit={handleOnSubmit}>
        <h1>Contact Me</h1>
            <label htmlFor="name">
            Name:
            <input id="name" type="name" name="name" required />
            </label>
            <label htmlFor="email">
            Email:
            <input id="email" type="email" name="email" required />
            </label>
            <label htmlFor="message">
            Message:
            <textarea id="message" name="message" />
            </label>
            <Button type="submit" disabled={serverState.submitting}>
            Submit
            </Button>
            {serverState.status && (
            <h1 className={!serverState.status.ok ? 'errorMsg' : ''}>
                <span className="success">{serverState.status.msg}</span>
            </h1>
            )}
        </FormStyle>
        <Footer/>
      </>
      
  );
}
