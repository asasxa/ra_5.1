import cards from './cards.json';
import Card from './Cards/Card';
import CardsGroup from './Cards/CardsGroup';
import HorizontalCard from './Cards/HorizontalCard';

function App() {
  const initialImage = (
    'https://raw.githubusercontent.com/Maksim-Gavr-04/ra_5_cards/main/src/assets/mathias-reding-ACQmG9zn1EY-unsplash.jpg'
  );
  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-4">
          <Card image={initialImage}>
            <Card.Body>
              <h5 className="card-title">Заголовок карточки</h5>
              <p className="card-text">
                Это пример текста карточки с изображением. Здесь можно разместить описание или любую другую информацию.
              </p>
              <a className="btn btn-primary" href="/#">Перейти</a>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <Card.Body>
              <h5 className="card-title">Текстовая карточка</h5>
              <p className="card-text">Пример карточки без изображения, содержащей только текстовое содержимое.</p>
              <a className="btn btn-outline-primary" href="/#">Подробнее</a>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <Card.Header>Заголовок</Card.Header>
            <Card.Body>
              <h5 className="card-title">Особая карточка</h5>
              <p className="card-text">Карточка с заголовком и нижним колонтитулом.</p>
            </Card.Body>
            <Card.Footer className="text-muted">2 дня назад</Card.Footer>
          </Card>
        </div>

        <div className="col-md-4">
          <Card className="text-white bg-primary">
            <Card.Body>
              <h5 className="card-title">Цветная карточка</h5>
              <p className="card-text">Пример карточки с цветным фоном и белым текстом.</p>
              <a className="btn btn-light" href="/#">Действие</a>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-8">
          <HorizontalCard image={initialImage}>
            <Card.Body>
              <h5 className="card-title">Горизонтальная карточка</h5>
              <p className="card-text">
                Это более широкая карточка с поддерживающим текстом ниже
                как естественный переход к дополнительному содержимому.
              </p>
              <p className="card-text">
                <small className="text-muted">Последнее обновление 3 минуты назад</small>
              </p>
            </Card.Body>
          </HorizontalCard>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <CardsGroup cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;