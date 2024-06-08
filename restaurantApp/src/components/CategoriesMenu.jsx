// import Icons from './Icons.astro';
// import { useState } from 'react';

// interface Props {
//   title: string;
//   cantidad: string;
//   icon: any;
// }

// const CategoriesMenu = ({ title, cantidad, icon }: Props) => {
//   const [isSelected, setIsSelected] = useState(false);

//   const handleClick = () => {
//     setIsSelected(!isSelected);
//   };

//   return (
//     <button 
//       onClick={handleClick} 
//       class={`bg-white flex gap-9 rounded-xl px-6 py-3 items-center ${
//         isSelected ? 'bg-blue-500 text-white' : 'bg-white text-black'
//       }`}
//     >
//       <div>
//         <Icons style="regular" scale={2} name={icon} />
//       </div>
//       <div class="flex flex-col gap-y-2">
//         <span class="font-bold text-xl">{title}</span>
//         <span class="text-start">{cantidad}</span>
//       </div>
//     </button>
//   );
// };

// export default CategoriesMenu;
// <style scoped>
// /* Puedes agregar estilos adicionales aquí si es necesario */
// </style>
