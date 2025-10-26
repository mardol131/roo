"use client";
import { useEffect } from "react";
import { storeUtmParams } from "./utm";
export function UTMInit() {
    useEffect(() => {
        storeUtmParams();
    }, []);
    return null;
}
