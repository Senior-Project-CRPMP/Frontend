import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import '../../styles/header.css'
import Layout from '../common/Layout';
export default function Home() {
  return (
    <>
     <Layout>
      <div className='content'>
        <img src="../src/assets/research.png" alt="research image" className='image' />
        <div className="card1">
          <h1>Work with us <br />Research with us</h1>
          <p>Card content goes here.</p>
          </div>
      </div>
      </Layout>
    </>
  );
}