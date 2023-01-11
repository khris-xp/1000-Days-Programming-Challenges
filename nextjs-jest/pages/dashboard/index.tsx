import React from "react";

const DashboardIndexPages = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <button
        disabled={true}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
      <p data-testid="paragraph-blue" className="text-blue-900">
        This is our paragraphs
      </p>
    </div>
  );
};

export default DashboardIndexPages;
