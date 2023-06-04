<button
    on:click|preventDefault={() => console.log("bleep")}
    class="
    flex
    font-bold 
    p-2 
    hover:text-secondary-ultralight 
    text-xl 
    hover:bg-primary-ultradark 
    outline outline-sold 
    outline-primary-ultradark 
    rounded-xl 
    transition-all 
    shadow-lg 
    hover:scale-1.1
    hover:-translate-y-2
    "
>
    <slot />
</button>
