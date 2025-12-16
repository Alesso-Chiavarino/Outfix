export interface IOrderItem {
    productId: string
    variantId: string
    quantity: number
    unitPrice: number
}

export interface IOrder {
    id: string

    userId: string
    username: string

    items: IOrderItem[]

    total: number

    status:
    | 'pending'
    | 'approved'
    | 'rejected'
    | 'cancelled'
    | 'in_process'

    preferenceId?: string | null
    paymentId?: string | null

    createdAt: string
    updatedAt: string
}