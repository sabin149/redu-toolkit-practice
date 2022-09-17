import { useState } from "react";
import PieChart from "react-apexcharts";

const PatientsByAgeGroup = () => {

    const [show, setShow] = useState(0);

    const Weekly = [200, 230, 348, 170]
    const Monthly = [400, 430, 448, 370]
    const Yearly = [300, 430, 148, 470]

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
                width: 400
            },
            labels: ['19-59 yrs', '60+ yrs', '6-18 yrs', '0-5 yrs'],
              colors: ["#CF9B9B", "#76BDF0", "#9D76F0", "#F07694"],
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
                    width={400}
                    height={400}
                    
                />

            </div></>
    );
}
export default PatientsByAgeGroup;
