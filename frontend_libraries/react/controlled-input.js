class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // binding, so that 'this' is available to handleChange
      this.handleChange = this.handleChange.bind(this);
    }

    // a handler method
    handleChange(event) {
      this.setState({input: event.target.value}); 
    }
    // 1. The user types the text in the input box.
    // 2. onChange event is triggered and handler (handleChange) is invoked.
    // 3. handleChange sets the state of the component
    // 4. The component sets the value of the <input> element to its state 
    //    (this.state.input). So, the <input> element displays the value
    //    defined in the component state.
    // 5. The <p> element also displays the value defined in the component state.
    render() {
      return (
        <div>
          { /* the component state is the source of truth for <input> and <p> */}
          <input value={this.state.input} onChange={this.handleChange} />
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };