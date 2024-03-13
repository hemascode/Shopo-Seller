import { _axios } from "@/helper/axios";

export class DashBoardApi {
	getDashBoard = async () => {
		const res = await _axios('get', '/dashboard')
		return res
	}
}