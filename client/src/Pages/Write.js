import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './write.css'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const Write = () =>{
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className='pwrite'>
      {/* <div className="pcontent">content</div> */}
      <input className="tint" type='text' placeholder='Title'/>
      <div className="pmenu">
      <div className="editorContainer">
        <ReactQuill theme='snow' value={value} onChange={setValue}/>
      </div>
        <div className="item">
          <h1>Publish</h1>
          <span>Status: <b/> Draft
          </span>
          <span>visibility: <b/> Public</span>
          <input style={{display:"none"}} type="file" name="" id="file"/>
          <label htmlFor='file'>Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id='art'/>
          <label htmlFor='art'>Art</label>
          <input type="radio" name="cat" value="art" id='science'/>
          <label htmlFor='science'>Science</label>
          <input type="radio" name="cat" value="art" id='technology'/>
          <label htmlFor='technology'>Technology</label>
          <input type="radio" name="cat" value="art" id='cinema'/>
          <label htmlFor='cinema'>Cinema</label>
          <input type="radio" name="cat" value="art" id='design'/>
          <label htmlFor='design'>Design</label>
          <input type="radio" name="cat" value="art" id='food'/>
          <label htmlFor='food'>Food</label>
        </div>
      </div>
    </div>
  )
}

export default Write
