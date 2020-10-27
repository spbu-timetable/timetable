import React from "react";

import Address from "../../../types/Address";
import SearchListPage from "../../../hocs/SearchListPage";

type Props = {
  didGet: boolean;
  addresses: Address[];
  filtered_addresses: Address[];
  filter_value: string;

  getAddresses: () => void;
  setAddress: (address: Address) => void;
  updFilter: (filterStr: string) => void;
};

const Addresses = (props: Props) => {
  return (
    <SearchListPage
      didGet={props.didGet}
      url_to_push={"/addresses/cabinets"}
      items={props.addresses}
      filtered_items={props.filtered_addresses}
      filter_value={props.filter_value}
      header_text={"Выберите Адрес"}
      banner_main_text={"Адрес не найден"}
      banner_secondary_text={"Попробуйте ввести иначе или найти в списке"}
      getItems={props.getAddresses}
      setItem={props.setAddress}
      updFilter={props.updFilter}
    />
  );
};

export default Addresses;
