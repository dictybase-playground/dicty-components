import clientConfig from "./clientConfig"
import { OauthConfig } from "./types"

/**
 * Given a redirectBaseUrl returns an `OauthConfig` object with the appropriate redirect/callback urls and clientIds
 * 
 * ### Usage
 * ```ts
 * import { oauthConfig } from "@dictyBase/authentication"
 * 
 * const config = oauthConfig("https://dictycr.org/stockcenter")
 * // config will contain clientIds and other important information for a given provider
 * console.log(config.google)
 * ```
 *
 * @param redirectBaseUrl Base path to the redirect url (Ex. `https://dictycr.org/stockcenter` *with no leading slash*)
 * @returns `IOAuthConfig` object with config properties for all auth providers
 */
export const oauthConfig = (redirectBaseUrl: string): OauthConfig => ({
  google: {
    name: "Google",
    url: "/auth/google",
    authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    clientId: clientConfig.google.clientId,
    redirectUrl: `${redirectBaseUrl}/auth/google/callback`,
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
    redirectUrl: `${redirectBaseUrl}/auth/linkedin/callback`,
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
    redirectUrl: `${redirectBaseUrl}/auth/orcid/callback`,
    scopes: ["/authenticate"],
    scopeDelimiter: " ",
    requiredUrlParams: [["response_type", "code"]],
  },
})
