import { useState } from "react";
import PieChart from "react-apexcharts";

const PatientsByCaste = () => {

    const [show, setShow] = useState(0);

    const Weekly = [200, 230, 348, 170,100]
    const Monthly = [400, 430, 448, 370,100]
    const Yearly = [300, 430, 148, 470,100]

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
            chart: {
                type: 'pie',
                width: 450
            },
            labels: ['Rai', 'Sapkota', 'Adhikari', 'Shrestha',"Magar"],
              colors: ["#CF9B9B", "#76BDF0", "#9D76F0", "#F07694", "#CA498C"],
            dataLabels: {
                formatter(val, opts) {
                    const name = opts.w.globals.labels[opts.seriesIndex]
                    return [name, val.toFixed(1) + '%']
                  }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 450
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
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
                <PieChart
                    options={graphData.options}
                    series={show === 0 ? Weekly : show === 1 ? Monthly : Yearly}
                    type="pie"
                    width={450}
                    height={450} 
                />

            </div></>
    );
}
export default PatientsByCaste;
