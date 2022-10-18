import './CardMonth.css';
import $ from 'jquery';
import laranja from '../../resources/img/laranja.jpg';

function CardMonth(props) {
  return (
    <section className='month-card'>
        <h1 className='month-title'>Janeiro</h1>
        <div className='display-center-center'>
          <img src={laranja} className="logo-month"/>
          <p>Janeiro Branco é um alerta sobre a saúde mental</p>
        </div>
    </section>
  );
}

export default CardMonth;
