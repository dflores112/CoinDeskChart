import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ChartComponent from './ChartComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [], dates: [], live: true, id: 0,
    };
    this.retrieveCurrentPrice = this.retrieveCurrentPrice.bind(this);
    this.ViewStoredPrices = this.ViewStoredPrices.bind(this);
  }

  // Begin interval calls add live prices to chart
  componentDidMount() {
    this.retrieveCurrentPrice();
    const interval = setInterval(() => {
      this.retrieveCurrentPrice();
    }, 60000);
    this.setState({ id: interval });
  }

  // Retrieve current BitCoin pricing and add to chart
  retrieveCurrentPrice() {
    const { prices, dates } = this.state;
    const newPrices = [...prices];
    const newDates = [...dates];
    axios.get('current')
      .then((res) => {
        newPrices.push(res.data[0]);
        newDates.push(res.data[1]);
        this.setState({ dates: newDates, prices: newPrices });
        localStorage.setItem(res.data[1], res.data[0]);
      })
      .catch((err) => console.log(err));
  }

  // Pull stored prices from localstorage or continue live requests
  ViewStoredPrices() {
    const { live, id } = this.state;
    if (live) {
      this.retrieveCurrentPrice();
      const interval = setInterval(() => {
        this.retrieveCurrentPrice();
      }, 60000);
      this.setState({ id: interval });
    } else {
      clearInterval(id);
      const price = [];
      const times = Object.keys(localStorage);
      times.sort();
      times.forEach((time) => price.push(localStorage[time]));
      this.setState({ dates: times, prices: price });
    }
  }

  // Reset chart when user goes live
  resetState() {
    const { live } = this.state;
    this.setState({ dates: [], prices: [], live: !live }, this.ViewStoredPrices);
  }

  render() {
    const { dates, prices, live } = this.state;
    const Saved = 'Saved Prices';
    const GoLive = ' Go Live';
    return (
      <>
        <button onClick={() => this.resetState()}>{live ? Saved : GoLive }</button>
        <ChartComponent dates={dates} prices={prices} />
      </>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
