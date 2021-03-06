import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
    state = { text: 'X' };
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                <CardSection />

                <CardSection>
                    <Button>
                        Login in
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

