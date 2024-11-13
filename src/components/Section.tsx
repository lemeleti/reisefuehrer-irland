import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="w-[85vw] mx-auto py-16 bg-white-transparent">
      <div className="lg:max-w-[66.666%] mx-auto justify-items-center">
        <h1 className="font-bold text-3xl">{title}</h1>
        <hr className="my-6 mx-auto border-[#000] border-2 max-w-[50px] " />
        {children}
      </div>
    </section>
  );
};

export default Section;
