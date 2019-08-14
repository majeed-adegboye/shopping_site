import React, { Component } from 'react'

import {ButtonContainer} from '../components/button';
import { connect } from 'react-redux'

class SuggestionComment extends Component {
   state ={
subject:'',
comment:''
   }
   handleChange = (e) => {
      this.setState({
          [e.target.id]:e.target.value
      })
   }

   handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
}
   

    render() {
        return (

            <div className="container text-white">
                
                <form onSubmit={this.handleSubmit} className="white">
            
                    <h5 className="grey-text text-darken-3">Comment and Suggestion</h5>
                    <div className="input-field">
                       <label htmlFor="subject">Subject</label> 
                       <input type="text" id="subject" onChange={this.handleChange}/>
                    </div>
                    <div><p></p>
                    <p></p>
                    <p></p>
                    </div>
                    <div className="input-field">
                       <label htmlFor="comment">Comment/Suggestion</label> 
                       <textarea id= "comment" cols="35" rows="8" className="materialize-textarea" onChange={this.handleChange}>
                       </textarea>
                    </div>
                    <div><p></p></div>
                    
                    <div className="input-feild">
                    <ButtonContainer>
                
                    Submit
                  
                </ButtonContainer>
                   
                    </div>
                </form>
            </div>
     );
    }
                    
                
    }

const mapDispatchToProps = dispatch => {
    return {
        SuggestionComment: (project) => dispatch(SuggestionComment(project))
    }
  }
  
  export default connect(null, mapDispatchToProps)(SuggestionComment)