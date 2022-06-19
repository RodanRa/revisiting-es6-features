const address = {
  street: "",
  city: "",
  country: "",
};
// const street = address.street;
// const city = address.city;
// const country = address.country;
//no repetition of address.property
const {
  street: streetAlias,
  city: cityAlias,
  country: countryAlias = "default value as nepal",
} = address;
