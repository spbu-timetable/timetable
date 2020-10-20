import Address from "../types/Address";

function save(address: Address) {
  localStorage.setItem("address", JSON.stringify(address));
}

function set(): Address {
  const address = localStorage.getItem("address");
  return JSON.parse(address!);
}

function remove() {
  localStorage.removeItem("address");
}

const AddressLocalStorage = {
  save: save,
  set: set,
  remove: remove,
};

export default AddressLocalStorage;
