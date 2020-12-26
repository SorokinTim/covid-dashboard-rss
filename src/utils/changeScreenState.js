/* eslint-disable no-param-reassign */
import style from '../App.module.css';

export default function changeScreenState(props) {
  if (props.e.target.innerText === 'fullscreen_exit') {
    document.body.style.overflow = 'auto';
    props.e.target.innerText = 'fullscreen';
    props.el.classList.remove(style.item_fullscreen);
    window.scrollTo(0, 0);

    if (props.map) props.map.current.resize();
  } else {
    document.body.style.overflow = 'hidden';
    props.e.target.innerText = 'fullscreen_exit';
    props.el.classList.add(style.item_fullscreen);
    window.scrollTo(0, 0);

    if (props.map) props.map.current.resize();
  }
}
