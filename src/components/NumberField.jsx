var React = require('react');

var NumberField = React.createClass({
    getInitialState: function() {
        return { valid: true, value: "" }
    },
    onChange: function(e) {
        var val = e.target.value;

        if (this.isNumeric(val)) {
            this.setState({valid: true, value: val});
        } else {
            this.setState({valid: false, value: val});
        }
    },
    isNumeric: function(obj) {
        return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
    },
    clear: function() {
        this.setState({valid: true, value: ""});
    },
    render: function () {

        var formClass = this.state.valid ? "form-group" : "form-group has-error";

        return (
            <div className={formClass}>
                <input className="form-control" onChange={this.onChange} placeholder="NUMBER e.g. 1337" value={this.state.value}/>
            </div>
        );
    }
});

module.exports = NumberField;
