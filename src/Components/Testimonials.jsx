// Testimonials.jsx

import React from 'react';
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"

const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum quis quam vel accumsan.',
    profileImage: user1,
  },
  {
    id: 2,
    name: 'Jane Doe',
    testimony: 'Nullam at congue metus, eu tincidunt nulla. Sed gravida bibendum odio, vel maximus libero ultricies vel.',
    profileImage: user2,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    testimony: 'Fusce rhoncus lacus euismod neque varius, vitae pellentesque dui cursus. Vivamus eu efficitur purus.',
    profileImage: user3,
  },
];

const Testimonial = ({ name, testimony, profileImage }) => (
  <div className="max-w-sm mx-auto overflow-hidden bg-[#F6F6F6] p-6 rounded-lg mb-4 text-center">
    <img src={profileImage} alt={name} className="mx-auto h-32 object-cover" />
    <div className="p-4">
      <p className="text-gray-800 font-semibold">{name}</p>
      <p className="text-[#272D38] font-[14]">{testimony}</p>
    </div>
  </div>
);

const Testimonials = () => (
  <div>
    <div className='flex flex-wrap justify-around'>
      {testimonialData.map((testimonial) => (
        <Testimonial key={testimonial.id} {...testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
