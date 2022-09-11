<script lang="ts">

    import {Button} from "carbon-components-svelte";

    let key = "E";

    let type = "Minor"

    let intervalId;

    const keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    const types = ['Major', 'Minor'];

    function startInterval() {
        stopInterval();
        intervalId = setInterval(doAtInterval, 10000);
    }

    function stopInterval(){
        if(intervalId){
            clearInterval(intervalId);
        }
    }

    function doAtInterval() {
        key = keys[Math.floor(Math.random() * keys.length)];
        type = types[Math.floor(Math.random()*types.length)];
    }
</script>

<style>
    div {
        font-size: 60px;
        text-align: center;
        margin-bottom: 30px;
    }
</style>

<div>{key}</div>
<div>{type}</div>

<div>
    <Button on:click={startInterval}>Start</Button>
    <Button on:click={stopInterval}>Stop</Button>
    <Button on:click={doAtInterval}>Next</Button>
</div>