import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonStyle = active
    ? 'text-black border-b border-purple-500'
    : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-slate-500 ${buttonStyle}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
