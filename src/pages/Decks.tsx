import { StateUpdater, useRef, useState } from "preact/hooks";
import { Deck } from "./Home";

function DeckItem({
    deck,
    setDeck,
    setList
}: {
    deck: Deck;
    setDeck: StateUpdater<string>;
    setList: StateUpdater<Deck[]>;
}) {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(deck.name);
    const saveNewTitle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setList(p=>{
            const arr = structuredClone(p);
            const item = arr.find(x=>x.name === deck.name);
            if (item)
                item.name = newTitle;
            return arr;
        });
        setIsEdit(false);
    }
    const removeDeck = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setList(p=>p.filter(x=>x!==deck));
    }

    return (
        <form class={'flex gap-2 items-center'} onSubmit={saveNewTitle}>
            {isEdit
                ? <input class='grow border border-blue-800 rounded-md text-black'
                    value={newTitle}
                    onInput={({currentTarget})=>setNewTitle(currentTarget.value)} />
                : <div class='grow' onClick={()=>setDeck(deck.name)}>
                    {deck.name}
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
                    class='bg-red-600 rounded-md p-1 px-2 text-white' onClick={removeDeck}
                >
                        Delete
                </button>
            </div>
        </form>
    )
}

export default function Decks({
    list,
    setList,
    setDeck
}: {
    list: Deck[];
    setList: StateUpdater<Deck[]>;
    setDeck: StateUpdater<string>;
}){
    const [title, setTitle] = useState('');

    return (
        <>
            <div class='grow flex flex-col gap-4 min-h-0 overflow-auto'>
                {list.map(d=>(
                    <DeckItem deck={d} setDeck={setDeck} setList={setList} />
                ))}
            </div>
            <form class='flex gap-4 pt-2' onSubmit={(e)=>{
                e.preventDefault();
                setList(p=>[...p, {name: title, cards: []}]);
                setDeck(title);
                setTitle('');
            }}>
                <input class='grow border border-blue-800 rounded-md text-black'
                    value={title} onChange={({currentTarget})=>{setTitle(currentTarget.value)}} />
                <button type="submit" class='bg-blue-800 rounded-md p-1 px-2 text-white'>Add Item</button>
            </form>
        </>
    )
}