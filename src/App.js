import "./App.css";
import { FollowSuggestionsList } from "./components/FollowSuggestionsList/FollowSuggestionsList";
import { HomeHeader } from "./components/HomeHeader/HomeHeader";
import Login from "./components/Login/Login.js";
import { Post } from "./components/Post/Post";
import { Search } from "./components/Search/Search";
import { SideNav } from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      {/*  <Login /> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          boxSizing: "border-box",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <SideNav />
        <div
          style={{
            width: "50%",
            borderRight: "0.1rem solid #eee",
            borderLeft: "0.1rem solid #eee",
            height: "100vh",
            flexBasis: "50%",
            position: "relative",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          <div
            style={{
              position: "fixed",
              width: "42.3%",
              backgroundColor: "#fff",
              paddingTop: "1.5rem",
            }}
          >
            <Search />
            <HomeHeader />
          </div>

          <div style={{ marginTop: "146px" }}>
            <div
              className="example"
              style={{
                overflowY: "scroll",
                minHeight: "calc(100vh - 70px)",
                borderRight: "0.1rem solid #eee",
                borderLeft: "0.1rem solid #eee",
                height: "100vh",
              }}
            >
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
        <FollowSuggestionsList />
      </div>
    </div>
  );
}

export default App;
