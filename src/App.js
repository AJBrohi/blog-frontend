import './App.css';
import Topbar from './component/Topbar/Topbar';
import Home from './component/Pages/Home/Home';
import SingleBlogPost from './component/Pages/SingleBlogPost/SingleBlogPost';
import WriteBlogs from './component/Pages/WriteBlogs/WriteBlogs';
import Settings from './component/Pages/Settings/Settings';

function App() {
  return (
    <>
      <Topbar />
      {/* <Home/> */}
      {/* <SingleBlogPost /> */}
      {/* <WriteBlogs /> */}
      <Settings />
    </>
  );
}

export default App;
