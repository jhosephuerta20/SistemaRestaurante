import React, { useState } from 'react';

const DatePickerComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 5);

    // Remove time component for accurate date comparison
    today.setHours(0, 0, 0, 0);
    maxDate.setHours(0, 0, 0, 0);

    if (selectedDate < today || selectedDate > maxDate) {
      setErrorMessage('Error: Fecha inválida. Selecciona una fecha entre mañana y los próximos 5 días.');
      setSelectedDate('');
    } else {
      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
      setSelectedDate(selectedDate.toLocaleDateString('es-ES', options));
      setErrorMessage('');
    }
  };

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 5);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='my-5'>
      <label htmlFor="date-picker" className="block text-lg font-medium text-gray-700 mb-2">Indicar Fecha</label>
      <div className="relative">
        <button className="w-full h-14   inline-flex justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {selectedDate || 'Seleccionar fecha'}
        </button>
        <input
          id="date-picker"
          type="date"
          min={formatDate(today)}
          max={formatDate(maxDate)}
          onChange={handleDateChange}
          className="absolute inset-0 w-full h-full cursor-pointer rounded-md pl-3"
        />
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default DatePickerComponent;
