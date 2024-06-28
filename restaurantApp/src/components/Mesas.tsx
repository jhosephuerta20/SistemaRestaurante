import React, { useState } from 'react';

const DropdownComponent: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>('');

  const tables = [
    'A-1', 'A-2', 'A-3', 'A-4', 'A-5',
    'B-6', 'B-7', 'B-8', 'B-9', 'B-10'
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTable(e.target.value);
  };

  return (
    <div>
      <label htmlFor="table-select" className="block text-lg font-medium text-gray-700 mb-2">Seleccionar Mesa</label>
      <div className="relative">
        <select
          id="table-select"
          value={selectedTable}
          onChange={handleSelectChange}
          className="block w-full h-14 pl-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="" disabled>Selecciona una mesa</option>
          {tables.map((table) => (
            <option key={table} value={table}>{table}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownComponent;
