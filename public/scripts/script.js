'use strict';

var testapp = {
    name: 'Huzaifa',
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
    getText(testapp.name),
    getLoc(testapp.location)
);

var appTest = document.getElementById('test');

ReactDOM.render(temptest, appTest);
