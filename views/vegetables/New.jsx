const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
            <h1>Create A New Vegetable</h1>
            <nav>
                <a href="/vegetables">Go Back to Vegetable Home Page </a>
            </nav>
            <form method="POST" action="/vegetables">
                Name:<input type="text" name="name" placeholder="Name of Vegetable"></input><br/>
                Color:<input type="text" name="color" placeholder="Color of Vegetable"></input><br/>
                Is Ready to Eat:<input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Vegetable"></input>

            </form>
            </>
        )
    }
}


module.exports = New