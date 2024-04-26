
import React from 'react';
import DeliveryBoyRegistration from './DeliveryBoyRegistration';
import JobAllocation from './JobAllocation';
import Map from './Map';
import EmergencyContacts from './EmergencyContacts';

const App = () => {
  const deliveryBoys = ['A', 'B', 'C']; // You can manage delivery boys here

  return (
    <div>
      <h1 style={{ textAlign: 'center'}}>Disaster Relief Coordinating System</h1>
      <DeliveryBoyRegistration />
      <JobAllocation deliveryBoys={deliveryBoys} />
      <Map />
      <EmergencyContacts />
    </div>
  );
};

export default App;

