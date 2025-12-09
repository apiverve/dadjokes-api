declare module '@apiverve/dadjokes' {
  export interface dadjokesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface dadjokesResponse {
    status: string;
    error: string | null;
    data: DadJokesData;
    code?: number;
  }


  interface DadJokesData {
      joke: string;
  }

  export default class dadjokesWrapper {
    constructor(options: dadjokesOptions);

    execute(callback: (error: any, data: dadjokesResponse | null) => void): Promise<dadjokesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: dadjokesResponse | null) => void): Promise<dadjokesResponse>;
    execute(query?: Record<string, any>): Promise<dadjokesResponse>;
  }
}
