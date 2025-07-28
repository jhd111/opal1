import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={() => window.location.href = "/"}>Go Back Home</button>
    </div>
  );
};

export default NotFound;