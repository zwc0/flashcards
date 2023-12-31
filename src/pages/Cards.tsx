import { StateUpdater, useRef, useState } from "preact/hooks";
import { Deck, FlashCard } from "./Home";
import { Button } from "../components";

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
    const [newAnswer, setNewAnswer] = useState<string>(card.answer);
    const saveNewTitle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setList(p=>{
            const arr = [...p];
            const index = arr.findIndex(x=>x === deck);
            const cardIndex = deck.cards.findIndex(x=>x===card);
            arr[index] = {...deck, cards: deck.cards};
            arr[index].cards[cardIndex] = {question: newTitle, answer: newAnswer};
            return arr;
        });
        setIsEdit(false);
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
        <form class={'flex gap-2 items-center pt-2'} onSubmit={saveNewTitle}>
            {isEdit
                ? <div class='grow'>
                    <input class='w-full border border-blue-800 rounded-md text-black'
                        value={newTitle} onChange={({currentTarget})=>{setNewTitle(currentTarget.value)}} />
                    <textarea class='w-full border border-blue-800 rounded-md text-black'
                        value={newAnswer} onChange={({currentTarget})=>{setNewAnswer(currentTarget.value)}} />
                </div>
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
    setDeck,
    setIsReview
}: {
    deck: Deck;
    setList: StateUpdater<Deck[]>;
    setDeck: StateUpdater<string>;
    setIsReview: StateUpdater<boolean>;
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
            <div class='grow flex flex-col gap-2 min-h-0 py-2 overflow-auto divide-y divide-y-black dark:divide-y-white'>
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
            <div>
                <Button type="button" onClick={()=>setIsReview(true)}>
                    Review
                </Button>
            </div>
        </>
    )
}