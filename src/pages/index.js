import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { projects, eduprojects } from '../constants/constants';

const Home = () => {

  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects projects={projects} title='Industrial Projects' />
      <Projects projects={eduprojects} title='Personal Projects(For Educational purpose)' />
      <Technologies />
    </Layout>
  );
};

export default Home;
