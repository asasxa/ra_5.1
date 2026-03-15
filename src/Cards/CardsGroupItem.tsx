import Card from './Card';

export interface CardsGroupItemProps {
  image: string,
  title: string,
  text: string,
  latestUpdate: string
}

function CardsGroupItem({ image, title, text, latestUpdate }: CardsGroupItemProps) {
  return (
    <Card classNameForImage="card-img-top" image={image}>
      <Card.Body>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">
          <small className="text-muted">Последнее обновление {latestUpdate} назад</small>
        </p>
      </Card.Body>
    </Card>
  );
}

export default CardsGroupItem;