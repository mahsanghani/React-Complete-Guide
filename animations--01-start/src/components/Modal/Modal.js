import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 800
}

const modal = (props) => {
  return (
  <CSSTransition
  in={props.show}
  timeout={animationTiming}
  mountOnEnter
  unmountOnExit
  classNames={{
    enter: '',
    enterActive: 'ModalOpen',
    exit: '',
    exitActive: 'ModalClosed'
    // next 2 run for a component that is hardcoded into the DOM and runs when it initially loads
    // appear:
    // appearActive:
  }}>
    <div className='Modal'>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
  </CSSTransition>
  )
};

export default modal;