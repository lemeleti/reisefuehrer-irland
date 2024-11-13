import { ReactNode } from 'react';
import styled from 'styled-components';

type GuideSummaryItemProps = {
  title: string;
  dotColor: string;
  children?: ReactNode;
};

const Dot = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const GuideSummaryItem: React.FC<GuideSummaryItemProps> = ({
  title,
  dotColor,
  children,
}) => {
  const dotBgColor = dotColor.charAt(0) !== '#' ? '#' + dotColor : dotColor;

  return (
    <li className="justify-items-center my-5 text-center">
      <h3 className="text-xl font-bold mb-2">
        <Dot style={{ backgroundColor: dotBgColor }} />
        {title}
      </h3>
      <p>{children}</p>
    </li>
  );
};

export default GuideSummaryItem;
