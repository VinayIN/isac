import React from 'react';
import { Button } from 'primereact/button';

export const AnchorLink = ({ id, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', `#${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Button icon="pi pi-tag" rounded text raised onClick={handleClick} aria-label="Link" />
      <div id={id}>
        {children}
      </div> 
    </div>
  );
};