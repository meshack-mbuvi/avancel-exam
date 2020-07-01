import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import React, { useEffect } from 'react';

am4core.useTheme(am4themes_animated);

const Chart = (props) => {
  useEffect(() => {
    const { title, data } = props;
    const chart = am4core.create(title, am4charts.XYChart);

    chart.data = data;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'date';
    chart.paddingLeft = 20;

    chart.yAxes.push(new am4charts.ValueAxis());

    const chartTitle = chart.titles.create();
    chartTitle.text = title;
    chartTitle.fontSize = 20;
    chartTitle.marginBottom = 30;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.categoryX = 'date';
    series.dataFields.valueY = 'value';

    series.strokeWidth = 4;

    const circleBullet = new am4charts.CircleBullet();
    circleBullet.circle.radius = 2;
    circleBullet.tooltipText = '{valueY}';

    series.bullets.push(circleBullet);
    series.dy = -0.5;

    chart.legend = new am4charts.Legend();
    series.legendSettings.labelText = title;

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
  }, [props]);

  return (
    <div
      id={props.title}
      style={{
        width: '100%',
        height: '500px',
        paddingLeft: '2rem',
        paddingRight: '4rem',
      }}
    ></div>
  );
};

export default Chart;
