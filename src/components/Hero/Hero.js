import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, this is <br />
          Asiq
        </SectionTitle>
        <SectionText>
        I am a T - Shaped Full Stack Developer
        </SectionText>
        <SectionText>
        ( Experience: 2.5 year )
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;