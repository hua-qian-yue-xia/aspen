import { Configuration, App } from "@midwayjs/core"
import * as koa from "@midwayjs/koa"
import * as validate from "@midwayjs/validate"
import * as info from "@midwayjs/info"
import { join } from "path"
import { ReportMiddleware } from "./middleware/report.middleware"

@Configuration({
	imports: [
		koa,
		validate,
		{
			component: info,
			enabledEnvironment: ["local"],
		},
	],
	importConfigs: [join(__dirname, "./config")],
})
export class MainConfiguration {
	@App("koa")
	app: koa.Application

	async onReady() {
		this.app.useMiddleware([ReportMiddleware])
	}
}
