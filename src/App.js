

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './Components/Pages/index';
import Layout from "./Components/Partials/layout";
import Authors from "./Components/Pages/Authors/List";
import Contact from "./Components/Pages/contact";
import Blog from "./Components/Pages/blog";
import Shimmer from "./Components/Pages/shimmer";
import ScrollToTop from "./Components/Partials/ScrollToTop";

function App() {
  
  return (
    <>
    
      <Router>
        <ScrollToTop />
        <Layout>
          
          <Switch>
           <Route path="/" exact component={Index} />
           <Route path ="/authors"  component={Authors} />
           <Route path ="/blogs"  component={Blog} />
           <Route path ="/contact"  component={Contact} />
           <Route path ="/shimmer"  component={Shimmer} />

        </Switch>
        </Layout>
        
      </Router>
    </>
  );
}

export default App;
