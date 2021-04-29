import styled from 'styled-components';
import Button from './Button';
import photo from '../images/showcase.jpg';
import { globalTheme } from '../utlities/globalTheme';

/* ========== STYLES ========== */
const StyledHero = styled.div`
  height: 100vh;
  background: ${globalTheme.back2} url(${photo}) center/cover;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Background Overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.4);
  }

  h1 {
    max-width: 800px;
    margin: 20px 10px;
    font-size: 2.8rem;
    color: ${globalTheme.white};
  }

  p {
    margin: 0px 20px 30px 20px;
    font-size: 1.4rem;
    color: ${globalTheme.white};
  }

  * {
    z-index: 1; /* Brings hero content forward */
  }

  @media all and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const HeroButton = styled(Button)`
  z-index: 2;
  font-family: 'Open Sans', sans-serif;
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ========== COMPONENT ========== */
const Hero = () => {
  return (
    <StyledHero>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
        perferendis.
      </p>
      <HeroButton href="#" name="Customize" />
    </StyledHero>
  );
};

export default Hero;
