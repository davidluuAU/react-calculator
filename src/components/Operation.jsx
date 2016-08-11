var React = require('react');

var Operation = React.createClass({
    render: function() {

        var style = {
            width:"100%"
        }

        return (
            <div>
                <button className="btn btn-primary btn-xs" style={style} value={this.props.operation} onClick={this.props.onClick}>{this.props.operation} {this.props.type}</button>
            </div>
        );
    }
});

module.exports = Operation;
