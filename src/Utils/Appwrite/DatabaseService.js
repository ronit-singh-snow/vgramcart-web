import { Client, Databases, ID, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('66efac960005a73d7247');

export const databases = new Databases(client);

export const DATABASE_ID = "orange_cart_db";
export const PRODUCT_COLLECTION_ID = "67234107000d6d41d5cb";

export const getProducts = () => {
    return databases.listDocuments(
        DATABASE_ID,
        PRODUCT_COLLECTION_ID
    );
}

export const getProductById = (id) => {
    return databases.listDocuments(
        DATABASE_ID,
        PRODUCT_COLLECTION_ID,
        [
            Query.equal("$id", [id])
        ]
    );
}
