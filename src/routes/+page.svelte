<script lang="ts">
    import {Dropdown, Theme} from "carbon-components-svelte";


    let selectedId = 0;

    let availableThemes = [{id: 0, text: 'white'}, {id: 1, text: 'g10'}, {id: 2, text: 'g80'}, {
        id: 3,
        text: 'g90'
    }, {id: 4, text: 'g100'}]

    function getTheme(themeId){
        const thetheme = availableThemes.find(item => item.id === themeId);
        return thetheme.text;
    }

    $: theme = getTheme(selectedId);
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<Theme bind:theme></Theme>

<Dropdown
        titleText="Theme"
        selected="0"
        bind:selectedId={selectedId}
        items={availableThemes}></Dropdown>
