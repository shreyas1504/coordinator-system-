
// EmergencyContacts.js
import React from 'react';

const EmergencyContacts = () => {
  const generateEmergencyNumbers = () => {
    // Emergency numbers logic here
    return [
      '911 - Emergency Services',
      '112 - Emergency Services (Europe)',
      '999 - Emergency Services (UK)',
      '123 - nn    Suicide Prevention Hotline',
      '800-273-TALK (8255) - National Suicide Prevention Lifeline'
    ];
  };

  const showEmergencyContacts = () => {
    const emergencyNumbers = generateEmergencyNumbers();
    alert('Emergency Contact List:\n' + emergencyNumbers.join('\n'));
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px auto' }}>
      <button id="emergencyBtn" onClick={showEmergencyContacts}>Emergency Contact List</button>
    </div>
  );
};

export default EmergencyContacts;
