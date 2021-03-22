import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  text-indent: 40px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.athensGray};
  color: inherit;
  font-size: ${props => props.theme.fontSize.l};
`;
export const StyledButton = styled.button`
  width: 25%;
  border: none;
  background-color: ${props => props.theme.colors.royalBlue};
  padding: 15px 5px;
  color: inherit;
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.l};
`;
export const Wrapper = styled.div`
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
