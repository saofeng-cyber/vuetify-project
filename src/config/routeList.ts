interface Children {
  link: string;
  title: string;
  icon: string;
}
interface RouteList {
  title: string;
  children?: Children[];
}
export const routeListItem: RouteList[] = [
  {
    title: "DashBoard",
    children: [
      {
        title: "workbench",
        link: "/dashboard/workbench",
        icon: "mdi-view-dashboard-outline",
      },
    ],
  },
  {
    title: "ChatAi",
    children: [
      {
        link: "/gpt/chatGpt",
        title: "chatGpt v1",
        icon: "mdi-robot-angry-outline",
      },
      {
        link: "/gpt/chatStream",
        title: "chatStream v2",
        icon: "mdi-robot-angry",
      },
    ],
  },
];
