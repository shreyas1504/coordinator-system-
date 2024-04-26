import React, { useState } from 'react';

const DeliveryBoyRegistration = () => {
  const [deliveryBoy, setDeliveryBoy] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const registerEntities = () => {
    if (deliveryBoy.trim() !== '') {
      // Registration logic here
      setRegistrationStatus(`Delivery Boy ${deliveryBoy} registered.`);
      setDeliveryBoy('');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', margin: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <h2 style={{ color: '#333' }}>Delivery Boy Registration</h2>
        <div className="delivery-boy">
          <input
            type="text"
            value={deliveryBoy}
            onChange={(e) => setDeliveryBoy(e.target.value)}
            placeholder="Enter Delivery Boy (A, B, C)"
            style={{
              padding: '4px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginRight: '6px',
              width: '300px' // Adjust the width as needed
            }}
          />
          <button
            onClick={registerEntities}
            style={{
              backgroundColor: '#4caf50',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Register Delivery Boys
          </button>
        </div>
        <div id="registrationStatus" style={{ color: '#333', fontWeight: 'bold', marginTop: '10px' }}>
          {registrationStatus}
        </div>
      </div>
    </div>
  );
};

export default DeliveryBoyRegistration;
