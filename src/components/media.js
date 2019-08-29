import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Media extends Component {

    render() {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid>
                    <Cell col={4}>
                        <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: 'black', background: '#46B6AC'}}>Reviewing the 2018 Season</CardTitle>
                            <CardText>
                               Published on Thursday, August 29th
                            </CardText>
                            <CardActions border>
                                <Button href="/review2018" colored>Read review article</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: '#C5A3FF'}}>2019 Strength of Schedules</CardTitle>
                            <CardText>
                                Published on Tuesday, August 27th
                            </CardText>
                            <CardActions border>
                                <Button href="/sos2019" colored>Read sos article</Button>
                            </CardActions>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: '#FFABAB'}}>Coming soon</CardTitle>
                            <CardText>
  
                            </CardText>
                            <CardActions border>
                                <Button colored></Button>
                            </CardActions>
                    </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Media;