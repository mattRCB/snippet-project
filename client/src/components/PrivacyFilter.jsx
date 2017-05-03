import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import ButtonGroup from './ButtonGroup';

const PrivacyFilter = React.createClass({
    render: function() {
        const labelStyle = {
            color: this.state.value,
            padding: '0 10px'
        };

        return <div>
            <h4>List Only:</h4>
            <ButtonGroup value={this.state.value}
                    buttons={[
                        {value: 'red', content: 'red'},
                        {value: 'green', content: 'green'},
                        {value: 'blue', content: 'blue'}
                    ]}
                    onChange={this.handleChange} />
            <span style={labelStyle}>Your useful text</span>
        </div>;
    },

    getInitialState: function() {
        return { value: 'red' };
    },

    handleChange: function(value) {
        this.setState({ value });
    }
});

export default PrivacyFilter;
