import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Postapi from "../APIPOST/Postapi";
import useWindowSize from "./windowscreen";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();

  // States
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [posttitle, setposttitle] = useState("");
  const [postbody, setpostbody] = useState("");
  const [posts, setPosts] = useState([]);
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);

  const { width } = useWindowSize();

  // Fetch Posts
  useEffect(() => {
    setisloading(true);

    const fetchData = async () => {
      try {
        const response = await Postapi.get("/posts");
        setPosts(response.data);
        seterror(null);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        seterror(err.message);
      } finally {
        setisloading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Search Filter
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredResults.reverse());
  }, [posts, search]);

  // Create Post
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: posttitle, datetime, body: postbody };

    try {
      const response = await Postapi.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setposttitle("");
      setpostbody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // Edit Post
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };

    try {
      const response = await Postapi.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? { ...response.data } : post)));
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // Delete Post
  const handleDelete = async (id) => {
    try {
      await Postapi.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        width,
        search, setSearch,
        posts, setPosts,
        searchResult,
        error,
        isloading,
        posttitle, setposttitle,
        postbody, setpostbody,
        handleSubmit,
        handleEdit,
        editBody, setEditBody,
        editTitle, setEditTitle,
        handleDelete
      }}
    >
      {children}
    </DataContext.Provider>
  );
  
};

export default DataContext;
