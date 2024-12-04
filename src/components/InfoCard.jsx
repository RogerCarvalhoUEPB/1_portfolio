import { Card, Carousel } from 'antd';
const { Meta } = Card;
import {noticias} from "../Data/Noticias";
export default function InfoCard() {

    const cardItem = noticias.map(noticias => 
    <>
    <Card key={noticias.titulo}
    hoverable
    className=' max-h-96'
    cover={<img alt="example" src= {noticias.imagem} />}
  >
    <Meta title={noticias.titulo} description={noticias.descricao} />
  </Card>
    
    </>);
  return(
    <Carousel autoplay autoplaySpeed={5000}>
        {cardItem}
    </Carousel>
  );
}
