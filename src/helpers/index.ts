import { AppwriteException } from "appwrite";

export function extractErrorMessage(message: string) {
  return message.replace("AppwriteException: ", "");
}

export function generateErrorObjFromAppwrite(error: AppwriteException) {
  return {
    error: {
      statusCode: error.code,
      message: extractErrorMessage(error.message),
    },
  };
}
