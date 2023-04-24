import * as echarts from "echarts/core";
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { appStore } from "@/store/app/app";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export type RendererType = "canvas" | "svg";

export enum ThemeType {
  Dark = "dark",
  Light = "light",
}
export const useEcharts = (
  el: Ref<HTMLDivElement | null>,
  option: Ref<ECOption> | ComputedRef<ECOption>,
  renderType?: RendererType,
  theme?: ThemeType
) => {
  const isDark = computed(() => appStore().theme === "dark");
  const { width, height } = useElementSize(el);
  let chart: echarts.ECharts | null = null;
  function isRender(): boolean {
    return Boolean(chart && el.value);
  }

  function destroy() {
    chart?.dispose();
  }

  function updateEcharts() {
    destroy();
    render();
  }

  function resize() {
    chart?.resize();
  }

  function render() {
    if (el.value) {
      chart = echarts.init(el.value, theme, { renderer: renderType });
      setEcOption(option.value);
    }
  }

  function setEcOption(option: ECOption) {
    if (!isRender()) {
      throw new Error("请先初始化echarts实例");
    }
    chart?.setOption(option);
  }

  const scope = effectScope();
  scope.run(() => {
    watch([() => width.value, () => height.value], () => {
      if (!isRender()) render();
      else resize();
    });
    watch(
      () => isDark.value,
      () => {
        updateEcharts();
      }
    );
  });
  onScopeDispose(() => {
    destroy();
    scope.stop();
  });
  return {
    isRender,
    destroy,
    resize,
    setEcOption,
    render,
    updateEcharts,
  };
};
