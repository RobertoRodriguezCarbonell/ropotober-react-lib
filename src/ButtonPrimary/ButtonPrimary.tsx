import React from 'react';

// Define los tipos para los valores válidos de color y tamaño
type Size = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
type BgColor = 
  | 'wewak-50' | 'wewak-100' | 'wewak-200' | 'wewak-300' | 'wewak-400' | 'wewak-500'
  | 'wewak-600' | 'wewak-700' | 'wewak-800' | 'wewak-900' | 'wewak-950'
  | 'biloba-flower-50' | 'biloba-flower-100' | 'biloba-flower-200' | 'biloba-flower-300'
  | 'biloba-flower-400' | 'biloba-flower-500' | 'biloba-flower-600' | 'biloba-flower-700'
  | 'biloba-flower-800' | 'biloba-flower-900' | 'biloba-flower-950'
  | 'perano-50' | 'perano-100' | 'perano-200' | 'perano-300' | 'perano-400' | 'perano-500'
  | 'perano-600' | 'perano-700' | 'perano-800' | 'perano-900' | 'perano-950'
  | 'water-leaf-50' | 'water-leaf-100' | 'water-leaf-200' | 'water-leaf-300' | 'water-leaf-400'
  | 'water-leaf-500' | 'water-leaf-600' | 'water-leaf-700' | 'water-leaf-800' | 'water-leaf-900'
  | 'water-leaf-950'
  | 'granny-smith-apple-50' | 'granny-smith-apple-100' | 'granny-smith-apple-200' 
  | 'granny-smith-apple-300' | 'granny-smith-apple-400' | 'granny-smith-apple-500'
  | 'granny-smith-apple-600' | 'granny-smith-apple-700' | 'granny-smith-apple-800'
  | 'granny-smith-apple-900' | 'granny-smith-apple-950'
  | 'zombie-50' | 'zombie-100' | 'zombie-200' | 'zombie-300' | 'zombie-400'
  | 'zombie-500' | 'zombie-600' | 'zombie-700' | 'zombie-800' | 'zombie-900' | 'zombie-950'
  | 'sea-pink-50' | 'sea-pink-100' | 'sea-pink-200' | 'sea-pink-300' | 'sea-pink-400'
  | 'sea-pink-500' | 'sea-pink-600' | 'sea-pink-700' | 'sea-pink-800' | 'sea-pink-900'
  | 'sea-pink-950';

type TextColor = BgColor | 'slate-950' | 'white';

