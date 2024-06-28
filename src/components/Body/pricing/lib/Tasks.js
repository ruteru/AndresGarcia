import React, { useState } from "react";
import Calendar from '../../../Calendar/Calendar';
import './tasks.css';

export default function Tasks() {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    const devicesOptions = ["Desktop", "Smartphone", "Other"];
    const servicesOptions = ["Backend", "Frontend", "Fullstack", "Machine Learning"];

    const handleCheckboxChange = (option, setSelected, selected) => {
        if (selected.includes(option)) {
            setSelected(selected.filter(item => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    const handleDateSelect = (date) => {
        const dateString = date.toISOString().split('T')[0];
        let newSelectedDates = [...selectedDates];

        if (newSelectedDates.length === 2) {
            newSelectedDates = [newSelectedDates[1], dateString];
        } else {
            newSelectedDates.push(dateString);
        }

        setSelectedDates(newSelectedDates);
    };

    return (
        <div className="taskContainer">
            <div className="optionsSelector">
                <div className="selectDates">
                    <h4>Select Deadlines</h4>
                    <Calendar selectedDates={selectedDates} onSelectDate={handleDateSelect} />
                    <div className="selected-dates">
                        {selectedDates.map(date => (
                            <div key={date}></div>
                        ))}
                    </div>
                </div>
                <div className="listsTasks">
                    <div className="selectDevices">
                        <strong>Select Devices</strong>
                        {devicesOptions.map(device => (
                            <label key={device}>
                                <input
                                    type="checkbox"
                                    value={device}
                                    checked={selectedDevices.includes(device)}
                                    onChange={() => handleCheckboxChange(device, setSelectedDevices, selectedDevices)}
                                />
                                {device}
                            </label>
                        ))}
                    </div>
                    <div className="selectServices">
                        <strong>Select Service</strong>
                        {servicesOptions.map(service => (
                            <label key={service}>
                                <input
                                    type="checkbox"
                                    value={service}
                                    checked={selectedServices.includes(service)}
                                    onChange={() => handleCheckboxChange(service, setSelectedServices, selectedServices)}
                                />
                                {service}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
