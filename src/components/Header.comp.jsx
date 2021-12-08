import React from "react"
import Btn from "./Btn.comp"

export const Header = ({toggleForm, addForm}) => {
  return (
    <div className="header">
      <h1>Task master</h1>
      <Btn
        toggleForm={toggleForm}
        color={addForm ? "black" : "red"}
        text={addForm ? "add task" : "close form"}
      />
    </div>
  )
}
