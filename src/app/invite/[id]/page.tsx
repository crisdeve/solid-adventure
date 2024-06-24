import styles from './invite.module.css'

import CollageSimple from "@/components/collage-simple";
import CountDown from "@/components/count-down";
import Header from "@/components/header";
import Hero from "@/components/hero";
import collage1 from '@/assets/collage/maris-1.jpeg';
import collage2 from '@/assets/collage/maris-2.jpeg';
import collage3 from '@/assets/collage/maris-3.jpeg';
import ReceptionAndWedding from "@/components/reception";
import Assistence from "@/components/assistence";
import { DB } from '@/assets/DB';
import AsistenceButton from '@/components/asistence-button';
import MediaQuerySupport from '@/components/media-query-support';
import SkyStars from '@/components/sky';

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

export function generateStaticParams() {
  return DB.map((invite) => ({
    id: `${invite.id}`,
  }))
}

export default function Invite({ params }: { params: { id: string } }) {
  const { id } = params;
  const data: invite | any = DB.find((item: invite) => item.id === Number(id))
  
  return (
    <MediaQuerySupport>
      <SkyStars styles={styles.invite}>
        <Header />
        <Hero />
        <CountDown
          date={"Aug 18, 2024 20:00:00"}
          dateString={"18 de Agosto, 2024"}
          targetMessage={'Es hora de alistarse, te esperamos !'}
        />
        <CollageSimple images={photosCollage} />
        <ReceptionAndWedding />
        <Assistence />
        <div className={styles.stickyButton}>
          <AsistenceButton nHost={data['n_personas']} />
        </div>
      </SkyStars>
    </MediaQuerySupport>
  )
}
