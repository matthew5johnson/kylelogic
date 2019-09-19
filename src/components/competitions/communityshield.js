import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Button } from 'react-mdl';

class Shield extends Component {

    render() {
        return(

            <div className="competitions" style={{width: '80%', margin: 'auto'}}>
                <Grid className="comp-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8}><i id="icons" class="fas fa-shield-alt"></i><h1>Community Shield</h1></Cell>
                    <Cell col={2}></Cell>        
                </Grid>
                <Grid className="comps">
                    <Cell col={3}></Cell>
                    <Cell col={6}>
                        <p className="competitions"><i class="fas fa-shield-alt"></i> '@bot community shield' or '@bot shield' <i class="fas fa-shield-alt"></i></p>
                        <p>The Community Shield is a head-to-head game during week 3 of each season pitting the <a href="/marathon">MWM Stage winner</a> <i class="fas fa-award"></i> against the <a href="/leaguecup">League Cup holder</a> <i class="fas fa-trophy"></i>. The first Community Shield will take place in 2021, since we won't have a MWM Stage winner until then.</p>
                        <p>This major competition gives even more gravity to winning a MWM Stage or FHLC, and has a chance to turn into a pre-#RivarlyWeek superbowl each year.</p>
                        <p>It's meant to replicate the early-season pagentry that's created by its namesake (The Community Shield) and the SuperCup, among other similar events in European Soccer.</p>
                        <br></br>
                        <p>Since we won't have a MWM Stage winner until the end of 2020, next year's Community Shield will temporarily take the 2019 Playoff Champion in lieu of a MWM Stage winner. The Shield will return to being a competition between MWM and FHLC in 2021.</p>
                    </Cell>
                    <Cell col={3}></Cell>
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={4}></Cell>
                    <Cell col={4}><h5>History of the Community Shield</h5>
                        <div className="history">
                            <h6>2021 Shield: </h6>
                        </div>
                    </Cell>
                    <Cell col={4}></Cell>
                </Grid>
        </div>
        )
    }
}

export default Shield;