import React, { useState } from 'react';

const DropdownComponent: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>('');

  const tables = [
    'AV. Golf 206','AV. La Marina 231','Real Plaza-230'
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTable(e.target.value);
  };

  return (
    <div>
      <label htmlFor="table-select" className="block text-lg font-medium text-gray-700 mb-2">Seleccionar tu Sucursal Favorita</label>
      <div className="relative">
        <select
          id="table-select"
          value={selectedTable}
          onChange={handleSelectChange}
          className="block w-full h-14 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="" disabled>Selecciona una sucursal</option>
          {tables.map((table) => (
            <option key={table} value={table}>{table}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownComponent;
