import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  feature: string;

}

export const NavBar = (props: LinkProps) => {
  const { href, feature } = props;
  return (
    <NextLink href={href}>
      <a href="#">{feature}</a>
    </NextLink>
  );
};
