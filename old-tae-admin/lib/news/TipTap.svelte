<script lang="ts">
    import {onMount, onDestroy} from 'svelte'

    import {Editor} from '@tiptap/core'

    import TextStyle from '@tiptap/extension-text-style'
    import Color from '@tiptap/extension-color'
    import Paragraph from '@tiptap/extension-paragraph'
    import Text from '@tiptap/extension-text'
    import Heading from '@tiptap/extension-heading'
    import Document from '@tiptap/extension-document'

    let element: HTMLElement
    let editor: Editor; 

    export let content;

    onMount(()=>{
        editor = new Editor({
            editorProps:{
              attributes:{
                class: 'prose bg-slate-100 focus:bg-white h-[500px] overflow-scroll'
              }
            },
            element: element,
            extensions: [
                TextStyle,
                Color.configure({
                  types: ['textStyle']
                }),
                Text,
                Document,
                Paragraph.configure({
                    HTMLAttributes: {
                        class:"text-large",
                    }
                }),
                Heading.configure({
                    HTMLAttributes:{
                        class:'font-bold text-xl'
                    }
                })
            ],
            content: '<p style="font-style: italic; color:gray;">記事を入力ください、、、</p>',
            onTransaction: () => {
                editor = editor
            },
        })
    })

    onDestroy(()=>{
        if(editor){
            editor.destroy()
        }
    })
    

    function handleHeadingOne(e: Event){
      e.preventDefault()

      editor.chain().focus().toggleHeading({level: 1}).run()
    }

    function handleParagraph(e: Event){
      e.preventDefault()

      editor.chain().focus().setParagraph().run()
    }

    function handleHeadingTwo(e: Event){
      e.preventDefault()

      editor.chain().focus().toggleHeading({level: 2}).run()
    }

    function handleBlue(e: Event){
      e.preventDefault()

      editor.chain().focus().setColor("#0000ff").run()
    }
    $:content = editor?.getHTML()

</script>

{#if editor}
<div class="flex flex-row border-y-2 border-slate-600">
  <button class="mr-1"
    on:click={handleHeadingOne}
    class:active={editor.isActive('heading', { level: 1 })}
  >
    H1
  </button>
  <button class="mr-1"
    on:click={handleHeadingTwo}
    class:active={editor.isActive('heading', { level: 2 })}
  >
    H2
  </button>
  <button class="mr-1" on:click={handleParagraph}>
    P
  </button>
  <button class="mr-1" on:click={handleBlue}>BLUE</button>
</div>
{/if}

<div bind:this={element}/>
