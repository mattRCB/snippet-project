import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import ButtonGroup from './ButtonGroup';

const PrivacyFilter = React.createClass({
    render: function() {
        const labelStyle = {
            color: this.state.value,
            padding: '0 10px'
        };

        return (
            <div className="PrivacyFilter">
                <h5>List Only:</h5>
                
                <ButtonGroup value={this.state.value}
                        buttons={[
                            {value: 'private', content: 'private'},
                            {value: 'all', content: 'all'},
                            {value: 'public', content: 'public'}
                        ]}
                        onChange={this.handleChange} />
            </div>
        )
    },

    getInitialState: function() {
        return { value: 'private' };
    },

    handleChange: function(value) {
        this.setState({ value });
    }
});

export default PrivacyFilter;
