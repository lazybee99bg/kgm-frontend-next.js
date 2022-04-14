function importAll(r: any) {
  let images: any = {};
  r.keys().forEach((item: string, index: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const Images = importAll(
  require.context(
    "../../../assets/images/careers_2021",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default Images;
