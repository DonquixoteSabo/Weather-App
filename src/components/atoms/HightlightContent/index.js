import styled from 'styled-components';

const Content = styled.h2`
  font-weight: 700;
  font-size: 64px;
  margin: 10px;
  span {
    font-size: ${props => props.theme.fontSize.xl};
  }
`;

export default Content;
