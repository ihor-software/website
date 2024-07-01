//education, completed courses
import React, { useState } from 'react';
import FooterComponent from '../Components/FooterComponent';
import QualificationListComponent from '../Components/QualificationListComponent';


function QualificationsPage() {
    return (
        <div>
            <QualificationListComponent />
            <FooterComponent />
        </div>
    );
}

export default QualificationsPage;