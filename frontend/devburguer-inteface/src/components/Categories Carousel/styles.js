import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}'), no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;

  p {
    color: #f4f4f4;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 3px 15px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 110px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 15px;

  &::after {
    content: '';
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    bottom: 0;
    left: calc(50% - 28px);
  }
`;
