import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPublication } from "./toolkitRedux/toolkitReducer";
import "./App.css";
import { Post } from "./components/Post";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #0f0f0f;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: sans-serif;
  box-sizing: border-box;
  background: linear-gradient(90deg, #307b19, #16b582, #639077, #0a3b1f);
  background-size: 400%;
  border-radius: 30px;
  z-index: 1;
`;

const Input = styled.input`
border-radius: 15px;
  width: 600px;
  heigth: 200px;
  margin: 15px;
  background-color: #81ac9a;
`;

const Select = styled.select`
margin: 15px;
  border-radius: 15px;
  background-color: #81ac9a;
  width: 600px;
  heigth: 200px;
`;

function App() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.toolkit);
  console.log(content);
  const renderedListCont = content.map((cont) => {
    return <Post key={cont.id} props={cont} />;
  });

 const arr = {
    nickname: '',
    name: '',
    content: '',
    foto: ''
  }

  return (
    <div className="App">
      <h1> Publications </h1>
      <div>{renderedListCont}</div>
      <div>
        <h2>Adding the new publication</h2>
        <Select onChange={(e) => {
          arr.nickname = e.target.value;

          console.log(arr.nickname)
        }}>
          <option >Choose you nickname</option>
          <option value="@dart_rfs">@dart_rfs</option>
          <option value="@dart_walk">@dart_walk</option>
          <option value="@dart_DF5">@dart_DF5</option>
        </Select>
        <br />
        <Input
          placeholder="Input the name of hero of the SW"
          onChange={(e) => arr.name = e.target.value} />
        <br />
        <Input
          placeholder="Input the discribe of your post"
          onChange={(e) => arr.content = e.target.value} />
        <br />
        <Input
          placeholder="Input the link to the foto"
          onChange={(e) => arr.foto = e.target.value} />
        <br />
        <Button onClick={() => dispatch(addPublication(arr))}> Add </Button>
      </div>
    </div>
  );
}

export default App;
