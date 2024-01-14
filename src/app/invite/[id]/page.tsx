'use client'
import { useParams } from 'next/navigation'
import styles from './invite.module.css'

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
import useMediaQuery from '@mui/material/useMediaQuery';
import NotSupport from '@/components/not-support';
import AsistenceButton from '@/components/asistence-button';

const photosCollage = [
  collage1,
  collage2,
  collage3
]

type invite = {
  "id": number,
  "titulo": string,
  "n_personas": number
}

export default function Invite() {
  const { id } = useParams();
  const [data]: any = useState(
    DB.find((item: invite) => item.id === Number(id))
  )

  const matches = useMediaQuery('(max-width:600px)');

  if (!matches) return <NotSupport />

  return (
    <div className={styles.invite}>
      <Header />
      <Hero title={data.titulo} />
      <CountDown
        date={"Feb 24, 2024 10:00:00"}
        dateString={"24 de Febrero, 2024"}
        targetMessage={'Es hora de alistarse, te esperamos !'}
      />
      <CollageSimple images={photosCollage} />
      <ReceptionAndWedding />
      <Assistence />
      <div className={styles.stickyButton}>
        <AsistenceButton nHost={data['n_personas']} />
      </div>
    </div>
  )
}
