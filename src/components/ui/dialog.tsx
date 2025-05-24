import React from 'react';

export const Dialog = ({ children, ...props }) => (
  <div role="dialog" {...props}>
    {children}
  </div>
);

export const DialogContent = ({ children, ...props }) => (
  <div className="dialog-content" {...props}>
    {children}
  </div>
);

export const DialogHeader = ({ children, ...props }) => (
  <div className="dialog-header" {...props}>
    {children}
  </div>
);

export const DialogTitle = ({ children, ...props }) => (
  <h2 className="dialog-title" {...props}>
    {children}
  </h2>
);
