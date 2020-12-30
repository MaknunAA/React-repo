//import logo from './logo.svg';
//import './App.css';
import FC from './Components/funcComp.js'
import ClassComp from './Components/classComp.js'
import Counter from './Components/counter.js'
import Click from './Components/click.js'
import Comment from './Components/commentR'
import {Clock} from './Components/clock'
function App() {

  const comment = {
    date: new Date(),
    text: 'I hope this meets you and your family well!',
    author: {
        username: 'Maknun Adekunle',
        avatarUrl: '../images/alphabet.jpg',
    },
};
  return (
    <div>
      <p>This is according to the video</p>
      <h1>Enjoy!</h1>
      <FC />
      <ClassComp />
      <Click />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    <Clock />
    </div>
  );
}

export default App;
