import { PlaceDetailProps } from "./types";

const PlaceDetail: React.FC<PlaceDetailProps> = ({ title, className, children }) => {
  return (
    <div className={className}>
      <h3 className="text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default PlaceDetail