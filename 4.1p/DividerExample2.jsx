import React from 'react'
import { Divider,  Segment } from 'semantic-ui-react'

const DividerExample2 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <Segment>
        <Divider horizontal>-----------------------Featured Users-----------------</Divider>

       
      </Segment>
    </div>
    
  );
}

export default DividerExample2