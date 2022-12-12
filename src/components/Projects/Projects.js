import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const Projects = ({projects, title}) => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>{title}</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {p.cmpname && 
            <UtilityList>
              <ExternalLinks href={p.source}>{p.cmpname}</ExternalLinks>
            </UtilityList>
            }
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;