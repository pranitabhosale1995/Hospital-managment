import React,{useEffect,useState} from "react";
import axios from "axios";
import Flex, { FlexItem } from "../../components/FlexGrid";

const Abc = props => {
  const {params } = props.match;

const [ user, setUser]=useState({});



  useEffect(()=>{
    axios.get("/data.json")
    .then(response => response.data)
  
    
    .then(data => data.find(data =>data.id == params.id))
      .then((asd)=>{
setUser(asd)
      })
        



  },[])


  





  return (
    <Flex  dir="row" justify="space-arounnd">
      <FlexItem bgColor="rgb(106, 100, 169)"  
    className="textCenter padding">
      
      <img src={`${user.img1}`} alt="" className="avatar " />
      <br/>
      <h6>NAME-{user.name}</h6>
      <h5>visit Date-{user.visitdate}</h5>
       <h5>last Date-{user.lastdate}</h5>
       <h5> STETUS-{user.stetus}</h5>
       <h5>ORGAN DONER-{user.organdonet}</h5>
       <h5>CONDITION-{user.Medicalcondition}</h5>
       <h5>DATE OF BIRTH-{user.dateofbirth0}</h5>
       <h5>NOTE-{user.medicalNote}</h5>
       <h5>bloodGroup-{user.bloodGroup}</h5>
       <h5>WEIGHT-{user.weight}</h5>
       <h5>CONTACT NO-{user.contactNo}</h5>

      </FlexItem>
      <FlexItem bgColor="rgb(106, 100, 169)">
      <img src={`${user.img1}`} alt="" style={{width:500}} />
       </FlexItem>
      
      
    </Flex>

  );
};

export default Abc;
