import React, { useEffect } from 'react';
import { startLoadingEffect } from './loadingAction.js'; // Import the loading effect function
import './Loading.css'; // Import the CSS file for styling


function Loading() {
  useEffect(() => {
    startLoadingEffect(); // Start the loading effect when the component mounts

    // Add 'loading' class to body when component mounts
    document.body.classList.add('loading');

    // Remove 'loading' class from body when component unmounts
    return () => {
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <div id="loading" className="loadingContainer">
      LOADING
    </div>

  );
}

export default Loading;
