export function highChartBarOptions() {
    const options = {
        chart: {
            type: "bar",
        },
        title: {
            text: "",
        },
        tooltip: {
            enabled: false,
        },
        yAxis: {
            gridLineWidth: 0,
            visible: false,
        },
        xAxis: {
            gridLineWidth: 0,
            visible: false,
            labels: {
                enabled: false,
            },
            categories: [
                "Javascript",
                "TypeScript",
                "Next.JS",
                "Angular",
                "React.JS",
                "React Query",
                "Zustand",
                "Tailwind",
                "Node.JS",
                "Storybook",
                "MongoDB",
            ],
        },
        plotOptions: {
            bar: {
                pointWidth: 25,
            },
            series: {
                showInLegend: false,
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1,
                    },
                    stops: [
                        [0, "rgba(0, 176, 207, 0.2)"],
                        [1, "rgba(0, 176, 207, 1)"],
                    ],
                },
                dataLabels: {
                    enabled: true,
                    color: "#fff",
                    formatter: function () {
                        return this.x;
                    },
                    inside: true,
                },
            },
        },
        series: [
            {
                showInLegend: false,
                data: [9, 7, 6, 8, 7, 8, 7, 6, 7, 6],
            },
        ],
    };

    return options;
}

export default highChartBarOptions;
