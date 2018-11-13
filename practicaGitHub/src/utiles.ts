export const util = {
    log: (str: string) => console.log(str)
};
export interface GitHubRepo{
    name:string;
    html_url:string;
    [prop: string]: any;
}