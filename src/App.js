import React, { Component } from 'react';
import BASE_URL from './url';
import './App.css';
import usersInfoCards from './components/usersInfoCards';

class App extends Component {
  state = {usersInfo:[],flashCards:[],showAll:true,cardId:null, side:'front'}

  componentDidMount() {
    fetch(BASE_URL)
      .then( res => res.json() )
      .then( usersInfo => this.setState({ usersInfo }) )
      .catch( err => console.log(err) )
  }

  show = (cardId) => {
    this.setState({ showAll: false, cardId })
  }

  showAll = () => {
  this.setState({ showAll: true, productId: null })
  }

  render() {
    let { usersInfo, flashCards, cardId } = this.state;
    return (
      <div className="App">

      { showAll ?
        <div>
          <usersInfoCards usersInfo={usersInfo} show={this.show} />
          {/*<ProductForm handleSubmit={this.addProduct} />*/}
        </div>
        :
        {/*<Product
          removeProduct={this.removeProduct}
          updateProduct={this.updateProduct}
          showAll={this.showAll}
          id={productId}
        /> */}
      }

      </div>
    );
  }
}

export default App;
