import styled from 'styled-components';
import LinkButton from './LinkButton';
import photo from '../images/showcase.jpg';
import { globalTheme } from '../utlities/globalTheme';

const StyledShowcase = styled.div`
  height: 100%;
  background: ${globalTheme.back2} url(${photo}) center/cover;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  .overlay {
    /* animation: fadeIn 2.5s; */
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgb(0, 0, 0, 0.4);
    z-index: 0;
  }
  h1 {
    margin: 20px 10px;
    font-size: 2.8rem;
    color: ${globalTheme.white};
    z-index: 2;
  }
  p {
    margin: 0px 20px 30px 20px;
    font-size: 1.4rem;
    color: ${globalTheme.white};
    z-index: 2;
  }
`;

const ShowcaseButton = styled(LinkButton)`
  z-index: 2;
  font-family: 'Open Sans', sans-serif;
`;

const Showcase = () => {
  return (
    <StyledShowcase>
      <h1>Focus on the Coffee</h1>
      <p>Generate a custom landing page for your cafe.</p>
      <ShowcaseButton href="#" name="Customize" />
      <div className="overlay"></div>
    </StyledShowcase>
  );
};

export default Showcase;
