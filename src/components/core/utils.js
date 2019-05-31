import React from 'react'
import { curryN, flip, useWith, o, identity } from 'ramda'

const createElement = curryN(2, React.createElement);
const mapProps = flip(useWith(o, [createElement, identity]));






export { createElement, mapProps }