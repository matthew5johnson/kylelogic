import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Chip, ChipContact } from 'react-mdl';

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div>
                <DataTable
                    shadow={0}
                    rows={[
                        {season: '2011', PPG: 122.68},
                        {season: '2012', PPG: 122.97},
                        {season: '2013', PPG: 125.46},
                        {season: '2014', PPG: 122.31},
                        {season: '2015', PPG: 118.05},
                        {season: '2016', PPG: 118.16},
                        {season: '2017', PPG: 112.05},
                        {season: '2018', PPG: 123.95},
                    ]}
                >
                    <TableHeader name="season">Season</TableHeader>
                    <TableHeader numeric name="PPG" tooltip="League-wide average points per game for that season">PPG</TableHeader>
                </DataTable>

                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div>
                <DataTable
                    shadow={0}
                    rows={[
                        {rank: 1, franchise: "Crockett", score: 225.2, season: 2018, week: 10},
                        {rank: 2, franchise: "RTRO", score: 210.9, season: 2018, week: 6},
                        {rank: 3, franchise: "Kyle", score: 208.3, season: 2013, week: 4},
                        {rank: 4, franchise: "RTRO", score: 202.9, season: 2012, week: 2},
                        {rank: 5, franchise: "Gaudet & Cameron", score: 201.7, season: 2014, week: 6},
                        {rank: 6, franchise: "Scott & James", score: 199.9, season: 2013, week: 4},
                    ]}
                >
                    <TableHeader numeric name="rank">Rank</TableHeader>
                    <TableHeader name="franchise">Franchise</TableHeader>
                    <TableHeader numeric name="score" tooltip="Points scored">Score</TableHeader>
                    <TableHeader numeric name="season">Season</TableHeader>
                    <TableHeader numeric name="week">Week</TableHeader>
                </DataTable>

                </div> 
            )
        } else if(this.state.activeTab === 2) {
            return(                
                <div>
                <DataTable
                    shadow={0}
                    rows={[
                        {season: 2011, franchise: "Mitch", PPG: 145.2},
                        {season: 2012, franchise: "Kfish", PPG: 135.0},
                        {season: 2013, franchise: "Garner & Doyle", PPG: 134.9},
                        {season: 2014, franchise: "Gaudet & Cameron", PPG: 137.3},
                        {season: 2015, franchise: "Crockett", PPG: 134.3},
                        {season: 2016, franchise: "Joseph & Mike", PPG: 135.0},
                        {season: 2017, franchise: "Doug", PPG: 141.3},
                        {season: 2018, franchise: "RTRO", PPG: 143.9},
                    ]}
                >
                    <TableHeader numeric name="season">Season</TableHeader>
                    <TableHeader name="franchise">Franchise</TableHeader>
                    <TableHeader numeric name="PPG" tooltip="Average points per game that season">PPG</TableHeader>
                </DataTable>

                </div>    
            )
        }
    }

    render() {
        return(
            <div class="franchise-links" style={{width: '80%', margin: 'auto', align: 'center'}}>
                <Grid>
                    <Cell col={3}><div><i class="fa fa-star no-star"></i></div><div><a href="/blake">
                     <Chip>
                        <ChipContact className="mdl-color--green mdl-color-text--white">B</ChipContact>
                        Blake
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star no-star"></i></div><div><a href="/crockett">
                    <Chip>
                        <ChipContact className="mdl-color--gray mdl-color-text--white">G</ChipContact>
                        Crockett
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star"></i><i class="fa fa-star"></i></div><div><a href="/doug">
                    <Chip>
                        <ChipContact className="mdl-color--red mdl-color-text--white">D</ChipContact>
                        Doug
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><div><a href="/gaudet&cameron">
                    <Chip>
                        <ChipContact className="mdl-color--blue mdl-color-text--white">ZJ</ChipContact>
                        Gaudet & Cameron
                    </Chip>
                    </a></div></Cell>
                </Grid>
                <Grid>
                    <Cell col={3}><div><i class="fa fa-star no-star"></i></div><div><a href="/joseph&mike">
                    <Chip>
                        <ChipContact className="mdl-color--brown mdl-color-text--white">TBH</ChipContact>
                        Joseph & Mike
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star no-star"></i></div><div><a href="/kfish">
                    <Chip>
                        <ChipContact className="mdl-color--purple mdl-color-text--white">K</ChipContact>
                        Kfish
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star no-star"></i></div><div><a href="/kyle">
                    <Chip>
                        <ChipContact className="mdl-color--orange mdl-color-text--white">DTTW</ChipContact>
                        Kyle
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><div><a href="/matt&ross">
                    <Chip>
                        <ChipContact className="mdl-color--teal mdl-color-text--white">#RB</ChipContact>
                        Matt & Ross
                    </Chip>
                    </a></div></Cell>
                </Grid>
                <Grid>
                    <Cell col={3}><div><i class="fa fa-star"></i></div><div><a href="/mitch">
                    <Chip>
                        <ChipContact className="mdl-color--pink mdl-color-text--white">M</ChipContact>
                        Mitch
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star no-star"></i></div><div><a href="/nick&mickey">
                    <Chip>
                        <ChipContact className="mdl-color--lime mdl-color-text--white">NM</ChipContact>
                        Nick & Mickey
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star"></i><i class="fa fa-star"></i></div><div><a href="/rtro">
                    <Chip>
                        <ChipContact className="mdl-color--black mdl-color-text--white">R</ChipContact>
                        RTRO
                    </Chip>
                    </a></div></Cell>
                    <Cell col={3}><div><i class="fa fa-star no-star"></i></div><div><a href="/scott&james">
                    <Chip>
                        <ChipContact className="mdl-color--yellow mdl-color-text--white">TPC</ChipContact>
                        Scott & James
                    </Chip>
                    </a></div></Cell>
                </Grid>
<br></br>
<br></br>
                <Grid>
                    <cell col={2}></cell>
                    <cell col={8}>
                        <div className="demo-tabs">
                            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                                <Tab>League Scoring</Tab>
                                <Tab>Best Weeks</Tab>
                                <Tab>Scoring Titles</Tab>
                            </Tabs>

                            <section className="projects-grid">
                                <br></br>
                                {this.toggleCategories()}
                            </section>

                        </div>
                    </cell>
                    <cell col={2}></cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;