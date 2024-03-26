



import React from 'react';
import { Chart } from 'react-google-charts';

function App() {
  const jsonData = {
    "status": true,
    "error": false,
    "data": {
      "combined": [
        {"date": "2024-01-01", "pnl": 292.0, "cumsum": 292.0},
        {"date": "2024-01-02", "pnl": 5547.0, "cumsum": 5839.0},
        {
          "date": "2024-01-03",
          "pnl": 2348.0,
          "cumsum": 8187.0
      },
      {
          "date": "2024-01-04",
          "pnl": 1155.0,
          "cumsum": 9342.0
      },
      {
          "date": "2024-01-05",
          "pnl": 783.8,
          "cumsum": 10125.8
      },
      {
          "date": "2024-01-08",
          "pnl": 466.2,
          "cumsum": 10592.0
      },
      {
          "date": "2024-01-10",
          "pnl": -257.0,
          "cumsum": 10335.0
      },
      {
          "date": "2024-01-11",
          "pnl": 422.5,
          "cumsum": 10757.5
      },
      {
          "date": "2024-01-15",
          "pnl": -1208.5,
          "cumsum": 9549.0
      },
      {
          "date": "2024-01-16",
          "pnl": -2496.4,
          "cumsum": 7052.6
      },
      {
          "date": "2024-01-17",
          "pnl": 5634.8,
          "cumsum": 12687.4
      },
      {
          "date": "2024-01-18",
          "pnl": 662.5,
          "cumsum": 13349.9
      },
      {
          "date": "2024-01-19",
          "pnl": 1496.2,
          "cumsum": 14846.1
      },
      {
          "date": "2024-01-20",
          "pnl": 0.1,
          "cumsum": 14846.1
      },
      {
          "date": "2024-01-23",
          "pnl": 1428.0,
          "cumsum": 16274.1
      },
      {
          "date": "2024-01-24",
          "pnl": 3789.0,
          "cumsum": 20063.2
      },
      {
          "date": "2024-01-29",
          "pnl": 4187.6,
          "cumsum": 24250.8
      },
      {
          "date": "2024-01-30",
          "pnl": 925.3,
          "cumsum": 25176.0
      },
      {
          "date": "2024-01-31",
          "pnl": 2179.3,
          "cumsum": 27355.3
      },
      {
          "date": "2024-02-01",
          "pnl": -3345.9,
          "cumsum": 24009.4
      },
      {
          "date": "2024-02-02",
          "pnl": -3300.0,
          "cumsum": 20709.4
      },
      {
          "date": "2024-02-05",
          "pnl": 1346.8,
          "cumsum": 22056.1
      },
      {
          "date": "2024-02-06",
          "pnl": 329.8,
          "cumsum": 22385.9
      },
      {
          "date": "2024-02-07",
          "pnl": 2908.7,
          "cumsum": 25294.6
      },
      {
          "date": "2024-02-08",
          "pnl": 3007.6,
          "cumsum": 28302.2
      },
      {
          "date": "2024-02-12",
          "pnl": 3362.0,
          "cumsum": 31664.2
      },
      {
          "date": "2024-02-13",
          "pnl": 3974.5,
          "cumsum": 35638.7
      },
      {
          "date": "2024-02-14",
          "pnl": 5062.5,
          "cumsum": 40701.2
      },
      {
          "date": "2024-02-15",
          "pnl": -0.1,
          "cumsum": 40701.1
      },
      {
          "date": "2024-02-16",
          "pnl": 1924.3,
          "cumsum": 42625.4
      },
      {
          "date": "2024-02-19",
          "pnl": 1648.8,
          "cumsum": 44274.2
      },
      {
          "date": "2024-02-20",
          "pnl": 2775.0,
          "cumsum": 47049.2
      },
      {
          "date": "2024-02-21",
          "pnl": 1308.2,
          "cumsum": 48357.4
      },
      {
          "date": "2024-02-22",
          "pnl": -4012.5,
          "cumsum": 44344.9
      },
      {
          "date": "2024-02-23",
          "pnl": 2118.8,
          "cumsum": 46463.7
      },
      {
          "date": "2024-02-26",
          "pnl": -2458.8,
          "cumsum": 44004.9
      },
      {
          "date": "2024-02-27",
          "pnl": -1.0,
          "cumsum": 44003.9
      },
      {
          "date": "2024-02-28",
          "pnl": 5100.2,
          "cumsum": 49104.2
      },
      {
          "date": "2024-02-29",
          "pnl": -7352.0,
          "cumsum": 41752.2
      },
      {
          "date": "2024-03-04",
          "pnl": -132.0,
          "cumsum": 41620.2
      },
      {
          "date": "2024-03-05",
          "pnl": 647.8,
          "cumsum": 42267.9
      },
      {
          "date": "2024-03-06",
          "pnl": -3880.8,
          "cumsum": 38387.2
      },
      {
          "date": "2024-03-07",
          "pnl": -2035.0,
          "cumsum": 36352.1
      },
      {
          "date": "2024-03-11",
          "pnl": 1668.0,
          "cumsum": 38020.1
      },
      {
          "date": "2024-03-12",
          "pnl": -7483.5,
          "cumsum": 30536.7
      },
      {
          "date": "2024-03-13",
          "pnl": 4823.0,
          "cumsum": 35359.7
      },
      {
          "date": "2024-03-14",
          "pnl": 2375.0,
          "cumsum": 37734.7
      }
      ],
      "FINNIFTY_MODSS": [
        {"date": "2024-01-01", "pnl": 292.0, "cumsum": 292.0},
        {"date": "2024-01-02", "pnl": 2352.0, "cumsum": 2644.0},
       
        {
          "date": "2024-01-08",
          "pnl": 740.0,
          "cumsum": 3384.0
      },
      {
          "date": "2024-01-15",
          "pnl": -1666.0,
          "cumsum": 1718.0
      },
      {
          "date": "2024-01-16",
          "pnl": -754.0,
          "cumsum": 964.0
      },
      {
          "date": "2024-01-23",
          "pnl": 1428.0,
          "cumsum": 2392.0
      },
      {
          "date": "2024-01-29",
          "pnl": 2084.0,
          "cumsum": 4476.0
      },
      {
          "date": "2024-01-30",
          "pnl": 2308.0,
          "cumsum": 6784.0
      },
      {
          "date": "2024-02-06",
          "pnl": 2168.0,
          "cumsum": 8952.0
      },
      {
          "date": "2024-02-12",
          "pnl": 3362.0,
          "cumsum": 12314.0
      },
      {
          "date": "2024-02-13",
          "pnl": 1744.0,
          "cumsum": 14058.0
      },
      {
          "date": "2024-02-19",
          "pnl": 1096.0,
          "cumsum": 15154.0
      },
      {
          "date": "2024-02-26",
          "pnl": -40.0,
          "cumsum": 15114.0
      },
      {
          "date": "2024-03-04",
          "pnl": -132.0,
          "cumsum": 14982.0
      },
      {
          "date": "2024-03-05",
          "pnl": -694.0,
          "cumsum": 14288.0
      },
      {
          "date": "2024-03-11",
          "pnl": 1668.0,
          "cumsum": 15956.0
      },
      {
          "date": "2024-03-12",
          "pnl": -5400.0,
          "cumsum": 10556.0
      }
  ],
  "BANKNIFTY_MODSS": [
      {
          "date": "2024-01-02",
          "pnl": 3195.0,
          "cumsum": 3195.0
      },
      {
          "date": "2024-01-03",
          "pnl": -739.5,
          "cumsum": 2455.5
      },
      {
          "date": "2024-01-10",
          "pnl": 2320.5,
          "cumsum": 4776.0
      },
      {
          "date": "2024-01-16",
          "pnl": -1742.2,
          "cumsum": 3033.8
      },
      {
          "date": "2024-01-17",
          "pnl": 1689.8,
          "cumsum": 4723.5
      },
      {
          "date": "2024-01-24",
          "pnl": 1674.0,
          "cumsum": 6397.5
      },
      {
          "date": "2024-01-30",
          "pnl": -1373.2,
          "cumsum": 5024.2
      },
      {
          "date": "2024-01-31",
          "pnl": 840.0,
          "cumsum": 5864.2
      },
      {
          "date": "2024-02-06",
          "pnl": -1838.2,
          "cumsum": 4026.0
      },
      {
          "date": "2024-02-07",
          "pnl": 1719.8,
          "cumsum": 5745.8
      },
      {
          "date": "2024-02-13",
          "pnl": 2230.5,
          "cumsum": 7976.2
      },
      {
          "date": "2024-02-14",
          "pnl": 2242.5,
          "cumsum": 10218.8
      },
      {
          "date": "2024-02-15",
          "pnl": -0.1,
          "cumsum": 10218.7
      },
      {
          "date": "2024-02-16",
          "pnl": 0.5,
          "cumsum": 10219.2
      },
      {
          "date": "2024-02-19",
          "pnl": -43.3,
          "cumsum": 10176.0
      },
      {
          "date": "2024-02-20",
          "pnl": 2775.0,
          "cumsum": 12951.0
      },
      {
          "date": "2024-02-21",
          "pnl": -1356.8,
          "cumsum": 11594.2
      },
      {
          "date": "2024-02-28",
          "pnl": 2607.8,
          "cumsum": 14202.0
      },
      {
          "date": "2024-02-29",
          "pnl": -2922.0,
          "cumsum": 11280.0
      },
      {
          "date": "2024-03-05",
          "pnl": 1341.8,
          "cumsum": 12621.7
      },
      {
          "date": "2024-03-06",
          "pnl": 1746.8,
          "cumsum": 14368.5
      },
      {
          "date": "2024-03-12",
          "pnl": -2083.5,
          "cumsum": 12285.0
      },
      {
          "date": "2024-03-13",
          "pnl": 685.5,
          "cumsum": 12970.5
      }
  ],
  "NIFTY_MODSS": [
      {
          "date": "2024-01-03",
          "pnl": 3087.5,
          "cumsum": 3087.5
      },
      {
          "date": "2024-01-04",
          "pnl": 1155.0,
          "cumsum": 4242.5
      },
      {
          "date": "2024-01-10",
          "pnl": -2577.5,
          "cumsum": 1665.0
      },
      {
          "date": "2024-01-11",
          "pnl": 422.5,
          "cumsum": 2087.5
      },
      {
          "date": "2024-01-16",
          "pnl": -0.1,
          "cumsum": 2087.3
      },
      {
          "date": "2024-01-17",
          "pnl": 3945.0,
          "cumsum": 6032.4
      },
      {
          "date": "2024-01-18",
          "pnl": 662.5,
          "cumsum": 6694.9
      },
      {
          "date": "2024-01-20",
          "pnl": 0.1,
          "cumsum": 6694.9
      },
      {
          "date": "2024-01-24",
          "pnl": 2115.0,
          "cumsum": 8809.9
      },
      {
          "date": "2024-01-29",
          "pnl": -0.1,
          "cumsum": 8809.8
      },
      {
          "date": "2024-01-30",
          "pnl": -9.5,
          "cumsum": 8800.3
      },
      {
          "date": "2024-01-31",
          "pnl": 1339.3,
          "cumsum": 10139.6
      },
      {
          "date": "2024-02-01",
          "pnl": -3347.9,
          "cumsum": 6791.7
      },
      {
          "date": "2024-02-05",
          "pnl": -85.8,
          "cumsum": 6705.9
      },
      {
          "date": "2024-02-07",
          "pnl": 1189.0,
          "cumsum": 7894.9
      },
      {
          "date": "2024-02-08",
          "pnl": 3007.6,
          "cumsum": 10902.5
      },
      {
          "date": "2024-02-14",
          "pnl": 2820.0,
          "cumsum": 13722.5
      },
      {
          "date": "2024-02-19",
          "pnl": -0.2,
          "cumsum": 13722.2
      },
      {
          "date": "2024-02-21",
          "pnl": 2665.0,
          "cumsum": 16387.2
      },
      {
          "date": "2024-02-22",
          "pnl": -4012.5,
          "cumsum": 12374.8
      },
      {
          "date": "2024-02-28",
          "pnl": 2492.5,
          "cumsum": 14867.2
      },
      {
          "date": "2024-02-29",
          "pnl": -4430.0,
          "cumsum": 10437.2
      },
      {
          "date": "2024-03-06",
          "pnl": -5627.5,
          "cumsum": 4809.8
      },
      {
          "date": "2024-03-07",
          "pnl": -2035.0,
          "cumsum": 2774.7
      },
      {
          "date": "2024-03-13",
          "pnl": 4137.5,
          "cumsum": 6912.2
      },
      {
          "date": "2024-03-14",
          "pnl": 2375.0,
          "cumsum": 9287.2
      }
  ],
  "MIDCPNIFTY_MODSS": [
    {
        "date": "2024-01-05",
        "pnl": 783.8,
        "cumsum": 783.8
    },
    {
        "date": "2024-01-08",
        "pnl": -273.8,
        "cumsum": 510.0
    },
    {
        "date": "2024-01-15",
        "pnl": 457.5,
        "cumsum": 967.5
    },
    {
        "date": "2024-01-19",
        "pnl": 1496.2,
        "cumsum": 2463.8
    },
    {
        "date": "2024-01-29",
        "pnl": 2103.8,
        "cumsum": 4567.5
    },
    {
        "date": "2024-02-02",
        "pnl": -3300.0,
        "cumsum": 1267.5
    },
    {
        "date": "2024-02-05",
        "pnl": 1432.5,
        "cumsum": 2700.0
    },
    {
        "date": "2024-02-16",
        "pnl": 1923.8,
        "cumsum": 4623.8
    },
    {
        "date": "2024-02-19",
        "pnl": 596.2,
        "cumsum": 5220.0
    },
    {
        "date": "2024-02-23",
        "pnl": 2118.8,
        "cumsum": 7338.8
    },
    {
        "date": "2024-02-26",
        "pnl": -2418.8,
        "cumsum": 4920.0
    }
],
"testStrategy": [
    {
        "date": "2024-02-01",
        "pnl": 2.0,
        "cumsum": 2.0
    },
    {
        "date": "2024-02-27",
        "pnl": -1.0,
        "cumsum": 1.0
    }
]
      
    },
    "message": "Data received"
  };

  const chartData = jsonData.data.combined.map(item => [item.date, item.cumsum]);
  const jsonData1 = {
    // Your JSON data here
    
      "status": true,
      "error": false,
      "data": [
          {
              "Start_Date": "2024-02-28",
              "End_Date": "2024-03-14",
              "Drawdown_days": 15,
              "Trading_days": 9,
              "Total_Trades": 55,
              "Max_Drawdown": -18567.54,
              "Max_Drawdown_Date": "2024-02-28",
              "Time_for_max_drawdown": 0,
              "Time_for_recovery": 15
          },
          {
              "Start_Date": "2024-01-31",
              "End_Date": "2024-02-08",
              "Drawdown_days": 8,
              "Trading_days": 6,
              "Total_Trades": 48,
              "Max_Drawdown": -6645.950000000001,
              "Max_Drawdown_Date": "2024-01-31",
              "Time_for_max_drawdown": 0,
              "Time_for_recovery": 8
          },
          {
              "Start_Date": "2024-02-21",
              "End_Date": "2024-02-28",
              "Drawdown_days": 7,
              "Trading_days": 5,
              "Total_Trades": 22,
              "Max_Drawdown": -4353.5,
              "Max_Drawdown_Date": "2024-02-21",
              "Time_for_max_drawdown": 0,
              "Time_for_recovery": 7
          },
          {
              "Start_Date": "2024-01-11",
              "End_Date": "2024-01-17",
              "Drawdown_days": 6,
              "Trading_days": 3,
              "Total_Trades": 15,
              "Max_Drawdown": -3704.8999999999996,
              "Max_Drawdown_Date": "2024-01-11",
              "Time_for_max_drawdown": 0,
              "Time_for_recovery": 6
          },
          {
              "Start_Date": "2024-01-08",
              "End_Date": "2024-01-11",
              "Drawdown_days": 3,
              "Trading_days": 2,
              "Total_Trades": 13,
              "Max_Drawdown": -257.0,
              "Max_Drawdown_Date": "2024-01-08",
              "Time_for_max_drawdown": 0,
              "Time_for_recovery": 3
          },
          {
              "Start_Date": "2024-02-14",
              "End_Date": "2024-02-16",
              "Drawdown_days": 2,
              "Trading_days": 2,
              "Total_Trades": 7,
              "Max_Drawdown": -0.05000000000291038,
              "Max_Drawdown_Date": "2024-02-14",
              "Time_for_max_drawdown": 0,
              "Time_for_recovery": 2
          }
      ],
      "message": "Data received"
  
  };




  return (
    <div className="App">
      <div className="container">
        <div className="chart-container">
          <Chart
            width={'800px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[['Date', 'Cumulative Sum'], ...chartData]}
            options={{
              title: 'Cumulative Sum Over Time',
              chartArea: { width: '70%' },
              hAxis: { title: 'Date', titleTextStyle: { color: '#333' } },
              vAxis: { title: 'Cumulative Sum', minValue: 0 },
              legend: { position: 'none' },
            }}
          />
        </div>
        <div className="table-container ">
          <h2>Table</h2>
          <table className="table-bordered">
            <thead>
              <tr>
                <th>period</th>
                <th>Max DD</th>
                <th>Days</th>
              </tr>
            </thead>
            <tbody>
              {jsonData1.data.map((item, index) => (
                <tr key={index}>
                  <td>{item.Start_Date}-{item.End_Date}</td>
                  <td>{item.Max_Drawdown}</td>
                  <td>{item.Drawdown_days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;


