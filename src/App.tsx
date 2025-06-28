import React from 'react';
import { FaFoursquare, FaWifi ,FaExchangeAlt, FaUniversity, FaShieldAlt, FaTwitter, FaLinkedinIn, FaFacebookF} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { SiInstacart } from 'react-icons/si';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { RiBankFill } from 'react-icons/ri';
import graph1 from './assests/graph1.png';
import iconImage3 from './assests/iconImage2.png'
import iconImage1 from './assests/iconImage3.png'
import iconImage2 from './assests/iconImage4.png'


function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const FeatureCard: React.FC<{ icon: React.ComponentType<any>; title: string; description: string }> = ({ icon: Icon, title, description }) => (
    <div className="feature-card">
      <Icon className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div style={{ backgroundColor: "white", maxWidth: "100%", overflowX: "hidden" }}>
      {/* Header */}
      <header
      style={{
        backgroundColor: "#f8fafc",
        marginTop: "10px",
        padding: "0 20px",
      }}
      >
      <div
        style={{ display: "flex",
              alignItems: "center",
              height: "4rem",
              gap: "1rem",
              flexDirection: "row",
              justifyContent: "space-between",
             paddingLeft:"10rem"}}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "#033347",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <FaFoursquare style={{ width: "1.25rem", height: "1.25rem", color: "white" }} />
          </div>
          <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#111827" }}>Finpay</span>
        </div>
        </div>

        {/* Desktop Navigation */}
        <nav
        style={{ display:"flex", flexDirection:"row",marginRight:"20rem", marginLeft:"10rem", gap:"3rem" }}
        >
        <a
          href="#"
          style={{
          color: "#374151",
          transition: "color 0.2s",
          fontWeight: "500",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#298E9E")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
        >
          Products
        </a>
        <a
          href="#"
          style={{
          color: "#374151",
          transition: "color 0.2s",
          fontWeight: "500",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#298E9E")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
        >
          Customers
        </a>
        <a
          href="#"
          style={{
          color: "#374151",
          transition: "color 0.2s",
          fontWeight: "500",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#298E9E")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
        >
          Pricing
        </a>
        <a
          href="#"
          style={{
          color: "#374151",
          transition: "color 0.2s",
          fontWeight: "500",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#298E9E")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
        >
          Learn
        </a>
        </nav>
        {/* CTA Button */}
        <div
        style={{ display:"flex", flexDirection:"row" , justifyContent:"flex-end",alignItems: "center", gap: "1rem" }}
        >
        <button
          style={{
          backgroundColor: "white",
          color: "#298E9E",
          padding: "0.5rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "500",
          border: "1px solid #298E9E",
          transition: "all 0.2s",
          }}
          onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#298E9E";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.border = "1px solid #298E9E";
          }}
          onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "#033347";
          }}
        >
          Log In
        </button>
        <button
          style={{
          backgroundColor: "#298E9E",
          color: "white",
          padding: "0.5rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "500",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          transition: "all 0.2s",
          }}
          onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#298E9E";
          e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
          }}
          onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#298E9E";
          e.currentTarget.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
          }}
        >
          Sign Up
        </button>
        </div>
      </div>
      </header>

      {/* Hero Section */}
      <section className="landing-container">
      <div className="right-container">
        <h1 className="landing-title">
          <strong style={{fontSize:"70px"}}>Get paid early</strong><br />
          <span className="highlight">save automatically<br />
          all your pay.</span>
        </h1>
        <p className="landing-description">
          Support streamlined processes with simple invoicing, powerful integrations, and over five payment tools.
        </p>
      <div className="email-signup-box">
      <input
        type="email"
        placeholder="Your business email"
        className="email-input"
      />
      <button className="email-button">
        Get Started <FiArrowUpRight className="icon" />
      </button>
      </div>
      <div
        className="partner-logo">
        <h3>Klrna.</h3>
        <h3>coinbase</h3>
        <h3
          className="heading-Icon"
        >
          <SiInstacart/>instacart
        </h3>
      </div>
      </div>
      <div className="left-container"> 
         <div className="card-ui">
         <div className="credit-card">
         <div className="card-header">Credit Card</div>
         <div className="card-number">234 **** *****</div>
         <div className="card-footer">
         <div className="card-brand">VISA</div>
         <div><FaWifi style={{ transform: "rotate(90deg)",marginTop: "7px" , width:"22px" , height:"22px"}} /></div>
         </div>
         </div>

         <div className="form-box">
      <div className="user-info">
        <div className="user-avatar">D</div>
        <div>
          <strong>Dipa Inhouse</strong><br/>
          <text style={{fontSize:"13px"}}>dipainhouse@gmail.com</text>
        </div>
      </div>
      <div className="invoice">
        <div className="invoice-label">Invoice</div>
        <div className="invoice-amount">$1,876,580</div>
        <div className="invoice-date">April 21, 2024</div>
      </div>
      <div className="payment-options">
        <label className="option">
          <span style={{ display:"flex", fontSize:"15px"}}><BsCreditCard2FrontFill style={{marginTop:"2px", marginRight:"5px", width:"15px", height:"15px", color:"rgb(7, 37, 53)"}}/>Credit Card</span>
          <input type="radio" name="payment" checked />
        </label>
        <label className="option">
          <span style={{ display:"flex", fontSize:"15px"}}><RiBankFill style={{marginTop:"2px", marginRight:"5px", width:"15px", height:"15px",  color:"rgb(7, 37, 53)"}}/>Bank Account</span>
          <input type="radio" name="payment" />
        </label>
      </div>

      <button className="pay-button">Pay</button>
    </div>
    </div>
    </div>
      </section>

      {/* Features Section */}
      <section className="payment-section">
      <div className="payment-header">
        <p className="section-tag">Future Payment</p>
        <h2>Experience that grows with your scale.</h2>
        <p className="sub-text">
          Design a financial operating system that works for your business and streamlined cash flow management.
        </p>
      </div>

      <div className="features-grid">
        <FeatureCard
          icon={FaExchangeAlt}
          title="Free transfers"
          description="Create a financial experience easy and automate repeat purchases by scheduling recurring payments."
        />
        <FeatureCard
          icon={FaUniversity}
          title="Multiple account"
          description="Run your operations with cash from your account and generate yield on funds stored in your account."
        />
        <FeatureCard
          icon={FaShieldAlt}
          title="Unmatched security"
          description="Securely manage your finances with organization-wide MFA, card-locking, and account-level controls."
        />
      </div>
      </section>
       
       {/* Why  Us Section */}
      <section className="why-finpay">
      <div className='why-header'>
      <h5 style={{ fontSize: "13px", color:"#54d1c6"}}>WHY US</h5>
      <h1 style={{ fontSize: "30px"}}>Why they prefer Finpay</h1>
      </div>
      <div className='card-1'>
        <div className="card">
          <h3>3k+</h3>
          <p className="bold-text">Businesses already running on Finpay</p>
        </div>
        <div className="card" style={{ gap: "4rem"}}>
          <p className="bold-text">Instant Withdraw your funds at any time</p>
          <div className="icons">
          <img src={iconImage1} alt="icon" style={{width:"55px"}}/>
          <img src={iconImage2} alt="icon" style={{width: "76px",height: "34px",marginTop: "15px"}}/>
          <img src={iconImage3} alt="icon" className="icon-img"  style={{width:"55px"}}/>
          </div>
        </div>
      </div>
      <div className='card-2'>
        <div className="card-new" >
          <h1 style={{fontSize:"33px", color:"black", marginBottom:"20px"}}>No asset volatility</h1>
          <p className="sub-text">
            Generate returns on your cash reserves without making any investments.
          </p>
        </div>
        <div className="card graph-card">
          <img src={graph1} alt="Graph" className="graph-img" />
        </div>
      </div>
    </section>
   
   {/* Step Section */}
    <section>
    <div className="return1">
      <div className="return3">  <p className='return4'>STEP</p> <h2 style={{textAlign:"left"}}>Maximize your returns with a Reserve account that generates.</h2> </div>
 
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <div className="return2">
            <h3 className='return5'>1</h3>
            <h4 className='return6'>Open your account</h4>
            <p className='return7'>Sign up to finpay and set up your account from the dashboard.</p>
        </div>
        <div className="return2">
            <h3 className='return5'>2</h3>
            <h4 className='return6'>Transfer your money</h4>
            <p className='return7'>Move money from to another account into and start to earning up.</p>
        </div>
        <div className="return2">
            <h3 className='return5'>3</h3>
            <h4 className='return6'>Watch your balance grow</h4>
            <p className='return7'>Accessed instantly and remain insulated from market volatility.</p>
        </div>
    </div>
</div>

    </section>

   {/* Our Mission section */}
    <section>
        <div className='our-mission-card'>
        <h1>OUR MISSION</h1>
        <p className='p1'>We've helped innovative companies</p>
        <p className='p2'>Hundreds of all sizes and across all industries have made a big improvements with us.</p>
        </div>
        <div className="stats">
            <div className="stat">
              <p className='stats-header'>24%</p>
              <p className='stats-description'>Revenue Business</p>
            </div>
            <div className="stat"> 
            <p className='stats-header'>180k</p>
            <p className='stats-description'>In annual Revenue</p>
            </div>
            <div className="stat"> 
            <p className='stats-header'>10+</p>
            <p className='stats-description'>Months of runway</p>
            </div>
        </div>
    </section>
  {/* Pricing section */}
  <section className="pricing-section">
      <div className="pricing-header">
        <h2 style={{ textAlign:"center", color: "rgb(112, 164, 171)" , fontSize: "13px",
    fontWeight: "900"}}>CHOOSE PLAN:</h2>
      </div>
      <div className="pricing-container">
      <div className="pricing-card" style={{ background: "#EFF5F5"}}>
        <div className="plan-name" style={{color:"#0C2833"}}>Plus</div>
        <div className="price" style={{color:"#0C2833"}}>£2.99/month
        <FiArrowUpRight  className="icon" />
        </div>
      </div>
      <div className="pricing-card" style={{ background: "#2A8FA0"}}>
        <div className="plan-name" style={{color:"rgb(255 255 255 / 77%)"}}>Premium</div>
        <div className="price" style={{color:"rgb(255 255 255 / 77%)"}}>£6.99/month <FiArrowUpRight className="icon" /></div>
      </div>
    </div>
  </section>

     {/*Try it Now section */}
      <section className="finpay-hero">
        <div className="finpay-hero-content">
          <div className='finpay-p-h1'>
          <p className="finpay-try">TRY IT NOW</p>
          <h1 className="finpay-heading">
            Ready to level up your <br /> payment process?
          </h1>
          <p className="finpay-description">
            Supports small businesses with simple invoicing, powerful
            integrations, and cash flow management tools.
          </p>
          </div>
          <div className="finpay-buttons">
            <button className="get-started">Get Started Now</button>
            <button className="learn-more">Learn More ↗</button>
          </div>
        </div>
      </section>

     {/*Footer section */}
      <footer className="finpay-footer">
        <div className="footer-top">
          <div className="footer-logo"> 
          <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "#033347",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <FaFoursquare style={{ width: "1.25rem", height: "1.25rem", color: "white" }} />
          </div>Finpay</div>
          <div className="footer-links">
            <div>
              <h4>Solutions</h4>
              <p>Small Business</p>
              <p>Freelancers</p>
              <p>Customers</p>
              <p>Taxes</p>
            </div>
            <div>
              <h4>Company</h4>
              <p>About Us</p>
              <p>Career</p>
              <p>Contact</p>
            </div>
            <div>
              <h4>Learn</h4>
              <p>Blog</p>
              <p>Ebooks</p>
              <p>Guides</p>
              <p>Templates</p>
            </div>
          </div>
          <div className="footer-socials">
            <p>Follow us on</p>
            <div className="social-icons">
              <FaTwitter />
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
        </div>
        <div className="footer-bottom">©Finpay 2024. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default App;