import { Link as Scroll } from 'react-scroll';

export default function Layout() {
  {
    /* map関数で取り出してタグを生成する。 */
  }
  const navItem = ['ABOUT', 'RULE', 'SET', 'CHARACTER', 'MEMBER', 'COMTACT'];
  return (
    <div className='bg-black'>
      <header className='pt-10 h-20'>
        <nav className='bg-black'>
          {/* map関数で取り出してタグを生成する。 */}
          <div className='flex fixed space-x-6 md:space-x-8 lg:space-x-10'>
            {navItem.map((item, index) => {
              return (
                <Scroll
                  to={`${item}`}
                  className='PCStyle hidden text-white lg:block lg:hover:text-3xl lg:w-20 lg:justify-center uppercase'
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
      <main className='bg-black text-white'>
        <div id='ABOUT' className='mx-80 pt-80'>
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
        <div id='COMTACT' className='mx-80 pb-80'>
          COMTACT
        </div>
      </main>
    </div>
  );
}
