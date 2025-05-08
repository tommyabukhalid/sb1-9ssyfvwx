import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
}) => {
  return (
    <a
      href={href}
      className="text-white hover:text-green-300 transition-colors duration-200 font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
};
