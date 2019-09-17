import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Button } from 'react-mdl';

class Comps extends Component {

    render() {
        return(

            <div className="competitions" style={{width: '80%', margin: 'auto'}}>
                <Grid className="comp-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8}><h1>Four Major Competitions</h1></Cell>
                    <Cell col={2}></Cell>        
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={3}><i id="icons" class="fas fa-star"></i><h3><a id="complink" href="/playoffs">Playoff Championship</a></h3></Cell>
                    <Cell col={3}><i id="icons" class="fas fa-award"></i><h3><a id="complink" href="/marathon">Maze's Width Marathon</a></h3></Cell>
                    <Cell col={3}><i id="icons" class="fas fa-trophy"></i><h3><a id="complink" href="/leaguecup">Finch Howe League Cup</a></h3></Cell>
                    <Cell col={3}><i id="icons" class="fas fa-shield-alt"></i><h3><a id="complink" href="/communityshield">Community Shield</a></h3></Cell>
                </Grid>
        </div>
        )
    }
}

export default Comps;