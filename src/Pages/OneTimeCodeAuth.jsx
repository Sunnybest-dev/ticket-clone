import React, { useState, useRef, useEffect } from 'react';

const HEADER_HEIGHT_PX = 60;
const FOOTER_HEIGHT_PX = 80;

const AuthIcon = () => (
  <div className="flex justify-center items-center py-8 w-full bg-gray-900">
    <svg width="200" height="150" viewBox="0 0 350 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-auto">
      <path d="M40 20C40 8.95431 48.9543 0 60 0H290C301.046 0 310 8.95431 310 20V160C310 171.046 301.046 180 290 180H120L40 220V180C28.9543 180 20 171.046 20 160V60C20 48.9543 28.9543 40 40 40Z" fill="white"/>
      <rect x="80" y="40" width="180" height="110" rx="10" fill="#1e40af"/>
      <text x="100" y="110" fontFamily="Inter, sans-serif" fontSize="50" fill="white" fontWeight="900">*</text>
      <text x="140" y="110" fontFamily="Inter, sans-serif" fontSize="50" fill="white" fontWeight="900">*</text>
      <text x="180" y="110" fontFamily="Inter, sans-serif" fontSize="50" fill="white" fontWeight="900">*</text>
      <rect x="250" y="70" width="50" height="70" rx="8" fill="#FBBF24"/>
      <path d="M260 70C260 58.9543 268.954 50 280 50C291.046 50 300 58.9543 300 70H260Z" fill="#F59E0B"/>
      <circle cx="275" cy="115" r="5" fill="#1e40af"/>
      <path d="M225 70H235V140H225V70Z" fill="#1e40af"/>
    </svg>
  </div>
);

const SuccessView = ({ onBack, onAuthSuccess }) => {
  const handleContinue = () => {
    onBack();
    onAuthSuccess();
  };
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-30 bg-white/90 backdrop-blur-md">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-xs">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <h2 className="text-3xl font-extrabold mt-4 text-gray-900">Success!</h2>
        <p className="text-md text-gray-500 mt-2">Your account has been verified.</p>
        <button 
          onClick={handleContinue}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition duration-150"
        >
          Continue to App
        </button>
      </div>
    </div>
  );
};

export const OneTimeCodeAuth = ({ onAuthSuccess, onCancel }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [isSuccess]);

  const handleConfirm = () => {
    if (code.trim().length > 0) {
      setIsSuccess(true);
    } else {
      setIsInvalid(true);
      setTimeout(() => setIsInvalid(false), 1000);
    }
  };

  const handleCancelClick = () => {
    setCode('');
    setIsSuccess(false);
    if (onCancel) onCancel();
  };

  return (
    <div className="text-gray-900 flex flex-col h-screen relative overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-20 bg-blue-700 text-white p-4 shadow-lg flex items-center justify-center" style={{ height: `${HEADER_HEIGHT_PX}px` }}>
        <div className="absolute left-4">
          <button onClick={handleCancelClick} className="text-gray-200 text-base font-medium">Cancel</button>
        </div>
        <div className="text-lg font-semibold">Authentication</div>
      </header>

      <main className="flex flex-col items-center justify-start flex-grow mt-[60px] bg-white w-full">
        <AuthIcon />
        <div className="p-4 w-full max-w-md text-center">
          <h2 className="text-xl font-bold text-gray-800 text-start">Authenticate Your Account</h2>
          <p className="text-gray-600 text-sm mt-2 text-start w-100">
            A one-time code has been sent to <span className="font-mono text-sm text-gray-900">******6525</span>. Please <br />
            enter your code below to continue.
          </p>

          <div className="mt-6 space-y-3">
            <label htmlFor="one-time-code" className="text-gray-700 font-semibold text-sm block text-start">One-Time Code</label>
            <input
              ref={inputRef}
              id="one-time-code"
              type="tel"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              inputMode="numeric"
              className={`w-full p-3 border rounded-xl text-center text-xl tracking-widest outline-none ${
                isInvalid ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
              }`}
            />
            <p className="text-sm text-start text-gray-500">It may take a minute to receive your code.</p>
          </div>

          <footer className="absolute bottom-15 left-0 right-0 z-20 p-4 bg-white" style={{ height: `${FOOTER_HEIGHT_PX}px` }}>
            <button
              onClick={handleConfirm}
              disabled={code.length === 0}
              className={`w-full bg-blue-500 text-white font-bold py-3 rounded-xl transition duration-150 text-lg ${
                code.length === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-blue-600'
              }`}
            >
              Confirm Code
            </button>
          </footer>
        </div>
      </main>

      {isSuccess && <SuccessView onBack={() => setIsSuccess(false)} onAuthSuccess={onAuthSuccess} />}
    </div>
  );
};
