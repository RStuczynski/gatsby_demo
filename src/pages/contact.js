import React from "react"
import { Link } from "gatsby"

export default class ContactPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
    <div>
    <Link to="/">Home</Link>
	<form name="contact" method="POST" data-netlify="true">
	  <p>
	    <label>Shittiots Name: <input type="text" name="name" /></label>   
	  </p>
	  <p>
	    <label>Your Email: <input type="email" name="email" /></label>
	  </p>
	  <p>
	    <label>Your Role: <select name="role[]" multiple>
	      <option value="leader">Leader</option>
	      <option value="follower">Follower</option>
	    </select></label>
	  </p>
	  <p>
	    <label>Message: <textarea name="message"></textarea></label>
	  </p>
	  <p>
	    <button type="submit">Send</button>
	  </p>
	</form>
	</div>
    )
  }
}