
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Why_to_travelwithus from './Pages/Why_to_travelwithus';
import Our_Fleet from './Pages/Our_Fleet';
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Your_next_adventure from './Pages/Your_next_adventure';
import ScrollToTop from './Components/Scrolltotop';
import Rajasthan10days from './Pages/Rajasthan10days';
import Rajasthan10daysvip from './Pages/Rajasthan10daysvip';
import Himalaya4days from './Pages/Himalaya4days';
import Himalaya10days from './Pages/Himalaya10days';
import { useEffect } from 'react';
import ContactUs from './Pages/ContactUs';


function App() {


  useEffect(() => {
    // Clear sessionStorage when the page reloads
    sessionStorage.clear();
  }, []);


  return (
    <>
    
    {/* <Navbar/>*/}
  <Navbar/>
  <ScrollToTop/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/whytotravel'element={<Why_to_travelwithus/>}/>
    <Route path='/yournextadventure' element={<Your_next_adventure/>}/>
     <Route path='/ourfleet' element={<Our_Fleet/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/gallery' element={<Gallery/>}/>
     <Route path='/aboutus' element={<About/>}/>
     <Route path='/contactus' element={<ContactUs/>}/>
     <Route path='/rajasthan10days' element={<Rajasthan10days/>}/>
     <Route path="/rajasthan10daysvip" element={<Rajasthan10daysvip/>}/>
     <Route path="/himalaya4days" element={<Himalaya4days/>}/>
     <Route path="/himalaya10days" element={<Himalaya10days/>}/>

  </Routes>

    </>
  );
}

export default App;
