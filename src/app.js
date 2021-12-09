const app = {
    title: 'Indecision App!',
    subtitle: 'Put your life in the hand of computer',

};
const template = (
    <div>
        <h1>{app.title}</h1>
        { app.subtitle &&<p>{app.subtitle}</p>}
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ol>
    </div>
);

// let userName = 'Adeel Afzal';
// let userAge = 23;
// let userLocation = 'Isb';

const user = {
    name: 'Adeel Afzal',
    age: 23,
    location: 'Islamabad'
};

function getName(name) {
    if(name){
        return <h1>{name ? name: 'Anonymous'}</h1>;
    }
}

function getAge(age) {
    if(age){
        return <p>Age: {age}</p>;
    }
}

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        {getName(user.name)}
        {getAge(user.age && user.age >= 18 && user.age)}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
const appQuiz = document.getElementById('quiz');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appQuiz);