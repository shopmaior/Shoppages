export default (val) => {
  const valString = val.toString(); 
  const replaced = valString.replace(",", " ");
  return replaced;
}