import { doc, setDoc, collection, getDoc, getDocs } from "firebase/firestore";

export const guardar = (producto) => {
  const productRef = doc(global.dbCon, "Productos", producto.codigo);
  setDoc(productRef, producto);
};

export const consultar = async (fnSetProductos) => {
  const productRef = collection(global.dbCon, "Productos");
  const productosSnap=await getDocs(productRef);
  let productosArray=[];
  productosSnap.forEach((documento)=>{
    console.log("doc",documento.data());
    productosArray.push(documento.data())
  });
  fnSetProductos(productosArray);
};
