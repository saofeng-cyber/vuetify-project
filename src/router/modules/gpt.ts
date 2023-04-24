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
      path: "/gpt/chatGpt",
      name: "chatGpt",
      component: "self",
      meta: {
        title: "chatGpt v1",
        icon: "mdi-robot-angry-outline",
      },
    },
    {
      path: "/gpt/chatStream",
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
