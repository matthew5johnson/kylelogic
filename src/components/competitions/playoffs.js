import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Button } from 'react-mdl';

class Playoffs extends Component {

    render() {
        return(

            <div className="competitions" style={{width: '80%', margin: 'auto'}}>
                <Grid className="comp-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8}><i id="icons" class="fas fa-star"></i><h1>Playoff Championship</h1></Cell>
                    <Cell col={2}></Cell>        
                </Grid>
                <Grid className="comps">
                    <Cell col={3}></Cell>
                    <Cell col={6}><p>We all know the "Playoff Championship" by its traditional name, the "League Championship". However, with the advent of our four major competitions we'll have to become more precise with our diction so as to avoid confusion between competitions. The league playoff winner will now be referred to as the "Playoff Champion".</p>
                    <p>The Playoff Championship has by far the richest history of our <a href="/competitions">four major competitions</a>. Since league inception in 2007, the distinction of "League Champion" has been bestowed upon the one frachise that can make it through the playoffs unscathed.</p>
                    <p>During the smaller eras spanning from 2007 to 2014, the league playoffs allowed for qualification of 4 out of 8 or 10 total teams. Two knockout rounds took place in weeks 15 and 16, and the entire season culminated with the playoff championship game. The playoff championship game determined who would win a whopping 90% of the league purse, and have the honor of being called the "League Champion".</p>
                    <p>Playoffs were expanded with the coming of the 12-team Modern Era in 2015. The decision to grant 6 teams playoff qualification allowed BYEs for the top 2 seeds, and added an additional playoff week to the schedule. As was the case during the 7 preceding seasons, the playoff champion would continue to be crowned as the de facto "League Champion" throughout the Modern Era.</p>
                    <p>Well over 80% of our league purse remains allocated to the Playoff Champion, so this is clearly one of our two most financially incentivized major competitions. On top of the money, it's impossible to overlook the prestigious history of this trophy - it has traditionally been the ONLY competition to win.</p>
                    <p></p></Cell>
                    <Cell col={3}></Cell>
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={4}></Cell>
                    <Cell col={4}><h5>History of Playoff Champions</h5>
                        <div className="history">
                            <h6>2018: Doug</h6>
                            <h6>2017: Doug</h6>
                            <h6>2016: RTRO</h6>
                            <h6>2015: RTRO</h6>
                            <h6>2014: ZJs</h6>
                            <h6>2013: Garner & Doyle</h6>
                            <h6>2012: Matt & Ross</h6>
                            <h6>2011: Mitch</h6>
                            <h6>2010: ZJs</h6>
                            <h6>2009: ZJs</h6>
                            <h6>2008: Matt & Ross</h6>
                            <h6>2007: Matt & Ross</h6>
                        </div>
                    </Cell>
                    <Cell col={4}></Cell>
                </Grid>
        </div>
        )
    }
}

export default Playoffs;