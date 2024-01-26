function App() {
  const [toggleOne, setToggleOne] = useState(false);
 
  return (
    <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>;
    useEffect(() => {
      console.log('UseEffect1 Ran');
    }, []);
    <>
      <h1>Hello App</h1>
    </>
  );
}

export default App;
