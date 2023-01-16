import Router from 'next/router';

const Button = ({ bg, textColor, text, href, hover, disabled, handleChange }) => {
  return (
    <button
      onClick={e => {Router.push(`${href}`)}}
      className={`
        flex items-center justify-center
        rounded ${bg} px-4 py-3
        text-base font-medium ${textColor}
        shadow hover:${hover} sm:px-8
      `}
      disabled={disabled}
      >
      {text}
    </button>
  );
}

export default Button;
