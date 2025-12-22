//对象可选属性
function myAxios(config: { url: string; method?: string}) {
    console.log(config);
}
myAxios({ url: "http://example.com" });
myAxios({ url: "http://example.com", method: "GET" }); // method属性可选
export {};