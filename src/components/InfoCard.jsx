import { Carousel } from 'antd';
import { Badge, Box, HStack, Image } from "@chakra-ui/react";
import { noticias } from "../Data/Noticias";

export default function InfoCard() {
    const cardItem = noticias.map((noticia, index) => (
        <Box className="w-full bg-secondary dark:bg-gray-900 dark:text-white "key={index} w="100%" overflow="hidden"> {/* O Box agora ocupa 100% da largura */}
            <HStack spacing={4} w="100%"> {/* Usando HStack para alinhar lado a lado */}
                <Image
                    objectFit="cover"
                    w="50%" // Ajuste a largura da imagem para 50% ou conforme necessário
                    h="auto" // Ajuste a altura conforme necessário
                    src={noticia.imagem}
                    alt={noticia.titulo}
                />
                <Box flex="1" p={4}> {/* O Box ocupa o restante do espaço */}
                    <Box>
                        <h2>{noticia.titulo}</h2>
                        <p>{noticia.descricao}</p>
                        <HStack mt="0">
                            <Badge>{noticia.badge}</Badge>
                        </HStack>
                    </Box>
                    <Box mt={4}>
                        <a href="/" className="inline-block primary-btn !my-3">
                            Saiba mais
                        </a>
                    </Box>
                </Box>
            </HStack>
        </Box>
    ));

    return (
        <Carousel autoplay autoplaySpeed={9000}>
            {cardItem}
        </Carousel>
    );
}