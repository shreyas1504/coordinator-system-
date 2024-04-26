// JobAllocation.js
import React, { useState } from 'react';

const JobAllocation = ({ deliveryBoys }) => {
  const [allocationStatus, setAllocationStatus] = useState('');

  const allocateRoutes = () => {
    // Allocation logic here
    setAllocationStatus('Routes allocated to delivery boys.');
  };

  return (
    <div id="allocation" style={{ textAlign: 'center', margin: '20px auto' }}>
      <h2 style={{ color: '#333' }}>Job Allocation</h2>
      <button
        onClick={allocateRoutes}
        style={{
          backgroundColor: '#4caf50',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Allocate Routes
      </button>
      <div id="allocationStatus" style={{ color: '#333', fontWeight: 'bold', marginTop: '10px' }}>
        {allocationStatus}
      </div>
    </div>
  );
};

export default JobAllocation;
