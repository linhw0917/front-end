import Vue from 'vue'
import Router from 'vue-router'
import centerRouter from './center'
import collectRouter from './collect'
import interestRouter from './interest'
import setRouter from './set'
import animalchooseRouter from './loginning/animalchoose'
import changeRouter from './loginning/change'
import forgetRouter from './loginning/forget'
import loginRouter from './loginning/login'
import registerRouter from './loginning/register'
import usermassageRouter from './loginning/usermassage'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
	base:process.env.BASE_URL,
    routes: [
		centerRouter,
		collectRouter,
		interestRouter,
		setRouter,
		animalchooseRouter,
		changeRouter,
		forgetRouter,
		loginRouter,
		registerRouter,
		usermassageRouter,
		{
			path:'*',
			redirect:'/loginning/login'
		}
	],
})
