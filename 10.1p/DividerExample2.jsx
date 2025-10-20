// import React from 'react'
// import { Divider,  Segment } from 'semantic-ui-react'

// const DividerExample2 = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
//       <Segment>
//         <Divider horizontal>-----------------------Featured Clients-----------------</Divider>

       
//       </Segment>
//     </div>
    
//   );
// }

// export default DividerExample2


import React from 'react';
import { Divider } from 'semantic-ui-react';

const DividerExample2 = () => {
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
        ----------------------- Featured Clients -----------------------
      </Divider>
    </div>
  );
};

export default DividerExample2;
