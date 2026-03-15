interface CardProps {
  className?: string,
  classNameForImage?: string,
  image?: string,
  children: React.ReactNode
}

function Card({ className, classNameForImage, image, children }: CardProps) {
  return (
    <div className={'card' + `${className ? ' ' + className : ''}`}>
      {image && <img className={classNameForImage} src={image} alt="Пример изображения" />}
      {children}
    </div>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="card-header">{children}</div>;
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-body">{children}</div>;
}

function CardFooter({ className, children }: { className?: string, children: React.ReactNode }) {
  return <div className={'card-footer' + `${className ? ' ' + className : ''}`}>{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;