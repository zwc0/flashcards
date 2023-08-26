import {useEffect, useRef, useState} from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import pkg from '../../package.json';

type TListItem = {
    done: boolean;
    title: string;
    children: TListItem[];
};

const ListItem =
({done, title, children, onClickTitle, onChangeDone, removeItem, editTitle, className = ''}
: TListItem & {
    onClickTitle: any;
    onChangeDone: any;
    removeItem: any;
    editTitle: any;
    className?: string;
}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(title);
	const refInput = useRef<HTMLInputElement>(null);
    const saveNewTitle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        editTitle(title, newTitle);
        setIsEdit(false);
    }
	useEffect(()=>{refInput.current?.focus()}, [isEdit]);


    return (
        <form class={'flex gap-2 items-center ' + className} onSubmit={saveNewTitle}>
            <div>
                <input type="checkbox" checked={done} onChange={()=>onChangeDone({title, done: !done})} />
            </div>
            {isEdit
                ? <input class='grow border border-blue-800 rounded-md text-black'
					ref={refInput}
                    value={newTitle}
                    onInput={({currentTarget})=>setNewTitle(currentTarget.value)} />
                : <div class={`grow ${!done ? '' : 'line-through'}`} onClick={()=>onClickTitle({title})}>
                    {title}
                </div>
            }
            <div class="min-w-fit">
                {isEdit
                ? <button type="submit"
                    class='bg-blue-800 rounded-md p-1 px-2 mr-4 text-white'>Save</button>
                : <button type="button"
                    class='bg-blue-800 rounded-md p-1 px-2 mr-4 text-white' onClick={(e)=>{
						e.preventDefault();
						e.stopPropagation();
						setIsEdit(true);
					}}>Edit</button>
                }
                <button type="button"
                    class='bg-red-600 rounded-md p-1 px-2 text-white' onClick={()=>{removeItem({title})}}>Delete</button>
            </div>
        </form>
    )
}

const tryParseJson: <T>(json) => T | null = (json) => {
    try {
        if (typeof json !== 'string')
            return null;
        return JSON.parse(json);
    }catch(e){
        return null;
    }
}

const initList = () => tryParseJson<TListItem[]>(localStorage.getItem('shoppingList')) || [];

const getCurrList = (indexArr: string[], list: TListItem[]) => {
    return !indexArr.length ? list : indexArr.reduce((p,c) => {
        return p.find(l=>l.title === c)?.children ?? [];
    }, list)
}

const clone: <T>(json: T) => T = (json) => JSON.parse(JSON.stringify(json));

