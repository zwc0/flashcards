import { StateUpdater, useMemo, useRef, useState } from "preact/hooks";
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
        <form class={'flex gap-2 items-center'} onSubmit={saveNewTitle}>
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

export default function Review({
    deck,
    setIsReview
}: {
    deck: Deck;
    setIsReview: StateUpdater<boolean>;
}){
    const [index, setIndex] = useState(0);
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const cards = useMemo(()=>[...deck.cards].sort(() => Math.random() - 0.5), []);

    return (
        <>
            <div class='flex gap-2 items-center'>
                <Button type="button"
                    onClick={()=>setIsReview(false)}
                >
                    Back
                </Button>
                <span class='grow'>
                    {deck.name}
                </span>
            </div>
            <div class='grow flex flex-col gap-4 min-h-0 py-2 text-center overflow-auto divide-y divide-y-black dark:divide-y-white'>
                <div class=''>
                    {cards.at(index)?.question}
                </div>
                <div class='grow pt-4' onClick={()=>setIsAnswerShown(true)}>
                    {
                        isAnswerShown
                        ? cards.at(index)?.answer
                        : 'Click here to show answer'
                    }
                </div>
            </div>
            <div>
                <button type="button"
                    class='bg-blue-800 rounded-md p-1 px-2 mr-4 text-white'
                    onClick={()=>{
                        setIsAnswerShown(false);
                        setIndex(p=>p === 0 ? (cards.length-1) : (p-1));
                    }}
                >
                    Back
                </button>
                <button type="button"
                    class='bg-blue-800 rounded-md p-1 px-2 mr-4 text-white'
                    onClick={()=>{
                        setIsAnswerShown(false);
                        setIndex(p=>(cards.length - 1) > p ? (p+1) : 0);
                    }}
                >
                    Next
                </button>
            </div>
        </>
    )
}