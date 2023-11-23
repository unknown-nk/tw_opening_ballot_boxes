import { Component, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import { MapService } from '../service/map.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  private chartDom!: HTMLDivElement;
  private myChart: any;
  private option: any;


  constructor(private _mapService: MapService, private _router: Router) { }
  ngOnInit(): void {
    const DPP = '#58AC6F'
    const KMT = '#4889C1'
    const PFP = '#F2854A'

    // 初始化 ECharts 圖表
    this.chartDom = document.getElementById('main') as HTMLDivElement;
    this.myChart = echarts.init(this.chartDom);
    // this.myChart.showLoading();




    this._mapService.getMapData().subscribe((usaJson: any) => {
      console.log(usaJson);

      // this.myChart.hideLoading();
      echarts.registerMap('TW', usaJson, {
        '金門縣': { left: 119.5, top: 24.5, width: 0.3, },
        '連江縣': { left: 119.5, top: 25, width: 0.2 },
        // 'Puerto Rico': { left: -76, top: 26, width: 2 }
      });

      this.option = {
        tooltip: false,

        // visualMap: {
        //   min: 0,
        //   max: 1,
        //   inRange: {
        //     color: {
        //       'DPP': "#58AC6F",
        //       'KMT': "#4889C1",
        //       'PFP': "#F2854A",
        //     }
        //   },
        //   outOfRange: {
        //     color: '#999' // 未匹配到的值使用灰色
        //   },
        //   show: true
        // },


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
            layoutCenter: ['45%', '55%'],
            layoutSize: 600,
            itemStyle: {
              normal: {
                borderColor: 'white',
                borderWidth: 2,
                color: "#fff"
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
                name: '連江縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',

                  },
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '宜蘭縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '彰化縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '南投縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '雲林縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '基隆市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '臺北市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '新北市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '臺中市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
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
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '桃園市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '苗栗縣', value: 'KMT', itemStyle: {
                  normal: { areaColor: KMT },
                  emphasis: {
                    areaColor: '#1F6EB1',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#1F6EB1', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '嘉義市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '嘉義縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '金門縣', value: 'KMT', itemStyle: {
                  normal: { areaColor: KMT, borderWidth: 0 },
                  emphasis: {
                    areaColor: '#1F6EB1',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#1F6EB1', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '高雄市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '臺東縣', value: 'KMT', itemStyle: {
                  normal: { areaColor: KMT },
                  emphasis: {
                    areaColor: '#1F6EB1',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#1F6EB1', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '花蓮縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '澎湖縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP, borderWidth: 0 },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '新竹市', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '新竹縣', value: 'KMT', itemStyle: {
                  normal: { areaColor: KMT },
                  emphasis: {
                    areaColor: '#1F6EB1',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#1F6EB1', // 預設顏色是黃色
                  },
                },
              },
              {
                name: '屏東縣', value: 'DPP', itemStyle: {
                  normal: { areaColor: DPP },
                  emphasis: {
                    areaColor: '#4B915E',
                  }
                },
                select: {
                  itemStyle: {
                    areaColor: '#4B915E', // 預設顏色是黃色
                  },
                },
              },

            ]
          }
        ]

      };

      this.myChart.setOption(this.option, true);

      this.myChart.on('click', (args: any) => {
        const path = args.name
        console.log(args);
        this._router.navigate([path]);
      })
    });
  }

  ngAfterViewInit(): void {
    this.option && this.myChart.setOption(this.option, true);
  }


}
