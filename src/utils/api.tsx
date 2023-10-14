const GET_API = (id: any) => {
  return {
    getAllCategory: "/categories",
    getCategoryById: `/categories/${id}`,
    getAllBook: "/book",
    getAuthor: "/author",
    getBookById: `/book/${id}`,
    getAuthorById: `/author/${id}`,
    getAllPublishers: "/publishers",
    getCurrentUser: "/authenticate/current",
    viewCartUser: "/customer/viewcart",
    viewOrderHistory: "/customer/view-order-history",
    getBookByName: "/book/search-by-book-name",
    getBookByCategoryName: `book/get-books-by-category/${id}`,
  };
};

const POST_API = () => {
  return {
    login: "/authenticate/login",
    register: "/authenticate/register",
    createCategory: "/category",
    createBook: "/book",
    createAuthor: "/author",
    createPublisher: "/publisher",
    addToCart: "/customer/addtocart",
    createOrder: "/customer/create-order",
  };
};

const PUT_API = (id: any) => {
  return {
    updateCategory: `/categories/${id}`,
    updateBook: `/book/${id}`,
    addCategoryToBook: `/book/addcategory`,
    updateCartItems: "customer/updatecart",
  };
};

const DELETE_API = (id: any) => {
  return {
    deleteCategory: `/categories/${id}`,
    deleteAuthor: `/author/${id}`,
    deleteBook: `/book/${id}`,
    deleteItemInCart: `/customer/delete-cart-item/${id}`,
  };
};
