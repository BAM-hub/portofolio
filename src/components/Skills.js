import { 
  GenralSkills,
  SkillsContainer,
  Skill,
  ProgressBar,
  Percentage,
  SkillNameContainer,
  Divider,
  SkillSectionContainer,
  FremworksContainer,
  Freamwork
} from './styles/Skills.styled';
import { AccentPointer, PrimaryText, SecondaryText } from './styles/Text.styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SKILL_DATA, FREAMWORK_DATA } from './timelineData';

const Skills = ({ theme, color }) => {
  const [isOpen, setIsOpen] = useState({
    programmingLanguages: false,
    librariesFreamworks: false
  });
  
  return (
    <SkillsContainer>
      <SkillSectionContainer>
        <Divider 
          onClick={() => 
            setIsOpen({...isOpen,
              programmingLanguages: !isOpen.programmingLanguages
          })}
          theme={theme}
        >
          <PrimaryText>
            Programming Languages
          </PrimaryText>
        </Divider>
        <GenralSkills 
          theme={theme}
        >
        { isOpen.programmingLanguages && SKILL_DATA.map((skill, i) => (
          <Skill 
            as={motion.div}
            layout key={i}
            transition={{layout:{duration: .3, type: "spring"}}}
          >
            <AccentPointer color={color} />
            <SkillNameContainer>
              <PrimaryText theme={theme === 'dark' ? 'light': 'dark'}>{skill.skillName}</PrimaryText>
            </SkillNameContainer>
            <ProgressBar 
              color={color}
              fill={skill.percentage} 
              theme={theme}
            />
            <Percentage>
              <PrimaryText  theme={theme === 'dark' ? 'light': 'dark'}>
                {skill.percentage}%
              </PrimaryText>
            </Percentage>
          </Skill>
        ))}
        </GenralSkills>
      
      </SkillSectionContainer>

      <SkillSectionContainer>
        <Divider
          theme={theme}
          onClick={() => setIsOpen({
            ...isOpen,
            librariesFreamworks: !isOpen.librariesFreamworks
          })}
        >
          <PrimaryText>
            Libraries | Freamworks
          </PrimaryText>
        </Divider>
        <FremworksContainer 
          as={motion.div} 
          layout
          transition={{layout:{duration: .4, type: "spring"}}}
        >
          {
            isOpen.librariesFreamworks &&
            FREAMWORK_DATA.map((data, i) => (
              <Freamwork 
                key={i}
                as={motion.div}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: .99 }}
                transition={{ duration: .3 }}
              >
                <SecondaryText>{data.type}</SecondaryText>
                <PrimaryText>{data.name}</PrimaryText>
            </Freamwork>
            ))
          }
        </FremworksContainer>

      </SkillSectionContainer>

    </SkillsContainer>
  );
};

export default Skills;