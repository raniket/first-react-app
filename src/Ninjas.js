import React, { Component } from 'react';

class Ninja extends Component {
	render() {
		const { ninjas } = this.props;
		console.log(ninjas);
		const ninjasHtmlList = ninjas.map( (ninja) => {
			return (
				<div className="ninja" key={ninja.id}>
          <hr />
					<p>Name : { ninja.name }</p>
					<p>Age : { ninja.age }</p>
					<p>Belt : { ninja.belt }</p>
          <hr />
				</div>
			)
		})
		return (
      <div className="ninja-list">
        { ninjasHtmlList }
      </div>
    )
	}
}

export default Ninja;