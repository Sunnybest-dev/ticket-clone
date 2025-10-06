// src/App.jsx
import React from 'react';
import {
  MapPinIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  TicketIcon,
  UserIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { useLocation, Routes, Route } from 'react-router-dom';
// Components
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import PopularNearYou from "./Components/PopularNearYou";
import MobileNavigation from "./Components/MobileNavigation";
import Account from './Pages/Account';
import PlaceholderPage from "./Pages/PlaceholderPage"
import TicketCarouselView from './Pages/TicketCarouselView';
import DiscoverPage from './Pages/DiscoverPage';
import TicketBarcodeView from './Pages/TicketBarcodeView';
import Home from './Pages/Home';
import RecipientForm from './Pages/RecipientForm';
import EventCardScreen from './Pages/EventCardScreen';
import TicketSelectionModal from './Pages/TicketSelectionModal';


const App = () => {
  const categories = ['Concerts', 'Sports', 'Arts, Theater & Comedy'];
    
    const navItems = [
        { name: 'Discover', icon: Squares2X2Icon, path: '/' },
        { name: 'For You', icon: HeartIcon, path: '/foryou' },
        { name: 'My Tickets', icon: TicketIcon, path: '/mytickets' },
        { name: 'Sell', icon: null, path: '/sell' }, 
        { name: 'My Account', icon: UserIcon, path: '/account' },
    ];
    
    const location = useLocation();
    
    const isFullScreenModal = location.pathname.startsWith('/mytickets/barcode') || location.pathname.startsWith('/auth/otp');
    // Check if we are on the main /mytickets page but the modal is open (TransferSelectionModal)
    const isTicketSelectModalOpen = location.pathname === '/mytickets' && location.search.includes('action=transfer_select');


    return (
        // <div className="min-h-screen text-black overflow-hidden font-sans flex flex-col items-center">
            
        //     {/* {!isFullScreenModal && !isTicketSelectModalOpen && (
        //         <div className="w-full h-10 flex items-center justify-between px-4 pt-1 text-sm max-w-sm fixed top-0 bg-black z-40">
        //             <div className="flex items-center space-x-1">
        //                 <div className="w-2 h-2 bg-red-600 rounded-full"></div> 
        //                 <span className="font-semibold text-white/50">ticketmaster</span>
        //             </div>
        //         </div>
        //     )} */}


        //     <div className={`w-full max-w-sm flex-grow overflow-hidden ${isFullScreenModal || isTicketSelectModalOpen ? 'mt-0' : 'mt-0'}`}>
        //         <Routes>
        //             <Route path="/" element={<Home/>} />
        //             <Route path="/foryou" element={<PlaceholderPage title="For You" />} />
        //             <Route path="/mytickets" element={<TicketCarouselView />} />
        //             <Route path="/mytickets/barcode" element={<TicketBarcodeView />} />
        //             <Route path="/sell" element={<PlaceholderPage title="Sell" />} />
        //             <Route path="/account" element={<Account />} /> 
        //             <Route path="*" element={<PlaceholderPage title="404 Not Found" />} />
        //         </Routes>
        //     </div>

        //     {!isFullScreenModal && !isTicketSelectModalOpen && (
        //         <MobileNavigation navItems={navItems} currentPath={location.pathname} />
        //     )}
        // </div>
        <>
<TicketSelectionModal />
        </>
    );
};


export default App;
