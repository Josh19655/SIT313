import React from 'react'
import { Divider,  Segment } from 'semantic-ui-react'

const DividerExampleHorizontal = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <Segment>
        <Divider horizontal>-----------------------Featured Clients-----------------</Divider>

       
      </Segment>
    </div>
    
  );
}

export default DividerExampleHorizontal