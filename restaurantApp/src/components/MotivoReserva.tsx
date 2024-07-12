import React, { useState } from 'react';

const DropdownComponent: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>('');

  const tables = [
    'Encuantro Casual','Reunion de Negocios','Celebración Familiar',
    'Otros'
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTable(e.target.value);
  };

  return (
    <div>
      <label htmlFor="table-select" className="block font-medium text-gray-700 mb-2">Motivo de la Reserva</label>
      <div className="relative">
        <select
          id="table-select"
          value={selectedTable}
          onChange={handleSelectChange}
          className="block w-full h-10 pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="" disabled>Selecciona un motivo</option>
          {tables.map((table) => (
            <option key={table} value={table}>{table}</option>
          ))}
        </select>
      </div>
      
    </div>
  );
};

export default DropdownComponent;
