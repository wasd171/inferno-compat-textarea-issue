import Inferno from 'inferno-compat'
import React from 'inferno-compat'


class Form extends React.Component {
	render() {
		return (
			<textarea onChange={this.props.handleChange} value={this.props.value}/>
		)
	}
}

class App extends Inferno.Component {
	constructor() {
		super();
		this.state = {value: 'Initial'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	};

	render() {
		return (
			<div>
				<Form handleChange={this.handleChange} value={this.state.value}/>
			</div>
		)
	}
}

export default App;
