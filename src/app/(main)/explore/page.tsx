import { ExploreHeader } from "./components/ExploreHeader"
import { ExploreLeft } from "./components/ExploreLeft"
import { ExploreMain } from "./components/ExploreMain"

 const ExploreHome=()=>{
    return(
        <div className="">
            <ExploreHeader/>
            <ExploreMain/>
            <ExploreLeft/>
        </div>
    )
}
export default ExploreHome