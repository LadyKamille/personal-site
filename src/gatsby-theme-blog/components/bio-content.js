import React from 'react';
import { Styled } from 'theme-ui';

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      This is where{' '}
      <Styled.a href="https://www.kamillenorris.com/">Kamille Norris</Styled.a>
      {` `}
      goes.
      <br />
      Or whatever, you make the rules.
    </>
  );
}
