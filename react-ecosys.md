# routing
link: https://reactrouter.com/en/main/getting-started/installation

``` npm install -D react-router-dom ```

TODO: configure BrowserRouter in webpack

import routing into app: (index.js)

```
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
  <App />
</BrowserRouter>

```

Routing:

```
<Routes>
  <Route path="/" element={<TexasHoldem />}></Route>
  <Route path="/user-list" element={<UserList />}></Route> 
  <Route path="/counter" element={<Counter />}></Route> 
  <Route path="*" element={<NotFound />}></Route> 
</Routes>

```

features:

* basic routing
* nested routing

* create links with acitve styling

* URL params & URL search params

* navigating
