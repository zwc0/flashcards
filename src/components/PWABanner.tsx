import {useState, useEffect} from 'preact/hooks';

let refreshing;
if (navigator?.serviceWorker)
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
    });

export default () => {
    const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  
    useEffect(() => {
        if(!('serviceWorker' in navigator))
            return;
        navigator.serviceWorker.register('sw.js').then(reg=>{
            if (reg.waiting)
                return setWaitingWorker(reg.waiting);
            reg.addEventListener('updatefound', ()=>{
                const newWorker = reg.installing;
                if (!newWorker)
                    return;
                newWorker.addEventListener('statechange', ()=>{
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller)
                        setWaitingWorker(newWorker);
                })
            })
        });
    }, []);
  
    const reloadPage = () => {
        if (!waitingWorker) return;
        waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    };

    if (!waitingWorker)
        return <></>;
    return <div className='sticky bottom-0 p-1 mt-4 bg-blue-500 text-white text-center'>
        <span>Update available. </span>
        <button onClick={reloadPage} className="font-bold underline">
            Click here
        </button>
        <span> to install.</span>
    </div>;
}