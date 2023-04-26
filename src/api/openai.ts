import {
  Configuration,
  OpenAIApi,
  CreateChatCompletionResponse,
  ChatCompletionRequestMessage,
} from "openai";

interface OpenClass {
  mode: string;
  key: string;
}

export class MyOpenAi implements OpenClass {
  mode: string;
  key: string;
  configuration: Configuration;
  myOpenAi: OpenAIApi;
  constructor(key: string, mode: string) {
    this.key = key;
    this.mode = mode;
    this.configuration = new Configuration({
      apiKey: key,
    });
    this.myOpenAi = new OpenAIApi(this.configuration);
  }

  async myChatCompletion(
    chatCompletion: Array<ChatCompletionRequestMessage>
  ): Promise<CreateChatCompletionResponse> {
    const message = await this.myOpenAi.createChatCompletion({
      model: this.mode,
      messages: chatCompletion,
    });
    return message.data;
  }

  resetMyOpenAi(options: OpenClass) {
    this.configuration = new Configuration({
      apiKey: options.key,
    });
    this.myOpenAi = new OpenAIApi(this.configuration);
  }
}
