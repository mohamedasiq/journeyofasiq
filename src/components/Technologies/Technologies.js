import React from 'react';
import { DiReact, DiAndroid, DiMongodb, DiMysql, DiNodejs, DiJava, DiDocker, DiGit, DiIllustrator, DiAngularSimple, DiAws } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've the knowledge to work in these tools and Technologies.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Angular</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Nodejs</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Docker</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AWS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiIllustrator size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>illustrator</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Android</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
