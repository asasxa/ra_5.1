import Card from './Card';

function HorizontalCard({ image, children }: { image: string, children: React.ReactNode }) {
  return (
    <Card>
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img-fluid rounded-start h-100 object-fit-cover" src={image} alt="Пример изображения" />
        </div>
        <div className="col-md-8">{children}</div>
      </div>
    </Card>
  );
}

export default HorizontalCard;