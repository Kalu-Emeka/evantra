import { authData } from "../constants/authContent";

export function getAuthContent(pageType: string) {
  return authData.find((content) => content.type === pageType);
}
