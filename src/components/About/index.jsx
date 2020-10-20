import React from 'react';
import Header from '../shared/Header';
import Paragraph from '../shared/Paragraph';

const About = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="Hello Shaun - Welcome to Lab 2"/>
      {/* You need a paragraph describing a fun fact about you */}
      <Paragraph text ="I m very smiley nowadays because in the past I was told  constantly I look grumpy or too serious."/>
    </>
  );
}
 
export default About;