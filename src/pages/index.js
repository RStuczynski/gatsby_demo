import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: 'purple' }}>
    <Link to="/about/">About</Link>
    <p></p>
    <Link to="/contact/">Contact</Link>
    <h1>Kevin is a shittiot!</h1>
    <p>Matt is less so, but still TBD</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)