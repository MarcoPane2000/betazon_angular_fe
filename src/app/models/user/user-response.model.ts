interface UserResponse {
	id: number;
	name: string;
	surname: string;
	username: string;
	password: string;
	email: string;
	role: string;
	active: boolean;

	cart: ProductResponse[];
	orders: OrderResponse[];
	reviews: ReviewResponse[];
	addresses: AddressResponse[];
	image: ImageResponse;
}
