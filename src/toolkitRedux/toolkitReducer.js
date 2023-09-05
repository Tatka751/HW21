import { createAction, createReducer } from "@reduxjs/toolkit";


function nowDate() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  day = Number(day);
  if (day < 10) {
    day = '0' + String(day)
  }
  if (month < 10) {
    month = '0' + String(month)
  }

  return `${day}.${month}.${year}`;
}

const initialState = [
  {
    id: 1,
    name: "Anakin skywalker",
    avatar:
      "https://lrmonline.com/wp-content/uploads/2021/03/Rey-Skywalker.jpg",
    nickname: "@dart_rfs",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    photo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/kp9pohuivgireqqdzx5d",
    date: "26.02.2023",
  },
  {
    id: 2,
    name: "R2-D2",
    avatar:
      "https://technomarket.biz.ua/4717-thickbox_default/droid-sphero-r2-d2-star-wars.jpg",
    nickname: "@dart_rfs",
    content: "WTF? Who is R2-D2? Is it a Robot?",
    photo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/kp9pohuivgireqqdzx5d",
    date: "25.04.2023",
  },
];

export const addPublication = createAction("addPublication");

export default createReducer(initialState, {
  [addPublication]: function (state, action) {

    state.push({
      id: state.length + 1,
      name: action.payload.name,
      avatar: action.payload.foto,
      nickname: action.payload.nickname,
      content: action.payload.content,
      photo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/kp9pohuivgireqqdzx5d",
      date: nowDate()
    })
  }
  
})




