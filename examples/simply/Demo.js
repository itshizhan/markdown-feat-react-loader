import React from 'react'

export default ({ Doc, source }) => (
  <div style={{
      width: "100%"
    }}>
    <div style={{
        width: "50%",
        float: "left",
        padding: "20px"
      }}
    >
      <Doc
        runtimeProp="Hello, world!"
      />
    </div>
    <pre style={{
        width: "50%",
        float: "left",
        backgroundColor: "black",
        color: "white",
        padding: "20px"
      }}
    >{source}</pre>
  </div>
)