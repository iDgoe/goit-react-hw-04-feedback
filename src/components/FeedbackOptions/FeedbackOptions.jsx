import PropTypes from 'prop-types';
import './Feedback.module.css';

export const FeedbackOptions = ({ options, updateFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={updateFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func,
  };