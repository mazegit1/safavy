import React from 'react';
import dadasov from '../images/dadasov.svg';
import innovasiya from '../images/innovasiya.svg';
import teachlearn from '../images/teachlearn.svg';
import innoland from '../images/innoland.svg';
import card1 from '../images/cardOne.svg';
import card2 from '../images/cardTwo.svg';

const Ad = () => {
  return (
    <>
      <div className="ad-title">
        <h1 className='text-center text-4xl font-semibold py-6 text-blue-800'>
          Əməkdaşlıq etdiyimiz şirkətlər
        </h1>
      </div>

      <div className="ad flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <img className='w-[120px] h-[120px] md:w-[150px] md:h-[150px]' src={dadasov} alt="dadasov" />
        <img className='w-[120px] h-[120px] md:w-[150px] md:h-[150px]' src={innovasiya} alt="innovasiya" />
        <img className='w-[120px] h-[120px] md:w-[150px] md:h-[150px]' src={teachlearn} alt="teachlearn" />
        <img className='w-[120px] h-[120px] md:w-[150px] md:h-[150px]' src={innoland} alt="innoland" />
      </div>

      <div className="ad-title">
        <h1 className='text-center text-4xl font-semibold py-6 text-blue-800'>
          Gəlin bizi yaxından tanıyaq
        </h1>
      </div>

      <div className="connect px-6 md:px-12 py-6 space-y-6 md:space-y-8">
        <div className="connect-top flex flex-col md:flex-row items-center justify-between gap-4 md:gap-20">
          <div className="left w-full md:w-1/2">
            <img className='w-full' src={card1} alt="YTILI 2023" />
          </div>
          <div className="right w-full md:w-1/2">
            <h1 className='text-xl md:text-2xl font-semibold'>YTILI 2023 ABŞ təmsil edilmişdir</h1>
            <p>
              Safavy bir startup-dır və bu startup-ın inkişaf etdirilməsi, xarici bazarlara çıxarılması imkanlarını öyrənmək məqsədilə YTILI 2023 proqramında iştirak etmişdir.
              Həmtəsisçimiz və İcraçı direktorumuz Könül Quliyeva təşəbbüskar qadın olaraq öz bilik və təcrübələrini bu proqramla inkişaf etdirmək və digər ölkə nümayəndələri ilə mübadilə məqsədilə Safavy-ni təmsil etmişdir.
            </p>
          </div>
        </div>

        <div className="connect-bottom flex flex-col md:flex-row items-center justify-between gap-4 md:gap-20">
          <div className="left w-full md:w-1/2">
            <h1 className='text-xl md:text-2xl font-semibold'>Teknofest 2022 Bakı Take Off finalist</h1>
            <p>
              Keçirilən Teknofestdə 50 startup iştirak etmişdir. Rəhbər Könül Quliyeva və bütün Safavy komandası ilk 10-da 6-cı yeri tutmuşdur və Türkiyədə olmuş bootcampda təqdimat keçirilmişdir.
            </p>
          </div>
          <div className="right w-full md:w-1/2">
            <img className='w-full' src={card2} alt="Teknofest 2022" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ad;
