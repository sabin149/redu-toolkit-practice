import PostsList from "./features/posts/PostsList"
import "./App.css"
import AddPostForm from "./features/posts/AddPostForm"

const App = () => {

  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App