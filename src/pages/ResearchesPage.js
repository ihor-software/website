import React, { useState } from 'react';
import FooterComponent from '../Components/FooterComponent';
import lstmresearch from '../img/other/lstm.png'

function ResearchesPage() {
    return (
        <div className='container' >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={lstmresearch} alt="LSTM Research" />
            </div>
            <FooterComponent />
        </div>
    );
}

export default ResearchesPage;