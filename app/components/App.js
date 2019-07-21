import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import ImgContent from "./ImgContent";
import Footer from "./Footer";

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <MainContent />
            <ImgContent />
            <Footer />
         </div>
      );
   }
}

export default App;