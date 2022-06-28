import React, { Component } from 'react';
import Editor from './components/Editor';
import Sidebar from './components/SideBar';

export default function App(){
  return(
    <div>
      <Editor/>
      <Sidebar/>
    </div>
  )
}