import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getAllData } from '../../services/api'
import SideBar from '../../components/SideBar'
import SidebarMobile from '../../components/SidebarMobile'
import Load from '../../images/load.gif'

export default function Home () {
  const [loading, setLoading] = useState(true)
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    async function fetchData () {
      const url = 'https://private-afe609-testefront.apiary-mock.com/anual-result'
      const response = await getAllData(url)
      const data = response.map(mes => [mes.label, mes.value])
      data.unshift(['Mês', 'E-commerce'])
      setChartData(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <div className="navbar-vertical">
          <SideBar />
        </div>
        <div className="list-menu-mobile">
          <SidebarMobile />
        </div>
        <div className="main-content">
          { loading
            ? <div style={{ textAlign: 'center' }}>
              <img src={ Load } />
              <span>Carregando...</span>
            </div>
            : (
              <div>
                <Container fluid>
                  <Row>
                    <Col lg={6} xs={12} sm={12}>
                      <Chart
                        width={'auto'}
                        height={'500px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={ chartData }
                        options={{
                          chart: {
                            title: 'Lorem Ipsum',
                            subtitle: 'Lorem Ipsum Dollor Amets'
                          },
                          vAxis: { minValue: 0 }
                        }}
                      />
                    </Col>
                    <Col lg={6} xs={12} sm={12}>
                      <Chart
                        width={'auto'}
                        height={'500px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={ chartData }
                        options={{
                          // Material design options
                          chart: {
                            title: 'Lorem Ipsum',
                            subtitle: 'Lorem Ipsum Dollor Amets: 2014-2017'
                          },
                          vAxis: { minValue: 0 }
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
