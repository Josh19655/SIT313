import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const Smallbutton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <Segment>
        
        <Button
          color='black'
          content='SEE MORE WORKERS'
          icon='add'
          labelPosition='center'
          alignItems='center'
        />
      </Segment>
    </div>
    
  );
}

export default Smallbutton