// Define las props del componente con los tipos especificados
interface ButtonPrimaryProps {
  text?: string;
  size?: Size;
  bgColor?: BgColor;
  textColor?: TextColor;
  width?: string;
  className?: string;
  [key: string]: any; // Para permitir otras props si es necesario
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text = '', // Texto por defecto
  size = 'md', // Tamaño por defecto
  bgColor = 'wewak-300',  // Color de fondo por defecto
  textColor = 'slate-950', // Color del texto por defecto
  width = 'auto', // Ancho por defecto
  className = '', // Clases adicionales
  ...props
}) => {
  // Define estilos de tamaño para los botones
  const sizeClasses: Record<Size, string> = {
    xsm: 'px-[18px] py-1 text-xs h-8', // Extra Small
    sm: 'px-[18px] py-1.5 text-sm h-10', // Small
    md: 'px-[18px] py-2 text-base h-12', // Medium
    lg: 'px-[18px] py-2.5 text-lg h-14', // Large
    xlg: 'px-[18px] py-3 text-xl h-16', // Extra Large
  };

  // Define las paletas de colores personalizadas para el fondo
  const bgColorClasses: Record<BgColor, string> = {
    // Wewak
    'wewak-50': 'bg-wewak-50',
    'wewak-100': 'bg-wewak-100',
    'wewak-200': 'bg-wewak-200',
    'wewak-300': 'bg-wewak-300',
    'wewak-400': 'bg-wewak-400',
    'wewak-500': 'bg-wewak-500',
    'wewak-600': 'bg-wewak-600',
    'wewak-700': 'bg-wewak-700',
    'wewak-800': 'bg-wewak-800',
    'wewak-900': 'bg-wewak-900',
    'wewak-950': 'bg-wewak-950',
    // Biloba Flower
    'biloba-flower-50': 'bg-biloba-flower-50',
    'biloba-flower-100': 'bg-biloba-flower-100',
    'biloba-flower-200': 'bg-biloba-flower-200',
    'biloba-flower-300': 'bg-biloba-flower-300',
    'biloba-flower-400': 'bg-biloba-flower-400',
    'biloba-flower-500': 'bg-biloba-flower-500',
    'biloba-flower-600': 'bg-biloba-flower-600',
    'biloba-flower-700': 'bg-biloba-flower-700',
    'biloba-flower-800': 'bg-biloba-flower-800',
    'biloba-flower-900': 'bg-biloba-flower-900',
    'biloba-flower-950': 'bg-biloba-flower-950',
    // Perano
    'perano-50': 'bg-perano-50',
    'perano-100': 'bg-perano-100',
    'perano-200': 'bg-perano-200',
    'perano-300': 'bg-perano-300',
    'perano-400': 'bg-perano-400',
    'perano-500': 'bg-perano-500',
    'perano-600': 'bg-perano-600',
    'perano-700': 'bg-perano-700',
    'perano-800': 'bg-perano-800',
    'perano-900': 'bg-perano-900',
    'perano-950': 'bg-perano-950',
    // Water Leaf
    'water-leaf-50': 'bg-water-leaf-50',
    'water-leaf-100': 'bg-water-leaf-100',
    'water-leaf-200': 'bg-water-leaf-200',
    'water-leaf-300': 'bg-water-leaf-300',
    'water-leaf-400': 'bg-water-leaf-400',
    'water-leaf-500': 'bg-water-leaf-500',
    'water-leaf-600': 'bg-water-leaf-600',
    'water-leaf-700': 'bg-water-leaf-700',
    'water-leaf-800': 'bg-water-leaf-800',
    'water-leaf-900': 'bg-water-leaf-900',
    'water-leaf-950': 'bg-water-leaf-950',
    // Granny Smith Apple
    'granny-smith-apple-50': 'bg-granny-smith-apple-50',
    'granny-smith-apple-100': 'bg-granny-smith-apple-100',
    'granny-smith-apple-200': 'bg-granny-smith-apple-200',
    'granny-smith-apple-300': 'bg-granny-smith-apple-300',
    'granny-smith-apple-400': 'bg-granny-smith-apple-400',
    'granny-smith-apple-500': 'bg-granny-smith-apple-500',
    'granny-smith-apple-600': 'bg-granny-smith-apple-600',
    'granny-smith-apple-700': 'bg-granny-smith-apple-700',
    'granny-smith-apple-800': 'bg-granny-smith-apple-800',
    'granny-smith-apple-900': 'bg-granny-smith-apple-900',
    'granny-smith-apple-950': 'bg-granny-smith-apple-950',
    // Zombie
    'zombie-50': 'bg-zombie-50',
    'zombie-100': 'bg-zombie-100',
    'zombie-200': 'bg-zombie-200',
    'zombie-300': 'bg-zombie-300',
    'zombie-400': 'bg-zombie-400',
    'zombie-500': 'bg-zombie-500',
    'zombie-600': 'bg-zombie-600',
    'zombie-700': 'bg-zombie-700',
    'zombie-800': 'bg-zombie-800',
    'zombie-900': 'bg-zombie-900',
    'zombie-950': 'bg-zombie-950',
    // Sea Pink
    'sea-pink-50': 'bg-sea-pink-50',
    'sea-pink-100': 'bg-sea-pink-100',
    'sea-pink-200': 'bg-sea-pink-200',
    'sea-pink-300': 'bg-sea-pink-300',
    'sea-pink-400': 'bg-sea-pink-400',
    'sea-pink-500': 'bg-sea-pink-500',
    'sea-pink-600': 'bg-sea-pink-600',
    'sea-pink-700': 'bg-sea-pink-700',
    'sea-pink-800': 'bg-sea-pink-800',
    'sea-pink-900': 'bg-sea-pink-900',
    'sea-pink-950': 'bg-sea-pink-950',
  };

  // Define las paletas de colores personalizadas para el texto
  const textColorClasses: Record<TextColor, string> = {
    ...bgColorClasses, // Usa las mismas clases de color para el texto
    'slate-950': 'text-slate-950', // Manteniendo slate-950 como color de texto predeterminado
    'white': 'text-white',
  };

  // Usa el tamaño por defecto 'md' si el tamaño pasado no es válido
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  // Usa el color por defecto si el color pasado no es válido
  const bgColorClass = bgColorClasses[bgColor] || bgColorClasses['wewak-300'];
  const textColorClass = textColorClasses[textColor] || textColorClasses['slate-950'];

  return (
    <div
      className={`font-bold cursor-pointer rounded-md flex items-center justify-center ${sizeClass} ${bgColorClass} ${textColorClass} ${className}`}
      style={{ width, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      {...props}
    >
      {text}
    </div>
  );
};