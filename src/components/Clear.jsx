var React = require('react');

var Clear = React.createClass({
    render: function() {
        var style = {
            width:"100%"
        }

        return (
            <div>
                <button className="btn btn-danger" onClick={this.props.onClick} style={style}>Clear</button>
            </div>
        );
    }
});

module.exports = Clear;
