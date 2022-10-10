const React = require('react')

class Show extends React.Component{
    render(){
        const {name, color, readyToEat, _id} = this.props.vegetable
        const capName = name[0].toUpperCase()+name.substring(1)
        return(
            <>
                <h1>{capName} Show Page</h1>
                <nav>
                    <a href="/vegetables">Back to Vegetable Home Page</a><br/>
                    <a href={`/vegetables/${_id}/edit`}>{`Edit the ${capName}`}</a>
                </nav>
                <p>{capName} is {color} and {readyToEat? 'It\'s ready to eat' : 'It\'s not ready to eat'}</p>
            </>
        )
    }
}
module.exports = Show