import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Button, Spinner } from 'react-mdl';

class Scott extends Component {

    render() {
        return(
            <Grid>
                <Cell col={3}></Cell>
                <Cell col={6}>
                    <div>
                        <Spinner />
                        <br></br>
                        <h1>Franchise pages are coming soon... </h1>
                        <br></br>
                        <h3>No need to wheats</h3>
                        <br></br>

                        <Button href="/" primary>Return to Homepage</Button>

                    </div>
                </Cell>
                <Cell col={3}></Cell>
            </Grid>
        )
    }
}

export default Scott;