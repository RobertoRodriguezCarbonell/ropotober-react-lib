import React from 'react';

// Define los tipos para los valores válidos de tamaño, color de fondo y color de texto
type Size = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

type BgColor = 
  | 'primary-background' | 'primary-background-hover'
  | 'success-50' | 'success-100' | 'success-200' | 'success-300' | 'success-400'
  | 'success-500' | 'success-600' | 'success-700' | 'success-800' | 'success-900' | 'success-950'
  | 'info-50' | 'info-100' | 'info-200' | 'info-300' | 'info-400' | 'info-500'
  | 'info-600' | 'info-700' | 'info-800' | 'info-900' | 'info-950'
  | 'destroy-50' | 'destroy-100' | 'destroy-200' | 'destroy-300' | 'destroy-400'
  | 'destroy-500' | 'destroy-600' | 'destroy-700' | 'destroy-800' | 'destroy-900' | 'destroy-950'
  | 'warning-50' | 'warning-100' | 'warning-200' | 'warning-300' | 'warning-400'
  | 'warning-500' | 'warning-600' | 'warning-700' | 'warning-800' | 'warning-900' | 'warning-950'
  | 'cranberry-50' | 'cranberry-100' | 'cranberry-200' | 'cranberry-300' | 'cranberry-400'
  | 'cranberry-500' | 'cranberry-600' | 'cranberry-700' | 'cranberry-800' | 'cranberry-900' | 'cranberry-950';

type TextColor = 'primary-text';

// Define las props del componente con los tipos especificados
interface ButtonPrimaryProps {
  text?: string;
  size?: Size;
  bgColor?: BgColor;
  textColor?: TextColor;
  width?: string;
  rounded?: Rounded;
  className?: string;
  hover?: string;
  [key: string]: any; // Para permitir otras props si es necesario
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text = '', // Texto por defecto
  size = 'md', // Tamaño por defecto
  bgColor = 'primary-background', // Color de fondo por defecto
  textColor = 'primary-text', // Color del texto por defecto
  width = 'fit-content', // Ancho por defecto
  rounded = 'md', // Borde redondeado por defecto
  className = '', // Clases adicionales
  hover = '', // Clases adicionales para hover
  ...props
}) => {
  // Define estilos de tamaño para los botones
  const sizeClasses: Record<Size, string> = {
    xsm: 'px-[18px] py-[4px] text-[12px] h-[32px]', // Extra Small
    sm: 'px-[20px] py-[6px] text-[14px] h-[40px]', // Small
    md: 'px-[22px] py-[8px] text-[16px] h-[48px]', // Medium
    lg: 'px-[24px] py-[10px] text-[18px] h-[56px]', // Large
    xlg: 'px-[26px] py-[12px] text-[20px] h-[64px]', // Extra Large
  };

  // Define estilos de borde redondeado
  const roundedClasses: Record<Rounded, string> = {
    none: 'rounded-[0px]',
    sm: 'rounded-[2px]',
    md: 'rounded-[6px]',
    lg: 'rounded-[8px]',
    full: 'rounded-[9999px]',
  };

  // Define las paletas de colores personalizadas para el fondo
  const bgColorClasses: Record<BgColor, string> = {
    'primary-background': 'bg-primary-background',
    'primary-background-hover': 'bg-primary-background-hover',
    // Success
    'success-50': 'bg-success-50',
    'success-100': 'bg-success-100',
    'success-200': 'bg-success-200',
    'success-300': 'bg-success-300',
    'success-400': 'bg-success-400',
    'success-500': 'bg-success-500',
    'success-600': 'bg-success-600',
    'success-700': 'bg-success-700',
    'success-800': 'bg-success-800',
    'success-900': 'bg-success-900',
    'success-950': 'bg-success-950',
    // Info
    'info-50': 'bg-info-50',
    'info-100': 'bg-info-100',
    'info-200': 'bg-info-200',
    'info-300': 'bg-info-300',
    'info-400': 'bg-info-400',
    'info-500': 'bg-info-500',
    'info-600': 'bg-info-600',
    'info-700': 'bg-info-700',
    'info-800': 'bg-info-800',
    'info-900': 'bg-info-900',
    'info-950': 'bg-info-950',
    // Destroy
    'destroy-50': 'bg-destroy-50',
    'destroy-100': 'bg-destroy-100',
    'destroy-200': 'bg-destroy-200',
    'destroy-300': 'bg-destroy-300',
    'destroy-400': 'bg-destroy-400',
    'destroy-500': 'bg-destroy-500',
    'destroy-600': 'bg-destroy-600',
    'destroy-700': 'bg-destroy-700',
    'destroy-800': 'bg-destroy-800',
    'destroy-900': 'bg-destroy-900',
    'destroy-950': 'bg-destroy-950',
    // Warning
    'warning-50': 'bg-warning-50',
    'warning-100': 'bg-warning-100',
    'warning-200': 'bg-warning-200',
    'warning-300': 'bg-warning-300',
    'warning-400': 'bg-warning-400',
    'warning-500': 'bg-warning-500',
    'warning-600': 'bg-warning-600',
    'warning-700': 'bg-warning-700',
    'warning-800': 'bg-warning-800',
    'warning-900': 'bg-warning-900',
    'warning-950': 'bg-warning-950',
    // Cranberry
    'cranberry-50': 'bg-cranberry-50',
    'cranberry-100': 'bg-cranberry-100',
    'cranberry-200': 'bg-cranberry-200',
    'cranberry-300': 'bg-cranberry-300',
    'cranberry-400': 'bg-cranberry-400',
    'cranberry-500': 'bg-cranberry-500',
    'cranberry-600': 'bg-cranberry-600',
    'cranberry-700': 'bg-cranberry-700',
    'cranberry-800': 'bg-cranberry-800',
    'cranberry-900': 'bg-cranberry-900',
    'cranberry-950': 'bg-cranberry-950',
  };

  // Define las paletas de colores personalizadas para el texto
  const textColorClasses: Record<TextColor, string> = {
    'primary-text': 'text-primary-text',
  };

  // Usa el tamaño por defecto 'md' si el tamaño pasado no es válido
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  // Usa el color por defecto si el color pasado no es válido
  const bgColorClass = bgColorClasses[bgColor] || bgColorClasses['primary-background'];
  const textColorClass = textColorClasses[textColor] || textColorClasses['primary-text'];
  const roundedClass = roundedClasses[rounded] || roundedClasses.md;

  return (
    <div
      className={`font-bold cursor-pointer flex items-center justify-center transition-colors ${sizeClass} ${bgColorClass} ${textColorClass} ${roundedClass} ${className} ${hover}`}
      style={{
        width,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      {...props}
    >
      {text}
    </div>
  );
};

export default ButtonPrimary;
