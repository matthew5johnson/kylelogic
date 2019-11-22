import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Blake from './franchises/blake';
import Crockett from './franchises/crockett';
import Doug from './franchises/doug';
import Gaudet from './franchises/gaudet';
import Joseph from './franchises/joseph';
import Kfish from './franchises/kfish';
import Kyle from './franchises/kyle';
import Matt from './franchises/matt';
import Mitch from './franchises/mitch';
import Nick from './franchises/nick';
import Rtro from './franchises/rtro';
import Scott from './franchises/scott';

import LandingPage from './landingpage';
import MWM from './mwm';
import RecordBook from './recordbook';
import Media from './media';
import Test from './test';

import Comps from './competitions/comps';
import Playoffs from './competitions/playoffs';
import Marathon from './competitions/marathon';
import Cup from './competitions/leaguecup';
import Shield from './competitions/communityshield';

import SOS2019 from './media/2019/sos2019';
import Review2018 from './media/2019/review2018';
import Predictions2019 from './media/2019/predictions2019';
import Kmishdraft2019 from './media/2019/kmishdraft2019';
import Week12019 from './media/2019/week1review';
import Week3of2019 from './media/2019/week3';
import Week4of2019 from './media/2019/week4';
import Week5of2019 from './media/2019/week5';
import Week6of2019 from './media/2019/week6';
import Week7of2019 from './media/2019/week7';
import Week8of2019 from './media/2019/week8';
import Week9of2019 from './media/2019/week9';
import Week10of2019 from './media/2019/week10';
import Week11of2019 from './media/2019/week11';
import Week12of2019 from './media/2019/week12';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/recordbook" component={RecordBook} />

        <Route exact path="/blake" component={Blake} />
        <Route exact path="/crockett" component={Crockett} />
        <Route exact path="/doug" component={Doug} />
        <Route exact path="/gaudet&cameron" component={Gaudet} />
        <Route exact path="/joseph&mike" component={Joseph} />
        <Route exact path="/kfish" component={Kfish} />
        <Route exact path="/kyle" component={Kyle} />
        <Route exact path="/matt&ross" component={Matt} />
        <Route exact path="/mitch" component={Mitch} />
        <Route exact path="/nick&mickey" component={Nick} />
        <Route exact path="/rtro" component={Rtro} />
        <Route exact path="/scott&james" component={Scott} />

        <Route exact path="/competitions" component={Comps} />
        <Route exact path="/playoffs" component={Playoffs} />
        <Route exact path="/marathon" component={Marathon} />
        <Route exact path="/leaguecup" component={Cup} />
        <Route exact path="/communityshield" component={Shield} />

        <Route exact path="/sos2019" component={SOS2019} />
        <Route exact path="/review2018" component={Review2018} />
        <Route exact path="/predictions2019" component={Predictions2019} />
        <Route exact path="/kmishdraft2019" component={Kmishdraft2019} />
        <Route exact path="/2019/week1" component={Week12019} />
        <Route exact path="/2019/week3" component={Week3of2019} />
        <Route exact path="/2019/week4" component={Week4of2019} />
        <Route exact path="/2019/week5" component={Week5of2019} />
        <Route exact path="/2019/week6" component={Week6of2019} />
        <Route exact path="/2019/week7" component={Week7of2019} />
        <Route exact path="/2019/week8" component={Week8of2019} />
        <Route exact path="/2019/week9" component={Week9of2019} />
        <Route exact path="/2019/week10" component={Week10of2019} />
        <Route exact path="/2019/week11" component={Week11of2019} />
        <Route exact path="/2019/week12" component={Week12of2019} />
    </Switch>
)

export default Main;