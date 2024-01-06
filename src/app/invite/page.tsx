import CollageSimple from "@/components/collage-simple";
import CountDown from "@/components/count-down";
import Header from "@/components/header";
import Hero from "@/components/hero";
import collage1 from '../../assets/collage/collage-1.jpeg';
import collage2 from '../../assets/collage/collage-2.jpeg';
import collage3 from '../../assets/collage/collage-3.jpeg';
import ReceptionAndWedding from "@/components/reception";

const photosCollage = [
  collage1,
  collage2,
  collage3
]

const weddingInfo = {
  city: 'Cucuta, Co.',
  weddingPlace: 'Inciamos en la Iglesia Sagrado Corazón de Jesús, comparte con nosotros este momento',
  weddingTime: '10:00AM',
  receptionPlace: 'En este día, comparte con nosotros en el Restaurante EPICCO',
  receptionTime: '1:00PM',
}

export default function Invite() {
  return (
    <>
      <Header />
      <Hero />
      <CountDown
        date={"Feb 24, 2024 10:00:00"}
        targetMessage={'Es hora de alistarse, te esperamos !'}
      />
      <CollageSimple images={photosCollage} />
      <ReceptionAndWedding {...weddingInfo} />
    </>
  )
}
