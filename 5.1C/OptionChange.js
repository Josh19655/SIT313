import React from 'react';
import QuestionOption from './QuestionOption';
import ArticleOption from './Article';
import './Pbutton.css';

function OptionChange({ postType }) {
  return (
    <div>
      <div>
        {postType === 'question' && <QuestionOption />}
        {postType === 'article' && <ArticleOption />}
      </div>

      <div>
        <button type="submit" className="post-button">
          Post
        </button>
      </div>
    </div>
  );
}

export default OptionChange;
