<script lang="ts">
    import {PieChart} from "@carbon/charts-svelte";
    import "@carbon/styles/css/styles.css";
    import "@carbon/charts/styles.css";
    import {Button} from "carbon-components-svelte";

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
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<a href="/random"><Button>Random</Button></a>

<PieChart
        data={data}
        options={{"title":"Pie", "height": "400px"}}></PieChart>