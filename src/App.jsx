import PandaLogo from './shared/assets/images/panda.jpg'
import PandaYuoTube from './shared/assets/images/panda-youtube.jpg'
import PandaMangal from './shared/assets/images/panda-mangal.jpg'
import GrassImg from './shared/assets/images/Grass.png'
import SocialBtn from './components/socialBtn'
import {
  TikTokIcon,
  YouTubeIcon,
  InstaIcon,
  TelegramIcon,
  VkIcon,
  EarthIcon,
  MultiMediaIcon
}
  from './shared/assets/icons';
import { useState } from 'react'
import clsx from 'clsx'
const App = () => {

  const socialMediaLinks = [
    {
      path: 'https://www.tiktok.com/@pandasakha?fbclid=PAY2xjawHJb15leHRuA2FlbQIxMQABpqNOryMFGC2sZ_ttfdbKL_xWfdLTelixwpZ-sXvIW4w0ZRULOtoZp0teJw_aem_Eu4W_bzdddo7Ora8faMWRw',
      icon: <TikTokIcon width={'24px'} height={'24px'} />,
      accentColor: "socialBtn-0",
      title: "TikTok"
    },
    {
      path: 'https://www.youtube.com/@pandasakha',
      icon: <YouTubeIcon width={'24px'} height={'24px'} />,
      accentColor: "socialBtn-1",
      title: "YouTube"
    },
    {
      path: 'https://m.vk.com/pandasakha_official?fbclid=PAY2xjawHJb45leHRuA2FlbQIxMQABpol9YovIUQHsxGpoFmuGydkeDfj1WBZuCLKpP9SdbUfxBqBIDbHGcwuV-A_aem_Mrn-5I4kY1DzgDyyDFcV3g',
      icon: <VkIcon width={'24px'} height={'24px'} />,
      accentColor: "socialBtn-2",
      title: "Vkontakte"
    },
    {
      path: 'https://www.instagram.com/pandasakha_official?igsh=MTQyNzd5ZjNzNHAydw==',
      icon: <InstaIcon width={'24px'} height={'24px'} />,
      accentColor: "socialBtn-3",
      title: "Instagram"
    },
    {
      path: '',
      icon: <TelegramIcon width={'24px'} height={'24px'} />,
      accentColor: "socialBtn-4",
      title: "Telegram"
    },
    {
      path: 'https://dzen.ru/pandasakha_official?fbclid=PAY2xjawHJb65leHRuA2FlbQIxMQABpqs40qsKxriPNjflSf_r8fgYSsnII7As3nNnYy6QjeKGpG9tsz5HkS5VJA_aem_lr1KxsG2kPgFG56d72wESA&utm_referrer=l.instagram.com',
      icon: null,
      accentColor: "socialBtn-5",
      title: "YandexDzen"
    },
  ];




  const [showSocial, setShowSocial] = useState(false)

  return (
    <div className="App bg-white">
      <section className='mb-16'>
        <h1 className='md:text-9xl fixed top-5 left-1/2 -translate-x-1/2 text-center uppercase font-extrabold text-white'>
          Panda
          <div className="w-24 md:w-32 mx-auto aspect-square rounded-full overflow-hidden border-4">
            <img src={PandaLogo} alt="Panda Sakha Logo Front" />
          </div>
          Sakha
        </h1>
        <div className='flag'>
          <div className='sky h-[100vh]'></div>
          <div className='h-5 bg-white relative z-10'></div>
          <div className='h-16 flex absolute top-full translate-y-5 bg-red-500 overflow-hidden'>
            <img className='h-full object-contain' src={GrassImg} alt="" />
            <img className='h-full object-contain' src={GrassImg} alt="" />
            <img className='h-full object-contain' src={GrassImg} alt="" />
            <img className='h-full object-contain' src={GrassImg} alt="" />
            <img className='h-full object-contain' src={GrassImg} alt="" />
            <img className='h-full object-contain' src={GrassImg} alt="" />
            <img className='h-full object-contain' src={GrassImg} alt="" />
            <img className='h-full object-contain' src={GrassImg} alt="" />
          </div>
        </div>
      </section>
      <header className='sticky top-0 py-2 z-50 bg-white'>
        <div className='wrapper flex justify-between relative px-2 py-3 container mx-auto rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300'>
          <div className='flex gap-5 w-1/6'>
            <div className='w-1/3 aspect-square rounded-full overflow-hidden border-4 border-white'>
              <img src={PandaLogo} alt="" />
            </div>
            <p className='text-3xl font-bold w-1/3 text-white'>Вячеслав Романов</p>
          </div>
          <div className='flex gap-10'>
            <button className='text-lg font-medium uppercase text-white hover:text-blue-500 group relative transition-colors duration-300'>
              <div className='absolute top-full -translate-y-5 left-0 w-0 group-hover:w-full h-1 bg-blue-500 duration-300 rounded-full'></div>
              Магазин
            </button>
            <button className='text-lg font-medium uppercase text-white hover:text-blue-500 group relative transition-colors duration-300'>
              <div className='absolute top-full -translate-y-5 left-0 w-0 group-hover:w-full h-1 bg-blue-500 duration-300 rounded-full'></div>
              Обо мне
            </button>
            <button className='text-lg font-medium uppercase text-white hover:text-blue-500 group relative transition-colors duration-300'>
              <div className='absolute top-full -translate-y-5 left-0 w-0 group-hover:w-full h-1 bg-blue-500 duration-300 rounded-full'></div>
              Контакты
            </button>
            <button onMouseEnter={() => setShowSocial(true)} className='text-lg font-medium uppercase text-white hover:text-blue-500 group relative transition-colors duration-300'>
              <div className='absolute top-full -translate-y-5 left-0 w-0 group-hover:w-full h-1 bg-blue-500 duration-300 rounded-full'></div>
              Социальные сети
            </button>
            <button className='fill-white hover:fill-blue-400 transition-colors duration-300'><EarthIcon width={'32px'} height={'32px'} /></button>
          </div>
          <div onMouseLeave={() => setShowSocial(false)} className={clsx('w-fit py-5 px-2  rounded-full flex justify-end gap-5 container absolute right-0 top-full z-50 bg-white bg-opacity-30 backdrop-blur-md ', showSocial ? 'showSocial' : 'opacity-0')}>
            {
              socialMediaLinks.map((item, idx) => (
                <SocialBtn item={item} key={idx} />
              ))
            }
          </div>
        </div>
      </header>

      <section className='bg-gray-100 relative z-1 py-10'>
        <div className='container mx-auto flex justify-center items-start'>
          <div className='w-1/2'>
            <h3 className='text-4xl font-bold w-2/3 mb-10'>Блогер, автор цифрового контента</h3>
            <p className='text-lg font-medium mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus dicta ea accusamus vero dignissimos, dolorem quos repellat distinctio enim.</p>
            <p className='text-lg font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus dicta ea accusamus vero dignissimos, dolorem quos repellat distinctio enim.</p>
          </div>
          <div className='w-1/3 aspect-square rounded-full overflow-hidden relative'>
            <img src={PandaYuoTube} alt="Panda youtube" className='w-full h-full object-cover' />
          </div>
        </div>
      </section>

      <section className='relative z-1 py-10 about bg-white'>
        <div className='container mx-auto flex justify-center items-center gap-16'>
          <div className='w-1/3 aspect-square rounded-full overflow-hidden relative'>
            <img src={PandaMangal} alt="Panda youtube" className='w-full h-full object-cover' />
          </div>
          <div className='w-1/2'>
            <h3 className='text-4xl font-bold w-2/3 mb-10'>Блогер, автор цифрового контента</h3>
            <p className='text-lg font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus dicta ea accusamus vero dignissimos, dolorem quos repellat distinctio enim.</p>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 relative z-1 py-10'>
        <div className='container mx-auto gap-16'>
          <div className='w-full'>
            <h3 className='text-4xl font-bold mb-10 text-center'>Видео</h3>
            <div>
              <iframe className='mx-auto rounded-lg overflow-hidden' width="1235" height="695" src="https://www.youtube.com/embed/W2YO2mfpmZA" title="Trip to the Arctic district of Yakutia❄️ / Поездка в Арктический район Якутии❄️ Pandasakha #north" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-green-700 relative z-50 py-5'>
        <div className='container mx-auto flex justify-center px-5'>
          <div className='flex gap-5 w-2/6 items-center justify-between'>
            <div className='w-1/2 aspect-square rounded-full overflow-hidden border-4 border-white'>
              <img src={PandaLogo} alt="" />
            </div>
            <div className='w-1/2'>

              <p className='text-3xl font-extrabold w-1/3 text-blue-600 uppercase'>panda sakha</p>
              <p className='text-3xl font-bold w-1/3 text-blue-600'>Вячеслав Романов</p>
            </div>
          </div>

          <ul className='w-2/6'>
            <p className='text-xl font-bold text-gray-300 mb-5'>Социальные сети</p>
            <div className='grid grid-cols-2'>
              {
                socialMediaLinks.map((item, idx) => (
                  <li key={idx} className='flex gap-3 mb-3'>
                    <div className={clsx(`text-${item.accentColor}`)}>{item.icon}</div>
                    <a className='font-medium text-gray-300' href={item.path} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>

                  </li>
                ))
              }
            </div>
          </ul>
          <ul className='w-2/6'>
            <p className='text-xl font-bold text-gray-300 mb-5'>Контактные данные</p>
            <li>
              <div>
                <div></div>
                <p className='font-medium text-gray-300'>Электронная почта:</p>
              </div>
              <a className='font-medium text-blue-500 underline' href="" target="_blank" rel="noopener noreferrer">example@mail.com</a>
            </li>

            <li>
              <div>
                <div></div>
                <p className='font-medium text-gray-300'>Telegram:</p>
              </div>
              <a className='font-medium text-blue-500 underline' href="" target="_blank" rel="noopener noreferrer">@exampleNickName</a>
            </li>

            <li>
              <div>
                <div></div>
                <p className='font-medium text-gray-300'>Телефн:</p>
              </div>
              <a className='font-medium text-blue-500 underline' href="" target="_blank" rel="noopener noreferrer">+7 (000) 00 00 00</a>
            </li>

            <li>
              <div>
                <div></div>
                <p className='font-medium text-gray-300'>WhatsApp:</p>
              </div>
              <a className='font-medium text-blue-500 underline' href="" target="_blank" rel="noopener noreferrer">+7 (000) 00 00 00</a>
            </li>
          </ul>

        </div>
      </footer>
    </div>
  );
}

export default App;
