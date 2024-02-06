'use client'
import FloatingImage from './components/FloatingImage';
import Image from 'next/image'
import Head from 'next/head';
import Dropdown from '@/app/components/Dropdown'
import { useEffect, useState } from 'react';
import { NaviGrass } from '@/components/component/NaviGrass';
import {HomeGrass} from '@/components/component/HomePageContent';

export default function Home() {
 
 
  return (
  <div>
        <NaviGrass/>
        
        <HomeGrass/>    
  </div>
        )
      }
