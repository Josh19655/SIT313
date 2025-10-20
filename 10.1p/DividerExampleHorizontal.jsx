import React from 'react';
import { Divider } from 'semantic-ui-react';

const DividerExampleHorizontal = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
      boxSizing: 'border-box'
    }}>
      <Divider horizontal style={{ width: '80%', textAlign: 'center', fontWeight: 'bold' }}>
        ----------------------- Featured Workers -----------------------
      </Divider>
    </div>
  );
};

export default DividerExampleHorizontal;
