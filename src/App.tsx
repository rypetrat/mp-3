import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled } from "styled-components";
import './App.css'

// Component main imports
import Home from "../components/Home";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import References from "../components/References";
import Documents from "../components/Documents";
import Credit from "../components/Credit";

// Component non-main imports
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styled wrapping components
const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  @media screen and (max-width: 750px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;

// Defines routing
function Root() {
  return (
    <PageWrapper>
      {/* header */}
      <Header/>
      <Container>
        {/* Navbar */}
        <Navbar/> 
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/certifications" element={<Certifications />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/references" element={<References />}/>
            <Route path="/documents" element={<Documents />}/>
            <Route path="/credit" element={<Credit />}/>
          </Routes>
        </main>
      </Container>
      {/* footer */}
      <Footer/>
    </PageWrapper>
  );
}
const router = createBrowserRouter(
  [{path:"*", Component:Root}]
);

// Renders the page
export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}