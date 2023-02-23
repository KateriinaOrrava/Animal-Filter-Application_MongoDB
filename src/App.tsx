import AddNewAnimal from './COMPONENTS/AddNewAnimal/AddNewAnimal';
import { useState } from 'react';
import styles from './App.module.css';
import {
  useGetAnimalByTypeQuery,
  useDeleteAnimalMutation,
} from './REDUX/AnimalApi';

function App() {
  const [selectedType, setSelectedType] = useState('all');

  const { data, isLoading } = useGetAnimalByTypeQuery(selectedType);
  console.log('by type animal', data);

  const [deleteAnimal, response] = useDeleteAnimalMutation();

  if (response.error) {  
    console.log(response.endpointName)
    return console.log(`CAN'T BE DELETED`,  response.error);
  }

  if (isLoading) {
    return <h3>LOADING ...</h3>;
  }

  if (!data) {
    return <h3>CAN'T BE LOADED</h3>;
  }

  return (
    <div className="App">
      <h1>ANIMAL CARDS</h1>

      <AddNewAnimal />

      <form className={styles.modal}>
        <label>
          Type:
          <select
            required
            className={styles.select_type}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Select your option</option>
            <option value="all">all animals</option>
            <option value="mammal">mammal</option>
            <option value="bird">bird</option>
            <option value="reptiles">reptiles</option>
            <option value="amphibians">amphibians</option>
            <option value="invertebrates">invertebrates</option>
            <option value="fish">fish</option>
          </select>
        </label>
      </form>

      <div className={styles.AllAnimalCards}>
        {data.map(({ name, type, img, _id }) => {
          return (
            <div className={styles.CardWithAnimal} key={_id}>
              <img src={img} alt={name} className={styles.animalImg} />
              <h2>{name}</h2>
              <h3>{type}</h3>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  deleteAnimal(name)
                  console.log(name);
                }}
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
