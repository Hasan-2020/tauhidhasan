import React, { Component } from "react";
import "./App.css";
import Cards from "./Components/Cards";

class App extends Component {
	state = {
		cards: [
			{ name: "Tauhid Hasan", age: 28, heading: "Person" },
			{ name: "Yakup Akgöçmen", age: 25, heading: "Person" },
			{ name: "Yusuf Çelik", age: 32, heading: "Person" },
			{ name: "Ali Tuğay", age: 45, heading: "Person" },
			{ name: "Hızır Ekinci", age: 55, heading: "Person" },
		],
	};

	changeNameHandler = () => {
		this.setState({
			cards: [
				{ name: "Mehedi Hasan", age: 25, heading: "MEHEDI" },
				{ name: "Leyla Çelik", age: 30, heading: "LEYLA" },
				{ name: "Ercan Kartal", age: 40, heading: "ERCAN" },
				{ name: "Hikmet Arslan", age: 50, heading: "HİKMET" },
				{ name: "Mehmet Özyiğit", age: 60, heading: "MEHMET" },
			],
		});
	};

	render() {
		return (
			<div className="Body">
				<button onClick={this.changeNameHandler}>Change Name</button>
				<div className="App">
					<Cards person={this.state.cards[0].heading} name={this.state.cards[0].name} age={this.state.cards[0].age}>
						My hobbies: Travelling
					</Cards>
					<Cards person={this.state.cards[1].heading} name={this.state.cards[1].name} age={this.state.cards[1].age}>
						My hobbies: Cycling
					</Cards>
					<Cards person={this.state.cards[2].heading} name={this.state.cards[2].name} age={this.state.cards[2].age}>
						My hobbies: Paragliding
					</Cards>
					<Cards person={this.state.cards[3].heading} name={this.state.cards[3].name} age={this.state.cards[3].age}>
						My hobbies: Football
					</Cards>
					<Cards person={this.state.cards[4].heading} name={this.state.cards[4].name} age={this.state.cards[4].age}>
						My hobbies: sketching
					</Cards>
				</div>
			</div>
		);
	}
}

export default App;
