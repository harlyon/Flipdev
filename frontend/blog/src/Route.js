import React  from 'react';
import { Route } from 'react-router-dom';
import AppList from './AppList';
import AppDetail from './AppDetail';

const BaseRouter = () => {
   return(
        <div>
            <Route exact path ='/' component={AppList}/>
            <Route exact path ='/:articleID' component={AppDetail}/>
        </div>
   );
};

export default BaseRouter;