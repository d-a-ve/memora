import { Client, Account, ID, Role } from "appwrite";

const client = new Client();

// client created on the appwrite website
client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("64d95b1580afbf89beff");

// gitpod instance
// client
// 	.setEndpoint(
// 		"https://8080-appwrite-integrationfor-qw4nz2x1jrr.ws-eu104.gitpod.io/v1"
// 	)
// 	.setProject("64e28388e085c8757743");

// localhost instance
// client.setEndpoint("http://localhost/v1").setProject("64e430bf8ee8c682c97e");

export const authAccount = new Account(client)
export const uniqueId = ID.unique()
export const role = Role
export default client
