
import { Link as Scroll } from 'react-scroll';

export default function Layout() {
  {
    /* map関数で取り出してタグを生成する。 */
  }
  const navItem = ['ABOUT', 'RULE', 'SET', 'CHARACTER', 'MEMBER', 'COMTACT'];
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
        <div id='ABOUT' className='m-80'>
          ABOUT
        </div>
        <div id='RULE' className='m-80'>
          RULE
        </div>
        <div id='SET' className='m-80'>
          SET
        </div>
        <div id='CHARACTER' className='m-80'>
          CHARACTER
        </div>
        <div id='MEMBER' className='m-80'>
          MEMBER
        </div>
        <div id='COMTACT' className='m-80'>
          COMTACT
        </div>
      </main>
      <footer>
        <div></div>
      </footer>
    </div>
  );
}
