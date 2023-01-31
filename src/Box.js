import React from "react"

export default function Box(props) {
  console.log(props)
  return (
    <div className="box-cont">
      <div onClick={props.onClick} className="box">
        0
      </div>
      <div onClick={props.onClick} className="box">
        1
      </div>
      <div onClick={props.onClick} className="box">
        2{" "}
      </div>
      <div onClick={props.onClick} className="box">
        3
      </div>
      <div onClick={props.onClick} className="box">
        4
      </div>
      <div onClick={props.onClick} className="box">
        5
      </div>
      <div onClick={props.onClick} className="box">
        6
      </div>
      <div onClick={props.onClick} className="box">
        7
      </div>
      <div onClick={props.onClick} className="box">
        8
      </div>
      <div onClick={props.onClick} className="box">
        9
      </div>
      <div onClick={props.onClick} className="box">
        +
      </div>
      <div onClick={props.onClick} className="box">
        -
      </div>
      <div onClick={props.onClick} className="box">
        *
      </div>
      <div onClick={props.onClick} className="box">
        /
      </div>
      <div onClick={props.onClick} className="box">
        =
      </div>
      <div onClick={props.onClick} className="box">
        C
      </div>
    </div>
  )
}
