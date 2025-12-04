import { Alert } from "@heroui/alert";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Blog</h1>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-lg">
          <Alert>블로그는 아직 작업중이에요. 나중에 좋은 글로 만나요!</Alert>
        </div>
      </section>
    </DefaultLayout>
  );
}
