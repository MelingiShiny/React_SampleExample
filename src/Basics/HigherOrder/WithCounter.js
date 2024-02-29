import React from 'react'

//Without parameters --> HOC example
// const withCounter = WrappedComponent => {

//With parameters --> HOC example
const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {

                //without parameter
                // return { count: prevState.count + 1 }

                //with parameter
                return { count: prevState.count + incrementNumber }
            })
        }
        render() {
            const { count } = this.state;
            // return <WrappedComponent name='shiny' count={count} incrementCount={this.incrementCount} />
            
            //If props are assigned in app.js then need to use spread operator to get values within the components
            return <WrappedComponent name='shiny' 
            count={count} 
            incrementCount={this.incrementCount} 
            {...this.props}
            />
        }
    }
    return WithCounter
}

export default withCounter