import {render} from 'preact';
import Home from './pages/Home';
import PWABanner from './components/PWABanner';

const App = () => {
    return (<>
        <Home />
        <PWABanner />
    </>);
}

render(<App />, document.getElementById('app') as HTMLElement);