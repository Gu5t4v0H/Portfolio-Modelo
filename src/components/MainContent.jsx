import '../styles/components/maincontent.sass';
import TechnologiesContainer from './TechnologiesContainer';

const MainContent = () => {
  return (
    <main id="main-content">

      <p>About</p>
      <TechnologiesContainer />
      <p>Projects</p>
    </main>
  );
};

export default MainContent;