import React, { FC } from 'react';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return(
    <div className="modal is-active has-text-centered" >
      <div className="modal-background" onClick={onClose} style={{backgroundColor:"gray"}}></div>
      <div className="modal-card" style={{border:"3px solid aqua", borderRadius:"2px"}}>
        <header className="modal-card-head has-background-danger">
          <p className="modal-card-title has-text-white">{message}</p>
        </header>
        <footer className="modal-card-foot" style={{justifyContent: 'center'}}>
          <button className="button" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}

export default Alert;