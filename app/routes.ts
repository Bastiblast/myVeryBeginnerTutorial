import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("dashboard/index.tsx",[
        route("HTML","dashboard/webBasics/HTML/index.tsx"),
        route("CSS","dashboard/webBasics/CSS/index.tsx"),
        route("Javascript","dashboard/webBasics/Javascript/index.tsx"),
    ])] satisfies RouteConfig;
