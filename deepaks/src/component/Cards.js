import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navebar from './Navebar';
import Doctopdf from './Allconverter/Doctopdf';
import Exceltopdf from './Allconverter/Exceltopdf';
import JpftoPdf from './Allconverter/JpgtoPdf';
import Pdfconverer from './Allconverter/Pdfconverter';
import Pdftodoc from './Allconverter/Pdftodoc';
import PdftoExcel from './Allconverter/PdftoExcel';
import Pdftoppt from './Allconverter/Pdftoppt';
import PdftoJpg from './Allconverter/PdftoJpg';
import Ppttopdf from './Allconverter/Ppttopdf';
import Wordtopdf from './Allconverter/Wordtopdf';

const Cards = () => {
  const cards = [
    { id: 1, color: 'white', heading: 'Card 1', component: 'Doctopdf' },
    { id: 2, color: 'white', heading: 'Card 2', component: 'Exceltopdf' },
    { id: 3, color: 'white', heading: 'Card 3', component: 'JpftoPdf' },
    { id: 4, color: 'white', heading: 'Card 4', component: 'Pdfconverer' },
    { id: 5, color: 'white', heading: 'Card 5', component: 'Pdftodoc' },
    { id: 6, color: 'white', heading: 'Card 2', component: 'PdftoExcel' },
    { id: 7, color: 'white', heading: 'Card 3', component: 'Pdftoppt' },
    { id: 8, color: 'white', heading: 'Card 4', component: 'PdftoJpg' },
    { id: 9, color: 'white', heading: 'Card 5', component: 'Ppttopdf' },
    { id: 10, color: 'white', heading: 'Card 5', component: 'Wordtopdf' }
  ];

  const navigate = useNavigate();

  const handleButtonClick = (componentName) => {
    navigate(`/${componentName}`);
  };

  return (
    <div>
      <Navebar />
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          height:'70vh',
          border: '2px solid red',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap:'wrap'
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              backgroundColor: card.color,
              padding: '20px',
              marginBottom: '1px',
              display: 'flex',
              height:'30vh',
              gap:'4vh',
              width: '15%',
              flexDirection: 'column',
              flexWrap: 'wrap',
              border: '2px solid black'

            }}
          >
            <img src="" alt="" />
            <h2>{card.heading}</h2>
            <button
              style={{ padding: '20px' }}
              onClick={() => handleButtonClick(card.component)}
            >
              CONVERTIS
            </button>
          </div>
        ))}
      </div>

      <Routes>
        <Route path="/Doctopdf" element={<Doctopdf />} />
        <Route path="/Exceltopdf" element={<Exceltopdf />} />
        <Route path="/JpftoPdf" element={<JpftoPdf />} />
        <Route path="/Pdfconverer" element={<Pdfconverer />} />
        <Route path="/Pdftodoc" element={<Pdftodoc />} />
        <Route path="/PdftoExcel" element={<PdftoExcel />} />
        <Route path="/Pdftoppt" element={<Pdftoppt />} />
        <Route path="/PdftoJpg" element={<PdftoJpg />} />
        <Route path="/Ppttopdf" element={<Ppttopdf />} />
        <Route path="/Wordtopdf" element={<Wordtopdf />} />
      </Routes>
    </div>
  );
};

export default Cards;
