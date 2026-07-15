declare module '@apiverve/dadjokes' {
  export interface dadjokesOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface dadjokesResponse {
    status: string;
    error: string | null;
    data: DadJokesData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface DadJokesData {
      joke: null | string;
  }

  export default class dadjokesWrapper {
    constructor(options: dadjokesOptions);

    execute(callback: (error: any, data: dadjokesResponse | null) => void): Promise<dadjokesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: dadjokesResponse | null) => void): Promise<dadjokesResponse>;
    execute(query?: Record<string, any>): Promise<dadjokesResponse>;
  }
}
