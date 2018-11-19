import React,{Component} from 'react';

class Form extends Component{
    state ={
        'fund_code':'',
        'employer_code':''
    };

    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    };

    submitForm = () =>{
        this.props.handleSubmit(this.state);
        this.setState({'fund_code':'',
        'employer_code':''})

    };

    render(){

        const {fund_Code,employer_Code} = this.state;

        return(
            <form >
                <label>Fund_Code</label>
                <input
                type="text"
                name="fund_code"
                value={fund_Code}
                onChange={this.handleChange}
                />
                <label>Employer_Code</label>
                <input 
                type="text"
                name="employer_code"
                value={employer_Code}
                onChange={this.handleChange}
                />
                <input 
                type="button"
                value="submit"
                onClick={this.submitForm}
                />
            </form>
        );
    }
}

export default Form;