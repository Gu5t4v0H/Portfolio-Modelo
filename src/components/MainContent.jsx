import '../styles/components/maincontent.sass';
import TechnologiesContainer from './TechnologiesContainer';
import ProjectsContainer from './Projects';


const MainContent = () => {
  return (
    <main id="main-content">

      <p>About</p>
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;