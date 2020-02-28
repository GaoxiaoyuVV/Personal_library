import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'd3-page',
    templateUrl: './D3.component.html',
    styleUrls: ['./D3.component.less']
})
export class D3Component implements OnInit {
    public topoData: any = {};
    constructor() { }

    ngOnInit() {
        this.initTopoData();
    }

    public initTopoData() {
        let nodes = [
            { "name": "Alice" },
            { "name": "Bob" },
            { "name": "Carol" },
            { "name": "Vas" },
            { "name": "Vasquez" },
            { "name": "Heart" },
            { "name": "Grank" }
        ];
        let links = [
            { "source": 0, "target": 1 },
            { "source": 0, "target": 2 },
            { "source": 0, "target": 3 },
            { "source": 0, "target": 4 },
            { "source": 1, "target": 5 },
            { "source": 1, "target": 6 },
        ];
        this.topoData.nodes = nodes;
        this.topoData.links = links;
    }
}
