import Image from 'next/image';
import treeSvg from '../../assets/principal-tree-wedding-bg0.svg'
import Information from '../information';

type infoWedding = {
  city: string,
  weddingPlace: string,
  weddingTime: string,
  receptionPlace: string,
  receptionTime: string,
}

export default function ReceptionAndWedding({
  city,
  weddingTime,
  weddingPlace,
  receptionPlace,
  receptionTime
}: infoWedding) {
  return (
    <section>
      <h2>{city}</h2>
      
      <Information
        title={weddingTime}
        paragraph1={weddingPlace}
        paragraph2={'Ceremonia'}
      />

      <Information
        title={receptionTime}
        paragraph1={receptionPlace}
        paragraph2={'Recepción'}
      />

      <Image
        src={treeSvg}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </section>
  )
}
