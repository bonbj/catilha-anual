import './CardMonth.css';
import $ from 'jquery';

function CardMonth(props) {
  return (
    <section className='month-card'>
        <h1 className='month-title'>{props.card.month}</h1>
        <div className='display-center-center'>
          <img src={props.card.img} className="logo-month"/>
          <p>{props.card.textTitle}</p>
        </div>
    </section>
  );
}

export default CardMonth;
