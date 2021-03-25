import styled from 'styled-components';

export const ChartWrapper = styled.div`
  margin-top: 20px;
  width: 229px;
  height: 8px;
  position: relative;
  background-color: ${props => props.theme.colors.athensGray};
  border-radius: 80px;
  p {
    position: absolute;
    color: ${props => props.theme.colors.santasGray};
    font-weight: 700;
    font-size: ${props => props.theme.fontSize.s};
  }
  p:nth-child(1) {
    top: 0;
    left: 0;
    transform: translateY(-100%);
  }
  p:nth-child(2) {
    top: 0;
    right: 50%;
    transform: translateY(-100%);
  }
  p:nth-child(3) {
    top: 0;
    right: 0;
    transform: translateY(-100%);
  }
  p:nth-child(4) {
    top: 100%;
    right: 0;
  }
`;
export const Bar = styled.div`
  width: ${props => props.percent}%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.parisDaisy};
  border-radius: 80px;
`;
