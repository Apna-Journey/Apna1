import React from "react";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";

const Hero = () => {
  const textStyle = {
    color: '#006400',
    backgroundColor: '#fff5e6',
    borderRadius: '15px',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '800px',
    border: '2px solid #006400',
    transition: 'all 0.3s ease',
  };

  const textHoverStyle = {
    backgroundColor: '#000',
    color: '#fff',
  };

  return (
    <section className="hero" style={{ marginTop: '60px', textAlign: 'center', padding: '0 20px' }}>
      <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '20px' }}>Welcome to Apna Journey</h1>
      <h4 style={{ fontSize: 'clamp(0.8rem, 3vw, 1rem)', marginBottom: '30px' }}>Create and manage your company profiles with ease.</h4>
      <div 
        style={textStyle}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, textHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, textStyle)}
      >
        <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          Apna Journey is a dynamic platform designed to simplify the creation and management of company profiles. Tailored for businesses of all sizes, it empowers users to effortlessly build and update their profiles, offering a seamless experience for startups. With an intuitive interface and robust features, Apna Journey streamlines the process of showcasing company details, sharing updates, and connecting with potential clients and partners. Its user-friendly tools enable efficient profile management, ensuring that businesses can maintain accurate and engaging profiles with minimal effort. Whether you are a small startup or a growing enterprise, Apna Journey is your go-to solution for professional profile management and enhanced business visibility.
        </p>
      </div>
    </section>
  );
};

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Networking",
      description: "Targets established companies looking to enhance their market presence, streamline profile management, and engage with industry peers and potential clients. This service is designed to support businesses that are already well-positioned in their industry, providing them with the tools to further expand their reach and influence. By connecting with other industry leaders and fostering meaningful collaborations, companies can solidify their brand, explore new market opportunities, and stay ahead of the competition. Whether it's about building stronger relationships with existing clients or exploring partnerships with new ones, this service offers a comprehensive approach to elevating your business presence.",
    },
    {
      id: 2,
      service: "Startup Ecosystems",
      description: "Focuses on emerging startups, providing a comprehensive platform for new businesses to establish and promote their profiles, connect with investors, and network with other entrepreneurs. This service is tailored to the unique needs of startups, offering them the tools and support they need to navigate the challenges of early-stage growth. By creating a strong and visible presence, startups can attract the attention of potential investors, collaborators, and customers. Additionally, the platform fosters a vibrant community of like-minded entrepreneurs, enabling startups to share insights, explore partnerships, and gain valuable exposure in the market. This service empowers startups to lay a solid foundation for their business journey, ensuring they have the resources and connections needed to thrive in a competitive landscape.",
    },
    {
      id: 3,
      service: "Professional Services",
      description: "Assists firms in sectors like legal, accounting, and consulting by providing them with a robust platform to manage detailed profiles, showcase services, and connect with potential clients. This service is designed to cater to the specific needs of professional service firms, enabling them to present their expertise and unique value propositions in a compelling way. Through this platform, firms can highlight their accomplishments, display client testimonials, and outline their service offerings, all while maintaining a polished and professional online presence. Additionally, the platform facilitates connections with potential clients, partners, and industry peers, helping firms to expand their network, generate leads, and grow their business. By offering a comprehensive solution for profile management and client engagement, this service ensures that professional firms can maintain a strong market presence and continue to build their reputation in their respective fields.",
    },
  ];

  return (
    <section className="services" style={{ marginTop: '50px', textAlign: 'center', padding: '0 20px' }}>
      <h3 
        style={{ 
          color: 'darkgreen', 
          backgroundColor: 'white',
          display: 'inline-block',
          transition: 'color 0.3s ease',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'black'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'darkgreen'}
      >
        Prime Focus
      </h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '20px',
        marginTop: '30px',
        '@media (min-width: 1024px)': {
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0 5%',
        }
      }}>
        {services.map((element) => (
          <div 
            key={element.id}
            style={{ 
              backgroundColor: '#fff5e6',
              border: '2px solid #006400',
              borderRadius: '15px',
              padding: '20px',
              transition: 'all 0.3s ease',
              flex: 1,
              margin: '0 10px',
              '@media (max-width: 1023px)': {
                margin: '10px 0',
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff5e6';
              e.currentTarget.style.color = 'initial';
            }}
          >
            <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>{element.service}</h4>
            <p style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const cardStyle = {
    color: '#006400',
    backgroundColor: '#fff5e6',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
    border: '2px solid #006400',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  };

  const cardHoverStyle = {
    backgroundColor: '#000',
    color: '#fff',
  };

  return (
    <section className="howItWorks" style={{ marginTop: '60px', marginBottom: '60px', padding: '0 20px' }}>
      <h3 
        style={{ 
          color: 'darkgreen', 
          textAlign: 'center',
          marginBottom: '40px',
          padding: '10px',
          backgroundColor: 'white',
          borderRadius: '15px',
          transition: 'color 0.3s ease',
          fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'black'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'darkgreen'}
      >
        How does it work?
      </h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '20px',
      }}>
        {[
          { icon: <LuUserPlus />, title: "Create an Account", description: "Sign up for a free account on Apna Journey as a business or startup. Set up your company profile in just a few minutes to start showcasing your details. Customize your profile to highlight your strengths and unique offerings." },
          { icon: <VscTasklist />, title: "Preview", description: "Preview your profile and customize it to perfectly reflect your business's unique identity. Feel free to make adjustments and update details as needed, ensuring your profile always showcases the most accurate and engaging information about your company." },
          { icon: <BiSolidLike />, title: "Networking", description: "Unlock new opportunities and grow your business through our robust networking capabilities. Our platform facilitates seamless interactions, helping you build a strong professional network and drive your business forward." },
        ].map((item, index) => (
          <div 
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <div className="icon" style={{ color: 'orange', fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
              {item.icon}
            </div>
            <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>{item.title}</h4>
            <p style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <TopNiches />
      <HowItWorks />
    </>
  );
};

export default Home;