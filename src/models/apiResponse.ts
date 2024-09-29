export interface ApiResponse<T> {
    data: T[]
    summaryInfo: {
        title: string
        category: number
    }
    loading: boolean
    error: boolean
}
