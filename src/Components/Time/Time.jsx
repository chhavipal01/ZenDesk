import React, { useState, useEffect } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState({
        date: new Date().toDateString().slice(0, 11),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime({
                date: now.toDateString().slice(0, 11),
                time: `${now.getHours()}:${now.getMinutes()}`
            });
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='time-card flex justify-center flex-col w-[350px] h-[130px] text-[25px] bg-[#222] text-white p-[15px] rounded-[10px]'>
             <span className='time-span'>{currentTime.time}</span>
            <span className='time-span'>{currentTime.date}</span>
            <br />
           
        </div>
    );
};

export default Time;
