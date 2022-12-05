import React from 'react';
import Link from "next/link"

const Button = ({bg, textColor, text, href, hover}) => {
  return (
    <Link
      href={href}
      className={`
        flex items-center justify-center
        rounded-md ${bg} px-4 py-3
        text-base font-medium ${textColor}
        shadow-sm hover:${hover} sm:px-8
      `}>
      {text}
    </Link>
  );
}

export default Button;
