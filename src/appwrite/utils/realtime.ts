import client from "../config";
import { birthdayDataType, documentType } from "@/types";
import { Dispatch, SetStateAction } from "react";

export function enableRealtimeForBirthdaysCol(set:Dispatch<SetStateAction<birthdayDataType | undefined>>) {
	return client.subscribe<documentType>(
		"databases.64d963a67fe72a47c072.collections.64ecf3a38e08816df4a0.documents",
		(response) => {
			if (response.events[1].includes("create")) {
				console.log("created", response);
				set((prev) => {
					if (prev) {
						return {
							...prev,
              total: prev?.total + 1,
							documents: [...prev?.documents, response.payload],
						};
					}
				});
			}
		}
	);
}
