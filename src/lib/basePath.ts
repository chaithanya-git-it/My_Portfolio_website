export const BASE_PATH = process.env.NODE_ENV === "production" ? "/My_Portfolio_website" : "";

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (BASE_PATH && cleanPath.startsWith(BASE_PATH)) {
    return cleanPath;
  }
  return `${BASE_PATH}${cleanPath}`;
}
