export const fixSalary = (salaryMin, salaryMax, currency) => {
  let renderedSalary = "";

  if (salaryMin) renderedSalary += salaryMin;
  if (renderedSalary && salaryMax) renderedSalary += " - " + salaryMax;
  if (!renderedSalary && salaryMax) renderedSalary += salaryMax;
  if (currency) renderedSalary += " " + currency;

  return renderedSalary || "N/A";
};
