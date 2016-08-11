var React = require('react');
var NumberField1 = require('./NumberField.jsx');
var NumberField2 = require('./NumberField.jsx');
var Add = require('./Operation.jsx');
var Clear = require('./Clear.jsx');
var Result = require('./Result.jsx');

var Calculator = React.createClass({
    getInitialState: function() {
        return { result: 0}
    },
    onSubmit: function(e) {
        if (!this.refs.field1.state.valid || !this.refs.field2.state.valid) {
            alert("You need to enter a number in both fields");
        } else {
            var operation = e.target.value;
            var result = 0;
            var a = Number(this.refs.field1.state.value);
            var b = Number(this.refs.field2.state.value);

            if (operation === "+") {
                result = a + b;
            } else if (operation === "-") {
                result = a - b;
            } else if (operation === "*") {
                result = a * b;
            } else if (operation === "/") {
                result = a / b;
            }

            this.setState({result: result})
        }
    },
    onClear: function(e) {
        this.setState({result: 0});
        this.refs.field1.clear();
        this.refs.field2.clear();
    },
    render: function() {

        var titleStyle = {
            textAlign: "center"
        }

        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row" style={titleStyle}><h1>Simple Calculator</h1></div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-6"><NumberField1 ref="field1"/></div>
                            <div className="col-sm-6"><NumberField2 ref="field2"/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-3"><Add type="Add" operation="+" onClick={this.onSubmit}/></div>
                            <div className="col-sm-3"><Add type="Subtract" operation="-" onClick={this.onSubmit}/></div>
                            <div className="col-sm-3"><Add type="Divide" operation="/" onClick={this.onSubmit}/></div>
                            <div className="col-sm-3"><Add type="Multiply" operation="*" onClick={this.onSubmit}/></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-9"><Result value={this.state.result}/></div>
                            <div className="col-sm-3"><Clear onClick={this.onClear}/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Calculator;
