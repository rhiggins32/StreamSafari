import React from 'react'
import { connect } from 'react-redux'
import {signIn, signOut } from '../actions'


class GoogleAuth extends React.Component {
   

    componentDidMount() {
        //anytime component is loaded it will load the client portion of the lib, need a callback to get it when it's done
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '534000721445-k4kgsvej6p86bjjviesjclv5eh1od0nj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //gets a reference to set state 
                this.auth = window.gapi.auth2.getAuthInstance();
                //sets state calling a google method 
                this.onAuthChange(this.auth.isSignedIn.get());                    this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    //callback to update the signed in state/update it in browser 
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
     this.auth.signIn();

    }

    onSignOutClick = () => {
        this.auth.signOut();
      
    }
    //helper method
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                 </button>

            )} else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
         }

    }

render() {
        return ( <div> {this.renderAuthButton()} </div>
        )

    }
}

const mapStateToProps = state =>{ 
    return { isSignedIn: state.auth.isSignedIn };

}
export default connect(
    mapStateToProps,
    { signIn, signOut }
    )(GoogleAuth);