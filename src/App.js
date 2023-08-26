import Title from "./components/Title";
import Holiday from "./components/Holiday";


function App() {
  return (
    <section className="section-center">
      <div className='container'>
        <Title text='Vacanze da sogno'/>
        <Holiday/>
      </div>
    </section>
  );
}

export default App;
