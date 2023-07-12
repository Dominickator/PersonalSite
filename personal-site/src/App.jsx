import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <head>
        <title>Homepage</title>
      </head>
      <body class="body">
          <div align="center">
              <h1>
                  Welcome to the homepage!
              </h1>
              <p class="p">
                  Hi! My name is Dominick Dickerson! I am currently a student at Missouri University of Science and Technology! This is my personal website, it is meant to be like a CV/resume, but as a website to showcase what I'm working on.
              </p>
              <p>If you need to reach me, my email address is: <a href="mailto:dominickator122102@gmail.com">dominickator122102@gmail.com</a></p>
          </div>
          <div class="container">
              <h3>
                  Languages I know or am learning:
              </h3>
              <ul>
                  <li>C++</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>Swift <a href="https://www.swift.org/" target='blank'><img src="./../src/assets/swiftLang.png" alt="Swift Programming Language Logo" class="languageImg" /></a></li>
                  <li>JavaScript</li>
                  <li>ReactJS and NodeJS</li>
                  <li>HTML and CSS</li>
                  <li>SQL</li>
              </ul>
          </div>
      </body>
    </>
  )
}

export default App
