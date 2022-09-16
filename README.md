# Reproducing SameSite=None > SameSite=Lax

* Create certificate files in `myssl/`:
  * `public.pem`
  * `private.pem`
* Start the container:
  ```bash
  docker-compose up -d
  ```
* `npm install`
* Run the tests:
  ```bash
  npx playwright test
  ```

The test will fail; although `SameSite=None` is returned in the `Set-Cookie` header, the cookie is set with `sameSite: Lax`.
