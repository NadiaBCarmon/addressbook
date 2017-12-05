import React from 'react';

	class List extends React.Component { 
		render() {
		if(this.props.addresses) {
      var listAddress =
      <div className='box box2 shadow1'>
      	<h3>{ this.props.addresses }</h3>
      	</div>;
     } else {
     	var listNewAddress =
     	<div className="box box1 shadow1">
     	<h3>{this.props.addresses}</h3>
     </div>;
 	}

    return (
        <div>
        { listNewAddress }
        { listAddress }
        </div>
    )
		}
	}

export default List;