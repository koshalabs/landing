"use server";

import { GRAPHQL_API } from "./constants";

export async function sendEmail({ firstName, lastName, email }) {
    const query = `
      mutation ConfirmPreOffer($input: GetEarlyAccessInput!) {
        confirmPreOffer(input: $input)
      }
    `;
  
    const variables = {
      input: {
        firstName,
        lastName,
        email,
      },
    };
  
    try {
      const response = await fetch(GRAPHQL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
  
      const result = await response.json();
  
      if (result.errors) {
        console.error("GraphQL errors:", result.errors);
        throw new Error(result.errors[0]?.message || "Failed to confirm pre-offer");
      }
  
      return result.data.confirmPreOffer;
    } catch (error) {
      console.error("Error submitting data:", error);
      throw error;
    }
}