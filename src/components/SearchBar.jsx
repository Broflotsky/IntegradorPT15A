export default function SearchBar(props) {
  const { onSearch } = props;
  return (
    <div>
      <input type="search" />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
}
