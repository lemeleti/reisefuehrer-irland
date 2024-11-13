const LandingPage: React.FC = () => {
  const textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';

  return (
    <main className="justify-self-center mx-auto flex flex-col justify-center text-center text-white font-bold">
      <h1
        className="text-[2rem] md:text-[3rem] lg:text-[4rem] uppercase"
        style={{ textShadow: textShadow }}
      >
        Interaktive Homepage &uuml;ber Dublin
      </h1>
      <h2
        className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]"
        style={{ textShadow: textShadow }}
      >
        Spazierg&auml;nge und Besuchstipps für junge Erwachsene
      </h2>
      <div className="portrait:mt-12 landscape:mt-9">
        <a
          href="#"
          className="inline-block uppercase px-8 py-4 rounded-[300px] bg-[#868e96]"
        >
          Start
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
