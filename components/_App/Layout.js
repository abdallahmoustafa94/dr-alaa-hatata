import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";

const Layout = ({ children }) => {


  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '15px', // Increased padding for larger buttons
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '15px', // Rounded shape
    cursor: 'pointer',
    outline: 'none',
    fontSize: '18px', // Increased font size for larger buttons
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    zIndex:'9999'
  };
  return (
    <>
      <Head>
        <title>عيادة دكتور الاء حتاتة</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
         <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TSMWHH2');
            `,
          }}
        />
      </Head>

      {children}
      <div>
      {/* Your page content */}
      
      {/* Floating WhatsApp button */}
      <a
      className="whatsapp"
        style={{ ...buttonStyle, backgroundColor: '#25d366' }}
        href="#"
      >
        <i className="bx bxl-whatsapp" >إحجز الأن علي واتساب</i>
      </a>
      
      {/* Floating Call button */}
      <a
      className="call"
        style={{ ...buttonStyle, backgroundColor: '#007bff',bottom:'90px' }}
        href="#"
      >
        <i className="bx bx-phone" >إتصل بنا</i>
      </a>    
    </div>
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSMWHH2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
    </>
  );
};

export default Layout;
