let testapp = {
    name: 'Adeel Afzal',
    location: 'Toba Tek Singh '
};

function getText(name) {
    if(name){
        return <h1>{name ? name: 'Anonymous'}</h1>;
    }
}
function getLoc(location) {
    if(location){
        return <h1>{location ? location: 'Unkown'}</h1>;
    }
}



let temptest = (
    <div>
        {getText(testapp.name)}
        {getLoc(testapp.location)}
    </div>
);

let appTest = document.getElementById('test');



ReactDOM.render(temptest, appTest);