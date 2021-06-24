import React from 'react'
import Badge from '../components/Badge'
import '../styles/NewBadge.css'
import Md5 from 'md5'
import BadgeForm from '../components/BadgeForm.js'
import me from '../assets/images/me.jpg'
class NewBadge extends React.Component{

    state={form:{  

        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }}

    handleChange=e=>{


        this.setState({


        form:{

            ...this.state.form,[e.target.name]:e.target.value

            }

        })
        console.log(this.state)

    }

    
    render(){
        
        const email=this.state.form.email
        let hash=0

        
        // if the email box is empty... my photo will load
        if(email=='')hash="6bc16b40952ca1cf49877a510db07b3d"
        else hash=Md5(email)




        return(
            <div>
                
                
                <div className="container">
                    <div className="row">
                        
                    

                        <div className="badge__column column">

                        <Badge 
                        firstName={this.state.form.firstName||"Alejandro"}
                        lastName={this.state.form.lastName||"Pachas"}
                        email={this.state.form.email||"alejandropachas1@gmail.com"}
                        jobTitle={this.state.form.jobTitle||"Frontend Developer"}
                        twitter={this.state.form.twitter||"alejantropper"}


        
                       
                        avatar={
                       
                            
                        // i don't use my gravatar hash on the url because of the low quality of my photo, check it out if you want to see it anyways https://www.gravatar.com/avatar/6bc16b40952ca1cf49877a510db07b3d?d=identicon`
                            hash=="6bc16b40952ca1cf49877a510db07b3d"? `${me}` :`https://www.gravatar.com/avatar/${hash}?d=identicon` 
                        
                        }
                        />


                        </div>
                        <div className="form__column column">

                        <BadgeForm onChange={this.handleChange} data={this.state.form}/>

                        </div>
                    </div>
                
                </div>

            </div>
          

        )

    }


}

export default NewBadge