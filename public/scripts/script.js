'use strict';

var testapp = {
    name: 'Adeel Afzal',
    location: 'Toba Tek Singh '
};

function getText(name) {
    if (name) {
        return React.createElement(
            'h1',
            null,
            name ? name : 'Anonymous'
        );
    }
}
function getLoc(location) {
    if (location) {
        return React.createElement(
            'h1',
            null,
            location ? location : 'Unkown'
        );
    }
}

var temptest = React.createElement(
    'div',
    null,
    getText(testapp.name.split(' ')[0]),
    getText(testapp.name.split(' ')[1]),
    getLoc(testapp.location)
);

var appTest = document.getElementById('test');

ReactDOM.render(temptest, appTest);
