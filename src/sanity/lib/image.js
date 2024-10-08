import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: "do6mpxi3",
  dataset: "production",
});

export const urlFor = (source) => {
  return builder.image(source);
};
