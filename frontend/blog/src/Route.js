import React  from 'react';
import { Route } from 'react-router-dom';
import AppDetail from './components/AppDetail';
import AppList from './components/AppList';

const BaseRouter = () => {
   return(
        <div>
            <Route exact path ='/' component={AppList}/>
            <Route exact path ='/:articleid' component={AppDetail}/>
        </div>
   );
};

export default BaseRouter;