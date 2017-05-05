import React, { Component } from 'react';
import BASE_URL from './url';
import './App.css';
import UsersInfoCards from './components/usersInfoCards';
import IndividualCard from './components/IndividualCard';
import FlashCards from './components/FlashCards';
import FlashcardForm from './components/FlashcardForm';


class App extends Component {
  state = {usersInfo:[],flashCards:[],showAll:true,cardId:null,cardTotal:0, side:'front'}

  // componentDidMount() {
  //   fetch(BASE_URL)
  //     .then( res => res.json() )
  //     .then( usersInfo => this.setState({ usersInfo }) )
  //     .catch( err => console.log(err) )
  // }

  show = (cardId) => {
    this.setState({ showAll: false, cardId })
  }

  showAll = () => {
  this.setState({ showAll: true, cardId: null })
  }

  addCard = (card) =>{
      let { flashCards, cardTotal } = this.state;
      this.setState({flashCards:[...flashCards,card], cardTotal:++cardTotal})
  }


  removeCard = () => {
    let{cardId, flashCards} = this.state;
    this.setState({
      flashCards: flashCards.filter(c => c.cardId !== cardId),
      showAll: true,
      productId: null
    });

  }


  updateCard = (card) => {
    let{cardId}=this.state;
    let flashCards = this.state.flashCards.map( c => {
      if(c.cardId === cardId)
        return card
      return c
    });
    this.setState({flashCards, showAll:true, cardId:null})

  }

  toggleCard = (side) => {
    if (side ==='front') {
      this.setState({side:'back'});
    } else {
      this.setState({side:'front'});
    }

  }

  render() {
    let { usersInfo, flashCards, cardId, showAll, cardTotal } = this.state;
    return (
      <div className="App">

      { showAll ?
        <div>
          {/*<UsersInfoCards usersInfo={usersInfo} show={this.show} />*/}

          <FlashcardForm cardTotal={cardTotal} flashCards={flashCards} handleSubmit={this.addCard}/>
          <FlashCards flashCards={flashCards} show={this.show}/>
          {/*<ProductForm handleSubmit={this.addProduct} />*/}
        </div>
        :
        <IndividualCard
          toggleCard = {this.toggleCard}
          usersInfo = {this.state.usersInfo}
          flashCards = {this.state.flashCards}
          removeCard={this.removeCard}
          updateCard={this.updateCard}
          showAll={this.showAll}
          id={cardId}
          side = {this.state.side}
        />
      }

      </div>
    );
  }
}

export default App;
