import React from 'react';
import Styles from './styles';

const Paragraph = ({text}) => {
  return (
    <Styles.Paragraph>
      <p>{text}</p>
    </Styles.Paragraph>
  );
}
 
export default Paragraph;