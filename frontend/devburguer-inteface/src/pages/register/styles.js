import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.png';
import BackgroundLogin2 from '../../assets/Background2-login.png';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  background: url('${BackgroundLogin2}');
  background-color: rgb(37, 37, 37);
  background-size: cover;
  background-position: center;
  text-align: center;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
      color: #fff;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  // arrumar o input azul

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 3px 12px rgba(151, 88, 166, 0.55);

    -webkit-text-fill-color: #222;
    caret-color: #222;
    transition:
      background-color 5000s ease-in-out 0s,
      box-shadow 0.25s ease-in-out,
      transform 0.25s ease-in-out;
  }

  // arrumar o input azul

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 10px;
    padding: 0 16px;
    transition: all 0.25s ease-in-out;
    background: #f5f2f7;
    color: #222;
    box-shadow: 0 1px 10px rgba(151, 88, 166, 0.35);
  }

  label {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    text-align: left;
    text-shadow: 0 2px 12px rgba(151, 88, 166, 0.62);
  }

  input:hover {
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.4),
      0 5px 18px rgba(151, 88, 166, 0.45);
  }

  input:focus {
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.45),
      0 6px 22px rgba(151, 88, 166, 0.65),
      0 0 18px rgba(151, 88, 166, 0.3);
    transform: scale(1.01);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-weight: 400;
  font-size: 40px;
  color: #fff;

  span {
    color: #9758a6;
    font-family: 'Road Rage', sans-serif;
  }
`;

export const Error = styled.span`
  margin-top: 2px;
  color: red;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  text-shadow: 0 1px 8px rgba(255, 77, 77, 0.25);
  height: 10px;
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #9758a6;
`;
