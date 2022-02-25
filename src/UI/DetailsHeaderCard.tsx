import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import './DetailsHeaderCard.css';

const DetailsHeaderCard: React.FC<{
  title: string;
  data: string;
  icon: IconDefinition;
}> = ({ title, data, icon }) => {
  return (
    <div className='details-header-card'>
      <h4>{title}</h4>
      <p>
        <FontAwesomeIcon icon={icon} className='details-icon' />
        {data}
      </p>
    </div>
  );
};

export default DetailsHeaderCard;
