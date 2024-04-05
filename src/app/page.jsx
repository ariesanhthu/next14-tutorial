"use client"
import Image from "next/image";
import styles from "./home.module.css";
import Contactform from "@/components/contactform/Contactform";
import ImageGallery from "@/components/imagegrid";
import Slideshow from "@/components/slideshow";
import Layout from '../components/Tab/Layout';
import PhuquocTab from '../components/Tab/PhuquocTab';
import NhatrangTab from '../components/Tab/NhatrangTab';
import MoreTab from '../components/Tab/MoreTab';

import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('phuquoc');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>DU LỊCH CÙNG CHÚNG TÔI</h1>
          <p className={styles.desc}>
            Đồng hành cùng bạn khắp Việt Nam
          </p>
          <p className={styles.desc}>
            Tham quan các địa điểm nổi tiếng
          </p>
          <div className={styles.buttons}>
            {/* <button className={styles.button}>Learn More</button> */}
            
        {/* <Contactform/> */}
          </div>
          {/* <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
          </div> */}
        </div>
        <div className={styles.imgContainer}>
          <Slideshow/>
        </div>
      </div>

      {/* layout */}
      <div className="session1">
        <div className={styles.textSubContainer}>
          <h4 className={styles.subtitle}>Tour hằng ngày</h4>
        </div>
        <ImageGallery/>
      </div>
      {/* <div className="sessionBrand" style={{display: 'flex', alignContent: 'center'}}>
        <h1 className={styles.title}>
          CÔNG TY TNHH DỊCH VỤ DU LỊCH PUPU TRIP
        </h1>
      </div> */}
      {/* tour hot */}
      <div className="session2">
       <div className={styles.textSubContainer}>
          <h4 className={styles.subtitle}>Tour hot 🔥</h4>
        </div>
        
        <Layout>
      <div>
        <div className="tab-container" style={{display: 'flex', direction: 'row', justifyContent: 'space-around'}}>
          <div
            className="tab"
            style={activeTab === 'phuquoc' ? { borderBottom: '2px solid #378CE7'} : null}
            onClick={() => handleTabClick('phuquoc')}
          >
            
            <h3>Phú quốc</h3>
          </div>
          <div
            className="tab"
            style={activeTab === 'nhatrang' ? { borderBottom: '2px solid #378CE7'} : null}
            onClick={() => handleTabClick('nhatrang')}
          >
            <h4>
            Nha trang
              </h4>
          </div>
          <div
            className="tab"
            style={activeTab === 'more' ? { borderBottom: '2px solid #378CE7'} : null}
            onClick={() => handleTabClick('more')}
          >
            <h4>Ưu đãi</h4>
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 'phuquoc' && <PhuquocTab />}
          {activeTab === 'nhatrang' && <NhatrangTab />}
          {activeTab === 'more' && <MoreTab />}
        </div>
      </div>
    </Layout>
      </div>
    </div>
  );
};

export default Home;
