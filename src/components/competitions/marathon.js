import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Button } from 'react-mdl';

class Marathon extends Component {

    render() {
        return(

            <div className="competitions" style={{width: '80%', margin: 'auto'}}>
                <Grid className="comp-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8}><i id="icons" class="fas fa-award"></i><h1>Maze's Width Marathon</h1></Cell>
                    <Cell col={2}></Cell>        
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={0}></Cell>
                    <Cell col={12}>
                        <p className="competitions"><i class="fas fa-award"></i> '@bot my mwm' , '@bot mwm' , '@bot mwm details' <i class="fas fa-award"></i></p>
                        <p>Maze's Width Marathon (MWM) is a competition that spans multiple seasons, with a new "Stage" of the "Marathon" occurring each new season. The first franchise to win two Stages wins the Marathon and the accrued prize pool. Think of it as being like the Champions League, but where the winner of our MWM competition must win two individual Champions League titles to win the Marathon.</p>
                        <p>The multi-year aspect of this competition makes it exponentially more difficult in which to succeed. Winning the traditional Playoff Championship over the course of a 16 week season is one thing, but undergoing 16 weeks of qualification during one season only to be followed by another 3 weeks of tournament-play in the next season is a whole different animal. And that's just to win one MWM Stage. To win the Marathon, that feat must be repeated twice, which implies four separate seasons of dominance.</p>
                        <p>MWM is the ultimate test of sustained success, and it is financially incentivized as such. The Marathon winner is rewarded with up to $2,400 which more than doubles the Playoff Champion's take-home. The esteemed Maze's Width Marathon will quickly gain historical signficance in proportion to its extreme difficulty.</p></Cell>
                    <Cell col={0}></Cell>
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={4}><h5>Marathon Winner:</h5><p>The first franchise to win two MWM Stages</p><h5>Prize:</h5><p>$300 to $2,400. $100 accrues to the prize pool each year the Marathon remains uncontested</p></Cell>
                    <Cell col={4}><h5>Qualify for the next Stage:</h5><p>1. Win a Semifinal (week 15)</p><p>2. Win the 3rd Place Game (week 16)</p><p>3. Win the 5th Place Game (week 16)</p><p>4. Win the Consolation Ladder (week 16)</p></Cell>
                    <Cell col={4}><h5>Sacko:</h5><p>Negates one MWM stage win</p><p>** finally a big Sacko punishment **</p></Cell>
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={1}></Cell>
                    <Cell col={10}><img src="http://thecrewffl.weebly.com/uploads/5/1/9/0/51900477/revisedqual_orig.png" /></Cell>
                    <Cell col={1}></Cell>
                </Grid>
                <Grid className="marathon">
                    <Cell col={3}></Cell>
                    <Cell col={6}><ul><li>The 5 qualifying franchises will play in a 3-round knockout tournament during weeks 7-9 of the following season. The winner of that knockout tournament wins the MWM Stage</li>
                    <li>The MWM Stage winner gains admission into the <a href="/communityshield">Community Shield</a>, our fourth major competition</li>
                    <li>The MWM Stage is placed during weeks 7-9 to preserve the sanctity of #RivalryWeeks and avoid interfering with the playoff race</li>
                    <li>The top 3 seeds are rewarded with BYEs while the bottom two seeds must face elimination during three consecutive weeks</li>
                    <li>Tiebreakers: previous season's final ranking</li></ul></Cell>
                    <Cell col={3}></Cell>
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={1}></Cell>
                    <Cell col={10}><img src="http://thecrewffl.weebly.com/uploads/5/1/9/0/51900477/mwmbracketfinal_orig.png" /></Cell>
                    <Cell col={1}></Cell>
                </Grid>
                <Grid className="comp-grid">
                    <Cell col={4}></Cell>
                    <Cell col={4}><h5>History of Stage Winners</h5>
                        <div className="history">
                            <h6>2020 MWM Stage: </h6>
                        </div>
                    </Cell>
                    <Cell col={4}></Cell>
                </Grid>
        </div>
        )
    }
}

export default Marathon;