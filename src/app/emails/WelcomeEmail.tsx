import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface WelcomeEmailProps {
    userFirstname: string;
    ticketId: string; // Unique identifier for the ticket
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const WelcomeEmail = ({
    userFirstname,
    ticketId,
  }: WelcomeEmailProps) => {
    // Assuming your backend API endpoint to fetch the ticket file is /api/tickets/${ticketId}
    const ticketDownloadUrl = `${baseUrl}/api/tickets/${ticketId}`;
    
    return (
      <Html>
        <Head />
        <Preview>
          Thank you for using e-ticko event management platform.
        </Preview>
        <Body style={main}>
          <Container style={container}>
            <Text style={paragraph}>Hi {userFirstname},</Text>
            <Text style={paragraph}>
              Welcome to Koala, the sales intelligence platform that helps you
              uncover qualified leads and close deals faster.
            </Text>
            <Section style={btnContainer}>
              <a href={ticketDownloadUrl} style={button}>
                Download Ticket
              </a>
            </Section>
            <Text style={paragraph}>
              Best,
              <br />
              The e-ticko Team
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  WelcomeEmail.PreviewProps = {
    userFirstname: "Alan",
    ticketId: "123456", // Sample ticket ID
  } as WelcomeEmailProps;
  
  export default WelcomeEmailProps;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
    marginTop: "30px",
  };
  