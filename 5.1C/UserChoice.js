import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './sharesection.css';   

function UserChoice({ postType, setPostType }) {
  const handlePostTypeChange = (event, { value }) => {
    setPostType(value);
  };

  return (
    <div>
      <div className="header">New Post</div>
      <br />

      {/* Label + Radios inline */}
      <Form>
        <Form.Group inline>
          <label style={{ marginRight: '10px' }}>Select Post Type:</label>
          <Radio
            label="Question"
            name="postType"
            value="question"
            checked={postType === 'question'}
            onChange={handlePostTypeChange}
          />
          <Radio
            label="Article"
            name="postType"
            value="article"
            checked={postType === 'article'}
            onChange={handlePostTypeChange}
            style={{ marginLeft: '15px' }}
          />
        </Form.Group>
      </Form>

      <br />
      <div className="header">What do you want to ask or share</div>
      <div>
        <p>
          This section is designed based on the type of the post. It could be developed by conditional rendering.{" "}
          {postType === 'question' && (
            <span className="red-text">For posting a question, the following section would be appeared.</span>
          )}
          {postType === 'article' && (
            <span className="red-text">For posting an article, the following section would be appeared.</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default UserChoice;
