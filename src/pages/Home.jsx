import {ListApps} from "./loaders/appLoaders";
import {AnimButtons, AnimComponents, AnimDrag} from "./Animations";

export async function appLoader() {
    const apps = await ListApps();
    return {apps};
}

function Home() {

    return (
        <div className="flex flex-col flex-nowrap w-inherit vh:h-screen font-sans">
            {/* {navigation.state === "loading" && <PageLoader />} */}
            {/*<NavBar showAddAppButton={true}/>*/}
            {/*<HomeCarousel/>*/}
            Continuous animations
            {/*<AnimComponents/>*/}
            <AnimButtons/>

            <AnimDrag/>
        </div>
    )
}

export default Home;