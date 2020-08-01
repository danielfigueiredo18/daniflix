import React from 'react';
import './Home.css';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: "#141414" }}>

    <Menu />
    
    <BannerMain 
    videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
    url={dadosIniciais.categorias[0].videos[0].url}
    videoDescription={"Fabricio André Bernard Di Paolo, mais conhecido por seu nome artístico Lord Vinheteiro (São Paulo, 22 de janeiro de 1980) é um pianista, engenheiro de áudio, youtuber e humorista brasileiro. É conhecido por possuir o maior canal especializado em piano do mundo no YouTube, com mais de 6 milhões de inscritos, além de integrar o elenco do programa Pânico, na Rádio Jovem Pan."}
    />

    <Carousel
    ignoreFirstVideo
    category={dadosIniciais.categorias[0]}
    />

    <Carousel
    ignoreFirstVideo
    category={dadosIniciais.categorias[1]}
    />

    <Carousel
    ignoreFirstVideo
    category={dadosIniciais.categorias[2]}
    />

    <Carousel
    ignoreFirstVideo
    category={dadosIniciais.categorias[3]}
    />

    <Carousel
    ignoreFirstVideo
    category={dadosIniciais.categorias[4]}
    />

   
   
   <Footer></Footer>
    </div>


  );
}

export default Home;
