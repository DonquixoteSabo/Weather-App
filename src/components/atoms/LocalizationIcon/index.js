import styled from 'styled-components';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.stormGray};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 100%;
  }
`;

function LocalizationIcon() {
  return (
    <Wrapper>
      <GpsFixedIcon className='icon' />
    </Wrapper>
  );
}

export default LocalizationIcon;
