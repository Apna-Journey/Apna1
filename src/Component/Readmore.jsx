import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @media print {
    body * {
      visibility: hidden;
    }
    .print-content, .print-content * {
      visibility: visible;
    }
    .print-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding: 40px 0; /* Add top and bottom padding for printing */
    }
    header, footer, nav, .hamburger-icon, .date-time {
      display: none !important;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media print {
    background-color: white;
    box-shadow: none;
    padding: 0;
  }
`;

const Header = styled.header`
  background: linear-gradient(135deg, #004080 0%, #0080ff 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 8px;

  @media print {
    background: none;
    color: black;
    padding: 1rem 0;
  }
`;

const CompanyName = styled.h1`
  font-size: 2rem;
  margin: 0;
  letter-spacing: 1px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media print {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-right: 1rem;
  }
  &:last-child {
    margin-left: 1rem;
  }

  @media print {
    margin: 0 !important;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: #004080;
  border-bottom: 2px solid #004080;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media print {
    color: #000;
    border-bottom-color: #000;
  }
`;

const GradientCard = styled.div`
  background: linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;

  @media print {
    background: none;
    box-shadow: none;
    border: 1px solid #000;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media print {
    grid-template-columns: 1fr;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;

  @media print {
    background: none;
    border: 1px solid #000;
  }
`;

const SocialLink = styled.a`
  color: #004080;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: #000;
  }
`;

const PrintButton = styled.button`
  background: linear-gradient(135deg, #004080 0%, #0080ff 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 2rem auto; /* Center the button and add vertical margin */
  display: block; /* Make it a block element for centering */
  width: 200px; /* Set a fixed width */

  &:hover {
    opacity: 0.9;
  }

  @media print {
    display: none;
  }
`;

const SmallHeading = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const ReadMore = () => {
  const [companyData, setCompanyData] = useState({
    companyName: '',
    logo: '',
    website: '',
    foundingYear: '',
    founderName: '',
    industry: '',
    employeeCount: '',
    mission: '',
    vision: '',
    services: [],
    whyChooseUs: [],
    achievements: [],
    socialMedia: {
      linkedin: '',
      instagram: '',
      twitter: ''
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/company/${id}`);
        setCompanyData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching company data:', error);
        setError('Failed to fetch company data. Please try again later.');
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="print-content">
          <Header>
            <CompanyName>{companyData.companyName}</CompanyName>
          </Header>

          <Section>
            <Column>
              <GradientCard>
                <SectionTitle>Company Overview</SectionTitle>
                <p><strong>Founded:</strong> {companyData.foundingYear}</p>
                <p><strong>Founder/CEO:</strong> {companyData.founderName}</p>
                <p><strong>Industry:</strong> {companyData.industry}</p>
                <p><strong>Employees:</strong> {companyData.employeeCount}</p>
                <p><strong>Website:</strong> <a href={companyData.website} target="_blank" rel="noopener noreferrer">{companyData.website}</a></p>
              </GradientCard>

              <GradientCard>
                <SectionTitle>Mission</SectionTitle>
                <p>{companyData.mission}</p>
              </GradientCard>

              <GradientCard>
                <SectionTitle>Vision</SectionTitle>
                <p>{companyData.vision}</p>
              </GradientCard>

              <GradientCard>
                <SectionTitle>Our Services/Products</SectionTitle>
                <Grid>
                  {companyData.services.map((service, index) => (
                    <div key={index}>
                      <SmallHeading>{service.title}</SmallHeading>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </Grid>
              </GradientCard>
            </Column>

            <Column>
              <GradientCard>
                <SectionTitle>Why Choose Us</SectionTitle>
                <List>
                  {companyData.whyChooseUs.map((reason, index) => (
                    <ListItem key={index}>{reason.statement}</ListItem>
                  ))}
                </List>
              </GradientCard>

              <GradientCard>
                <SectionTitle>Top Achievements</SectionTitle>
                <Grid>
                  {companyData.achievements.map((achievement, index) => (
                    <div key={index}>
                      <SmallHeading>{achievement.title}</SmallHeading>
                      <p>{achievement.description}</p>
                    </div>
                  ))}
                </Grid>
              </GradientCard>

              <GradientCard>
                <SectionTitle>Connect With Us</SectionTitle>
                <SocialLink href={companyData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
                <SocialLink href={companyData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</SocialLink>
                <SocialLink href={companyData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
              </GradientCard>
            </Column>
          </Section>
        </div>

        <PrintButton onClick={handlePrint}>Print Profile</PrintButton>
      </Container>
    </>
  );
};

export default ReadMore;