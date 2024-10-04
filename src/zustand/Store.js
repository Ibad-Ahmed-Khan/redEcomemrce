import { create } from "zustand";
import data from "../data/DropDownData";

import productList from "../data/ProductList";

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

  // productList: productList,
  data: data,
  productList: productList,

  // Unique product management with localStorage
  // Store uniqueProduct in localStorage and set it in Zustand store

  // Detail image functionality
  detailFirsImg: null,

  // Function to set the detailFirsImg in Zustand
  setDetailFirsImg: (img) => set({ detailFirsImg: img }),

  // Load initial image when the product is set
  setUniqueProduct: (product) => {
    localStorage.setItem("uniqueProduct", JSON.stringify(product));
    set({
      uniqueProduct: product,
      detailImg: product.productImg,
      detailFirsImg: product.productImg, // Set the first image
    });
  },

  // Storing Ids from uniqueProduct/details to show product to cart page

  cartArray: JSON.parse(localStorage.getItem("cartArrayData")) || [],
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

  // DELETE BUTTON IN CART

  handleRemoveFromCart: (id) =>
    set((state) => {
      const updatedCartArray = state.cartArray.filter((item) => item.id !== id);
      localStorage.setItem("cartArrayData", JSON.stringify(updatedCartArray));
      return {
        cartArray: updatedCartArray,
      };
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

  // All Buttons
  buttonText: "",
  setButtonText: (text) => set({ buttonText: text }),
}));

export { useStore };
