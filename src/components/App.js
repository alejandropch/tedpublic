import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'


import Layout from './Layout'
import MainPage from '../pages/MainPage'
import NewAttendance from '../pages/NewAttendance'
import NotFound from '../pages/NotFound'

 function App(){
    return (
    
    <BrowserRouter>

        <Layout>

        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/new" component={NewAttendance} />
            <Route component={NotFound}/>
        </Switch> 
        </Layout>
    </BrowserRouter>

    )
}

export default App
