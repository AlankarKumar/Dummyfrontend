import React,{Component} from 'react';
import Table from './Table';
import Form from './Form';
import Navbar from './Navbar';
import CategoryUnit from './CategoryUnit';
import BusinessRule from './BusinessRule';
import Subcategory from './Subcategory';
import './main.css';

class App extends Component{

    state = {
        'fund_employer_details':[
            {
                'fund_code': '',
                'employer_code': ''
            }
        ],
        'categoryunit': false,
        'funcarea':false,
        'subcategory':false,
        'categoryisclicked':false,
        'subcategoryiscliked':false
    };

    componentDidMount(){
        fetch("http://localhost:4000/AAL")
        .then(response => response.json())
        .then(response => this.setState({...response}));

    }

    handleCategoryClick = event => {
        this.setState({...this.state,'categoryunit':true});
    };

    handlesubcategoryclick = event =>{
        this.setState({...this.state,'categoryisclicked':true});
    }

    handlebusinessclick = event => {
        this.setState({...this.state,'subcategoryiscliked':true});
    }




    removeEmployer = index => {
        this.setState({
            fund_employer_details : this.state.fund_employer_details.filter((placeHolder, i) => {
                return(index !== i);
            })
        });
    };

    handleSubmit= details => {
        this.setState({fund_employer_details:[...this.state.fund_employer_details,details]});
    };
    render(){

        const categoryUnit = this.state.categoryunit === true? <CategoryUnit clickhandler={this.handlesubcategoryclick}/> : null;
        const subcategory = this.state.categoryisclicked === true ?<Subcategory  clickhandler={this.handlebusinessclick}/>:null;
        const businessrule = this.state.subcategoryiscliked === true?<BusinessRule />:null;
        return(
            <div>
            <div className="container">
                <div className="topNav">
                <Navbar />
                </div>
                {categoryUnit}
                {subcategory}
                {businessrule}
                <div className="listofemployer" >
                <Table clickhandler={this.handleCategoryClick}/>
                </div>
                
                

            </div>
            </div>
            
        );
        }
}

export default App;