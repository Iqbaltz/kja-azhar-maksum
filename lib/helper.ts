export function filterLocalizedService(
  data: any,
  locale: string
): { _key: string; image: any; title: string; description: string }[] {
  return data.map((item: any) => {
    const filteredTitle = item.title.find((t: any) => t._key === locale);
    const filteredDescription = item.description.find(
      (d: any) => d._key === locale
    );

    return {
      _key: item._key,
      image: item.image,
      title: filteredTitle ? filteredTitle.value : "",
      description: filteredDescription ? filteredDescription.value : "",
    };
  });
}
