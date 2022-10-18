import './App.css';
import $ from 'jquery';
import CardMonth from '../../components/CardMonth/CardMonth';
import laranja from '../../resources/img/laranja.jpg';

function App() {

  const months = [
    {
      img: laranja,
      month: 'Janeiro',
      textTitle: 'Janeiro Branco é um alerta sobre a saúde mental'
    },
    {
      img: laranja,
      month: 'Fevereiro',
      textTitle: 'O Fevereiro Laranja, por sua vez, conscientiza sobre a leucemia.'
    },
    {
      img: laranja,
      month: 'Março',
      textTitle: 'O Março Azul traz o debate sobre a prevenção ao câncer colorretal.'
    },
    {
      img: laranja,
      month: 'Abril',
      textTitle: 'Abril Verde significa a conscientização sobre a importância da segurança no trabalho.'
    },
    {
      img: laranja,
      month: 'Maio',
      textTitle: 'O Maio Amarelo reacende o debate sobre a prevenção de acidentes de trânsito.'
    },
    {
      img: laranja,
      month: 'Junho',
      textTitle: 'Vermelho é a cor comemorativa do mês de junho sobre a importância da doação de sangue.'
    },
    {
      img: laranja,
      month: 'Julho',
      textTitle: 'O Julho Amarelo traz à tona a conscientização sobre as hepatites virais.'
    },
    {
      img: laranja,
      month: 'Agosto',
      textTitle: 'O Agosto Dourado é o mês de informação sobre o aleitamento materno.'
    },
    {
      img: laranja,
      month: 'Setembro',
      textTitle: 'Verde é a cor do mês de setembro para a conscientização sobre a doação de órgãos.'
    },
    {
      img: laranja,
      month: 'Outubro',
      textTitle: 'O Outubro Rosa é dedicado à conscientização sobre o câncer de mama.'
    },
    {
      img: laranja,
      month: 'Dezembro',
      textTitle: 'O Dezembro Vermelho ressalta a importância da prevenção contra a AIDS.'
    },
  ];

  return (
    <>
      {months.map((month)=> <CardMonth card={month}></CardMonth>)}
    </>
  );
}

export default App;
