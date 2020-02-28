import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-common-topo',
  template: `<div id="topoOutside"></div>`,
  styleUrls: ['./common-topo.component.less']
})
export class CommonTopoComponent implements OnInit {
  @Input() data: any;
  public links: any;
  public nodes: any;
  public simulation: any;
  public svg: any;
  public link: any;
  public labels: any;
  public node: any;
  constructor() { }

  ngOnInit() {
    this.initTopo();
  }

  public initTopo() {
    console.log('D3.js version:', d3['version']);
    let element = d3.select('#topoOutside');
    this.svg = element
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');
    let svgWidth = document.getElementsByTagName('svg')[0].getBoundingClientRect().width;
    let svgHeight = document.getElementsByTagName('svg')[0].getBoundingClientRect().height;
    /* link：连线的连接所用标识(后面为link的长度)
      charge：具体力的装载方式
      center：这个图标的中心点 */
    this.simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id((d: any) => d.index).distance(100))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(svgWidth / 2, svgHeight / 2));
    this.draw();
  }

  //node and link move
  public ticked() {
    // link use (x1, y1) (x2, y2)
    this.link
      .attr('x1', function (d: any) { return d.source.x; })
      .attr('y1', function (d: any) { return d.source.y; })
      .attr('x2', function (d: any) { return d.target.x; })
      .attr('y2', function (d: any) { return d.target.y; });
    // node use (cx, cy) and radius
    this.node
      .attr('cx', function (d: any) { return d.x; })
      .attr('cy', function (d: any) { return d.y; });
    //change label position
    this.labels
      .attr("x", function (d) { return d.x; })
      .attr("y", function (d) { return d.y; });
  }

  //position
  public dragstarted(d) {
    if (!d3.event.active) { this.simulation.alphaTarget(0.3).restart(); }
    d.fx = d.x;
    d.fy = d.y;
  }

  public dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  public dragended(d) {
    if (!d3.event.active) { this.simulation.alphaTarget(0); }
    d.fx = null;
    d.fy = null;
  }

  public draw() {
    this.link = this.svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.data.links)
      .enter()
      .append('line')
      .attr('class', 'path');

    //当D3.js进行到.selectAll('g').data(this.data.nodes).enter()的时候已经将数据分配下去了，所以看起来是先渲染再赋值。
    this.node = this.svg.append('g')
      .attr('class', 'nodesGroup')
      .selectAll('g')
      .data(this.data.nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .append('circle')
      .attr('r', 14)
      .attr('fill', 'red');

    this.labels = this.svg.selectAll('.node')
      .append("text")
      .attr('dx', '2em')
      .attr('dy', 0)
      .style("fill", "black")
      .text(function (d) {
        return d.name ? d.name : '';
      })

    this.svg.selectAll('circle').call(d3.drag()
      .on('start', (d) => { this.dragstarted(d); })
      .on('drag', (d) => { this.dragged(d); })
      .on('end', (d) => { this.dragended(d); })
    );

    this.simulation
      .nodes(this.data.nodes)
      .on('tick', () => { this.ticked(); });

    this.simulation.force('link')
      .links(this.data.links);
  }

}
