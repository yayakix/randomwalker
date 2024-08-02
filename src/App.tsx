
import './App.css'
import Navbar from "./components/Navbar";
import Walker from './components/Walker';
import usePageStore, { PageTypes } from './stores/pageStore';

function App() {
  const { page } = usePageStore();
  let content;

  switch (page) {
    case PageTypes.HOME:
      content = <Walker />
      break;
    case PageTypes.RANDOM_WALKER:
      content = <Walker />

      break;
    // Add more cases as needed
    default:
      content = <div>Home Page</div>;
  }


  return (
    <>
      <Navbar />
      {content}
    </>
  )
}

export default App