function on<K extends keyof HTMLElementEventMap>(
    target: HTMLElement | undefined | null,
    key: K,
    fn: (e: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions
){
    if (!target)
        return ()=>{};
    target.addEventListener(key, fn, opts ?? false);
    return () => target.removeEventListener(key, fn, opts ?? false);
}
const reorderDiffMin = 50;
const Home = () => {
    const [list, setList] = useState<TListItem[]>(initList());
	const [isDark, setIsDark] = useState(tryParseJson(localStorage.getItem('shoppingListDark') || false) || false);
    const [newTitle, setNewTitle] = useState<string>('');
    const [indexArr, setIndexArr] = useState<string[]>([]);
    const refInputAdd = useRef<HTMLInputElement>(null);
    const currList = getCurrList(indexArr, list);
    const dragRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const off = on(dragRef.current, 'pointerdown', ({clientX: xStart, clientY: yStart, target})=>{
            const item = target instanceof HTMLFormElement ? target : target instanceof HTMLElement ? target.closest('form') : null;
            if (!item)
                return;
            const startIndex = [...item.parentElement?.children ?? item].findIndex(e=>e===item);
            const date = +new Date();
            let lastEl;

            function clear(){
                offUp();
                offMove();
                offTouchUp();
            }

            const offTouchUp = on(document.body, 'touchend', e=>{
                const t = e.changedTouches[0];
                const target = document.elementFromPoint(t.clientX, t.clientY);
                lastEl = target;
                checkAndUpdate();
                // const item = target instanceof HTMLFormElement ? target : target instanceof HTMLElement ? target.closest('form') : null;
                // alert(item?.textContent || 'nope');
            });

            function checkAndUpdate(){
                const target = lastEl;
                const item = target instanceof HTMLFormElement ? target : target instanceof HTMLElement ? target.closest('form') : null;
                if (!item)
                    return clear();
                const index = [...item.parentElement?.children ?? item].findIndex(e=>e===item);
                if (index === startIndex)
                    return clear();

                setList((list)=>{
                    const newList = clone(list);
                    let newCurrList;
                    setIndexArr(arr=>{
                        newCurrList = getCurrList(arr, newList);
                        return arr;
                    });
                    newCurrList.splice(index, 0, newCurrList.splice(startIndex, 1)[0]);
                    console.log({list, newList});
                    return newList;
                });
                clear();
            }
            const offUp = on(document.body, 'pointerup', (e)=>{
                if ((+new Date() - date) < 500)
                    return clear();
                lastEl = e.target;
                checkAndUpdate();
            });

            const offMove = on(document.body, 'pointermove', ({clientY, clientX})=>{
                if ((+new Date() - date) < (500) && (
                    (yStart - clientY) > 20
                    || (xStart - clientX) > 20
                )){
                    offUp();
                    offMove();
                }
            });
        });
        return off;
    }, [])

	useEffect(()=>{
		document.body.classList.toggle('dark', isDark);
		localStorage.setItem('shoppingListDark', `${isDark}`);
	}, [isDark]);

    const addItem = (e) => {
        e.preventDefault();
        if (!newTitle)
            return;
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        if (newCurrList.some(l=>l.title === newTitle))
            return;
        newCurrList.push({done: false, title: newTitle, children: []});
        setList(newList);
        setNewTitle('');
        refInputAdd.current?.focus();
    }
    const removeItem = ({title}) => {
        const doDelete = confirm(`Delete item (${title})?`);
        if (!doDelete)
            return;
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const index = newCurrList.findIndex(x=>x.title === title);
        newCurrList.splice(index, 1);
        setList(newList);
    }
    const editTitle = (title: string, newTitle: string) => {
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const item = newCurrList.find(l=>l.title === title);
        if (!item || newCurrList.some(l=>l.title === newTitle))
            return;
        item.title = newTitle;
        setList(newList);
    }
    const onChangeDone = ({title, done}) =>{
        const newList = clone(list);
        const newCurrList = getCurrList(indexArr, newList);
        const item = newCurrList.find(l=>l.title === title);
        if (!item)
            return newCurrList;
        item.done = done;
        setList(newList);
    }
    const onClickTitle = ({title}) => {
        setIndexArr(p => {
            const newArr = clone(p);
            newArr.push(title);
            return newArr;
        });
    }
    const back = () => {
        const newArr = clone(indexArr);
        newArr.pop();
        setIndexArr(newArr);
    }
    function exportList(){
        const a = document.createElement('a');
		a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(currList)));
		a.setAttribute('download', 'ShoppingList.json');
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
    }
	async function importList(e: JSXInternal.TargetedEvent<HTMLInputElement, Event>){
		//@ts-ignore
		const clearInput = () => {e.target.value = null};
		try{
			const file = e.currentTarget.files?.[0];
			if (!file)
				return clearInput();
			const text = await file.text();
			const json = JSON.parse(text);
			if (
				!Array.isArray(json) || !json.length
				|| !json.every(
					e => (
						'done' in e && typeof e.done ==='boolean'
						&& 'title' in e && typeof e.title === 'string'
						&& 'children' in e && Array.isArray(e.children)
					)
				)
			){throw 'invalid object keys';}
			const wasConfirmed = confirm('Are you sure you want to import the items from this file?');
			if (!wasConfirmed)
				return clearInput();
			const newList = clone(list);
			const newCurrList = getCurrList(indexArr, newList);
			let anyFailed = false;
			json.forEach(e=>{
				if (newCurrList.some(l=>l.title === e.title))
					return anyFailed = true;
				newCurrList.push(e);
			});
			setList(newList);
			if (anyFailed)
				alert('One or more items could not be imported as an item already exists with the same name.');
		}catch(e){
			console.error(e);
			return alert('Unable to import. File data invalid.');
		}
		clearInput();
	}

    localStorage.setItem('shoppingList', JSON.stringify(list));

    return (
        <>
            <div class='flex flex-wrap items-center mb-2'>
				<h1 class="grow text-2xl text-center">Shopping List</h1>
				<label class="bg-blue-800 rounded-md p-1 px-2 mr-4 text-white">
					Import
					<input type="file" accept=".json" onChange={importList} class="hidden" />
				</label>
				<button type="button" onClick={exportList} class="bg-blue-800 rounded-md p-1 px-2 mr-4 text-white">Export</button>
				<svg onClick={()=>setIsDark(!isDark)} class='w-6 h-6 block dark:hidden' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#1C274C"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="#1C274C"/>
				</svg>
				<svg onClick={()=>setIsDark(!isDark)} class='w-6 h-6 hidden dark:block' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
				</svg>
            </div>
            <div class="text-sm">v{pkg.version}</div>
            <div>
                {
                    indexArr.length > 0 && <button type="button"
                        class='bg-blue-800 rounded-md p-1 px-2 mr-4 text-white' onClick={back}>Back</button>
                }
                {indexArr.join(' - ')}
            </div>
            <div ref={dragRef} className="grid divide-blue-800 divide-y gap-1">
                {currList.map((li)=>(
                    <ListItem className="pt-1" key={li.title} done={li.done} title={li.title} children={li.children}
                        onClickTitle={onClickTitle} onChangeDone={onChangeDone}
                        removeItem={removeItem} editTitle={editTitle} />
                ))}
            </div>
            <form className='flex gap-4 pt-2' onSubmit={addItem}>
                <input ref={refInputAdd} class='grow border border-blue-800 rounded-md text-black'
                    value={newTitle} onChange={({currentTarget})=>{setNewTitle(currentTarget.value)}} />
                <button type="submit" class='bg-blue-800 rounded-md p-1 px-2 text-white'>Add Item</button>
            </form>
        </>
    );
}

export default Home;