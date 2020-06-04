import React, { Component } from 'react';

export default class Creditos extends Component {
    stlyeName(){
        return {
            fontSize: '18px',
            color: 'green'
        }
    }
    render() {
        return (
            <div>
                <h1>Thanks 4 use Task Anotations</h1>
                <p>This is my second app that im learning to code, i hope than in the
                    future i can do a lot of more apps or simply more things.
                    good bye :)
                </p><br />
                <p style={this.stlyeName()}>
                    @Kuper_xx
                </p>
            </div>
        )
    }
}
