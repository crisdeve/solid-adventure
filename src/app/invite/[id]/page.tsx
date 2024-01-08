'use client'
import { useParams } from 'next/navigation'

import CollageSimple from "@/components/collage-simple";
import CountDown from "@/components/count-down";
import Header from "@/components/header";
import Hero from "@/components/hero";
import collage1 from '@/assets/collage/collage-1.jpeg';
import collage2 from '@/assets/collage/collage-2.jpeg';
import collage3 from '@/assets/collage/collage-3.jpeg';
import ReceptionAndWedding from "@/components/reception";
import Assistence from "@/components/assistence";
import { useState } from 'react';
import { DB } from '@/assets/DB';

const photosCollage = [
  collage1,
  collage2,
  collage3
]

export default function Invite() {
  const { id } = useParams()
  const [data]: any = useState(
    DB.find((item) => item.id === id)
  )

  return (
    <>
      <Header />
      <Hero title={data.titulo} />
      <CountDown
        date={"Feb 24, 2024 10:00:00"}
        dateString={"24 de Febrero, 2024"}
        targetMessage={'Es hora de alistarse, te esperamos !'}
      />
      <CollageSimple images={photosCollage} />
      <ReceptionAndWedding />
      <Assistence nHost={data['n_personas']} />
    </>
  )
}
