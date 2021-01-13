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

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Facebox} />
      <Route path="/about" component={Aboutthebox} />
      <Route path="/comfthebox" exact component={ComfTheBox} />
      <Route path="/learnwiththebox" exact component={LearnWithTheBox} />
      <Route path="/developyourbox" exact component={DevelopYourBox} />
      <Route path="/newsbox" exact component={Newsbox} />
      <Route path="/lifebox" exact component={LifeBox} />
     </Switch>
    </BrowserRouter>
   
  )
}

export default Routes
