import { useState } from 'react';
import styles from './AddNewModal.module.css';
import ReactDOM from 'react-dom';

import { useAddNewAnimalMutation } from '../../../REDUX/AnimalApi';

type Modal = {
  // children:ReactNode;
  open: boolean;
  onClose: () => void;
};
type NewAnimal = { name: string; type: string; img: string };

const Modal = (props: Modal) => {
  const [addNewAnimal, response] = useAddNewAnimalMutation()
  const [img, setAnimalImage] = useState('');
  const [name, setAnimalName] = useState('');
  const [type, setAnimalType] = useState('');

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let newAnimal = { name, type, img };
    console.log(newAnimal);
    addNewAnimal(newAnimal);
    props.onClose();
    setAnimalImage('');
    setAnimalName('');
    setAnimalType('');
    return newAnimal;
  };

  if (!props.open) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalAround}>
      <div className={styles.modal}>
        <form onSubmit={onSubmit} className={styles.modal}>
          <button onClick={props.onClose}>✕</button>
          <label>
            Animal name:
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setAnimalName(e.target.value)}
            />
          </label>
          <label>
            Animal image:
            <input
              required
              type="text"
              name="image"
              value={img}
              onChange={(e) => setAnimalImage(e.target.value)}
            />
          </label>
          <label>
            Type:
            <select 
            required 
            className={styles.select_type}
            onChange={(e) => setAnimalType(e.target.value)}>
              <option value="">Select your option</option>
              <option value="mammal">mammal</option>
              <option value="bird">bird</option>
              <option value="reptiles">reptiles</option>
              <option value="amphibians">amphibians</option>
              <option value="invertebrates">invertebrates</option>
              <option value="fish">fish</option>
            </select>
          </label>
          <input type="submit" value="Submit" className={styles.submitBtn_48} />
        </form>
      </div>
    </div>,
    document.body as HTMLElement
  );
};
export default Modal;
