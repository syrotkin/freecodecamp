// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 


// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// in CodePen, just specify which JS libraries you need in the 'Settings' 
// Changing settings is equivalent to:
//import React from 'react';
//import ReactDOM from 'react-dom';


// react
const apiUri = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.fetchNewQuote = this.fetchNewQuote.bind(this);
    this.fetchAllQuotes = this.fetchAllQuotes.bind(this);
  }
    
  fetchNewQuote() {
    this.props.dispatchFetchNewQuote();
  }
  
  componentDidMount() {
    this.fetchAllQuotes();
  }
  
  fetchAllQuotes() {
    console.log("in fetch all quotes.");
    this.props.dispatchFetchAllQuotes();
  }
    
  render() {
    return (
      <div id='quote-box' className='quoteBoxClass'>
        <div id='text' className="textClass" >{this.props.quote}</div>
        <AuthorElement author={this.props.author} />
        <button id='new-quote' className='newQuoteClass' onClick={this.fetchNewQuote}>New Quote</button>
        <a id='tweet-quote' className="tweetClass" href={'https://twitter.com/intent/tweet?text="' +  this.props.quote + '"'}>Tweet Quote</a>
      </div>
    );
  }    
};

// example of "function component", not defining a separate class for it.
const AuthorElement = (props) => {
  return (
    <div id='author' className="authorClass">{props.author}
    </div>
  );
};


// redux:
const FETCH_NEW = 'FETCH_NEW';
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

// action creators
const fetchNewQuoteCreator = (data) => {
  return {
    type: FETCH_NEW,
    data: data
  };
};

const requestingData = () => {
  return {
    type: REQUESTING_DATA 
  };
};

const receivedData = (data) => {
  return {
    type: RECEIVED_DATA, 
    data: data
  };
}

function reduxGetQuoteIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function reduxFetchNewQuote(quotes) {
    let index = reduxGetQuoteIndex(quotes);
    let quote = quotes[index].quote;
    let author = quotes[index].author;
    return({
      quote: quote,
      author: author
    });
  }


const defaultState = {quotes: [], 
                              quote: '', 
                              author: ''};

// This encapsulates asynchronous call
const fetchAllQuotesAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
   fetch(apiUri)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          let quotes = responseJson.quotes;    
          let index = reduxGetQuoteIndex(quotes);       
          console.log(quotes.length);
          let data = { quotes: quotes,
                       quote: quotes[index].quote,
                       author: quotes[index].author};
          dispatch(receivedData(data));
    });
  };
};

const rootReducer = (state = defaultState, action) => { 
  switch(action.type) {
    case FETCH_NEW:
      // Important: not calling API in reducer. Instead, this is done in "mapDispatchToProps" 
      //let quote = reduxFetchNewQuote(state);
      return Object.assign({}, state, {quote: action.data.quote, 
                                       author: action.data.author});
    // there is no case for FETCH_ALL. It is split into REQUESTING and RECEIVED
      
     case REQUESTING_DATA:
      // when requesting, quotes are empty
      return Object.assign({}, state, { quotes: [] });
    case RECEIVED_DATA:
      return Object.assign({}, state, action.data);
    default:
      return state;
  } 
};

const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk.default));


// react-redux:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchFetchNewQuote: () => {
        var quotes = store.getState().quotes;
        let quoteAndAuthor = reduxFetchNewQuote(quotes);
        dispatch(fetchNewQuoteCreator(quoteAndAuthor));
      },
      dispatchFetchAllQuotes: () => {
        // fetchAllQuotesAsync encapsulates async call
        dispatch(fetchAllQuotesAsync());
      }
    };
};

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes, 
    quote: state.quote,
    author: state.author
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppWrapper/>,
  document.getElementById('wrapper')
);