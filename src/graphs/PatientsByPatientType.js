import React, { useState } from 'react'
import Chart from "react-apexcharts"

const PatientsByPatientType = () => {

    const [show, setShow] = useState(0);

    const Weekly = [200, 230]
    const Monthly = [400, 430]
    const Yearly = [300, 430]

    const data = () => {
        if (show === 0) {
            return Weekly
        } else if (show === 1) {
            return Monthly
        }
        return Yearly
    }

    const graphData = {
        series: [{
            data: data()
        }],
        options: {
            // chart: {
            //     type: 'pie',
            //     width: 400
            // },
            labels: ['General', 'IWW',],
            colors: ["#CF9B9B", "#76BDF0"],
            dataLabels: {
                enabled: true
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 400
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            // stroke: {
            //     show: true,
            //     curve: "straight",
            //     lineCap: 'square',
            //     colors: undefined,
            //     width: 2,
            //     dashArray: 0,
            // },
            // plotOptions: {
            //     pie: {
            //         startAngle: 10,
            //         endAngle: 360,
            //         expandOnClick: true,
            //         offsetX: 10,
            //         offsetY: 20,
            //         customScale: 5,
            //         dataLabels: {
            //             offset: 10,
            //             minAngleToShowLabel: 10
            //         }
            //     }
            // },
            legend: {
                show: true
            },
            chart: {
                type: 'pie',
                width: 400,
                toolbar: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                        reset: true | '<img src="/static/icons/reset.png" width="20">',
                        customIcons: []
                    },
                    export: {
                        csv: {
                            filename: "myData",
                            columnDelimiter: ',',
                            headerCategory: 'category',
                            headerValue: 'value',
                            dateFormatter(timestamp) {
                                return new Date(timestamp).toDateString()
                            }
                        },
                        svg: {
                            filename: undefined,
                        },
                        png: {
                            filename: undefined,
                        },

                    },
                    autoSelected: 'zoom',


                },
                zoom: {
                    enabled: true,
                    type: 'x',
                    autoScaleYaxis: false,
                    zoomedArea: {
                        fill: {
                            color: '#90CAF9',
                            opacity: 0.4
                        }
                    }
                }

            },

        }

    }

    return (
        <>
            <div className="buttons" style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
                marginTop: "20px"
            }}>
                <button onClick={() => {
                    setShow(0)
                }}>Weekly</button>
                <button onClick={() => {
                    setShow(1)
                }}>Monthly</button>
                <button onClick={() => {
                    setShow(2)
                }}>Yearly</button>

            </div>
            <h1 style={{
                textAlign: "center",
            }}>{show === 0 ? "Weekly" : show === 1 ? "Monthly" : "Yearly"}</h1>
            <div className="App" style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
            }}>
                <Chart
                    options={graphData.options}
                    series={show === 0 ? Weekly : show === 1 ? Monthly : Yearly}
                    type="pie"
                    width={400}
                    height={400}

                />

            </div></>
    )
}

export default PatientsByPatientType