---
# try also 'default' to start simple
theme: apple-basic
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# persist drawings in exports and build
drawings:
  persist: false
layout: intro
download: true
---

# Authentication

### dictyBase library for all things *authentication*

<small>This library provides components and utility functions to simplify managing authentication and implementing OAuth</small>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/dictybase-playground/dicty-components/tree/288344af6ee317c7e09404dfead51ee1fee6c942/packages/authentication" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---

# Handling OAuth *Sign-In Prompts*

Using the `@dictyBase/authentication` library for managing OAuth is extremely simple using the `openOauth` function.

<div grid="~ cols-2 gap-2">
<div>

### Usage

```tsx {2,10-12}
import { GoogleButton } from "@dictyBase/login-buttons"
import { openOauth } from "@dictyBase/authentication"
import { useRouter } from "next/router"

export default function LoginPage() {
  const {push} = useRouter()

  return (
    <GoogleButton 
      handleClick={() => {
        openOauth("google", url => push(url))
      }}
      text="Sign in with Google"
    />
  )
}
```

</div>

<div>

### Demo

![OAuth demo GIF](static/oauth_signin_demo.gif)

</div>
</div>

<!--
Using the `@dictyBase/authentication` library for managing OAuth is extremely simple using the `openOauth` function which takes in the name of a supported provider and a callback function that is called at the end with a `url`.
-->

---

# Handling OAuth *Callbacks*

<div grid="~ cols-2 gap-2">
<div>

### Usage

```tsx {2,5,8-12}
import { useRouter } from "next/router"
import { Provider, useAuthStore, Callback } from "@dictyBase/authentication"

export default function OauthCallbackPage() {
  const { query, push } = useRouter()

  return (
    <Callback
      provider={query.provider as Provider}
      code={query.code as string}
      callback={() => push("/")}
    />
  )
}
```

The `Callback` component handles all logic dealing with errors, verification, and state.

</div>

<div>

### Callback URL

```text
http://localhost:3000/auth/google/callback?code=4%2F0AX4XfWgALBewIlVuECvSf-YCiafH50TLUzgBF3ENwnmY7jYagPF5YneZyq1RCidJwixuKg&scope=email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent
```

![Callback demo GIF](static/oauth_callback_demo.gif)

</div>

</div>

<!--
Upon successful sign-in from the provider the user is taken to the ***callback*** page which will have at least 2 query params (`provider` and `code`) which is parsed by the `oauthLoginInput` function. 

The `Callback` component takes care of all the common logic, (calling the `login` mutation, errors, dispatching the new state, etc.) while also giving the developer access to a callback with the updated state.
-->

---
layout: center
---

# Generating [JWT](https://jwt.io/)s

---
layout: center
---

# Storing User Auth State

Solutions to securely store the identity of an authenticated user

* 🍪 **Cookies** - Store generated [JWT](https://jwt.io/)s using secure [`HttpOnly`](https://owasp.org/www-community/HttpOnly) cookies
* ⛑️ **Safe** - Refresh auth tokens preventing hackers from stealing user identity
* 🔑 **Password-free** - Using OAuth 2.0 users can use existing Google, LinkedIn, ORCID accounts to login
* 🥳 No need to remember new passwords
* 😃 Avoid storing passwords or user identity

---

# State Management with `AuthProvider`

```tsx
import React, { ReactNode } from "react"
import { AuthProvider, useAuthStore } from "@dictyBase/authentication"

const App = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)

const MyComponent = () => {
  const { state, dispatch } = useAuthStore()
  React.useEffect(() => {
    if (!state.isAuthenticated) alert("Login required")
  }, [state])

  return (
    <App>
      <h1>Hello world</h1>
    </App>
  )
}
```