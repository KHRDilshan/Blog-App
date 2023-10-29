import React from 'react'
import './single.css'
import Delete from "../image/delete.png";
import Edit from "../image/edit.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img className='cimg' src="https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
      </div>
      <div className="user">
        <img className="uimg" src='https://images.pexels.com/photos/12118422/pexels-photo-12118422.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        <div className="info">
          <span>John</span>
          <p >Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={'./write?edit=2'}>
          <img className='eimg' src={Edit}/>
          </Link>
          <img className='dimg' src={Delete}/>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit </h1>
        <p className='cp'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus quam, feugiat consectetur accumsan sed, congue eu mauris. Nulla aliquam dictum varius. Integer commodo egestas porta. Fusce rutrum nunc ante, vitae accumsan tortor lobortis bibendum. Vestibulum orci tortor, iaculis vitae quam ut, consequat tempus sapien. Sed vitae tristique risus, eu pretium leo. Quisque nec sodales orci, commodo hendrerit mauris. Duis massa massa, laoreet sit amet risus quis, ullamcorper aliquet sapien. Fusce dictum ornare ligula vel ornare. Integer dolor leo, interdum eu dapibus non, maximus ac massa. Integer eu arcu in mauris mattis tempus. Vivamus pretium hendrerit maximus. Nullam in augue a elit cursus congue.

Morbi at arcu nec turpis accumsan porttitor a ac libero. Vestibulum molestie semper mauris ut fringilla. Curabitur ultricies neque vel turpis bibendum interdum. Aenean ligula nibh, placerat eget luctus vitae, scelerisque non massa. Phasellus laoreet lectus ac erat scelerisque, ut malesuada turpis bibendum. Nam imperdiet tellus ac diam aliquam, eget luctus lacus maximus. In sed suscipit purus, sit amet congue libero. Vivamus dignissim placerat mi, sed convallis turpis eleifend eget. Maecenas pretium tempor eros ut lobortis. Mauris lobortis mollis augue id congue. Sed eget blandit dui. Donec metus neque, ornare ut arcu auctor, porta consectetur ante. In id ultrices quam, vel pharetra metus.

Donec convallis dictum leo scelerisque tristique. Nam ut purus purus. Praesent ut massa vitae ex cursus viverra quis at ipsum. Praesent consectetur justo non risus lobortis, vel semper elit pretium. Aenean sit amet nisl pretium, sodales tellus id, dictum risus. Donec dictum felis nulla, sed aliquam quam gravida at. Maecenas placerat massa ac sem venenatis, eu malesuada nibh suscipit. Nullam mollis vehicula pellentesque. Pellentesque elementum ipsum tristique nibh feugiat, id consequat orci sollicitudin. Quisque id libero augue. Nunc vehicula elit vel nibh viverra, vel auctor ex tempor. Nulla nec posuere nulla. Morbi a ipsum eu lacus sollicitudin malesuada.

Vestibulum ut mi ante. Nunc pulvinar luctus lorem pellentesque faucibus. Duis porta et urna elementum lobortis. Fusce ut vehicula nulla. Etiam et ipsum molestie felis aliquam imperdiet. Aenean vitae felis nec est condimentum varius vitae ut ligula. Duis ornare vestibulum rhoncus. Morbi nec diam in neque pulvinar aliquet eget at libero. Maecenas hendrerit cursus sem sed vehicula.

Quisque sed lacus metus. Morbi leo sapien, tempus et nunc vel, sagittis pretium velit. Quisque eu erat in libero laoreet tempus. Nulla viverra mauris vel ornare venenatis. Fusce eget nibh quis dolor mattis rutrum. Nunc vulputate lectus quis dui porttitor, quis facilisis urna iaculis. Aenean commodo congue dui id malesuada. Proin sed volutpat velit. Vestibulum semper purus quis sagittis facilisis. Donec iaculis nulla nibh. Integer eros nunc, pulvinar ut nisl et, rutrum vehicula arcu. </p>
      </div>
      <Menu></Menu>
      <div className="menu">m</div>
    </div>
  )
}

export default Single
