

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Benefits of Organic Rice",
      date: "July 12, 2025",
      author: "Madeeha",
      image: "src/assets/organic.jpeg",
      excerpt: "Discover why organic rice is better for health and the environment.",
    },
    {
      id: 2,
      title: "How to Store Rice Properly",
      date: "July  25, 2025",
      author: "Tarannumn",
      image: "src/assets/storerice.jpeg",
      excerpt: "Tips to keep your rice fresh and avoid pests.",
    },
    {
      id: 3,
      title: "Different Varieties of Rice",
      date: "Aug 1, 2025",
      author: "Fathima",
      image: "src/assets/rice.jpg",
      excerpt: "Explore basmati, jasmine, and other flavorful varieties.",
    },


    
  ];

  return (
    <div className="container my-5">
      {/* Page Title */}
      <h2 className="text-center mb-4" style={{color:"gold",fontWeight:"bold"}}>Rice Mart Blog</h2>
      {/* Blog Grid */}
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <small className="text-muted">
                  {blog.date} | by {blog.author}
                </small>
                <p className="card-text mt-2">{blog.excerpt}</p>
                <a href="#" className="btn  mt-auto" style={{backgroundColor:"green",color:"white"}}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Blog;