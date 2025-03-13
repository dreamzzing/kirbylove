import React, { useState } from 'react';
import Coach from './pages/Coach';
import Home from './pages/Home';
function App() {

  const [currentPage, setCurrentPage] = useState("home");
  const goToCoach = () => {
    setCurrentPage("coach");
  };

  return (
    <>
      {currentPage === "home" && <Home goToCoach={goToCoach} />}
      {currentPage === "coach" && <Coach />}
    </>
  );
}

export default App;
