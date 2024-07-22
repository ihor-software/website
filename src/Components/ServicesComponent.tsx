import React, { useState } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
}

const ServicesComponent: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    { id: 1, name: 'Websites', description: 'Recent role: Fullstack React & Node.js in Radency Technologies: HTML, JavaScript, TypeScript, Angular, React, RxJS, NgRX, CSS, Bootstrap. Services: system architecture design, authorization logic, custom UI components, realtime chat, AI assistant, documents scanner, code review.' },
    { id: 2, name: 'Mobile Apps', description: 'Recent Role: iOS Engineer in BlackBerry. Technologies: Objective-C, Swift, XCTest, Testflight, Logger. Contribution: authorization logic, test coverage, bug fixing, device debugging, code review, Objective-C to Swift migration, refactoring.' },
    { id: 3, name: 'Test Coverage', description: 'Recent Role: Developer in Blackberry. Technologies: XCTest, Selenium, Jest. Contribution: UI-Testing, Unit-Testing, Test Automation' },
    { id: 4, name: 'Project Support', description: 'Recent Role: iOS Developer in Epam. Technologies: Swift, Figma, Programmatic layout, API, Mocking, XCTest. Contribution: SwiftUI lists, API based applications, notification center, advanced folder structure and persistent CoreData storage, quick fetch mechanisms, photo structuring and editing functionality, animations and mobile games, drawing, UI class adaptation for wide range screen resolutions, advanced search and filtering, code review.' },
    { id: 5, name: 'Host & Deploy', description: 'Hosting websites with custom domains. Publishing iOS Applications to AppStore.' },
  ];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <div style={{ display: 'flex', minHeight: '300px', border: '10px solid white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
        {services.map((service) => (
          <li
            style={{
              paddingTop: '10px',
              paddingBottom: '10px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              cursor: 'pointer',
              backgroundColor: selectedService?.id === service.id ? 'orange' : 'lightgray',
              margin: '5px',
              borderRadius: '5px'
            }}
            key={service.id}
            onClick={() => handleServiceClick(service)}
          >
            {service.name}
          </li>
        ))}
      </ul>
      <div style={{ padding: '10px', textAlign: 'left' }}>
        {selectedService ? (
          <div>
            <h3>{selectedService.name}</h3>
            <p style={{ fontSize: '15px', textAlign: 'justify' }}>
              {selectedService.description}
            </p>
          </div>
        ) : (
          <p>Select a service to view</p>
        )}
      </div>
    </div>
  );
};

export default ServicesComponent;
