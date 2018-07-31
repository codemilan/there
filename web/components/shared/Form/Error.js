// @flow
import React from 'react'
import styled from 'styled-components'

// Local
import Hint from './Hint'

const Error = (props: any) => <Hint textColor="#f00">{props.children}</Hint>

export default Error
