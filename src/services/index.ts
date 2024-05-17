enum API {
  BASE_URL = "https://parallelum.com.br/fipe/api/v1",
}

type ApiProps = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
};

export const Api = async ({ path, method }: ApiProps): Promise<any> => {
  let pathValid = "";
  const segments = path.split("/");

  if (segments[0] === "") segments.shift();

  pathValid = segments.join("/");

  try {
    const res = await fetch(`${API.BASE_URL}/${pathValid}`, {
      method,
    });

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
