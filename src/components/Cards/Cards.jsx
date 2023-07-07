import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   return (
      <div className={styles.div}>
         {props.characters.map((pj) => (
            <Card 
               key={pj.id}
               name={pj.name} 
               species={pj.species} 
               onClose={() => window.alert("Emulacion")}
               gender={pj.gender}
               status={pj.status}
               image={pj.image}
               origin={pj.origin.name} 
         />
      ))}
   </div>
   );
}

