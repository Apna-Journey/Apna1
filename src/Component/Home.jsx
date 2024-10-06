import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Startups', 'Entrepreneurs', 'Innovators', 'Visionaries'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'linear-gradient(to right, #e0f7fa, #bbdefb)',
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '3rem',
            fontWeight: '900',
            color: '#1f2937',
            marginBottom: '30px',
          }}
        >
          Empowering
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ color: '#10B981', marginLeft: '10px', display: 'inline-block' }}
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '40px',
          }}
        >
          Your journey to success starts here. Connect, grow, and thrive with APNA Journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s',
          }}
        >
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
            APNA Journey is more than a platform; it's your launchpad to success. We provide the tools, connections, and insights you need to transform your vision into reality. Join a community of forward-thinkers and industry leaders who are shaping the future of business.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};


const TopNiches = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <VscTasklist style={{ fontSize: '2rem', marginBottom: '1rem', color: '#10B981' }} />,
      service: "Networking",
      description: "Connect with industry leaders, explore partnerships, and expand your business reach.",
    },
    {
      id: 2,
      icon: <BiSolidLike style={{ fontSize: '2rem', marginBottom: '1rem', color: '#3b82f6' }} />,
      service: "Startup Ecosystems",
      description: "Join a vibrant community of entrepreneurs, attract investors, and accelerate your growth.",
    },
    {
      id: 3,
      icon: <LuUserPlus style={{ fontSize: '2rem', marginBottom: '1rem', color: '#9333ea' }} />,
      service: "Professional Services",
      description: "Showcase your expertise, engage clients, and build your firm's reputation.",
    },
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '40px',
          }}
        >
          Our Prime Focus
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.id * 0.2 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                padding: '24px',
                textAlign: 'center',
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.icon}
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>{service.service}</h3>
              <p style={{ color: '#4b5563', marginBottom: '10px' }}>{service.description}</p>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: hoveredService === service.id ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#d1fae5',
                  padding: '16px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: '#374151' }}>Learn more about our {service.service.toLowerCase()} solutions and how they can benefit your business.</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { icon: <LuUserPlus style={{ fontSize: '2rem', color: '#10B981' }} />, title: "Create an Account", description: "Sign up and set up your company profile in minutes." },
    { icon: <VscTasklist style={{ fontSize: '2rem', color: '#10B981' }} />, title: "Customize Your Profile", description: "Tailor your profile to showcase your unique offerings." },
    { icon: <BiSolidLike style={{ fontSize: '2rem', color: '#10B981' }} />, title: "Start Networking", description: "Connect with peers, clients, and potential partners." },
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#d1fae5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '40px',
          }}
        >
          How It Works
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                textAlign: 'center',
                flex: '1 1 calc(33% - 20px)',
                marginBottom: '20px',
              }}
            >
              {step.icon}
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '10px 0' }}>{step.title}</h3>
              <p style={{ color: '#4b5563' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessMetrics = () => {
  const data = [
    { name: 'Jan', value: 3000 },
    { name: 'Feb', value: 5000 },
    { name: 'Mar', value: 5500 },
    { name: 'Apr', value: 6500 },
    { name: 'May', value: 7000 },
    { name: 'Jun', value: 8000 },
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '40px',
          }}
        >
          Success Metrics
        </motion.h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "APNA Journey has transformed the way we connect with potential clients. Highly recommended!",
      name: "Jane Doe",
      position: "CEO, Innovate Inc.",
    },
    {
      id: 2,
      quote: "The platform's networking features have helped us expand our reach and grow our business.",
      name: "John Smith",
      position: "Founder, StartUp Central",
    },
    {
      id: 3,
      quote: "A game-changer for entrepreneurs looking to scale their ventures and build meaningful connections.",
      name: "Emily Johnson",
      position: "Director, Growth Labs",
    },
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#d1fae5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center',
            color: '#1f2937',
            marginBottom: '40px',
          }}
        >
          What Our Users Say
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.id * 0.2 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <FaQuoteLeft style={{ fontSize: '2rem', color: '#10B981', marginBottom: '10px' }} />
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#4b5563', marginBottom: '10px' }}>
                {testimonial.quote}
              </p>
              <FaQuoteRight style={{ fontSize: '2rem', color: '#10B981', marginBottom: '10px' }} />
              <p style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>{testimonial.name}</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  const navigate = useNavigate(); // Initialize the hook

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#bbdefb', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '30px' }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: '#10B981',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1.25rem',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#059669')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#10B981')}
          onClick={() => navigate('/insert')} // Navigate to the /insert page
        >
          Join APNA Journey
        </motion.button>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <TopNiches />
      <HowItWorks />
      <SuccessMetrics />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
