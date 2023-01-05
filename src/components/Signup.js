import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/auth.js";
import swal from "sweetalert";
import { useContext } from "react";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e) {
    e.preventDefault();
    signup(form).then((res) => {
      console.log(res.data);
      if (res.data) {
        return swal({
          title: "Error",
          text: res.data,
          icon: "error",
          timer: "7000",
        });
      }
      navigate("/signin");
    });
  }
  return (
    <SingContainer>
      <div className="title">
        <div>
          <h1>linkr</h1>
          <p>
            save, share and discover
            <br />
            the best links on the web
          </p>
        </div>
      </div>

      <div className="form">
        <Form autoComplete="off">
          <input
            placeholder="e-mail"
            name="email"
            type="email"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          ></input>
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          ></input>
          <input
            placeholder="username"
            name="username"
            type="string"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          ></input>
          <input
            placeholder="picture url"
            name="picture"
            type="string"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          ></input>

          <button onClick={handleSendForm}>Sign Up</button>

          <span>
            <Link className="link" to="/signin">
              Switch back to log in
            </Link>
          </span>
        </Form>
      </div>
    </SingContainer>
  );
}

const SingContainer = styled.section`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .title {
    width: 60%;
    height: 100vh;
    background: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: "Passion One";
      font-style: normal;
      font-weight: 700;
      font-size: 106px;
      color: #ffffff;
    }
    p {
      font-family: "Oswald", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 43px;
    }
  }
  .form {
    width: 40%;
    height: 100vh;
    background: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      width: 100%;
      height: 30vh;
      text-align: center;
    }
    .form{
      width: 100%;
      align-items: start;
    }
    .title h1 {
      margin-top: 0px;
      font-size: 76px;
    }
    .title p {
      margin-bottom: 20px;
      font-size: 23px;
      text-align: center;
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  height: 400px;
  padding: 1rem;
  max-width: 429px;

  input {
    width: 100%;
    height: 65px;
    padding-left: 12px;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: #9f9f9f;
  }

  button {
    width: 100%;
    height: 65px;
    margin-left: 2px;
    background: #1877f2;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
    cursor: pointer;
  }

  span {
    margin-top: 10px;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;

    .link {
      color: #fff;
      font-weight: 600;
    }
  }
`;
