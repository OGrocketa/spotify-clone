import { Outlet } from "react-router-dom";
import MusicPlayer from "./src/components/MusicPlayer/MusicPlayer"
import SearchBar from "./src/components/SearchBar/SearchBar"

const Layout = ()=>{
    return(
        <main className="spotify-clone">
            <div className='search-bar-container'>
                <SearchBar/>
            </div>
            <div className='main-window'>
                <Outlet/>
            </div>
            <div>
              <MusicPlayer/>
            </div>

        </main>
    )
}

export default Layout;