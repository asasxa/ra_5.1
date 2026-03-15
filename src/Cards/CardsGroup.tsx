import CardsGroupItem, { type CardsGroupItemProps } from './CardsGroupItem';

interface CardsGroupProps extends CardsGroupItemProps {
  id: string
}

function CardsGroup({ cards }: { cards: CardsGroupProps[] }) {
  return (
    <>
      <h2 className="mb-4">Группа карточек</h2>
      <div className="card-group">
        {cards.map(c => (
          <CardsGroupItem key={c.id} image={c.image} title={c.title} text={c.text} latestUpdate={c.latestUpdate} />
        ))}
      </div>
    </>
  );
}

export default CardsGroup;