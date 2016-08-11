var React = require('react');

var Result = React.createClass({
    render: function() {
        return (
            <div>
                <input className="form-control" placeholder="Result" disabled value={this.props.value}/>
            </div>
        );
    }
});

module.exports = Result;
