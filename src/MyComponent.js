import React,{ Component }  from 'react';
import PropTypes from 'prop-types'; 

class MyComponent extends Component {

	static defaultProps = {
		name: '기본 이름'
	}

	static propTypes = {
		name:PropTypes.string, //name props 타입을 문자열로 설정
		age:PropTypes.number.isRequired //
	}

	constructor(props){
		super(props)
	}

	state = {
		number:0
	}

    render(){
        return (
        	<div>
	            <h1>MyComponent => {this.props.name}</h1>
	            <p>나이 : {this.props.age}</p>
	            <p>숫자 : {this.state.number}</p>
	            <button onClick={() => {
	            		this.setState({
	            			number:this.state.number + 1
	            		})
	            	}
	            }>더하기</button>

            </div>
        );
    }
}


export default MyComponent;