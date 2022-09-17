import Dice from '../Dice/Dice';

import HomeContentStyles from './HomeContent.module.css';

const HomeContent = () => (
  <div className={HomeContentStyles.wrapper}>
    <div>
      <h1>Rule of Cool</h1>
      <p>
        Hi, I'm Kamille Norris and welcome to my personal site turned D&amp;D
        blog. I originally wanted to create a portfolio of my frontend
        development work, but I never actually wanted to do this stuff outside
        of regular work hours. I think that's okay. Dungeons and Dragons is my
        passion, work is a means to an end to feed the mini addiction.
      </p>

      <p>
        I am currently DMing Descent into Avernus online and Curse of Strahd in
        person. My goals for this blog is to document our sessions to hopefully
        give other DMs ideas, link resources, and talk about the differences
        between online and in-person sessions.
      </p>
    </div>

    <Dice />
  </div>
);

export default HomeContent;
