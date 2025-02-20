import React from 'react'
import "./HeadingTag.scss"

function HeadingTag({ text }) {
  return (
    <>
      <div className="heading-tag">
        <p>{text}</p>
      </div>
    </>
  )
}

export default HeadingTag
