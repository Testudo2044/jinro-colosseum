
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { twitter_icon } from 'component/twitter';

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

const MainFunction: React.FC = () => <div></div>;

{
  /*
const FooterFunction: React.FC = () => (
  <div>
    <div>
      <li>
        <a href='https://www.youtube.com/'></a>
        <Link image='/public/image/instagram_icon.jpg'></Link>
      </li>
      <li>
        <a href='https://twitter.com/home'>
        </a>
        <Link image='/public/image/twitter_icon.jpg'></Link>
      </li>
      <li>
        <a href='https://www.instagram.com/?hl=ja'></a>
        <Link image='/public/image/instagram_icon.jpg'></Link>
      </li>
      <li className='text-center'>
        <a>CopyLight © 2021 Jinro colosseum</a>
      </li>
    </div>
  </div>
);
*/
}

export default function Index() {
  return (
    <div>
      <Head>
        <title>人狼コロシアム</title>
        <meta name='description' content='test' />
      </Head>
      <HeaderFunction />
      <MainFunction />
      {/*

      <FooterFunction />
      */}
    </div>
  );
}
