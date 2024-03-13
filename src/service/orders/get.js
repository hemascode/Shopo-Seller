import { _axios } from "@/helper/axios";

export class OrdersApi {
	allOrders = async () => {
		const res = await _axios('get', '/all-order')
		return res
	}
}