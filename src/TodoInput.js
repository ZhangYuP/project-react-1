import React from 'react';
import './TodoInput.css';

function submit(props, e){
  if(e.key === 'Enter'){
    if(e.target.value.trim() !== ''){
      props.onSubmit(e)      
    }
  }
}
function changeTitle(props, e){
  props.onChange(e)
}
export default function (props){
  return(
    <input className="TodoInput" type="text" placeholder="请输入待办事项，然后按回车键~" value={props.content}
      onChange={changeTitle.bind(null, props)}
      onKeyPress={submit.bind(null, props)} />
  )
}