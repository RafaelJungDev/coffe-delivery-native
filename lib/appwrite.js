import {
  Client,
  Account,
  ID,
  Databases,
  Avatars,
  Query,
} from "react-native-appwrite";

export const appwriteConstants = {
  databaseId: "6717c4bf000ae5145ae7",
  userCollectionId: "6717c5ed00265371cf42",
  videosCollectionId: "6717c6af000a1a9efb0d",
  storageId: "6717fa1d002c7b9c066a",
};

export const client = new Client()
  .setProject("6717c32f001f68f65a88")
  .setPlatform("com.jsm.aora")
  .setEndpoint("https://cloud.appwrite.io/v1");

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConstants.databaseId,
      appwriteConstants.userCollectionId,
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
    console.error(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function signOut() {
  try {
    await account.deleteSession("current");
    return session;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConstants.databaseId,
      appwriteConstants.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
