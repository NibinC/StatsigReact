import React from 'react';
import { useGate } from 'statsig-react';

function DarkModeComponent() {
  const {isLoading, value} = useGate("dark_mode_enabled");
  console.log(value)
  
  if (isLoading) {
    return <div>Fetching Values...</div>;
  }

  return (
    <div>
      {value ? 'Dark mode is enabled' : 'Dark mode is disabled'}
    </div>
  );
}

export default DarkModeComponent;