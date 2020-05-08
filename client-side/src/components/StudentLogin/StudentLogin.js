import React from 'react';
import { Typography, Button, Form, Input } from 'antd';

const { Title } = Typography;


const studentLogin = () => {
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto', textAlign: 'left' }}>
            <div style={{ marginLeft:'140px', marginBottom: '2rem' }}>
                <Title level={1}>Add your details</Title>
            </div>

            <Form onSubmit>

                <br />
                <br />


                <div className='row'>
                    <div className='col-sm-5'> <label> Username:</label>   <Input onChange value /> </div>
                    <div className='col-sm-5'> <label> Password:</label>   <Input onChange value /> </div>
                </div>
                <br />
                <br />
                <label>Email:</label>
                <div className='row'>
               <div className="col-sm-10"> <Input onChange value /></div>
                </div>
                <br />
                <br />
                <br />
                <h5>Account details:</h5>
                <div className='row'>
                    <div className='col-sm-5'> <label> Holder of card:</label>   <Input onChange value /> </div>
                    <div className='col-sm-5'> <label> Number of card:</label>   <Input type="number" onChange value /> </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-sm-5'> <label> Expiration date:</label>   <Input type="number" onChange value /> </div>
                    <div className='col-sm-5'> <label> cvv code:</label>   <Input type ="number" onChange value /> </div>
                </div>

                <br />
                <br />
                <Button style={{width:"150px" , marginLeft:"210px"}} onClick>
                    Login
                </Button>
            </Form>
            
        </div>
    )

}
export default studentLogin;