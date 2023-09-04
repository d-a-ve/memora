import { getOAuthSession } from "@appwrite/utils/userSession"

export function OAuthRedirectRoute() {
  const OAuthUserSession = async () => {
    return await getOAuthSession();
  }

  console.log(OAuthUserSession())
  return (
    <div>OAuthRedirectRoute</div>
  )
}
