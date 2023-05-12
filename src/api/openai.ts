import type {
  ChatCompletionRequestMessage,
  CreateChatCompletionResponse,
} from 'openai'
import {
  Configuration,
  OpenAIApi,
} from 'openai'

interface OpenClass {
  mode: string
  key: string
}

export class MyOpenAi implements OpenClass {
  mode: string
  key: string
  configuration: Configuration
  myOpenAi: OpenAIApi
  /**
   * 创建一个openai模型
   * @param key
   * @param mode
   * @returns MyOpenAi
   * @example
   * ```
   * const openai = new MyOpenAi({
   *   mode: "text-davinci-003",
   *   key: process.env.OPENAI_API_KEY,
   * })
   * ```
   */

  constructor(key: string, mode: string) {
    this.key = key
    this.mode = mode
    this.configuration = new Configuration({
      apiKey: key,
    })
    this.myOpenAi = new OpenAIApi(this.configuration)
  }

  /**
   *
   * @param chatCompletion Array of ChatCompletionRequestMessage
   * @returns CreateChatCompletionResponse
   * @example
   * ```
   * const openai = new MyOpenAi({
   *   mode: "text-davinci-003",
   *   key: process.env.OPENAI_API_KEY,
   *   });
   * const { myChatCompletion } = openai;
   * const response = await myChatCompletion([
   *   {
   *     "role": "user",
   *     "content": "Hello"
   *   },
   *   {
   *     "role": "bot",
   *     "content": "Hi"
   *   }
   * ]);
   * console.log(response); // {choices: [{text: "Hi"}, {text: "Hello"}]}
   * ```
   */

  async myChatCompletion(
    chatCompletion: Array<ChatCompletionRequestMessage>,
  ): Promise<CreateChatCompletionResponse> {
    const message = await this.myOpenAi.createChatCompletion({
      model: this.mode,
      messages: chatCompletion,
    })
    return message.data
  }

  /**
   *重新连接openai
   * @param options OpenClass
   * @returns myOpenAi
   */

  resetMyOpenAi(options: OpenClass) {
    this.configuration = new Configuration({
      apiKey: options.key,
    })
    this.myOpenAi = new OpenAIApi(this.configuration)
  }
}
