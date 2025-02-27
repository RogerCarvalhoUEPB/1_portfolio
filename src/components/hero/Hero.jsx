
import personImg from "../../assets/qrcodeBranco.svg";
import whatsappImg from "../../assets/whatsapp.svg";
import instagramImg from "../../assets/instagram.svg";
import mailImg from "../../assets/envelope.svg";
import {InstagramLink, WhatsappLink, MailLink} from "../../Data/Links.jsx";

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-slate-800 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">Bem-vindo ao,</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                Sertão Maker
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Laboratório de prototipação
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
              Um espaço colaborativo que estimula a experimentação e o aprendizado contínuo através da criação. 
              </p><p>
              Localizado no Bloco 2 do IFPB
              </p>
              {/* <a
                href="mailto:labmaker.pt@ifpb.edu.br"
                className="inline-block primary-btn !my-3"
              >
                Entre em contato
              </a> */}
              <div className="flex justify-center gap-3">
                <a href={WhatsappLink} target="blank"><img
              src={whatsappImg}
              className="w-16 md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            /></a>
            <a href={InstagramLink} target="blank"><img
              src={instagramImg}
              className="w-16 md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            /></a>
            <a href={MailLink}><img
              src={mailImg}
              className="w-16 md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            /></a>
              </div>
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
          <div>
            <img
              src={personImg}
              className="w-60 md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
