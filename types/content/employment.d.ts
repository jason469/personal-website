type tagData = {
    colour: string
}

type employmentData = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: Array<string>;
  category: tagData;
};
