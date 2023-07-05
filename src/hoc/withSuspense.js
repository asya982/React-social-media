import React, { Suspense } from "react";
import Loader from "../components/common/Loader/Loader";

export function withSuspense(Component) {
    return <Suspense fallback={<Loader />}>
        <Component  />
    </Suspense>
}