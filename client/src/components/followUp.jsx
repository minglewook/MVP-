import React from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';

export default class FollowUp extends React.Component {
    constructor(props) {
        super(props);
    };

    onClose(e) {
      e.persist()
      if (this.props.onQuit) {
        this.props.onQuit(e);
      }
    };

    render() {
        if(!this.props.showFollowUp) {
            return null;
        } else 
        return (
          <Container>
          <div>{this.props.children}</div>
            <Contents>
                <Ax>
                    <X onClick={e => this.onClose(e)} size={30}/>
                </Ax>
                <Lines>
                  
                <label>When did you follow up?
                  <input type="text" onChange={(e) => {
                    this.props.handleInputChange(e.target.value, 'dateFollowUp')
                  }}></input>
                </label>
               
                
                <label>Notes about follow up :  
                  <input type="text" onChange={(e) => {
                    this.props.handleInputChange(e.target.value, 'followUp')
                  }}></input>
                </label>
                <button onClick={(e) => {
                  //TODO
                  //access id of button clicked.
                  this.props.handleUpdate(this.props.current)
                  this.onClose(e)
                  }}>Update Company!</button>
            
                </Lines>
            </Contents>
        </Container>
          );
        
    }
  }

  const Container = styled.div`
    position: fixed;
    width: 568px;
    height: 363px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    align-items: center;
    backface-visibility: hidden;
    background: white;
    border: 1px solid #ccc;
    -webkit-box-shadow: -1px 1px 5000px 900px rgba(0,0,0,0.75);
  `;

  const Contents = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Ax = styled.span`
    display: inline-block;
    margin-top: 25px;
    margin-left: 30px;
    cursor: pointer;
    width: 30px;
  `

  

 

    const Line1 = styled.div`
        border-bottom-width: 1px;
        border-bottom-color: #EBEBEB;
        border-bottom-style: solid;
        width: 37%;
        margin-bottom: 7px;
        margin-right: 15px;
    `;

    const Line2 = styled.div`
        border-bottom-width: 1px;
        border-bottom-color: #EBEBEB;
        border-bottom-style: solid;
        width: 37%;
        margin-bottom: 7px;
        margin-left: 15px;
    `;

    const Lines = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const Or = styled.span`
        overflow-wrap: break-word;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.28571em;
        color: rgb(118, 118, 118);
        margin: 0px;
        padding-top: 30px;
    `

  

    const Login2 = styled.div`
        margin-left: 6px;
        display: inline-block;
        word-wrap: break-word;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.375em;
        color: #484848;
        color: #008489;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
        text-decoration: none;
        font-weight: 450;
    `;