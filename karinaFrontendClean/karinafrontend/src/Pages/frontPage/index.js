import React from 'react';

function FrontPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="bg-primary text-cWhite flex flex-col justify-center items-center text-center space-y-6 py-20 bg-cover bg-center h-screen" style={{backgroundImage: "url('https://picsum.photos/200/300.jpg')"}}>
        <h1 className="text-6xl font-bold px-4 bg-black bg-opacity-50 rounded p-2">Welcome to Our Website!</h1>
        <p className="text-2xl px-4 bg-black bg-opacity-50 rounded p-2">Discover our amazing services and products.</p>
        <button className="px-8 py-3 bg-cLightBlue text-cWhite rounded-lg shadow font-bold hover:bg-cDarkBlue transition duration-300">Get Started</button>
      </div>
      
      {/* Features Section with Icons or Photos */}
      <div className="py-20 bg-secondary text-cWhite">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Each feature can have an accompanying image or icon */}
            <div className="space-y-4">
              <img src="https://picsum.photos/id/237/200/300" alt="Innovative Solutions" className="mx-auto h-12 w-12"/>
              <h3 className="text-xl font-semibold">Innovative Solutions</h3>
              <p>We provide cutting-edge solutions to our clients, ensuring they stay ahead of the curve.</p>
            </div>
            <div className="space-y-4">
              <img src="/path/to/expert-team-icon.png" alt="Expert Team" className="mx-auto h-12 w-12"/>
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p>Our team consists of industry experts with years of experience and a passion for excellence.</p>
            </div>
            <div className="space-y-4">
              <img src="/path/to/support-icon.png" alt="Customer Support" className="mx-auto h-12 w-12"/>
              <h3 className="text-xl font-semibold">Customer Support</h3>
              <p>We pride ourselves on our exceptional customer service, available 24/7 to assist you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section with Client Photos */}
      <div className="py-20 bg-cDarkBlue text-cWhite">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:flex-1 text-center md:text-left">
              <img src="/path/to/client-photo-1.jpg" alt="Jane Doe" className="rounded-full w-24 h-24 mx-auto md:mx-0 md:mr-4"/>
              <p className="italic mt-4">"The team was incredibly helpful and provided excellent service. Our project was completed on time and exceeded our expectations."</p>
              <p className="font-semibold mt-4">- Jane Doe, CEO of Acme Inc.</p>
            </div>
            <div className="md:flex-1 text-center md:text-left mt-6 md:mt-0">
              <img src="/path/to/client-photo-2.jpg" alt="John Smith" className="rounded-full w-24 h-24 mx-auto md:mx-0 md:mr-4"/>
              <p className="italic mt-4">"We were impressed by the innovative solutions offered. Their expertise helped us achieve our goals efficiently."</p>
              <p className="font-semibold mt-4">- John Smith, Founder of Startup XYZ</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* The rest of your component remains unchanged */}
    </div>
  );
}

export default FrontPage;
