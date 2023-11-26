import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as echarts from 'echarts';
import { MapService } from '../service/map.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor(private _router: Router, private _mapService: MapService) {

  }
  ngOnInit(): void {
    this.setMapData()
    this.setBarData()
    this.setPieData()
  }

  private setPieData(): void {
    let chartDom = document.getElementById('pie');
    let myChart = echarts.init(chartDom);
    let option;

    option = {

      tooltip: {
        trigger: 'item'
      },
      legend: {
        itemHeight: 32,
        itemWidth: 15,
        icon: 'rect',
        orient: 'vertical',
        left: 'center',
        bottom: '20px',
        itemGap: 20,
        itemStyle: {
          borderWidth: 0
        },
        textStyle: {
          fontSize: 22,
          fontWeight: 500,
          padding: [0, 0, 0, 10]
        }
      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '55%',
          center: ['50%', '35%'],
          itemStyle: {
            normal: {
              borderColor: 'white',
              borderWidth: 2,
            },
          },
          data: [
            {
              value: 33.58, name: '韓國瑜/張善政', itemStyle: {
                normal: {
                  color: '#4889C1'
                }
              }
            },
            {
              value: 3.72, name: '宋楚瑜/余湘', itemStyle: {
                normal: {
                  color: '#F2854A'

                },

              }, label: {
                position: 'outer',
                formatter: '{c}%',
                textStyle: {
                  fontSize: 27,
                  fontWeight: 700,
                  color: '#F2854A'
                }
              },
              labelLine: {
                show: true,
                length: 5,
                length2: 10
              }
            },
            {
              value: 62.70, name: '蔡英文/賴清德', itemStyle: {
                normal: {
                  color: '#58AC6F'
                }
              }
            },
          ],
          label: {
            show: true,
            position: 'inner',
            formatter: '{c}%',
            textStyle: {
              fontSize: 27,
              fontWeight: 700,
              color: '#fff'
            }
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }

  private setBarData(): void {
    let app = {};

    let chartDom = document.getElementById('bar');
    let myChart = echarts.init(chartDom);
    let option;


    option = {
      legend: { show: false },
      tooltip: {},

      dataZoom: { type: 'slider', startValue: 0, endValue: 6, bottom: 10 },
      dataset: {
        dimensions: ['product', '韓國瑜/張善政', '蔡英文/賴清德', '宋楚瑜/余湘'],
        source: [
          { product: '新營區', '韓國瑜/張善政': 45, '蔡英文/賴清德': 58, '宋楚瑜/余湘': 23 },
          { product: '鹽水區', '韓國瑜/張善政': 59, '蔡英文/賴清德': 79, '宋楚瑜/余湘': 25 },
          { product: '白河區', '韓國瑜/張善政': 41, '蔡英文/賴清德': 50, '宋楚瑜/余湘': 25 },
          { product: '柳營區', '韓國瑜/張善政': 43, '蔡英文/賴清德': 59, '宋楚瑜/余湘': 25 },
          { product: '後壁區', '韓國瑜/張善政': 32, '蔡英文/賴清德': 51, '宋楚瑜/余湘': 26 },
          { product: '東山區', '韓國瑜/張善政': 41, '蔡英文/賴清德': 62, '宋楚瑜/余湘': 21 },
          { product: '麻豆區', '韓國瑜/張善政': 43, '蔡英文/賴清德': 58, '宋楚瑜/余湘': 22 },
          { product: '麻豆區1', '韓國瑜/張善政': 43, '蔡英文/賴清德': 58, '宋楚瑜/余湘': 22 },
          { product: '麻豆區2', '韓國瑜/張善政': 43, '蔡英文/賴清德': 58, '宋楚瑜/余湘': 22 },
        ]
      },
      xAxis: {
        type: 'category', axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 20
          }
        }
      },
      yAxis: {
        type: 'value', min: 20, max: 100, interval: 20, axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 22
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }
        },
      },

      series: [{
        type: 'bar', barWidth: 15, itemStyle: {
          color: '#4889C1'
        }
      }, {
        type: 'bar', barWidth: 15, itemStyle: {
          color: '#58AC6F'
        }
      }, {
        type: 'bar', barWidth: 15, itemStyle: {
          color: '#F2854A'
        }
      }]
    };

    option && myChart.setOption(option);
  }

  private setMapData(): void {
    const DPP = '#58AC6F'
    const KMT = '#4889C1'
    const PFP = '#F2854A'

    // 初始化 ECharts 圖表
    let chartDom = document.getElementById('map') as HTMLDivElement;
    let myChart = echarts.init(chartDom);

    // this.myChart.showLoading();




    this._mapService.getMapData().subscribe((usaJson: any) => {
      console.log(usaJson);

      // this.myChart.hideLoading();
      echarts.registerMap('TW', usaJson, {
        '金門縣': { left: 119.5, top: 24.5, width: 0.3, },
        '連江縣': { left: 119.5, top: 25, width: 0.2 },
        // 'Puerto Rico': { left: -76, top: 26, width: 2 }
      });

      let option = {
        tooltip: false,
        series: [
          {
            aspectScale: 0.9,
            name: '台灣',
            type: 'map',
            roam: false,
            map: 'TW',

            emphasis: {
              label: {
                show: false
              }
            },
            layoutCenter: ['50%', '50%'],
            layoutSize: 300,
            itemStyle: {
              normal: {
                borderColor: 'white',
                borderWidth: 1,
                color: "#fff",
                areaColor: "#B8B8B8"
              },
              emphasis: {}
            },
            select: {
              label: {
                show: false
              }
            },
            data: [
              {
                name: '連江縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '宜蘭縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '彰化縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '南投縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '雲林縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '基隆市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '臺北市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '新北市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '臺中市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '臺南市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '桃園市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '苗栗縣', value: 'KMT',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '嘉義市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '嘉義縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '金門縣', value: 'KMT',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '高雄市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '臺東縣', value: 'KMT',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '花蓮縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '澎湖縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '新竹市', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '新竹縣', value: 'KMT',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '屏東縣', value: 'DPP',
                select: {
                  itemStyle: {
                    areaColor: '#B8B8B8', // 預設顏色是黃色
                  },
                },
              },

            ]
          }
        ]

      };

      myChart.setOption(option, true);


    });
  }

  goToHome() {
    this._router.navigate(['/']);
  }
}
