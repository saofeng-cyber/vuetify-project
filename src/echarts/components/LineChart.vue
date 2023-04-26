<script setup lang="ts">
import { type ECOption, useEcharts } from "../echart";
const linechart = ref<HTMLDivElement | null>(null);
const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgb(0, 0, 0, 0.1)",
    borderWidth: 0,
    textStyle: {
      color: "#fff",
    },
    borderRadius: 10,
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "3%",
  },
  xAxis: [
    {
      type: "category",
      show: false,
      boundaryGap: false,
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      show: false,
    },
  ],
  series: [
    {
      color: "rgb(203,12,159)",
      name: "下载量",
      type: "line",
      smooth: true,
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: "rgb(203,12,159, 0.5)",
            },
            {
              offset: 1,
              color: "rgb(0,0,0,0.01)",
            },
          ],
        },
      },
      data: [
        4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311, 3456, 4256,
      ],
    },
  ],
});
useEcharts(linechart, lineOptions);
</script>

<template>
  <div ref="linechart" class="w-100 h-100" />
</template>
<style scoped lang="scss"></style>
