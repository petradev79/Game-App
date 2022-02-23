const HeaderTitle: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className='header-title'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeaderTitle;
