import React, { Component } from 'react';
import './Form.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Form extends Component {
    constructor(){
        super();

        //initialState
        this.state = {
            name: '',
            last: '',
            email: '',
            phone: '',
            errors: {
                name: false,
                last: false
            },
            open: false,
        };
    }

    handleOnChange = e => {
        const {target: {value,name}} = e;
        
        this.setState({
            [name]: value
        })
        console.log(value) 
    }

    handleOnSubmit = e => {
        e.preventDefault();
        
        const{name,last,email,phone} = this.state;
        this.setState({
            
        })

        this.setState({
            errors:{
                name: name.trim() === '',
                last: last.trim() === '',
            }
        })

        if(name && last)
        {
            const data = {
                name, 
                last, 
                email, 
                phone
            };

            this.setState({
                open: true
            })
            console.log('Data: ', data);
        }
        
        setTimeout(() => {
            this.setState({
                errors:{
                    name: false,
                    last: false,
                },
            }) 
        }, 3000)

    }

  render() {
    return (
        <div className='form'>
            <Popup open={this.state.open} modal nested>
            {close => (
                <div className="modal">
                <button className="close" onClick={() => {
                                    this.setState({
                                        open: false
                                    })
                                    close();
                                }}>
                    &times;
                </button>
                    <div className="header"> <h1>Data</h1> </div>
                        <div className="content">
                            <h1>First Name: <span>{this.state.name}</span></h1>
                            <h1>Last Name: <span>{this.state.last}</span></h1>
                            <h1>Email: <span>{this.state.email}</span></h1>
                            <h1>Phone: <span>{this.state.phone}</span></h1>
                        </div>
                            <button
                                className="button"
                                onClick={() => {
                                    this.setState({
                                        open: false
                                    })
                                    close();
                                }}
                            >
                                Cerrar
                            </button>
                    </div>
                )}
            </Popup>
            <form onSubmit={this.handleOnSubmit}>
                
                <label>First Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.name ? 'error': ''
                        }
                        />
                    {
                        this.state.errors.name
                        && 
                        <div className= 'errorMessage'>Required</div>
                    } 

                <label>Phone: </label>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="+523333333333" 
                        value = {this.state.phone}
                        onChange={this.handleOnChange}
                        />

                <label>Email:</label>
                    <input 
                        type="email" 
                        name="last" 
                        value = {this.state.last}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.last ? 'error': ''
                        }
                    />
                    {
                        this.state.errors.last
                        && 
                        <div className= 'errorMessage'>Required</div>
                    } 



                    
                <label> Mensaje: </label>
                    <input 
                        type="text" 
                        name="email" 
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                        required
                    />
                <button type='submit'>Submit</button>
            </form>
          
        </div>
    )
  }
}