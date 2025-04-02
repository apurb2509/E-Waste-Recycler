
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Award, Target, Globe } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Amit",
      role: "ML Engineer",
      image: "https://res.cloudinary.com/dldakzbyp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743579163/amittt_ehn9nl.jpg",
      bio: "I have nearly 1 year experience working with Python and its data-focused libraries, including NumPy, Pandas, Matplotlib, and Seaborn, for analysis and visualization. I am proficient in SQL for database management and have a strong foundation in machine learning with TensorFlow. Additionally, I specialize in backend development using Flask and FastAPI to build efficient and scalable web applications."
    },
    {
      name: "Sushmita",
      role: "ML Engineer",
      image: "https://res.cloudinary.com/dldakzbyp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743575493/sushmitapic_flpcmb.jpg",
      bio: "I am a highly motivated Python enthusiast with 8-9 months of hands-on experience in programming. During this time, I have gained a strong foundation in Python’s core concepts, data structures, and libraries while working on projects in web development, data analysis, and machine learning. I am committed to continuously improving my skills and building efficient, scalable solutions through innovative problem-solving."
    },
    {
      name: "Apurb",
      role: "Frontend Developer",
      image: "https://res.cloudinary.com/dldakzbyp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743579637/apurbbbbb_rwelun.jpg",
      bio: "I am a passionate web developer with nearly 1.5 years of experience, specializing in the MERN stack. With a strong preference for React, I focus on building dynamic, scalable, and user-friendly web applications. I thrive on creating intuitive interfaces and leveraging the latest technologies to deliver high-quality, responsive digital solutions."
    },
    {
      name: "Abhilash",
      role: "Backend Engineer",
      image: "https://res.cloudinary.com/dldakzbyp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743530544/abhilash_TeamPic_ckkiu0.jpg",
      bio: "I am a backend engineer with 1 year of experience, specializing in building scalable and efficient server-side applications using Node.js and Express. I focus on designing robust APIs, optimizing performance, and ensuring seamless data flow between the front and back end. Passionate about backend architecture, I enjoy solving complex problems and enhancing system efficiency."
    }
  ];
  
  const values = [
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "We're committed to reducing e-waste's environmental footprint through education and accessible technology."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in waste management through cutting-edge AI."
    },
    {
      icon: Award,
      title: "Accuracy",
      description: "Our recommendations are based on scientific research and industry best practices for e-waste management."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "We design our platform to be user-friendly and accessible to everyone, regardless of technical knowledge."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            About EcoRecycle
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is to make e-waste recycling accessible, informed, and impactful through technology.
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600">
              EcoRecycle was founded in 2023 by a team of environmental scientists, AI specialists, and software 
              engineers united by a common concern: the rapidly growing global e-waste crisis.
            </p>
            <p className="text-gray-600">
              We recognized that while the environmental impact of e-waste is severe, many people lack access to 
              information about proper disposal methods or aren't aware of the value that can be recovered from 
              their old electronics.
            </p>
            <p className="text-gray-600">
              Our solution combines artificial intelligence with environmental science to create a platform that 
              not only educates users about e-waste but provides personalized guidance on how to recycle their 
              specific electronic devices responsibly.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                Our Technology
              </h2>
              <p className="text-gray-600 mb-6">
                At the core of our platform is a sophisticated AI system trained on thousands of e-waste images and 
                data points. This technology enables us to:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-primary-600 text-xs font-medium">1</span>
                  </span>
                  <span>
                    <strong>Classify e-waste</strong> into detailed categories based on visual recognition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-primary-600 text-xs font-medium">2</span>
                  </span>
                  <span>
                    <strong>Identify components</strong> that need special handling (like batteries or screens)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-primary-600 text-xs font-medium">3</span>
                  </span>
                  <span>
                    <strong>Provide personalized recommendations</strong> for recycling based on device type and user location
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-primary-600 text-xs font-medium">4</span>
                  </span>
                  <span>
                    <strong>Educate users</strong> about the environmental impact of their specific e-waste
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
