import React from "E:/keeper-app-part-1/node_modules/react";



function Footer(){
    let year=new Date().getFullYear();
    const footer=(
        <footer>
          <p>
           Copyright {year}
          </p>
        </footer>
    );
    return footer;
};

export default Footer;