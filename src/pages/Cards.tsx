import { StateUpdater, useRef, useState } from "preact/hooks";
import { Deck, FlashCard } from "./Home";

function CardItem({
    deck,
    card,
    setList
}: {
    deck: Deck;
    card: FlashCard;
    setList: StateUpdater<Deck[]>;
}) {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(card.question);
    const [newAnswer, setAnswer] = useState<string>(card.answer);
    const saveNewTitle = (e) => {
        // e.stopPropagation();
        // e.preventDefault();
        // setList(p=>{
        //     const arr = structuredClone(p);
        //     const item = arr.find(x=>x.name === deck.name);
        //     if (item)
        //         item.name = newTitle;
        //     return arr;
        // });
        // setIsEdit(false);
    }
    const remove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setList(p=>{
            const index = p.findIndex(x=>x === deck);
            const arr = [...p];
            arr[index] = {...deck, cards: deck.cards.filter(x=>x!==card)};
            return arr;
        });
    }

    return (
        <form class={'flex gap-2 items-center'} onSubmit={saveNewTitle}>
            {isEdit
                ? <input class='grow border border-blue-800 rounded-md text-black'
                    value={newTitle}
                    onInput={({currentTarget})=>setNewTitle(currentTarget.value)} />
                : <div class='grow'>
                    <div>{card.question}</div>
                    <div>{card.answer}</div>                    
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
                    class='bg-red-600 rounded-md p-1 px-2 text-white' onClick={remove}
                >
                        Delete
                </button>
            </div>
        </form>
    )
}

export default function Cards({
    deck,
    setList,
    setDeck
}: {
    deck: Deck;
    setList: StateUpdater<Deck[]>;
    setDeck: StateUpdater<string>;
}){
    const [title, setTitle] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <>
            <div class='flex gap-2 items-center'>
                <button type="button"
                    class='bg-blue-800 rounded-md p-1 px-2 mr-4 text-white'
                    onClick={()=>setDeck('')}
                >
                        Back
                </button>
                <span class='grow'>
                    {deck.name}
                </span>
            </div>
            <div>
                {deck.cards.map(x=>(
                    <CardItem card={x} deck={deck} setList={setList} />
                ))}
            </div>
            <form class='flex gap-4 pt-2' onSubmit={(e)=>{
                e.stopPropagation();
                e.preventDefault();
                setList(p=>{
                    const arr = [...p];
                    const index = p.findIndex(x=>x === deck);
                    arr[index] = {...deck, cards: [...deck.cards, {question: title, answer}]};
                    return arr;
                });
                setTitle('');
                setAnswer('');
            }}>
                <div class='grow'>
                    <input class='w-full border border-blue-800 rounded-md text-black'
                        value={title} onChange={({currentTarget})=>{setTitle(currentTarget.value)}} />
                    <textarea class='w-full border border-blue-800 rounded-md text-black'
                        value={answer} onChange={({currentTarget})=>{setAnswer(currentTarget.value)}} />
                </div>
                <button type="submit" class='bg-blue-800 rounded-md p-1 px-2 text-white'>Add Card</button>
            </form>
        </>
    )
}