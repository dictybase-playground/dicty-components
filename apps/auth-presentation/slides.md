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

Using the `@dictyBase/authentication` library for managing OAuth is extremely simple using the `openOauth` function which takes in the name of a supported provider and a callback function that is called at the end with a `url`.

```tsx {2,10}
import { GoogleButton } from "@dictyBase/login-buttons"
import { openOauth } from "@dictyBase/authentication"
import { useRouter } from "next/router"
 
export default function LoginPage() {
  const {push} = useRouter()

  return (
    <GoogleButton 
      handleClick={() => openOauth("google", url => push(url))}
      text="Sign in with Google"
    />
  )
}
```

---

# Handling OAuth *Callbacks*

Upon successful sign-in from the provider the user is taken to the ***callback*** page which will have at least 2 query params (`provider` and `code`) which is parsed by the `oauthLoginInput` function.

```tsx {2,12-15}
import React from "react"
import { oauthLoginInput, Provider } from "@dictyBase/authentication"
import { useRouter } from "next/router"
import { useLoginMutation } from "dicty-graphql-schema"

export default function OauthCallbackPage() {
  const { query, asPath, push } = useRouter()
  const [login] = useLoginMutation()

  React.useEffect(() => {
    if (!query.provider || !query.code) return
    const provider = query.provider as Provider
    const code = query.code as string

    const input = oauthLoginInput(provider, code)
    const { data } = await login({ variables: { input } })
    push("/home")
  }, [asPath, query, push, login])

  return (<h1>Logging in...</h1>)
}
```

---

# State Management with `AuthProvider`

```tsx
import React from "react"
import { AuthProvider, useAuthStore } from "@dictyBase/authentication"

const App = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)

const MyComponent = () => {
  const { state, dispatch } = useAuthStore()
  React.useEffect(() => {
    if (!state.isAuthenticated) {
      console.error("Login required")
      return
    }
  }, [state])
}
```
