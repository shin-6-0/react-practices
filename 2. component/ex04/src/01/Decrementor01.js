import React,{Component} from 'react';

export default class extends Component{
  constructor(props){
    super(props);

    this.state={
      val:this.props.begin,
      val2:20,
      val3:30
    }
  }

  render(){
    return (
      <div>
          <button onClick={e => {
              console.log("감소"+this.state.val);

              // this.val += 1;
              // console.log(this.val);
              // this.render();
              this.setState({
                  val: this.state.val - this.props.step
              });
          }}>
              <strong>-</strong>
          </button>
          {' '}
          <span>
          {
              // this.val
              this.state.val
          }
          </span> 
      </div>
  );
  }
}