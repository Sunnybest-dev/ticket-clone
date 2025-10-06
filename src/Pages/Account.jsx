import React, { useState } from 'react';
import { 
    ChevronRightIcon, EnvelopeIcon, BellIcon, CreditCardIcon, HeartIcon, 
    PaperAirplaneIcon, MapPinIcon, ArrowTopRightOnSquareIcon, UserIcon 
} from '@heroicons/react/24/outline';
import { BellIcon as BellSolid } from '@heroicons/react/24/solid';

// Custom Toggle Switch
const Switch = ({ isChecked, onToggle }) => (
    <div 
        onClick={onToggle}
        className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
            isChecked ? 'bg-blue-500' : 'bg-gray-300'
        }`}
    >
        <div 
            className={`bg-white w-5 h-5 rounded-full transform transition-transform duration-300 ${
                isChecked ? 'translate-x-4' : 'translate-x-0'
            }`}
        />
    </div>
);

// Reusable Row
const AccountRow = ({ icon: Icon, label, value, isLink = true, isToggle = false, onToggle }) => (
    <div className="flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex items-center justify-center text-gray-700">
                {Icon && <Icon className="w-6 h-6" />}
            </div>
            <span className="text-base text-black">{label}</span>
        </div>
        
        {isToggle ? (
            <Switch isChecked={value} onToggle={onToggle} />
        ) : (
            <div className="flex items-center space-x-1">
                {value && <span className="text-sm text-blue-600 font-medium">{value}</span>}
                {value && <ArrowTopRightOnSquareIcon className="w-4 h-4 text-blue-600" />} 
                {isLink && !value && <ChevronRightIcon className="w-5 h-5 text-gray-400" />}
            </div>
        )}
    </div>
);

// Section Wrapper
const AccountSection = ({ title, children }) => (
    <div className="bg-white mt-4">
        <h3 className="text-lg font-bold text-black px-4 py-3 uppercase tracking-wide">
            {title}
        </h3>
        {children}
    </div>
);

// Main Account Page
const Account = () => {
    const [receiveNotifications, setReceiveNotifications] = useState(true);
    const [locationBasedContent, setLocationBasedContent] = useState(false);

    return (
        <div className="min-h-screen w-full font-sans bg-white overflow-hidden">
            {/* Header */}
            <header className="sticky top-0 bg-black text-white w-full z-10">
                <div className="py-3 text-center text-xl font-semibold">
                    My Account
                </div>
            </header>

            {/* User Info */}
            <div className="bg-black text-white w-full px-4 pb-6">
                <h2 className="text-2xl font-bold">Nayeli</h2>
                <p className="text-sm text-gray-400">poncenayeli518@gmail.com</p>
            </div>

            {/* Content */}
            <div className="max-w-sm mx-auto pb-24 overflow-hidden">
                {/* Notifications */}
                <AccountSection title="Notifications">
                    <AccountRow icon={EnvelopeIcon} label="My Notifications" />
                    <AccountRow 
                        icon={BellSolid} 
                        label="Receive Notifications?" 
                        isLink={false} 
                        isToggle={true} 
                        value={receiveNotifications} 
                        onToggle={() => setReceiveNotifications(!receiveNotifications)}
                    />
                </AccountSection>

                {/* Location Settings */}
                <AccountSection title="Location Settings">
                    <AccountRow icon={MapPinIcon} label="My Location" value="All of USA" />
                    <AccountRow 
                        icon={() => (
                            <span role="img" aria-label="USA Flag" className="text-xl w-6 h-6 flex items-center justify-center">
                                🇺🇸
                            </span>
                        )} 
                        label="My Country" 
                        value="United States"
                    />
                    <AccountRow 
                        icon={PaperAirplaneIcon} 
                        label="Location Based Content" 
                        isLink={false} 
                        isToggle={true} 
                        value={locationBasedContent} 
                        onToggle={() => setLocationBasedContent(!locationBasedContent)}
                    />
                </AccountSection>

                {/* Preferences */}
                <AccountSection title="Preferences">
                    <AccountRow icon={HeartIcon} label="My Favorites" />
                    <AccountRow icon={CreditCardIcon} label="Saved Payment Methods" />
                    <AccountRow 
                        icon={() => (
                            <span className="font-serif text-lg italic font-bold w-6 h-6 flex items-center justify-center text-gray-700">
                                t
                            </span>
                        )} 
                        label="Change App Icon" 
                    />
                </AccountSection>

                {/* Help & Guidance */}
                <AccountSection title="Help & Guidance">
                    <AccountRow icon={UserIcon} label="Contact Customer Service" />
                    <AccountRow icon={BellIcon} label="FAQ & Help Center" />
                </AccountSection>
                <p className='text-red-700 mt-4 text-base'>Log out</p>
            </div>
        </div>
    );
};

export default Account;
