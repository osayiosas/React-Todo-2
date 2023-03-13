import { useState } from 'react'

import Modal from './Modal';
import Backdrop from './Backdrop';


export const Todo = (props) =>
{

  const [showModal, setModal] = useState(false);

  const deleteHandler = () =>
  {
    setModal(true);
  }

  const closeHandler = () =>
  {
    setModal(false);
  }
  

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal />}
      {showModal && <Backdrop onCancel={closeHandler} />}
    </div>
  );
}

export default Todo
