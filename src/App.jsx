import Nav from './Components/NavBar';
import head from './assets/header-img.png';
import team from './assets/team.png';
import logos from './assets/logos.png';
import customer from './assets/customer.png';
import bussiness from './assets/bussiness.png';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <div className='w-full'>
        <div className='flex flex-col md:p-36 sm:flex-row'>
          <div className='p-4 flex-1'>
            {/* Use responsive classes to adjust margin-top */}
            <h1 className='text-[#272D38] md:text-left text-center font-bold md:text-6xl text-4xl mt-32 sm:mt-16 md:mt-20 lg:mt-16 xl:mt-16'>
              Building Digital Products, Brands & Experience
            </h1>
            <p className='mt-2 md:text-left font-[16] font-400 text-[#272D38] text-center'>Digital Agency is your online team management tool that is easy and prompt</p>
            
            {/* Center-align the button on mobile views */}
            <div className='text-center mt-4 sm:mt-0 md:text-left'>
              <button className='bg-[#8EADD5] p-2 w-32 font-bold text-white rounded md:inline-block sm:inline-block'>CONTACT US</button>
            </div>
          </div>
          <div className='p-4 flex-1'>
            <img src={head} alt="Header" />
          </div>
        </div>
      </div>
      <div>
        <p className='font-[14] md:font-[16] text-center text-[#667085]'>Trusted by 4,000+ companies</p>
        <div className='p-4 md:p-16'>
          <img src={logos} className='p-4 bg-[#F6F6F6] w-full rounded-xl' />
          </div>
      </div>
      <div className='flex flex-col-reverse md:pl-36 md:pr-36 sm:flex-row'>
          <div className='p-4 flex-1'>
            {/* Use responsive classes to adjust margin-top */}
            <img src={team} alt="team" />
          </div>
          <div className='p-4 flex-1'>
            <h1 className='text-[#272D38] md:text-left text-center font-bold md:text-6xl text-4xl sm:mt-16 md:mt-20 lg:mt-16 xl:mt-16'>
              Branding & Design system
            </h1>
            <p className='mt-2 md:text-left font-[16] font-400 text-[#272D38] text-center'>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
            
            {/* Center-align the button on mobile views */}
             <div className='text-center mt-4 sm:mt-0 md:text-left'>
              {window.innerWidth <= 768 ? (
                <ion-icon name="arrow-down-outline"></ion-icon>
              ) : (
                <ion-icon name="arrow-forward-outline"></ion-icon>
              )}
            </div>
          </div>
      </div>
      <div className='flex flex-col md:pl-36 md:pr-36 sm:flex-row'>
          <div className='p-4 flex-1'>
            {/* Use responsive classes to adjust margin-top */}
          <h1 className='text-[#272D38] md:text-left text-center font-bold md:text-6xl text-4xl sm:mt-16 md:mt-20 lg:mt-16 xl:mt-16'>
              Custom & Plugin Development
            </h1>
            <p className='mt-2 md:text-left font-[16] font-400 text-[#272D38] text-center'>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
            
            {/* Center-align the button on mobile views */}
             <div className='text-center mt-4 sm:mt-0 md:text-left'>
              {window.innerWidth <= 768 ? (
                <ion-icon name="arrow-down-outline"></ion-icon>
              ) : (
                <ion-icon name="arrow-forward-outline"></ion-icon>
              )}
            </div>
          </div>
          <div className='p-4 flex-1'>
          <img src={bussiness} alt="bussiness" />
          </div>
      </div>
      <div className='p-4'>
        <p className='text-center'>TESTIMONIALS</p>
        <h1 className='text-3xl font-bold text-center mb-6'>Read What Others Have to Say</h1>
        <Testimonials />
      </div>
      <br />
      <div className='flex p-6 md:p-4 m-4 md:m-8 rounded-xl bg-[#F6F6F6] flex-col md:pl-36 md:pr-36 sm:flex-row'>
          <div className='p-4 hidden md:block flex-1'>
<img src={customer} alt="customer" />
          </div>
          <div className='p-4 flex-1'>
            <h1 className='text-[#272D38] md:text-left text-center font-bold md:text-6xl text-4xl sm:mt-16 md:mt-20 lg:mt-16 xl:mt-16'>
              Be a part of the next big thing
            </h1>
            <p className='mt-2 md:text-left font-[16] font-400 text-[#272D38] text-center'>We work with Brans, Startups, to SMEs. Colaborate for more impact and growth</p>
            
          {/* Center-align the button on mobile views */}
          <br />
             <div className='text-center mt-4 sm:mt-0 md:text-left'>
              <button className='bg-[#8EADD5] p-2 w-32 font-bold text-white rounded md:inline-block sm:inline-block'>CONTACT US</button>
            </div>
          </div>
      </div>
      <div className='mt-24'>
        <Footer />
        </div>
    </div>
  );
}

export default App;
