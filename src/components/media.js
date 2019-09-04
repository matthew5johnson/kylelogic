import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Media extends Component {

    render() {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
            <Grid>
                <Cell col={4}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: '#FFABAB'}}>Kommish Draft Grades</CardTitle>
                            <CardText>
                                Published on Thursday, September 5th
                            </CardText>
                            <CardActions border>
                                <Button href="/kmishdraft2019" colored>Read draft grades article</Button>
                            </CardActions>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: 'black', background: '#46B6AC'}}>CrewCast: Draft Day Final</CardTitle>
                            <CardText>
                               Published Wednesday, September 4th
                            </CardText>
                            <CardActions border>
                                <Button href="https://drive.google.com/file/d/1JLD7FOovsOMG9zJWF-Im-a45_yr8ID0F/view?fbclid=IwAR2lhAbW8ge4y3g0wUUJ9EGT8wWAwtHNJR5bTB9jJMNrRMOJG7L5Cuz10zs" colored>Listen to CrewCast episode #1</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: '#C5A3FF'}}>Coming Soon ...</CardTitle>
                            <CardText>

                            </CardText>
                            <CardActions border>
                                <Button href="/" colored></Button>
                            </CardActions>
                    </Card>
                    </Cell>
                </Grid>

                
                <Grid>
                <Cell col={4}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: '#FFABAB'}}>2019 Predictions</CardTitle>
                            <CardText>
                                Published on Wednesday, September 4th
                            </CardText>
                            <CardActions border>
                                <Button href="/predictions2019" colored>Read the predictions article</Button>
                            </CardActions>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
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
                </Grid>
            </div>
        )
    }
}

export default Media;