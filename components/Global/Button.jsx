import Router from 'next/router';

const Button = ({ bg, textColor, text, href, hover }) => {
  return (
    <button
      onClick={e => Router.push(`${href}`, `${href}`)}
      className={`
        flex items-center justify-center
        rounded-md ${bg} px-4 py-3
        text-base font-medium ${textColor}
        shadow-sm hover:${hover} sm:px-8
      `}>
      {text}
    </button>
  );
}

export default Button;
