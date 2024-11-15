const Divider: React.FC<{ large?: boolean }> = ({ large }) => {
  const width = large ? 'max-w-full' : ' max-w-[50px]';
  return <hr className={`my-6 mx-auto border-[#000] border-2 ${width}`} />;
};

export default Divider;
