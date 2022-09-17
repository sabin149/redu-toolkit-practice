import { useState } from "react";
import Chart from "react-apexcharts";

const PatientsByOccuption=()=> {

  const [show, setShow] = useState(0);

  const Weekly = [200, 230, 348, 470, 640, 580, 190]
  const Monthly = [400, 430, 448, 470, 540, 580, 690]
  const Yearly = [300, 430, 148, 470, 1040, 80, 390]

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
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
          columnWidth: '70%',
          barHeight: '90%',
          distributed: true,
          rangeBarOverlap: true,
          rangeBarGroupRows: true,
        }
      },
      colors: ["#9D76F0", "#F07694", "#76BDF0", "#CF9B9B", "#CA498C", "#7ADE90", "#F2C670"],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Education', 'Medical', 'Business', 'Software', 'Craftsman', 'Transport', 'Management',
        ], labels: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: 'Quantity',
          style: {
            color: '#000',
            fontWeight: "600",
            fontSize: "16px",
            letterSpacing: "0.5px",
          }
        },
      }
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

        <Chart options={graphData.options} series={graphData.series} type="bar" height={350} width={550} />
      </div></>
  );
}
export default PatientsByOccuption;
