import {render} from 'preact';
import Home from './pages/Home';
import PWABanner from './components/PWABanner';
import { useEffect } from 'preact/hooks';

// let height = 0;
// async function updateScreenHeight(){
//     const h = window.innerHeight;
//     if (!h || h === height)
//         return;
//     height = h;
//     document.body.style.setProperty('--screen-h', `${h-1}px`);
// }

const App = () => {
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         updateScreenHeight();
    //     }, 1000);
    //     return ()=>clearInterval(interval);
    // }, []);

    return (<>
        <Home />
        <PWABanner />
    </>);
}

render(<App />, document.getElementById('app') as HTMLElement);