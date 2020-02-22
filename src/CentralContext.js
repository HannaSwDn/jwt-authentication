import React, { useState, createContext } from 'react';

export const CentralContext = createContext();

export const CentralProvider = props => {
  const [items, setItems] = useState([
    {
      name: 'First',
      price: '$10',
      id: 10
    },
    {
      name: 'Second',
      price: '$12',
      id: 20
    },
    {
      name: 'Third',
      price: '$11',
      id: 30
    },
  ]);

  return (
    <CentralContext.Provider value={[items, setItems]} >
      { props.children }
    </CentralContext.Provider>
  );
}
