import React, {useState} from 'react';
import QuestionList from '../question-list/question-list.jsx';
import faq from '../../mocks/faq.js';

function App() {
  const [text, setText] = useState('');

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setText(value);
  };

  const filteredFaq = faq.filter((item) => item.question.toLowerCase().includes(text.toLowerCase()) || item.answer.find((answerPart) => answerPart.toLowerCase().includes(text.toLowerCase())));

  return (
    <main>
      <h2>Часто задаваемые вопросы</h2>
      <div>
        <input
          className={'search'}
          type={'text'}
          placeholder={'Поиск'}
          onChange={handleFieldChange}
        />
      </div>
      <QuestionList faq={filteredFaq} isSearched={text !== ''}/>
    </main>
  );
}

export default App;
