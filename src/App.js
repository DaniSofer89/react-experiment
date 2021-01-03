import './App.css';
import faker from 'faker'
import {FixedSizeList as theList} from "react-window";

const data = new Array(100).fill().map((value, index) => ({ id: index, title: faker.lorem.words(5), body: faker.lorem.sentences(4) }))

function App() {
    return (
        <div>
            {data.map(((item) => (
                <div key={item.id} className="post">
                    <h3>{item.title} - {item.id}</h3>
                    <p>{item.body}</p>
                </div>
            )))}
        </div>
    );
}

export default App;
