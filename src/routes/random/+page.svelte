<script lang="ts">

    import {Button} from "carbon-components-svelte";

    const keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    const types = ['Major', 'Minor'];
    const inversions = ['Root Inversion - 1 3 5', '1st Inversion - 3 5 1', '2nd Inversion - 5 1 3'];
    let key = keys[0];
    let type = types[0];
    let inversion = inversions[0];

    let intervalId;



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
        inversion = inversions[Math.floor(Math.random()*inversions.length)];
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
<div>{inversion}</div>

<div>
    <Button on:click={startInterval}>Start</Button>
    <Button on:click={stopInterval}>Stop</Button>
    <Button on:click={doAtInterval}>Next</Button>
</div>