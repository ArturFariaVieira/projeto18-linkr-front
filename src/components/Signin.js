import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../services/auth";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Signin() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const { setJwt, setPicture } = useContext(AuthContext);

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e) {
    e.preventDefault();
    signin(form).then((res) => {
      console.log(res.data)
      if (!res.data.token) {
        return swal({
          title: "Error",
          text: res.data,
          icon: "error",
          timer: "7000",
        });
      }else {
        setJwt(res.data.token);
        setPicture(res.data.picture) 
        navigate("/timeline");
        return swal({
          title: "Bem vindo/a",
          text: res.data.username,
          icon: "success",
          timer: "7000",
        });
      }
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

          <button onClick={handleSendForm}>Log In</button>

          <span>
            First time?{" "}
            <Link className="link" to="/signup">
              Create an account!
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
      font-family: "Oswald";
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
  height: 300px;
  padding: 1rem;
  max-width: 429px;

  input {
    width: 100%;
    height: 65px;
    padding-left: 12px;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Oswald";
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
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
    cursor: pointer;
  }

  span {
    margin-top: 10px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;

    .link {
      color: #fff;
      font-weight: 600;
    }
  }
`;
