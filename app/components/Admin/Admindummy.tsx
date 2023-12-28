type AdminControlledType = {
    [key: string]: string[];
}
const AdminControlled: AdminControlledType = {
    "Products": ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"],
    "Users": ["User 1", "User 2", "User 3", "User 4"],
    "Orders": ["Order 1", "Order 2", "Order 3", "Order 4"],
    "Authorization": ["Authorization 1", "Authorization 2", "Authorization 3"]
}

export default AdminControlled;