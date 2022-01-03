import {Route} from 'react-router-dom';
import Cards from '../Pages/Home';
import Details from '../Pages/Details';

function AllpagesRouter() {
    return (
        <div>
            <Route exact path="/home">
                <Cards/>
            </Route>
            <Route exact path="/home/:id">
                <Details/>
            </Route>
        </div>
    )
}

export default AllpagesRouter;