// Footer.jsx

import React from 'react';

const Footer = () => (
  <footer className="bg-[#F6F6F6] text-[#272D38] p-8 py-8">
    <div className="container mx-auto flex flex-wrap justify-around">
      <div className="w-full sm:w-1/2 text-center md:text-left md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
        <h2 className="text-lg font-bold mb-4">Digital Agency</h2>
        <p className='font-[14]'>Building digital products, brands & experience</p>
      </div>
      <div className="w-full sm:w-1/2 text-center md:text-left md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
        <h2 className="text-lg font-bold mb-4">Resources</h2>
        <ul>
          <li><a href="#sublink4" className='font-[14]'>Guides</a></li>
          <li><a href="#sublink5" className='font-[14]'>Blog</a></li>
          <li><a href="#sublink6" className='font-[14]'>Customer Stories</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 text-center md:text-left md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
        <h2 className="text-lg font-bold mb-4">Company</h2>
        <ul>
          <li><a href="#sublink7" className='font-[14]'>AboutUs</a></li>
          <li><a href="#sublink8" className='font-[14]'>Careers</a></li>
          <li><a href="#sublink9" className='font-[14]'>Partners</a></li>
          <li><a href="#sublink9" className='font-[14]'>Contact Us</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 text-center md:text-left md:w-1/4 lg:w-1/4 xl:w-1/4 mb-8">
        <h2 className="text-lg font-bold mb-4">Social Media</h2>
        <ul>
          <li><a href="#sublink10" className='font-[14]'>LinkedIn</a></li>
          <li><a href="#sublink11" className='font-[14]'>Facebook</a></li>
          <li><a href="#sublink12" className='font-[14]'>Instagram</a></li>
          <li><a href="#sublink12" className='font-[14]'>Twitter</a></li>
        </ul>
            </div>
            <p className='text-center'>© Matheus. Todos os direitos reservados</p>
    </div>
  </footer>
);

export default Footer;
