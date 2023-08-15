import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
