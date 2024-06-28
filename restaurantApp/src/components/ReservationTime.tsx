import React, { useState } from 'react';

const TimePickerComponent: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTime = e.target.value;
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const time = new Date();
    time.setHours(hours, minutes, 0, 0);

    const minTime = new Date();
    minTime.setHours(11, 0, 0, 0);
    const maxTime = new Date();
    maxTime.setHours(22, 0, 0, 0);

    if (time < minTime || time > maxTime) {
      setErrorMessage('Error: Hora inválida. Selecciona una hora entre 11:00 am y 10:00 pm.');
      setSelectedTime('');
    } else {
      setSelectedTime(selectedTime);
      setErrorMessage('');
    }
  };

  return (
    <div>
      <label htmlFor="time-picker" className="block text-lg font-medium text-gray-700 mb-2">Indicar Hora</label>
      <div className="relative">
        <button className="w-full h-14 inline-flex justify-between  border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {selectedTime || 'Seleccionar hora'}
        </button>
        <input
          id="time-picker"
          type="time"
          min="11:00"
          max="22:00"
          onChange={handleTimeChange}
          className="absolute inset-0 w-full h-full cursor-pointer pl-3 rounded-md"
        />
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default TimePickerComponent;
