import Head from 'next/head';
import Link from 'next/link';

const HeaderFunction: React.FC = () => (
  <div className=''>
    <div className='smartStyle'></div>

    <div className='hidden lg:block PCStyle'>
      <div className='bg-black '>
        <ul className='flex text-2xl text-white'>
          <li className='lg:hover:text-3xl'>
            <Link href='/'>
              <a>
                <ruby>
                  ABOUT<rt>UN人狼とは</rt>
                </ruby>
              </a>
            </Link>
          </li>
          <li className='lg:hover:text-3xl'>
            <Link href='/'>
              <a>
                <ruby>
                  RULE<rt>ゲームルール</rt>
                </ruby>
              </a>
            </Link>
          </li>
          <li className='lg:hover:text-3xl'>
            <Link href='/'>
              <a>
                <ruby>
                  SET<rt>販売</rt>
                </ruby>
              </a>
            </Link>
          </li>
          <li className='lg:hover:text-3xl'>
            <Link href='/'>
              <a>
                <ruby>
                  CHARACTER<rt>役職紹介</rt>
                </ruby>
              </a>
            </Link>
          </li>
          <li className='lg:hover:text-3xl'>
            <Link href='/'>
              <a>
                <ruby>
                  MEMBER<rt>メンバー</rt>
                </ruby>
              </a>
            </Link>
          </li>
          <li className='lg:hover:text-3xl'>
            <Link href='/'>
              <a>
                <ruby>
                  COMTACT<rt>お問い合わせ</rt>
                </ruby>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
