import React from "react"
import { FaGithub, FaFileAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"

function Email(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag href="mailto:ziiengelhardt@gmail.com" aria-label="Email">< FaEnvelope /> {props.text}</Tag>
  )
}

function GitHub(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag target="_blank" rel="noopener noreferrer" href="https://github.com/ziieng" aria-label="Email">< FaGithub /> {props.text}</Tag>
  )
}

function LinkedIn(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ziieng/"
      aria-label="LinkedIn">
      <FaLinkedin /> {props.text}</Tag>
  )
}

function Resume(props) {
  let Tag = "a"
  if (props.as) {
    Tag = props.as
  }
  return (
    <Tag target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1PLFvmRkLbO74XjR9L6c9dn1vp06lsfV9-lXtM_DrgCk/export?format=pdf" aria-label="Resume">
      <FaFileAlt /> {props.text}</Tag>
  )
}

const Shell = { Email, GitHub, LinkedIn, Resume }

export { Email, GitHub, LinkedIn, Resume, Shell as default }