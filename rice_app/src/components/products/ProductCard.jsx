
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard() {
  const cards = [
    { title: "Today's Sales", value: "$53,000", change: 30, icon: '$', isPositive: true },
    { title: "Today's Users", value: "3,200", change: 20, icon: '$', isPositive: true },
    { title: "New Clients", value: "+1,200", change: 20, icon: '$', isPositive: false },

  ];

  const cardStyle = {
    minHeight: '100px',
    borderRadius: '12px',
    padding: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(248, 233, 206, 1)',
  };

  const iconBoxStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#f0f4f8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    fontSize: '1rem',
  };

  return (
    <div className="container my-4">
      <div className="row g-3">
        {cards.map((card, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div style={cardStyle} className="d-flex justify-content-between align-items-center">
              <div>
                <div className='fw-bold'>{card.title}</div>
                <div className="fs-6 ">
                  {card.value}{' '}
                 
                    {`card.isPositive ? +${card.change}% : -${card.change}%`}
                
                </div>
              </div>
              <div style={iconBoxStyle}>
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;

