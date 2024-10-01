import { create } from "zustand";
import productList from "../data/ProductList";
import data from "../data/DropDownData";

const useStore = create((set) => ({
  // hamburger
  hamburger: false,
  handleHamburger: () =>
    set((state) => ({
      hamburger: !state.hamburger,
    })),

  // dropdown hover
  hover: false,
  handleHover: () =>
    set((state) => ({
      hover: !state.hover,
    })),

  // Sorting functionality
  sortOption: "",
  setSortOption: (option) => set({ sortOption: option }),

  // All Data
  productList: productList,
  data: data,

  // Unique product management with localStorage
  // Store uniqueProduct in localStorage and set it in Zustand store
  setUniqueProduct: (product) => {
    localStorage.setItem("uniqueProduct", JSON.stringify(product));

    // First, set the uniqueProduct in Zustand state
    set({ uniqueProduct: product });

    // After setting uniqueProduct, safely update the detailImg
    set({ detailImg: product.productImg });
  },

  // Detail image functionality
  setDetailImg: (selectedImg) => set({ detailImg: selectedImg }),

  // Storing Ids from uniqueProduct/details to show product to cart page

  cartArray: [],
  handleCartArray: () =>
    set((state) => {
      const uniqueProduct = state.uniqueProduct; // Access uniqueProduct from the state
      if (!uniqueProduct) return state; // Early return if uniqueProduct is undefined

      const updatedCartArray = [...state.cartArray];

      // Function to check if product already exists in cart
      const productExists = updatedCartArray.some(
        (item) => item.id === uniqueProduct.id
      );

      if (productExists) {
        console.log("Product already in the cart:", uniqueProduct);
        return {
          cartArray: updatedCartArray, // If the product is already in the cart, return the same array
        };
      } else {
        updatedCartArray.push(uniqueProduct);
        localStorage.setItem("cartArrayData", JSON.stringify(updatedCartArray));
        return {
          cartArray: updatedCartArray,
        };
      }
    }),

  // productCount funtions are below
  productCounts: {},

  handleCountIncrement: (productId) =>
    set((state) => ({
      productCounts: {
        ...state.productCounts,
        [productId]: (state.productCounts[productId] || 1) + 1,
      },
    })),

  handleCountDecrement: (productId) =>
    set((state) => ({
      productCounts: {
        ...state.productCounts,
        [productId]:
          state.productCounts[productId] > 1
            ? state.productCounts[productId] - 1
            : 1,
      },
    })),
}));

export { useStore };
