import { Component } from "react"
import { signUp } from "../utilities/users-service.js"


export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: ""
    }

    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = { ...this.state }
            delete formData.error;
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            delete formData.confirm
            const user = await signUp(formData)
            this.props.setUser(user)
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div className="board">
                <div className="form-container">
                    <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="name">
                            <label className="formLabel">Name</label>
                            <hr className="line" />
                            <input className="formInput" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        </div>
                        <div className="email">
                            <label className="formLabel">Email</label>
                            <hr className="line" />
                            <input className="formInput" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        </div>
                        <div className="pass">
                            <label className="formLabel">Password</label>
                            <hr className="line" />
                            <input className="formInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>
                        <div className="conf">
                            <label className="formLabel">Confirm</label>
                            <hr className="line" />
                            <input className="formInput" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        </div>
                        <button className="formButt" type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}
