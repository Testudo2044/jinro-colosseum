//[応用例]

import { Link as Scroll } from 'react-scroll';

export default function Layout() {
  {
    /* map関数で取り出してタグを生成する。 */
  }
  const navItem = ['about', 'skills', 'values', 'future'];
  return (
    <div>
      <header>
        <nav>
          {/* map関数で取り出してタグを生成する。 */}
          <div className='space-x-6 md:space-x-8'>
            {navItem.map((item, index) => {
              return (
                <Scroll
                  to={`${item}`}
                  className=' uppercase'
                  smooth={true}
                  duration={600}
                  key={index}
                  offset={-30}
                >
                  {item}
                </Scroll>
              );
            })}
          </div>
        </nav>
      </header>
      <main>
        <div id='about'>ここにコンテンツを書く</div>
        <div id='skills'>ここにコンテンツを書く</div>
        <div id='values'>ここにコンテンツを書く</div>
        <div id='future'>ここにコンテンツを書く</div>
      </main>
    </div>
  );
}
