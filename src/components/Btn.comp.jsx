import React from "react"

const Btn = ({text, color, toggleForm}) => {
  return (
    <button
      className="btn"
      style={{backgroundColor: color}}
      onClick={toggleForm}
    >
      {text}
    </button>
  )
}

export default Btn
