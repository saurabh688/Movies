import axios                 from '../../api/axiosController';

export const getMovies = async (searchValue: string) => {
  console.log('sdafadsfdsa',searchValue)
  let uri = `http://52.54.44.196:4000/api/v1/product/searchProduct/?value=${searchValue}`;
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    throw e;
  }
};


