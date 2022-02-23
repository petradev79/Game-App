import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './ArticleCard.css';

const ArticleCard: React.FC<{
  title: string;
  icon: IconDefinition;
}> = ({ title, icon }) => {
  return (
    <div className='article-card'>
      <h3>
        <FontAwesomeIcon icon={icon} className='article-icon'></FontAwesomeIcon>
        {title}
      </h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        cupiditate numquam ut quam qui harum asperiores doloremque, nesciunt,
        nobis iure, inventore quaerat quas magni impedit minus vero id error
        doloribus quisquam facere labore accusantium nisi totam facilis!
      </p>
    </div>
  );
};

export default ArticleCard;
