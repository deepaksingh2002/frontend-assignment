import React from 'react';

const Footer = () => {
  return (
    <div className="footer mx-auto my-2.5 flex items-center justify-between border-t border-[#797979] py-4 max-w-full
                    max-[600px]:block max-[600px]:text-center">
      
      <p className="text-sm">
        © 2026 deepaksingh2002. All rights reserved.
      </p>

      <ul className="max-[600px]:mt-2">
        <li className="inline-block ml-5 max-[600px]:m-2">
          Terms of Services
        </li>
        <li className="inline-block ml-5 max-[600px]:m-2">
          Privacy Policy
        </li>
      </ul>
    </div>
  );
};

export default Footer;
