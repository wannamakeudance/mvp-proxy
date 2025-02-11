export default {
    async fetch(request) {
      const url = new URL(request.url);
      
      // 替换 OpenAI API 域名
      url.hostname = "api.openai.com";
      
      // 复制请求并转发
      const modifiedRequest = new Request(url, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
  
      return fetch(modifiedRequest);
    }
  };
  