import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

export const Wrapper = styled.nav`
  width: 375px;
  height: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.athensGray};
  .search {
    position: relative;
    width: 70%;
  }
  .search__icon {
    position: absolute;
    top: 50%;
    left: 10px;
    font-size: ${props => props.theme.fontSize.l};
    transform: translateY(-50%);
  }
  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
`;
export const StyledCloseIcon = styled(CloseIcon)`
  color: white;
  margin-left: auto;
  margin-top: 10px;
`;

export const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 30px 0;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 10px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #616475;
    .arrow {
      display: block;
    }
  }
  .arrow {
    display: none;
    font-size: ${props => props.theme.fontSize.m};
  }
`;
