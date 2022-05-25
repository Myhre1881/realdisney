           
import Display from "./BigPicture/Display.js";
import Companies from "./Companies/Companies.js";
import Footer from "./Footer/Footer.js";
import NavBar from "./Navbar/Navbar.js";
import SmallPicture from "./SmallPicture.js/SmallPicture.js";
function App() {
  
  return (
    <html>
      <body className="min-h-screen bg-gray-800 resize overflow-auto">
        <div className=" mb-40">
        <NavBar />
        </div>
        <Display/>
        <div className="flex flex-row justify-evenly mx-20">
        <Companies/>
        <Companies/>
        <Companies/>
        <Companies/>
        <Companies/>
        <Companies/>
        </div>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <SmallPicture/>
        <Footer/>
        
        

      </body>

    </html>
  );
}

export default App;
