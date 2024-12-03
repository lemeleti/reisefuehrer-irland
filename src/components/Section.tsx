import { ReactNode } from 'react';
import Divider from './Divider';

type SectionProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="w-[85vw] mx-auto py-16 bg-white-transparent">
      <div className="max-w-[90%] xl:max-w-[66.666%] mx-auto justify-items-center justify-center">
        <h1 className="font-bold text-3xl text-center">{title}</h1>
        <Divider />
        {children}
      </div>
    </section>
  );
};

export default Section;
