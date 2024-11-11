'use client'

import React from 'react';
import logoImage from '../public/logo.jpeg'; // Path to the logo image
import './comingSoon.scss'; // Import the SCSS file
import Image from 'next/image';

export default function Home() {
  return (
    <section>
      {/* Heading Container at the top */}
      <div className="heading-container">
        <div className="logo">
          <Image width={100} height={100} src={logoImage} alt="Logo" />
        </div>
        <div className="name">साई सिद्धी मित्र मंडळ</div>
      </div>

      {/* Circle Container for rotating circle */}
      <div className="circle-container">
        <div className="circle">
          <div className="circle-background"></div>
          <h1 className="circle-text">लवकर येच येत आहे आपल्या भेटीला</h1> {/* Animated Text */}
        </div>
      </div>
    </section>
  );
}
