import { NextRequest, NextResponse } from "next/server";
import { createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Random } from "unsplash-js/dist/methods/photos/types";

// on your node server
const unsplash = createApi({
  accessKey: "ALiXGzeWh2L5OwMFYXa3s0nhwWeZSwPprGNn4R21I4E",
  //...other fetch options
});

let cacheResponse: ApiResponse<Random | Random[]> | null = null;

export async function GET(req: NextRequest, res: NextResponse) {
  const query = req.nextUrl.searchParams.get("query") || "quotes motivation";
  const response = cacheResponse
    ? cacheResponse
    : await unsplash.photos.getRandom({
        query,
        orientation: "landscape",
      });
  if (!cacheResponse) cacheResponse = response;

  return NextResponse.json({ ...response });
}
