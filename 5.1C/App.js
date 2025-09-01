import React, { useState } from 'react';
import UserChoice from './UserChoice';
import OptionChange from './OptionChange';

function App() {
  const [postType, setPostType] = useState('question'); 

  return (
    <div>
      {/* Dropdown or radio buttons for selecting post type */}
      <UserChoice postType={postType} setPostType={setPostType} />

      {/* Conditionally render QuestionOption or ArticleOption */}
      <OptionChange postType={postType} />
    </div>
  );
}

export default App;
