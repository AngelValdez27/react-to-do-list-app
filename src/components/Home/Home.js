import './Home.css';
import Navbar from '../Navbar/Navbar';
import Greeting from './Greeting/Greeting';

function Home() {
  return (
    <section className='px-10 lg:px-52 pt-8'>
        <Navbar />
        <Greeting />
    </section>
  );
}

export default Home;