const searchButton = document.getElementById('search-button');
      searchClose = document.getElementById('search-close');
      searchContent = document.getElementById('serach-content');

      if(searchButton){
        searchButton.addEventListener('click',()=>{
            searchContent.classList.add('show-search')
        })
      }

      if(searchClose){
        searchClose.addEventListener('click',()=>{
            searchContent.classList.remove('show-search')
        })
      }


      const loginButton = document.getElementById('login-button');
      loginClose = document.getElementById('login-close');
      loginContent = document.getElementById('login-content');

      if(loginButton){
        loginButton.addEventListener('click',()=>{
            loginContent.classList.add('show-login')
        })
      }

      if(loginClose){
        loginClose.addEventListener('click',()=>{
            loginContent.classList.remove('show-login')
        })
      }

      // swiper
        const swiper = new Swiper('.home__swiper', {
            // Optional parameters
            loop: true,
                            spaceBetween:-24,
                            grabCursor:true,
                            slidesPerView:'auto',
                            centeredSlides:'auto',
                            autoplay:{
            delay:3000,
            disableOnInteraction:false,
          },

          breakpoints:{
            1220:{
              spaceBetween:-32,
            }
          }
            
        });

        const shadowHeader = ()=>{
          const header = document.getElementById('header')
          this.scrollY>=50 ? header.classList.add('scroll-header')
                  :header.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', shadowHeader)

        const swiperFeatured = new Swiper('.featured_swiper', {
          // Optional parameters
                          loop: true,
                          spaceBetween:16,
                          grabCursor:true,
                          slidesPerView:'auto',
                          centeredSlides:'auto',

                          navigation:{
                            nextEl:'.swiper-button-next',
                            prevEl:'.swiper-button-prev',
                          },
        breakpoints:{
          1150:{
              slidesPerView:4,
              centeredSlides:false,
              
          }
        }
          
      });
      

      const swiperNew = new Swiper('.new__swiper', {
        // Optional parameters
                        loop: true,
                        spaceBetween:16,
                        slidesPerView:'auto',

                       
      breakpoints:{
        1150:{
            slidesPerView:3,
        }
      }
        
    });


    const scrollUp = () =>{
      const scrollUp = document.getElementById('scroll-up')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          :scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)


    // dark theme
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () =>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove' ](iconTheme)
    }
    themeButton.addEventListener('click' , ()=>{
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)

      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    })