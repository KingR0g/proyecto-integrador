import Card from './Card';

export default function Cards(props) {

// [{}, {}, {}, {}, {}, {}]
// pj === "personaje"

   console.log("cards", props.characters)
   return <div>
      {props.characters.map(pj => {
         return <Card 
         key={pj.id}
         name={pj.name} 
         species={pj.species} 
         onClose={() => window.alert("Emulacion")}
         gender={pj.gender}
         status={pj.status}
         image={pj.image}
         origin={pj.origin.name} 
         />
      })}
   </div>;
}
