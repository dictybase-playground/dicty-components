---
# try also 'default' to start simple
theme: apple-basic
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# persist drawings in exports and build
drawings:
  persist: false

layout: intro
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

# Handling OAuth Sign-In Prompts

Using the `@dictyBase/authentication` library for managing OAuth is extremely simple using the `openOauth` function which takes in the name of a supported provider (`google`, `linkedin`, and `orcid`) and a callback function that is called at the end with a `url` params

```tsx {2,10|all}
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
