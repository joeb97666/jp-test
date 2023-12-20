'use client'
import FloatingImage from './components/FloatingImage';
import Image from 'next/image'
import Head from 'next/head';
import Dropdown from '@/app/components/Dropdown'
import { useEffect, useState } from 'react';
import { Landscape } from '@/components/component/landscape';


export default function Home() {
<div>
  <Landscape/>
  </div>
  const [width, setWidth] = useState(window.innerWidth) 
  console.log('home iteration', width)
  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth)

    } 
    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }  
  }, [])
  return (

    <div className='dropdown-title'>
      <header>
        <Head>
          {/* Add necessary meta tags, title, etc. */}
          <title>Your Page Title</title>
          <meta name="description" content="Your page description" />
        </Head> 
      
      
      <div>  
        <div style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          minWidth: 150,
          justifyContent:'center',
          display: width > 960 ? 'flex': 'none',
          margin: 0,
          backgroundColor: 'transparent',
          color: "006633", 
          cursor: 'pointer',
          right: '-20%', // Adjust the right position as needed
          whiteSpace: 'nowrap',
          
        }}>

          <Dropdown title="Services">
            <a href="#">Landscape Design</a>
            <a href="#">Lawn Care</a> 
            <a href="#">Tree Trimming</a>
          </Dropdown>
          <Dropdown title="About">
            <a href="#">Gallery</a>
            <a href="#"></a>
          </Dropdown>
          <Dropdown title="Contact">
            <a href="#">Contact 1</a>
            <a href="#">Contact 2</a>
          </Dropdown>
          <Dropdown title="Free Quote">
          </Dropdown>

        </div>
      </div>
    </header>
    {/* Content */}
    <div>
        
          <FloatingImage />
        
    </div>
    <main style={{ 
        marginTop: '0px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: 'CCCCCC' }}>
    
   

        <div>
          <Image
            src='/iStock/artificial0.jpg'  // Assuming the image is in the 'public' directory
            alt='JPgardeningHeader'
            width={1600}
            height={860}
            objectPosition='center'
            
          />
        </div> <div>
          <Image
            src='/iStock/landscaping0.jpg'  // Assuming the image is in the 'public' directory
            alt='JPgardeningHeader'
            width={1600}
            height={860}
            justify-content='fixed'
          />
        </div>
        <div>
          <Image
            src='/iStock/ture0.JPG'  // Assuming the image is in the 'public' directory
            alt='StockGardenPhoto'
            width={1600}
            height={860}
            objectPosition='center'
          />
        </div>
        <div>
          <Image
            src='/iStock/sod0.jpg'  // Assuming the image is in the 'public' directory
            alt='StockGardenPhoto'
            width={1600}
            height={860}
            objectPosition='center'
          />
        </div>
      </main>
  </div>
  );
  
}