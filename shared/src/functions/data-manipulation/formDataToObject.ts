export function formDataToObject(formData: FormData) {
  const data: Record<string, any> = {};

  for (const [key, value] of formData.entries()) {
    if (data[key]) {
      data[key] = Array.isArray(data[key])
        ? [...data[key], value]
        : [data[key], value];
    } else {
      data[key] = value;
    }
  }

  return data;
}
