type Header = {
  button_title: string;
  menu_titles: string[];

  week: Date;

  isRussian: boolean;

  fromDate: Date;
  toDate: Date;

  fromDateStr: string;
  toDateStr: string;
};

export default Header;
