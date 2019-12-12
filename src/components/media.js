import React, { Component } from 'react';

import { Grid, Cell, Tabs, Tab, DataTable, TableHeader, Card, CardTitle, CardText, CardActions, Button, List, ListItem } from 'react-mdl';

class Media extends Component {

    render() {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <h2>2019</h2>
                <h3>Articles and Podcasts</h3>
                <List>
                    <ListItem>(Week 15) 12/12: <a href="/2019/week15">Round 2</a></ListItem>
                    <ListItem>(Week 14) 12/5: <a href="/2019/week14">Round 1</a></ListItem>
                    <ListItem>(Week 13) 11/27: <a href="/2019/week13">#RivalryWeek</a></ListItem>
                    <ListItem>(Week 12) 11/21: <a href="/2019/week12">Week 11 Recap & Week 12 Intro</a></ListItem>
                    <ListItem>(Week 11) 11/14: <a href="/2019/week11">Week 10 Recap & Week 11 Intro</a></ListItem>
                    <ListItem>(Week 10) 11/7: <a href="/2019/week10">Week 9 Recap & Week 10 Intro</a></ListItem>
                    <ListItem>(Week 9) 10/31: <a href="/2019/week9">Week 8 Recap & Week 9 Intro</a></ListItem>
                    <ListItem>(Week 8) 10/24: <a href="/2019/week8">Week 7 Recap & Week 8 Intro</a></ListItem>
                    <ListItem>(Week 7) 10/17: <a href="/2019/week7">Week 6 Recap & Week 7 Intro</a></ListItem>
                    <ListItem>(Week 6) 10/10: <a href="/2019/week6">Week 5 Recap & Week 6 Intro</a></ListItem>
                    <ListItem>(Week 5) 10/2: <a href="/2019/week5">#RivalryWeek</a></ListItem>
                    <ListItem>(Week 4) 9/25: <a href="/2019/week4">Week 3 Recap & Week 4 Intro</a></ListItem>
                    <ListItem>(Week 3) 9/19: <a href="/2019/week3">Week 2 Recap & Week 3 Intro</a></ListItem>
                    <ListItem>(Week 2) 9/11: <a href="/2019/week1">Introduction of FHLC and a week 1 Recap</a></ListItem>
                    <ListItem>(Preseason) 9/5: <a href="/kmishdraft2019">Kmish Draft Grades</a></ListItem>
                    <ListItem>(Preseason) 9/4: <a href="https://drive.google.com/file/d/1JLD7FOovsOMG9zJWF-Im-a45_yr8ID0F/view?fbclid=IwAR2lhAbW8ge4y3g0wUUJ9EGT8wWAwtHNJR5bTB9jJMNrRMOJG7L5Cuz10zs">CrewCast Draft Day Final</a></ListItem>
                    <ListItem>(Preseason) 9/4: <a href="/predictions2019">2019 Season Predictions</a></ListItem>
                    <ListItem>(Preseason) 8/29: <a href="/review2018">Reviewing 2018</a></ListItem>
                    <ListItem>(Preseason) 8/27: <a href="/sos2019">Stength of Schedules</a></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </List>
            </div>
        )
    }
}

export default Media;