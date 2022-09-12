<script lang="ts">
    import {PieChart} from "@carbon/charts-svelte";
    import {Button} from "carbon-components-svelte";
    import supabase from "../db";

    let data = [
        {
            "group": "2V2N 9KYPM version 1",
            "value": 20000,
        },
        {
            "group": "L22I P66EP L22I P66EP L22I P66EP",
            "value": 85000
        },
        {
            "group": "JQAI 2M4L1",
            "value": 75000
        },
        {
            "group": "J9DZ F37AP",
            "value": 100200
        },
        {
            "group": "YEL48 Q6XK YEL48",
            "value": 10000
        },
        {
            "group": "Misc",
            "value": 25000
        }
    ];

    function getData() {
        supabase.from('todos').then((value) => {
            console.log('data', value);
        });
    }

    function insertData() {
        supabase.from('todos').insert({
            text: 'new todo',
            completed: false,
            user_id: '4c27a3e0-cbaf-4b60-926a-e613b07f283f'
        }).then((value) => {
            getData();
        })
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<a href="/random">
    <Button>Random</Button>
</a>
<Button on:click={getData}>Get Data</Button>
<Button on:click={insertData}>Insert Data</Button>

<PieChart
        data={data}
        options={{"title":"Pie", "height": "400px"}}></PieChart>