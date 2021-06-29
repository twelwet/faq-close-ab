import React from 'react';
import PropTypes from 'prop-types';

function QuestionList(props) {
  const {faq, isSearched} = props;
  return (
    <div>
      <h3>{isSearched ? 'Результаты поиска' : 'Весь список'}</h3>
      <ul className={'question-list'}>
        {
          faq
            .map(
              (item) => (
                <li key={item.id}>
                  <h4>{item.id}. {item.question}</h4>
                  <h5 className={'answer-header'}>Ответ:</h5>
                  {item.answer.map((part) => (<p className={'answer-part'} key={part}>{part}</p>))}
                </li>
              ),
            )
        }
      </ul>
    </div>
  );
}

QuestionList.propTypes = {
  faq: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string,
    answer: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  isSearched: PropTypes.bool.isRequired,
};

export default QuestionList;
