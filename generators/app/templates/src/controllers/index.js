import path from "path";
import views from "co-views";
<% if(require_parse_body){ %>import parse from "co-body";<%}%>
<% if(require_instant_theme){ %>import instantTheme from "koa-instant-theme";<%}%>
<% if(require_db){ %>import db from "../db";<%}%>

const render = views(path.resolve(__dirname, "../views"), {
    map: { html: "ejs" },
});

export default async function index(ctx) {
    <% if(require_parse_body){ %>let postData = {};
    try{
        postData = await parse(ctx.req);
    }catch(e){}<%}%>
    const body = await render("index", { 
        title : "Home Page",<% if(require_parse_body){ %>
        postData,<%}%>
    });
    <% if(require_instant_theme){ %>ctx.body = instantTheme.header + body + instantTheme.footer;
    <% }else{ %>ctx.body = body;<% } %>
};
