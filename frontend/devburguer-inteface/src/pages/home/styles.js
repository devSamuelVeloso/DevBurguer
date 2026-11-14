import styled from 'styled-components';
import BannerHome from '../../assets/hero-home-page.jpg';
import Background from '../../assets/background2-login.png';

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${Background}');
  background-size: cover;
  background-position: center;
  height: 500px;
`;

export const Content = styled.div``;

export const Banner = styled.div`
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('${BannerHome}');
  background-size: cover;
  background-position: center bottom;
  height: 480px;
  width: 100vw;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;
