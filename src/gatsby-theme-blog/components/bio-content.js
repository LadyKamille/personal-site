import React from 'react';
import { Styled } from 'theme-ui';

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Hi! I'm
      {' '}
      <Styled.a href="https://www.kamillenorris.com/">Kamille Norris</Styled.a>
      {' '}
      [she/her]
      <br />
      I am a full Stack Engineer that loves code, coffee, and Dungeons and
      Dragons.
    </>
  );
}
