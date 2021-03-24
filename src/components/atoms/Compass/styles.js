import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.m};
  font-weight: 500;
  div {
    width: 29.49px;
    height: 29.49px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(${props => props.degree}deg);
  }
  .icon {
    color: inherit;
    font-size: ${props => props.theme.fontSize.l};
  }
  span {
    margin: 20px 15px;
  }
`;
