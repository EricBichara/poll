<script lang="ts">
    import {PieChart} from "@carbon/charts-svelte";
    import "@carbon/styles/css/styles.css";
    import "@carbon/charts/styles.css";

    let selectedId = 2;

    let availableThemes = [{id: 0, text: 'white'}, {id: 1, text: 'g10'}, {id: 2, text: 'g80'}, {
        id: 3,
        text: 'g90'
    }, {id: 4, text: 'g100'}]

    function getTheme(themeId) {
        const thetheme = availableThemes.find(item => item.id === themeId);
        return thetheme.text;
    }

    function updateChart() {
        data[1].value += 10000;
        data = data;
    }

    $: theme = getTheme(selectedId);

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

<PieChart
        data={data}
        options={{"title":"Pie", "height": "400px"}}></PieChart>