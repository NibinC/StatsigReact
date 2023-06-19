import logo from './logo.svg';
import './App.css';
import React from 'react';
import { StatsigProvider, useGate, useConfig, useExperiment, Statsig} from 'statsig-react';

function ColorButtonComponent() {
  const variation = useExperiment("button_color_experiment").config.get("User Type", "Free")
  console.log(variation)
  // Apply the variation to the button color
  let buttonColor;
  switch (variation) {
    case 'Premium':
      buttonColor = 'red';
      break;
    case 'Free':
      buttonColor = 'blue';
      break;
    default:
      buttonColor = 'gray';
  }

  // Function to track button clicks
  const handleClick = () => {
    console.log("Button clicked!");
    Statsig.logEvent('button_click', { buttonId: variation });
  };

  return (
    <div>
      <h1>If you would like to proceed </h1>
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
       <h1> Click Me >>> </h1>
      </button>
    </div>
  );
}

function App() {
  const user = {
    userID: '1' // User ID
    // email: 'user@example.com', // User's email
    // age: 25, // User's age
    // country: 'US', // User's country
    // // Add any other user attributes you need
  };
  return (
    <StatsigProvider sdkKey="client-8kqLLcwCaNeT3dS5HlKWFFKXVxOKQ6OUpvOPJGuFm9g" user={user}>
      <div className="App">
        <DarkModeComponent />
        
      </div>
    </StatsigProvider>
  );
}

function DarkModeComponent() {
  // Use the useGate hook to check the 'dark_mode_enabled' feature gate
  const {isLoading, value } = useGate('dark_mode_enabled');
  const styleConfig = useConfig("os_style_config", {});

  // const { backgroundColor, textColor } = styleConfig;
  const { backgroundColor, textColor } = styleConfig.config.value;
  
  console.log(value)

  if (isLoading) {
    return <div>Fetching Values...</div>;
  }

  return (
    <div
    style={{
      backgroundColor: value ? backgroundColor : 'white',
      color: value ? textColor : 'black',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {value ? <ColorButtonComponent />  :  <ColorButtonComponent />}
    
  </div>
  
  );
}

export default App;
