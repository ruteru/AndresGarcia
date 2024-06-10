import React, { useState } from "react";
import Calendar from '../../Calendar/Calendar';
import './tasks.css';
import { FcApproval } from "react-icons/fc";

export default function Tasks() {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    const devicesOptions = ["Desktop", "Tablet", "Smartphone"];
    const servicesOptions = ["Backend", "Frontend", "Fullstack", "Machine Learning"];

    const handleCheckboxChange = (option, setSelected, selected) => {
        if (selected.includes(option)) {
            setSelected(selected.filter(item => item !== option));
        } else {
            setSelected([...selected, option]);
        }
    };

    const handleDateSelect = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        if (!selectedDates.includes(formattedDate)) {
            setSelectedDates([...selectedDates, formattedDate]);
        } else {
            setSelectedDates(selectedDates.filter(d => d !== formattedDate));
        }
    };

    return (
        <div className="taskContainer">
            <div className="optionsSelector">
                <div className="selectDates">
                    <h4>Select Deadlines</h4>
                    <Calendar onSelectDate={handleDateSelect} />
                    <div className="selected-dates">
                        {selectedDates.map(date => (
                            <div key={date}>{date}</div>
                        ))}
                    </div>
                </div>
                <div className="selectDevices">
                    <h4>Select Devices</h4>
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
                    <h4>Select Service</h4>
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
    );
}
