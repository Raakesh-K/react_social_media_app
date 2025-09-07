import { useContext } from 'react';
import Feed from './feed';
import DataContext from '../../../hooks/datacontext';

const Home = () =>
   { const { searchResult, error, isloading } = useContext(DataContext);
 return (
   <main className="Home">
     {isloading && 
     <p className="statusMsg">Loading posts...</p>}
      {!isloading && error && ( <p className="statusMsg" style={{ color: "red" }}> Error while fetching data </p> )} 
      {!isloading && !error && ( searchResult.length > 0 ? ( <Feed posts={searchResult} /> ) :
       ( <p className="statusMsg">No posts to display.</p> ) )} 
       </main> );
        };

export default Home;
