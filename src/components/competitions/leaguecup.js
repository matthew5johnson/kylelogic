import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Button } from 'react-mdl';

class Cup extends Component {

    render() {
        return(

            <div className="competitions" style={{width: '80%', margin: 'auto'}}>
                <Grid className="comp-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8}><i id="icons" class="fas fa-trophy"></i><h1>Finch Howe League Cup</h1></Cell>
                    <Cell col={2}></Cell>        
                </Grid>
                <Grid className="comps">
                    <Cell col={0}></Cell>
                    <Cell col={12}><p>The Finch Howe League Cup is a rigorous test of consistency over the course of an entire season. Each week, the four teams with the highest score are awarded 3 League Cup Points, the four teams scoring in the middle are awarded 1 League Cup Point, and the four lowest scoring teams get 0 Cup Points.</p>
                    <p>The franchise to accumulate the most League Cup Points at the end of week 13 will hoist the League Cup.</p>
                    <p>This trophy stands apart from the <a href="/playoffs">Playoff Championship</a> because it eliminates the luck component of head-to-head matchups, which are the primary determinant of the Playoff Champion. The League Cup awards 3 points to the top one-third of teams each week regardless of opponent. Likewise, the bottom one-third of teams can't escape by lucking into an easy weekly matchup.</p>
                    <p>And it stands apart from <a href="/marathon">Maze's Width Marathon</a> by focusing solely on consistency over a single regular season. MWM requires success spanning consecutive seasons, and emphasizes post-season qualification.</p>
                    <p>The unique Finch Howe League Cup carries with it admission to our fourth major competition, the <a href="/communityshield">Community Shield</a>.</p></Cell>
                    <Cell col={0}></Cell>
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={4}></Cell>
                    <Cell col={4}><h5>History of League Cups</h5>
                        <div className="history">
                            <h6>2019 Cup: </h6>
                        </div>
                    </Cell>
                    <Cell col={4}></Cell>
                </Grid>
        </div>
        )
    }
}

export default Cup;