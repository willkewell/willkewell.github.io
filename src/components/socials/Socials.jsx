import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrDocumentDownload } from "react-icons/gr";
import CV from '../../assets/W-Kewell-CV.pdf'

const Socials = ({ className }) => {
  return (
    <div className={className}>
        <a href="https://www.linkedin.com/in/william-kewell-065a681b9/" rel='opener'><GrLinkedin /></a>
        <a href="https://github.com/willkewell" rel='opener'><GrGithub /></a>
        <a href={CV} download><GrDocumentDownload />CV</a>
    </div>
  )
}

export default Socials