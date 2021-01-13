import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Aboutthebox from './screens/ABOUTTHEBOX'
import ComfTheBox from './screens/COMFTHEBOX'
import DevelopYourBox from './screens/DEVELOPYOURBOX'
import Facebox from './screens/FACEBOX'
import LearnWithTheBox from './screens/LEARNWITHBOX'
import LifeBox from './screens/LIFEBOX'
import Newsbox from './screens/NEWSBOX'
import SingleCom from './screens/SingleCom'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Facebox} />
      <Route path="/about" component={Aboutthebox} />
      <Route path="/comofthebox" component={ComfTheBox} />
      <Route path="/learnwiththebox" component={LearnWithTheBox} />
      <Route path="/developyourbox" component={DevelopYourBox} />
      <Route path="/newsbox" component={Newsbox} />
      <Route path="/lifebox" component={LifeBox} />
      <Route path="/comsingle" component={SingleCom} />
     </Switch>
    </BrowserRouter>
   
  )
}

export default Routes
