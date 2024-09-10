import Header from "../components/Header";
import BuyClothingTop from "../components/BuyClothingTop";
import { Container } from "@mui/material";
import BestSellers from "../components/BestSellers";
import OfferBuy from "../components/OfferBuy";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Scarf from "../components/Scarf";
import ScarfSample from "../components/ScarfSample";
import GlovesSample from "../components/GlovesSample";
import Footer from "../components/Footer";
////////////////////////////////////////////
const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <BuyClothingTop />
        <BestSellers />
        <OfferBuy />
        <Banner />
        <Products />
        <Scarf />
        <ScarfSample />
        <GlovesSample />
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
