import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection} from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Andrew.<br />
          I Bring To Life Beautiful Web Experiences <br />
        </SectionTitle>
        <SectionText>
        I'm a web designer & developer from Dublin, Ireland.<br/> 
        I enjoy building everything from small business sites to rich interactive web apps.
        <br/>If you're a business seeking a web presence or an employer looking to hire, please get in touch
        </SectionText>
        <Link href="/contact"><Button >Contact Me</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;