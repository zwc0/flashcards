import { StateUpdater, useRef, useState } from "preact/hooks";
import { Deck } from "./Home";

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
    const refInput = useRef<HTMLInputElement>(null);

    return (
        <>
            <div>
                {list.map(d=>(
                    <div>
                        {d.name}
                    </div>
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