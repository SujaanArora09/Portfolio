

interface IconProps {
  src: string;
  onClick: () => void;
}

const Icon: React.FC<IconProps> = ({ src, onClick }) => {
  return (
    <img 
      className='max-w-full block m-auto h-full cursor-pointer'
      src={src}
      onClick={onClick}
      alt="icon"
    />
  );
};

export default Icon;
