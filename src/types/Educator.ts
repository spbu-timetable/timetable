type Employment = {
  Position: string;
  Department: string;
};

type Educator = {
  Id: number;
  DisplayName: string;
  FullName: string;
  Employments: Employment[];
};

export default Educator;
