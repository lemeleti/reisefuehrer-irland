// Components
import { GuideSummaryItemProps } from './types';

// Styled components
import { Dot } from './GuideSummaryItem.styled';

const GuideSummaryItem: React.FC<GuideSummaryItemProps> = ({
  id,
  title,
  dotColor,
  children,
}) => {
  const dotBgColor = dotColor.charAt(0) !== '#' ? '#' + dotColor : dotColor;

  return (
    <li id={id} className="justify-items-center my-5 text-center">
      <h3 className="text-xl font-bold mb-2">
        <Dot style={{ backgroundColor: dotBgColor }} />
        {title}
      </h3>
      <p>{children}</p>
    </li>
  );
};

export default GuideSummaryItem;
