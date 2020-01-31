import React from "react"
import TitleView from "./TitleView"

function IdeaList(props) {
  if (props.data) {
    const ideas = props.data.data.map(arr => {
      return (
        <div>
          <TitleView
            id={arr._id}
            updateIdea={props.updateIdea}
            deleteIdea={props.deleteIdea}
            user={props.user}
            data={arr}
          />
        </div>
      )
    })
    return <div>{ideas}</div>
  } else {
    return <></>
  }
}
export default IdeaList