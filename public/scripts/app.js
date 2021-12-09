'use strict';

var app = {
    title: 'Indecision App!',
    subtitle: 'Put your life in the hand of computer'

};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        ),
        React.createElement(
            'li',
            null,
            'Item 3'
        ),
        React.createElement(
            'li',
            null,
            'Item 4'
        ),
        React.createElement(
            'li',
            null,
            'Item 5'
        )
    )
);

// let userName = 'Adeel Afzal';
// let userAge = 23;
// let userLocation = 'Isb';

var user = {
    name: 'Adeel Afzal',
    age: 23,
    location: 'Islamabad'
};

function getName(name) {
    if (name) {
        return React.createElement(
            'h1',
            null,
            name ? name : 'Anonymous'
        );
    }
}

function getAge(age) {
    if (age) {
        return React.createElement(
            'p',
            null,
            'Age: ',
            age
        );
    }
}

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    getName(user.name),
    getAge(user.age && user.age >= 18 && user.age),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
var appQuiz = document.getElementById('quiz');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appQuiz);
