"use client";
import React, { useState, useEffect, useRef } from 'react';

function Menubar() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherDescription, setWeatherDescription] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [weatherLoading, setWeatherLoading] = useState<boolean>(false);
  const [locationDenied, setLocationDenied] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const apiKey = '2633855468a3f8e0d1fdff0480e80f0a';

  // Convert a string to Pascal Case
  const toPascalCase = (str: string): string => {
    return str
      .replace(/(^\w|-\w|\s\w)/g, match => match.replace(/-|\s/, ' ').toUpperCase());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleWeatherButtonClick = async () => {
    setWeatherLoading(true);
    setLocationDenied(false);
    try {
      const getPosition = (options?: PositionOptions): Promise<GeolocationPosition> => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      };

      const position = await getPosition();
      const { latitude, longitude } = position.coords;

      const locationResponse = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`);
      const locationData = await locationResponse.json();
      if (locationData && locationData[0]) {
        const cityName = locationData[0].name;
        setCity(cityName);

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
        const weatherData = await weatherResponse.json();
        setTemperature(weatherData.main.temp);
        setWeatherDescription(toPascalCase(weatherData.weather[0].description)); // Apply Pascal Case conversion
      }
    } catch (error) {
      if (error instanceof GeolocationPositionError) {
        if (error.code === error.PERMISSION_DENIED) {
          setLocationDenied(true);
        }
      } else {
        console.error('Error fetching location or weather data:', error);
      }
    } finally {
      setWeatherLoading(false);
    }
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const getDay = (date: Date): string => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[date.getDay()];
  };

  const getMonth = (date: Date): string => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[date.getMonth()];
  };

  const getYear = (date: Date): number => {
    return date.getFullYear();
  };

  const getDate = (date: Date): number => {
    return date.getDate();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div>
      <div className='fixed top-0 z-[999] w-screen'>
        <div className='h-8 backdrop-blur-xl px-3 text-lg font-semibold text-gray-800/85 bg-slate-50/15 flex justify-between'>
          <div className='flex gap-6'>
            <img 
              className='h-7 opacity-70 cursor-pointer' 
              src="/logo.svg" 
              alt="Logo"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setMenuOpen(!menuOpen);
                }
              }} 
            />
            <div className='hidden lg:flex gap-6 '>
              <button> Figma </button>
              <button> Email </button>
              <button> Instagram </button>
              <button> Github </button>
              <button> Linkedin </button>
            </div>
          </div>
          <div className='flex gap-6'>
            <button className='hidden lg:flex gap-6' onClick={handleWeatherButtonClick}>
              {weatherLoading
                ? 'Loading weather...'
                : city && weatherDescription
                ? `${weatherDescription}, ${temperature}°C`
                : locationDenied
                ? 'Access denied'
                : 'Get Weather'}
            </button>
            <button className='hidden lg:flex gap-6'>{getDay(currentTime)}</button>
            <button className='hidden lg:flex gap-6'>{getDate(currentTime)} {getMonth(currentTime)} {getYear(currentTime)}</button>
            <button>{formatTime(currentTime)}</button>
          </div>
        </div>
      </div>

  
      <div 
        ref={menuRef}
        className={`fixed top-10 left-0 max-h-full overflow-y-auto bg-white/70 backdrop-blur-lg shadow-lg rounded-xl transition-transform duration-300 px-3`} 
        style={{
          zIndex: 100000,
          width: '100%',
          maxWidth: '200px',
          transform: menuOpen ? 'translateX(5%)' : 'translateX(-100%)'
        }}
      >
        <div className='flex flex-col p-4 text-lg font-semibold text-gray-800/85'>
          <button className='text-left py-2' onClick={() => setMenuOpen(false)}> Figma </button>
          <button className='text-left py-2' onClick={() => setMenuOpen(false)}> Email </button>
          <button className='text-left py-2' onClick={() => setMenuOpen(false)}> Instagram </button>
          <button className='text-left py-2' onClick={() => setMenuOpen(false)}> Github </button>
          <button className='text-left py-2' onClick={() => setMenuOpen(false)}> Linkedin </button>
          <button 
            className='text-left py-2 mt-4 hidden lg:block' 
            onClick={() => {
              setMenuOpen(false);
              handleWeatherButtonClick();
            }}
          >
            {weatherLoading
              ? 'Loading weather...'
              : city && weatherDescription
              ? `${weatherDescription}, ${temperature}°C`
              : locationDenied
              ? 'Access denied'
              : 'Get Weather'}
          </button>
          <button className='text-left py-2 mt-4 hidden lg:block'>{getDay(currentTime)}</button>
          <button className='text-left py-2 hidden lg:block'>{getDate(currentTime)} {getMonth(currentTime)} {getYear(currentTime)}</button>
          <button className='text-left py-2 hidden lg:block'>{formatTime(currentTime)}</button>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
