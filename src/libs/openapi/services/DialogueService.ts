/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DialogueDocumentDto } from '../models/DialogueDocumentDto';
import type { DialogueTextToSpeechDto } from '../models/DialogueTextToSpeechDto';
import type { DialogueUserMessageDto } from '../models/DialogueUserMessageDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DialogueService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns DialogueDocumentDto Saved document
     * @throws ApiError
     */
    public save(
        requestBody: DialogueDocumentDto,
    ): CancelablePromise<DialogueDocumentDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/dialogue/document',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Import RAG documents
     * @param requestBody Documents list
     * @returns DialogueDocumentDto
     * @throws ApiError
     */
    public import(
        requestBody: Array<DialogueDocumentDto>,
    ): CancelablePromise<Array<DialogueDocumentDto>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/dialogue/document',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove RAG documents
     * @param appId
     * @param documentId
     * @returns any
     * @throws ApiError
     */
    public remove(
        appId: string,
        documentId: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/dialogue/document/{appId}',
            path: {
                'appId': appId,
            },
            query: {
                'documentId': documentId,
            },
        });
    }
    /**
     * Converts a text to voice as mp3
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public speak(
        requestBody: DialogueTextToSpeechDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/dialogue/speech/tts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param appId
     * @param sessionId
     * @param language
     * @param gender
     * @param llm
     * @param sampleRate
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public text(
        appId: string,
        sessionId: string,
        language: string,
        gender: string,
        llm: string,
        sampleRate: number,
        formData: {
            file?: Blob;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/dialogue/speech/stt/{appId}/{sessionId}',
            path: {
                'appId': appId,
                'sessionId': sessionId,
            },
            query: {
                'language': language,
                'gender': gender,
                'llm': llm,
                'sampleRate': sampleRate,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param appId
     * @param sessionId
     * @param language
     * @param gender
     * @param llm
     * @param actor
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public chatMessage(
        appId: string,
        sessionId: string,
        language: string,
        gender: string,
        llm: string,
        actor: string,
        requestBody: DialogueUserMessageDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/dialogue/speech/chat/{appId}/{sessionId}',
            path: {
                'appId': appId,
                'sessionId': sessionId,
            },
            query: {
                'language': language,
                'gender': gender,
                'llm': llm,
                'actor': actor,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param appId
     * @param sessionId
     * @returns any
     * @throws ApiError
     */
    public stopAgentSpeech(
        appId: string,
        sessionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/dialogue/speech/stop/{appId}/{sessionId}',
            path: {
                'appId': appId,
                'sessionId': sessionId,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public import1(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/dialogue/admin/document',
        });
    }
}
