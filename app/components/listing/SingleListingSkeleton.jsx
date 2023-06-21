import { Container } from "../Container";

export const SingleListingSkeleton = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto my-4">
        <div className="space-y-3">
          <div className="bg-gray-200/70 animate-pulse w-3/4 h-5 rounded"></div>
          <div className="bg-gray-200/70 animate-pulse w-1/4 h-3 rounded"></div>
        </div>
        <div className="my-8">
          <div className="h-[60vh] w-full bg-gray-200/70 animate-pulse rounded-xl"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
          <div className="flex flex-col gap-8 col-span-4 w-full">
            <div className="flex justify-between items-center">
              <div className="space-y-4 w-full">
                <div className="bg-gray-200/70 animate-pulse w-4/5 h-4 rounded"></div>
                <div className="flex w-3/5 h-3 gap-4">
                  <div className="bg-gray-200/70 animate-pulse w-full h-full rounded"></div>
                  <div className="bg-gray-200/70 animate-pulse w-full h-full rounded"></div>
                  <div className="bg-gray-200/70 animate-pulse w-full h-full rounded"></div>
                  <div className="bg-gray-200/70 animate-pulse w-full h-full rounded"></div>
                </div>
              </div>
              <div className="h-[45px] w-[45px] rounded-full bg-gray-200/70 animate-pulse"></div>
            </div>

            <hr />

            <div className="space-y-1.5">
              <div className="bg-gray-200 animate-pulse w-full h-2.5 rounded"></div>
              <div className="bg-gray-200 animate-pulse w-4/5 h-2.5 rounded"></div>
              <div className="bg-gray-200 animate-pulse w-4/5 h-2.5 rounded"></div>
              <div className="bg-gray-200 animate-pulse w-4/6 h-2.5 rounded"></div>
            </div>
          </div>
          <div className="col-span-3 bg-gray-200/70 w-full h-full rounded-xl animate-pulse"></div>
        </div>
      </div>
    </Container>
  );
};
