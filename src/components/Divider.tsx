import { twMerge } from 'tailwind-merge';

const Divider: React.FC<{ large?: boolean; className?: string }> = ({
  large,
  className,
}) => {
  const width = large ? 'max-w-full' : ' max-w-[50px]';
  return (
    <hr
      className={twMerge(
        `my-6 mx-auto border-[#000] border-2 ${width}`,
        className,
      )}
    />
  );
};

export default Divider;
