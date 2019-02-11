import React from 'react';

const characters = (props) => {
    const getInfo = props.getInfo
    getInfo("characters")
  return (
    <div>
      <p>characaters</p>
    </div>
  );
};

export default characters;