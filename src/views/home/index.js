import React, { Fragment,Component } from "react";
import Box from "../../components/Box";
import Flex, { FlexItem } from "../../components/FlexGrid";
import Btn from "../../components/Btn"
import Drawer2 from "../../components/Drawe2";
//Navigation
import Toolbar, { ToolbarItem, ToolbarTitle } from 'appRoot/components/Toolbar';
import Icon from "../../components/Icon";
import Form, {  Radio, Select } from 'appRoot/components/Form';
import axios from "axios";



const x=[

  {
    icon:"dashboard",
    title:"dashboard",

} ,
{
  icon:"assignment_turned_in",
  title:"Assignment",

},
{
  icon:"person",
  title:"Doctor",
  fun:"()=>{}"

} ,
{
  icon:"person",
  title:"Peshant",
  
} ,
{
  icon:"person",
  title:"Staff",
 
  
} ,
{
  icon:"meeting_room",
  title:"Rooms",

} ,
{
  icon:"location_city",
  title:"archive",

} ,
{
  icon:"settings",
  title:"setting",

} 

]
class HomeView extends Component {

  state = {
    persons: [],
    selectedPerson: {},
    formState:{}
  
  };
  onButtonClick = isStyle => () => {
    if (isStyle === `filter`) {
      const sort1 = person.filter(person => person.doctor === "yes");
    
      return this.setState(sort1);
     
    } else if (isStyle === `sort`) {
      const sort2 = person.filter(person => person.staff === "yes");
      return this.setState(sort2);
      
    } else {
      const sort3 = person.filter(person => person.peshant === "yes");
      
      return this.setState(sort3);
      
    }
   
  };
  buttonClick = person => e => {
    console.log(person);
    this.setState({ selectedPerson: person });
    this.props.history.push(`/user/${person.id}`)
  };

  componentDidMount() {
    axios
      .get(`./data.json`)
      .then(response => response.data)
      .then(persons => this.setState({ persons }));
  }
 handleChange = (event) => {
    let el = event.target;
    let vals;
  
    if (el.type === 'checkbox') {
      const clnForm = { ...formState };
      let tmpVals;
      if (clnForm[el.name]) {
        tmpVals = { ...clnForm[el.name], [`${el.value}`]: el.checked, };
      } else {
        clnForm[el.name] = {};
        tmpVals = { ...clnForm[el.name], [`${el.value}`]: el.checked, };
      }
  
      vals = { ...formState, [`${el.name}`]: tmpVals, };
    } else {
      vals = { ...formState, [`${el.name}`]: el.value, };
    }
  
    this.state.FormState(vals);
  }
 
  
  render(){
  return (
    <Fragment>
        
      <Toolbar bgColor ="rgb(106, 100, 169)">
        
        <ToolbarTitle title="" />
        <ToolbarItem icon="notifications" title="Notifications"  />
        <ToolbarItem icon="more_vert" title="More Menu" />
      </Toolbar>
      <Drawer2 opened={true} drawerMenu={x}  onClick={this.onButtonClick}/>     
    <Box  className="w3-main" style={{ paddingTop: 62, paddingBottom: 72,marginLeft:200,marginRight:60 }}>
      <Box className="color" style={{width:"100%",hight:52}}>
         <Form  onDone={() => { console.log(this.state.formState) }} className="margin" > 
            <Select name="gender" label="Select Gender"
            options={
              [
                { label: 'Male', value: "male" },
                { label: 'Female', value: "female" },
                { label: 'Other', value: "other" }
              ]
            }
            required
            value={this.state.formState.gender} onChange={this.handleChange}
          />
          <Radio  
            inline={true}
            name=""
            label=""
            options={
              [
                { label: 'Morning', value: "morning" },
                { label: 'Evening', value: "evening" },
                { label: 'Night', value: "night" }
              ]
            }           
            
            selectedValue={this.state.formState.shift}
            onChange={this.handleChange}
          />         
        </Form>
     
     
      </Box>
<Flex dir="row" justify="space-arounnd">
{
  this.state.persons.map((person, index) => (
  <Btn key={index} >
    <FlexItem bgColor="rgb(106, 100, 169)"  
    className="textCenter padding  " onClick={this.buttonClick(person)} >
       <img src={`${person.img1}`} alt="" className="avatar " />
                                    <h5> Name-{person.name}</h5>
                                    
                                    
                                    <h5>visit Date-{person.visitdate}</h5>
                                    <h5>last Date-{person.lastdate}</h5>
    </FlexItem>
  </Btn>
))}
</Flex>


      
      
                       
                       
      
      </Box>    
      }
    </Fragment>


  );
                  }

}


export default HomeView;
