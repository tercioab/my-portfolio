export default function RecomendCard({text, name, image, title}) {
    return (

<div id="toast-message-cta" class="w-full h-full object-contain p-4 bg-black rounded-lg shadow border-x-2 border-green-400" >
    <div class="flex">
                <img class="w-8 h-8 rounded-full shadow-lg" src={image} />
        <div class="ml-3 text-sm font-normal">
                    <span class="mb-1 text-sm font-semibold text-white">{name}</span>
                    <div class="mb-2 text-sm font-normal font-normal text-white ">{title}</div> 
            <div class="mb-2 text-sm  text-white font-normal">{text}</div> 
           
        </div>
    </div>
</div>

    )
}