
import './App.css'
import Navbar from "./components/Navbar";
import Walker from './components/Walker';
import usePageStore, { PageTypes } from './stores/store';
import RandGaussian from './components/RandGaussian';
import AcceptRejectDistribution from './components/AcceptRejectDistribution';

function App() {
  const { page } = usePageStore() as { page: PageTypes };
  let content;

  switch (page) {
    case PageTypes.HOME:
      content = <RandGaussian />
      break;
    case PageTypes.RANDOM_WALKER:
      content = <Walker />
      break;
    case PageTypes.RANDOM_GAUSSIAN:
      content = <RandGaussian />
      break;
    case PageTypes.ACCEPT_REJECT_DISTRIBUTION:
      content = <AcceptRejectDistribution />
      break;
    // Add more cases as needed
    default:
      content = <div>Home Page</div>;
  }


  return (
    <>
      <div className='flex flex-row w-full h-full justify-start items-center'>
        <div className=''>
          <Navbar />
        </div>
        <div className=''>
          {content}
        </div>
      </div>
    </>
  )
}

export default App
