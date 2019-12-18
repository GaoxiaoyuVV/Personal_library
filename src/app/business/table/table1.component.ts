import { Component, OnInit, Injector } from '@angular/core';
import { TableCommonSettings } from 'src/assets/common-table/settings';
const mockData = {
  'header': [
    {
      'value': 'TeslaPrice',
      'label': '特斯拉'
    },
    {
      'value': 'BenzPrice',
      'label': '奔驰'
    },
    {
      'value': 'BMWPrice',
      'label': '宝马'
    },
    {
      'value': 'JaguarPrice',
      'label': '捷豹'
    },
    {
      'value': 'FordPrice',
      'label': '福特'
    }
  ],
  'body': [
    {
      "TeslaPrice": "911,111",
      "BenzPrice": "1,010,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,002",
    },
    {
      "TeslaPrice": "890,000",
      "BenzPrice": "1,000,078",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,003",
    },
    {
      "TeslaPrice": "950,000",
      "BenzPrice": "1,000,980",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,004",
    },
    {
      "TeslaPrice": "900,340",
      "BenzPrice": "1,000,500",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,005",
    },
    {
      "TeslaPrice": "912,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,006",
    },
    {
      "TeslaPrice": "900,000",
      "BenzPrice": "1,010,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,002",
    },
    {
      "TeslaPrice": "890,000",
      "BenzPrice": "1,000,078",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,003",
    },
    {
      "TeslaPrice": "950,000",
      "BenzPrice": "1,000,980",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,004",
    },
    {
      "TeslaPrice": "900,340",
      "BenzPrice": "1,000,500",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,005",
    },
    {
      "TeslaPrice": "992,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,006",
    },
    {
      "TeslaPrice": "912,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,006",
    },
    {
      "TeslaPrice": "900,000",
      "BenzPrice": "1,010,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,002",
    },
    {
      "TeslaPrice": "890,000",
      "BenzPrice": "1,000,078",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,003",
    },
    {
      "TeslaPrice": "950,000",
      "BenzPrice": "1,000,980",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,004",
    },
    {
      "TeslaPrice": "900,340",
      "BenzPrice": "1,000,500",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,005",
    },
    {
      "TeslaPrice": "992,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,006",
    },
    {
      "TeslaPrice": "912,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,006",
    },
    {
      "TeslaPrice": "900,000",
      "BenzPrice": "1,010,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,002",
    },
    {
      "TeslaPrice": "890,000",
      "BenzPrice": "1,000,078",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "2",
    },
    {
      "TeslaPrice": "950,000",
      "BenzPrice": "1,000,980",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,004",
    },
    {
      "TeslaPrice": "900,340",
      "BenzPrice": "1,000,500",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,005",
    },
    {
      "TeslaPrice": "992,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,006",
    },
    {
      "TeslaPrice": "912,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "1",
    },
    {
      "TeslaPrice": "900,000",
      "BenzPrice": "1,010,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,002",
    },
    {
      "TeslaPrice": "890,000",
      "BenzPrice": "1,000,078",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,003",
    },
    {
      "TeslaPrice": "950,000",
      "BenzPrice": "1,000,980",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,004",
    },
    {
      "TeslaPrice": "900,340",
      "BenzPrice": "1,000,500",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,005",
    },
    {
      "TeslaPrice": "992,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "0",
    },
    {
      "TeslaPrice": "890,000",
      "BenzPrice": "1,000,078",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "2",
    },
    {
      "TeslaPrice": "950,000",
      "BenzPrice": "1,000,980",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,004",
    },
    {
      "TeslaPrice": "900,340",
      "BenzPrice": "1,000,500",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,005",
    },
    {
      "TeslaPrice": "992,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,006",
    },
    {
      "TeslaPrice": "912,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "1",
    },
    {
      "TeslaPrice": "900,000",
      "BenzPrice": "1,010,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,002",
    },
    {
      "TeslaPrice": "890,000",
      "BenzPrice": "1,000,078",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,003",
    },
    {
      "TeslaPrice": "950,000",
      "BenzPrice": "1,000,980",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,004",
    },
    {
      "TeslaPrice": "900,340",
      "BenzPrice": "1,000,500",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "120,005",
    },
    {
      "TeslaPrice": "992,000",
      "BenzPrice": "1,001,000",
      "BMWPrice": "600,000",
      "JaguarPrice": "500,000",
      "FordPrice": "0",
    },
  ]
}
@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.less'],
  providers: [
    { provide: "TestInjector", useValue: "TestInjector" }
  ]
})
export class Table1Component implements OnInit {
  table1Settings: TableCommonSettings

  constructor(
    private injector: Injector,
  ) { }

  ngOnInit() {
    this.table1Settings = this.initSettings();
  }
  public initSettings() {
    const settings: any = {
      "header": [],
      "tbodyData": [],
      "searchable": true,
      "sortable": true,
      "pager": true,
      "pageSize": 5,
      "pageTbodySourceData": [],
      'startIndexpage': 1,
    }
    let temp = JSON.parse(JSON.stringify(mockData.body));
    settings.pageTbodySourceData = temp;
    settings.header = mockData.header;
    settings.tbodyData = mockData.body;
    settings.total = mockData.body.length;
    return settings;
  }
}
