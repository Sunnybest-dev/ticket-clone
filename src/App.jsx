import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import Sports from "./pages/Sports";
// import Concerts from "./pages/Concerts";
// import ArtsTheater from "./pages/ArtsTheater";
// import EventDetails from "./pages/EventDetails";
// import Checkout from "./pages/Checkout";
// import SignIn from "./pages/SignIn";
// import NotFound from "./pages/NotFound";
import Lang from "./Components/Lang";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import ConcertCard from "./Components/ConcertCard";

export default function App() {
  return (
    <>
    <Lang />
    <Header />
    <Searchbar />
    <ConcertCard />
    </>
    // <Router>
    //   <div className="min-h-screen flex flex-col">
    //     <Navbar />
    //     <main className="flex-1">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/events" element={<Events />} />
    //         <Route path="/sports" element={<Sports />} />
    //         <Route path="/concerts" element={<Concerts />} />
    //         <Route path="/arts-theater" element={<ArtsTheater />} />
    //         <Route path="/event/:id" element={<EventDetails />} />
    //         <Route path="/checkout" element={<Checkout />} />
    //         <Route path="/signin" element={<SignIn />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </main>
    //     <Footer />
    //   </div>
    // </Router>
  );
}
