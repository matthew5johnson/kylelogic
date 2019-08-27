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

import SOS2019 from './media/2019/sos2019';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/media" component={Media} />
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

        <Route exact path="/sos2019" component={SOS2019} />
    </Switch>
)

export default Main;