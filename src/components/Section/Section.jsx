import PropTypes from 'prop-types';
import { SectionBox, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
