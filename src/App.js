import React, { Component } from 'react';
import BASE_URL from './url';
import './App.css';
import UsersInfoCards from './components/usersInfoCards';
import IndividualCard from './components/IndividualCard';
import FlashCards from './components/FlashCards';
import FlashcardForm from './components/FlashcardForm';


class App extends Component {
  state = {usersInfo:[],flashCards:[],showAll:true,cardId:null,cardTotal:0, side:'front', ifUser:false}

  componentDidMount() {
    fetch(BASE_URL)
      .then( res => res.json() )
      .then( usersInfo => this.setState({ usersInfo }) )
      .catch( err => console.log(err) )
  }

  show = (cardId, ifUser) => {
    this.setState({ showAll: false, cardId })
    if (ifUser)
      this.setState({ifUser: true})
  }

  showAll = () => {
  this.setState({ showAll: true, cardId: null, ifUser:false })
  }

  addCard = (card, ifUser) =>{
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

  updateUserInfo = (card) => {
    let { cardId } = this.state;
    fetch(`${BASE_URL}/${cardId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(card)
    }).then( res => res.json() )
      .then( u => {
        let usersInfo = this.state.usersInfo.map( uInfo => {
          if (uInfo.id === cardId)
            return u
          return uInfo
        });
        this.setState({ usersInfo, showAll: true, cardId: null, ifUser:false });
      })
  }


  updateCard = (card) => {
    let{cardId}=this.state;
    let flashCards = this.state.flashCards.map( c => {
      if(c.cardId === cardId)
        return card
      return c
    });
    this.setState({flashCards, showAll:true, cardId:null, ifUser:false })

  }

  toggleCard = (side) => {
    if (side ==='front') {
      this.setState({side:'back'});
    } else {
      this.setState({side:'front'});
    }

  }

  render() {
    let { usersInfo, flashCards, cardId, showAll, cardTotal, ifUser, side } = this.state;
    return (
      <div className="App">

      { showAll ?
        <div className = 'center'>


          <FlashcardForm cardTotal={cardTotal} flashCards={flashCards} usersInfo={usersInfo} ifUser={ifUser} handleSubmit={this.addCard}/>
          <FlashCards flashCards={flashCards} show={this.show}/>
          <UsersInfoCards usersInfo={usersInfo} show={this.show} />
          {/*<ProductForm handleSubmit={this.addProduct} />*/}
        </div>
        :
        <IndividualCard
          toggleCard = {this.toggleCard}
          side = {side}
          usersInfo = {usersInfo}
          flashCards = {flashCards}
          showAll={this.showAll}
          removeCard={this.removeCard}
          updateCard={this.updateCard}
          id={cardId}
          ifUser={ifUser}
          updateUserInfo={this.updateUserInfo}
        />
      }

      </div>
    );
  }
}

export default App;
