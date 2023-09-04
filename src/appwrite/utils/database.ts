import { db, query } from "../config";
import { databaseDocType } from "../../types";

export async function createDoc(
	dbId: string,
	colId: string,
	docId: string,
	data: databaseDocType
) {
	try {
		const createDoc = await db.createDocument(dbId, colId, docId, data);
		return createDoc;
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function createDocInBirthdaysCol(docId: string, data: databaseDocType) {
	const doc = await createDoc("64d963a67fe72a47c072", "64ecf3a38e08816df4a0", docId, data);
  return doc;
}

export async function listUserDocFromBirthdaysCol() {
  try {
    const docs = await db.listDocuments(
		"64d963a67fe72a47c072",
		"64ecf3a38e08816df4a0",
		[query.equal("user_id", "64e447cebb60d0ff0bd7")]
    /*
     So it does not return an error if the user_id does not match. TODO:
     1. I have set collection permission for user, so if an error comes it means the person is not a registered user. UPDATE: It did not give an error, so only take care of case 2.
     2. If the result arrau is empty, then use default dashboard with message for user to add a birthday.
    */
	);
  return docs;
} catch (error: any) {
  throw new Error(error);
}
}
