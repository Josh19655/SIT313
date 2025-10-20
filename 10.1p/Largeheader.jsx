import React from "react";

function Largeheader() {
    const style = {
        color: '#df7e1dff',         
        backgroundColor: '#5f2d06ff',
        width: '100%',
        textAlign: 'center',
        padding: '20px',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <h1 style={style}>Deakin University</h1>
        </div>
    );
}

export default Largeheader;
