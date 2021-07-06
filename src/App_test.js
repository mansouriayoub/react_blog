import './App.css';

function App() {
    const title = 'Welcome to the new blog';
    const likes = 50;
    // const person = { name: 'yoshi', age: 30};
    // we can't output ojbect and boolean, only variables and dynamic values
    const link = "http:/smslogiciels.ma";
    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <p>Liked {likes} times</p>
                <p>{10}</p>
                <p>{"Hello, ninjas"}</p>
                <p>{[1, 2, 3, 4, 5]}</p>
                <p>{Math.random() * 10}</p>

                <a href={link}>SMS Site</a>
            </div>
        </div>
    );
}
export default App;