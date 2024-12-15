import { Client, Account } from "appwrite";

const client = new Client()
    .setProject("66efac960005a73d7247");

const account = new Account(client);


export const loginWithEmail = (email, password) => {
    if (!account.get())
        return account.createEmailPasswordSession(email, password);
    else alert("Your session is already active");
}

