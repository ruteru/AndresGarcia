import React, { useState, useEffect } from 'react';
import './calendar.css';

export default function Calendar({ onSelectDate }) {
    const [dates, setDates] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [isUndetermined, setIsUndetermined] = useState(false);

    useEffect(() => {
        generateDates(selectedMonth, year);
    }, [selectedMonth, year]);

    const generateDates = (month, year) => {
        const today = new Date();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const daysArray = [];

        for (let day = 1; day <= lastDay; day++) {
            const date = new Date(year, month, day);
            if (date > today) {
                daysArray.push(date);
            }
        }
        
        setDates(daysArray);
    };

    const handleDateClick = (date) => {
        if (!isUndetermined) {
            onSelectDate(date);
        }
    };

    const handleMonthChange = (e) => {
        const [newYear, newMonth] = e.target.value.split('-').map(Number);
        setYear(newYear);
        setSelectedMonth(newMonth);
    };

    const generateMonthOptions = () => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const options = [];

        for (let monthOffset = 0; monthOffset < 12; monthOffset++) {
            const date = new Date(currentYear, currentMonth + monthOffset, 1);
            if (date > today || (date.getMonth() === currentMonth && date.getDate() !== today.getDate())) {
                const optionValue = `${date.getFullYear()}-${date.getMonth()}`;
                const optionLabel = date.toLocaleString('default', { month: 'long', year: 'numeric' });
                options.push(
                    <option key={optionValue} value={optionValue}>
                        {optionLabel}
                    </option>
                );
            }
        }
        return options;
    };

    const handleUndeterminedChange = (e) => {
        setIsUndetermined(e.target.checked);
    };

    return (
        <div className="calendar">
            <div className="month-selector">
                <label htmlFor="month">Select Month:</label>
                <select id="month" onChange={handleMonthChange} value={`${year}-${selectedMonth}`}>
                    {generateMonthOptions()}
                </select>
                <label className="undetermined-checkbox">
                    <input
                        type="checkbox"
                        checked={isUndetermined}
                        onChange={handleUndeterminedChange}
                    />
                    Undetermined
                </label>
            </div>
            <div className={`calendar-grid ${isUndetermined ? 'disabled' : ''}`}>
                {dates.map((date, index) => (
                    <div 
                        key={index} 
                        className="calendar-day"
                        onClick={() => handleDateClick(date)}
                    >
                        {date.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
}
