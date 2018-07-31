import React from 'react'

const Close = props => (
  <svg width={7} height={7} fill="none" {...props}>
    <path
      d="M1 1l2.5 2.5M6 6L3.5 3.5m0 0L6 1 1 6"
      stroke="#000"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Close
