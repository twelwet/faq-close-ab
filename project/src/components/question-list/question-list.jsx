import React from 'react';
import PropTypes from 'prop-types';

function QuestionList(props) {
  const {faq} = props;
  return (
    <ul className={'question-list'}>
      {
        faq
          .map(
            (item) => (
              <li key={item.id}>
                <h3>{item.id}. {item.question}</h3>
                <h4 className={'answer-header'}>Ответ:</h4>
                {item.answer.map((part) => (<p className={'answer-part'} key={part}>{part}</p>))}
              </li>
            ),
          )
      }
    </ul>
  );
}

QuestionList.propTypes = {
  faq: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string,
    answer: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default QuestionList;
