import axios, { AxiosResponse } from 'axios'
import {
	TNicknameResponse,
	TNicknameSubmitValues
} from './models/nickname.models'
import { TMessageResponse, TSendMessageValues } from './models/message.models'

const URL =
	'https://edbase-3a55f-default-rtdb.europe-west1.firebasedatabase.app/'

interface IApi {
	submitNicknameTelegram: (
		endPoint: string,
		inputsValue: TNicknameSubmitValues
	) => Promise<TNicknameResponse>
	sendMessage: (
		endPoint: string,
		inputsValue: TSendMessageValues
	) => Promise<TMessageResponse>
}

class Api implements IApi {
	private readonly BASE_URL = URL
	private readonly instanceApi = axios.create({
		baseURL: this.BASE_URL,
		timeout: 30000,
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		}
	})

	private responseBody(response: AxiosResponse) {
		return response.data
	}

	public async submitNicknameTelegram(
		endPoint: string,
		inputsValue: TNicknameSubmitValues
	): Promise<TNicknameResponse> {
		return this.instanceApi
			.post<TNicknameSubmitValues>(endPoint, inputsValue)
			.then(this.responseBody)
	}

	public async sendMessage(
		endPoint: string,
		inputsValue: TSendMessageValues
	): Promise<TMessageResponse> {
		return this.instanceApi
			.post<TSendMessageValues>(endPoint, inputsValue)
			.then(this.responseBody)
	}
}

export default new Api()
