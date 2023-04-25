const gpt: Router.RouterCustomRaw = {
  path: "/gpt",
  name: "gpt",
  component: "basic",
  redirect: "/gpt/chatGpt",
  meta: {
    title: "ChatAi"
  },
  children: [
    {
      path: "chatGpt",
      name: "chatGpt",
      component: "self",
      meta: {
        title: "chatGpt v1",
        icon: "mdi-robot-angry-outline",
      },
    },
    {
      path: "chatStream",
      name: "chatStream",
      component: "self",
      meta: {
        title: "chatStream v2",
        icon: "mdi-robot-angry",
      },
    },
  ],
};
export default gpt;
