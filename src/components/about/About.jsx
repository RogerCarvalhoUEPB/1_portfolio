
const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SOBRE
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Sobre
            </h1>
          </div>
          <div className="text-slate-500 text-justify">
            <p className="align-baseline">
            O Sertão Maker é um laboratório de inovação e prototipação localizado no IFPB Campus Patos, criado para impulsionar a cultura Maker no sertão paraibano.
            </p>
            <br />
            <p>
            Aberto a alunos, servidores e à comunidade, o espaço promove aprendizado prático, criatividade e colaboração em projetos de ensino, pesquisa e extensão.
            </p>
            <div className="">
              <a
                href="../../assets/Fake Resume.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Saiba mais
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
