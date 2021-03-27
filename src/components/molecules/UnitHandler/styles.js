import styled from 'styled-components';

export const Wrapper = styled.aside`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Circle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isActive ? props.theme.colors.athensGray : '#110E3C'};
  color: ${props =>
    props.isActive ? '#110E3C' : props.theme.colors.athensGray};
  border-radius: 50px;
  font-size: ${props => props.theme.fontSize.m};
  font-weight: bold;
`;
