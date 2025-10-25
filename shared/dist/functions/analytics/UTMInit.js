"use client";
import { useEffect } from "react";
import { storeUtmParams } from "./utm";
export function UTMInit() {
    useEffect(() => {
        console.log("hello");
        storeUtmParams();
    }, []);
    return null;
}
