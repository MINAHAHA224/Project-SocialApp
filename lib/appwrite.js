import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite'


export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.minahaha.final",
    projectId: "67090a00001dfa3c1b6a",
    databaseId: "67090b57000317459bbd",
    usersCollectionId: "67090b6c00126e86ddb0",
    videosCollectionId: "67090b780020f257edb4",
    storageId: "67090c950002381f6d1c"
}


// Init your React Native SDK
const client = new Client();


client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

    ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {

        const newAccount = await account.create(ID.unique(), email, password, username);

        if (!newAccount) throw new Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );
        return newUser;

    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {

    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {

    }
}

export const getCurrentUser = async () => {
    try {

        const currentAccount = await account.get();

        if (!currentAccount) throw new Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw new Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}