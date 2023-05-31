<script lang="ts" context="module">
import type {HTMLProps, HTMLAttributes, NavigationEvent} from "./$types"

export type ScrollY = HTMLProps<"svelte:window", HTMLAttributes<any>>
export type Page = NavigationEvent
export type NavbarData = {
    index: number,
    page: NavigationEvent 
    scrolled: ScrollY
}

let test = {test: "me"
}

</script>