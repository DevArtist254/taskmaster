import React from "react"
import Btn from "./Btn.comp"

export const Header = () => {
  return (
    <div className="header">
      <h1>Task master</h1>
      <Btn title={"add task"} />
    </div>
  )
}
