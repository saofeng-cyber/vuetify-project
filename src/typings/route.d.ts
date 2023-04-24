declare namespace Router {
  interface Actions {
    basic: () => void;
    self: (key: RouterKey.RouterName) => void;
  }
  /**
   * 路由组件
   * - basic: 基础布局，具有公共部分的布局
   * - blank: 空白布局
   * - multi: 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
   * - self: 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
   */
  type RouteComponentType = "basic" | "blank" | "multi" | "self";

  /**
   * meta
   * - title: 标题
   * - icon: 图标
   */
  interface RouteCustomMeta {
    title: string;
    icon: string;
  }
  interface RouterCustomRaw {
    name: string;
    path: string;
    component?: RouteComponentType;
    redirect?: string;
    meta?: Partial<RouteCustomMeta>;
    children?: Array<Omit<RouterCustomRaw, "redirect">>;
  }
}
