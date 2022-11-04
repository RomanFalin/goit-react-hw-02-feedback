import PropTypes from 'prop-types';
import { ButtonBox, ButtonItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map((option, index) => {
        return (
          <ButtonItem
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={index}
          >
            {option}
          </ButtonItem>
        );
      })}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
