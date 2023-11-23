import { Component } from '@angular/core';
import { Candidate, ElectionData } from '../interfaces/election.model';
import { number } from 'echarts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  electionData: ElectionData[] = [
    {
      date: '1996',
      session: '9',
      selected: false,
      candidate: []

    },
    {
      date: '2000',
      session: '10',
      selected: false,
      candidate: []
    },
    {
      date: '2004',
      session: '11',
      selected: false,
      candidate: []
    },
    {
      date: '2008',
      session: '12',
      selected: false,
      candidate: []
    },
    {
      date: '2012',
      session: '13',
      selected: false,
      candidate: []
    },
    {
      date: '2016',
      selected: true,
      session: '14',
      candidate: [
        {
          president: '蔡英文',
          vicePresident: '陳建仁',
          vote: 6894744,
          party: 'DPP',
          partyName: '民主進步黨',
          point: '56.12%'
        }, {
          president: '朱立倫',
          vicePresident: '王如玄',
          vote: 3813365,
          party: 'KMT',
          partyName: '中國國民黨',
          point: '31.04%'
        }, {
          president: '宋楚瑜',
          vicePresident: '徐欣瑩',
          vote: 1576861,
          party: 'PFP',
          partyName: '親民黨',
          point: '12.84%'
        }
      ]
    },
    {
      date: '2020',
      selected: false,
      session: '15',
      candidate: [
        {
          president: '蔡英文',
          vicePresident: '賴清德',
          vote: 8170231,
          party: 'DPP',
          partyName: '民主進步黨',
          point: '57.13%'

        }, {
          president: '韓國瑜',
          vicePresident: '張善政',
          vote: 5522119,
          party: 'KMT',
          partyName: '中國國民黨',
          point: '38.61%'
        }, {
          president: '宋楚瑜',
          vicePresident: '余湘',
          vote: 608590,
          party: 'PFP',
          partyName: '親民黨',
          point: '04.26%'
        }
      ]
    }
  ]
  session: string = ''
  voteYear: string = ''
  candidate!: Candidate[]
  totalVotes: number = 0
  pointArr: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.electionData.forEach(data => {
      if (data.selected) {
        this.session = data.session
        this.voteYear = data.date
        this.candidate = data.candidate
        this.candidate.forEach(candidate => {
          this.totalVotes += candidate.vote;
          const point = Math.round((parseFloat(candidate.point)))
          const party = candidate.party
          for (let step = 0; step < point; step++) {
            this.pointArr.push(party)
          }
        });
      }
    })

  }

  changeYear(item: ElectionData): void {
    this.pointArr = []
    this.electionData.forEach(data => {
      data.selected = false
    })
    console.log(item);




    this.session = item.session
    this.voteYear = item.date
    this.candidate = item.candidate
    item.selected = !item.selected

    item.candidate.forEach((x) => {
      const point = Math.round((parseFloat(x.point)))
      const party = x.party
      for (let step = 0; step < point; step++) {
        this.pointArr.push(party)
      }
    });
  }
}
