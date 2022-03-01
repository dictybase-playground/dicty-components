import clientConfig from "@dictyBase/authentication/src/config/clientConfig"
import { IOauthConfig } from "@dictyBase/authentication/src/types"

/**
 * Given a redirectBaseUrl returns an `IOAuthConfig` object with the appropriate redirect/callback urls and clientIds
 *
 * @param redirectBaseUrl Base path to the redirect url (Ex. `https://dictycr.org/stockcenter` *with no leading slash*)
 * @returns `IOAuthConfig` object with config properties for all auth providers
 */
const oauthConfig = (redirectBaseUrl: string): IOauthConfig => ({
  google: {
    name: "Google",
    url: "/auth/google",
    authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    clientId: clientConfig.google.clientId,
    redirectUrl: `${redirectBaseUrl}/google/callback`,
    requiredUrlParams: [["response_type", "code"]],
    scopes: ["email"],
    scopeDelimiter: " ",
    optionalUrlParams: [["state", "google"]],
  },
  linkedin: {
    name: "LinkedIn",
    url: "/auth/linkedin",
    authorizationEndpoint: "https://www.linkedin.com/oauth/v2/authorization",
    clientId: clientConfig.linkedin.clientId,
    redirectUrl: `${redirectBaseUrl}/linkedin/callback`,
    scopes: ["r_emailaddress"],
    scopeDelimiter: " ",
    requiredUrlParams: [
      ["state", "linkedin"],
      ["response_type", "code"],
    ],
  },
  orcid: {
    name: "ORCID",
    url: "/auth/orcid",
    authorizationEndpoint: "https://orcid.org/oauth/authorize",
    clientId: clientConfig.orcid.clientId,
    redirectUrl: `${redirectBaseUrl}/orcid/callback`,
    scopes: ["/authenticate"],
    scopeDelimiter: " ",
    requiredUrlParams: [["response_type", "code"]],
  },
})

export default oauthConfig
