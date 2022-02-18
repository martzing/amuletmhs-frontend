import React from 'react'

class Wrapper extends React.Component {

    render() {
        const { sidebar, content } = this.props
        return <div className="wrapper">
            {sidebar}
            {content}
        </div>
    }
}