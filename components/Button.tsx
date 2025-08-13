import React from 'react'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant ,full }: ButtonProps) => {
  return (
    <button type={type} className={`btn ${variant} flexCenter gap-3 rounded-full border ${full ? 'w-full' : ''}`}>
        { icon && <img src={icon} alt={`${title} icon`} width={24} height={24}  />}
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button