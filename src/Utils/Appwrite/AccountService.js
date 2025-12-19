import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setProject("66efac960005a73d7247")
    .setEndpoint("https://cloud.appwrite.io/v1");



export const getAccount = async () => {
    const account = new Account(client);
    try {
        await account.get();
        return true;
    } catch (error) {
        return false;  
    }
}

export const loginWithEmail = async (email, password) => {
    console.log("Loggin in with email: ", email);
    const account = new Account(client);
    return await account.createEmailPasswordSession(email, password);
}

export const getProducts = async () => {
    const DATABASE_ID = "orange_cart_db";
    const PRODUCT_COLLECTION_ID = "67234107000d6d41d5cb";
    const databases = new Databases(client);
    return databases.listDocuments(
        DATABASE_ID,
        PRODUCT_COLLECTION_ID
    );
}


export const getAddresses = () => {
    const DATABASE_ID = "orange_cart_db";
    const ADDRESS_COLLECTION_ID = "6728633f003c88878d30";
    const databases = new Databases(client);
    return databases.listDocuments(
        DATABASE_ID,
        ADDRESS_COLLECTION_ID
    );
}

export const getOrders = () => {
    const DATABASE_ID = "orange_cart_db";
    const ORDER_COLLECTION_ID = "67286a0e0016933ec4b1";
    const databases = new Databases(client);
    return databases.listDocuments(
        DATABASE_ID,
        ORDER_COLLECTION_ID
    );
}