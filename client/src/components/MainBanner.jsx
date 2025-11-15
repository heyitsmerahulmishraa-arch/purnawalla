import React from 'react'

const MainBanner = () => {
  return (
    <section>
        <div className="bannerContianer h-60 sm:h-[360px] md:h-[480px] w-full overflow-hidden">
          <div className="bannerImageContainer w-full h-full">
            <img src="Winter.webp" alt="" className='h-full w-full' />
          </div>
        </div>
    </section>
  )
}

export default MainBanner