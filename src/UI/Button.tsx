import './Button.css';

const Button: React.FC<{
  title: string;
  targetURL: string;
  className: string;
}> = ({ title, targetURL, className }) => {
  return (
    <a className={className} href={targetURL} target='_blank'>
      {title}
    </a>
  );
};

export default Button;
