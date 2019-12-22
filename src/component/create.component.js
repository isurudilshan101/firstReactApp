import React ,{Component} from 'react';
export default class Create extends Component
{


constructor (props)
{
    
     super(props);
     this.onChangePersonName=this.onChangePersonName.bind(this);
     this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
     this.onChangeNICNumber=this.onChangeNICNumber.bind(this);
     this.onSubmit=this.onSubmit.bind(this);

     this.state={
         Person_name: '',
         business_name: '',
         business_nic_number: ''
     }
   
}


    onChangePersonName(e){
        this.setState({
            person_name: e.terget.value
        });
    }

    onChangeBusinessName(e){
        this.setState({
            business_name: e.terget.value
        });
    }

    onChangeNICNumber(e){
        this.setState({
           business_nic_number: e.terget.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`the values are ${this.state.person_name}, ${this.state.business_name} ,and ${this.state.business_nic_number}`)
        this.setState({
            person_name: '',
            business_name: '',
            business_nic_number: ''


        })
    }



    render()
    {
        return(
            <React.Fragment>
            <div style={{marginTop:10}}>
            <h3>Add new Business</h3>
            </div>   
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <lable>Add Person Name :</lable>
                    <input type="text" className="form-control"
                                        value={this.state.person_name}
                                        onChange={this.onChangePersonName}    
                   />
                 </div>

                <div className="form-group">
                    <lable>Add Business Name :</lable>
                    <input type="text" className="form-control"
                            value={this.state.business_name}
                            onChange={this.onChangeBusinessName}
                    />
                </div>

                <div className="form-group">
                    <lable>Add NIC number :</lable>
                    <input type="text" className="form-control"
                            value={this.state.business_nic_number}
                            onChange={this.onChangeNICNumber}
                    />
                </div>

                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"></input>
                </div>
              </form>
              </React.Fragment>
        );
    }

}
