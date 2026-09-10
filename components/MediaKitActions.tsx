"use client";

import { useState } from "react";

type MediaKitActionsProps = {
  name: string;
  description: string;
  url: string;
};

type ActionState = "idle" | "description-copied" | "link-copied" | "shared";

function trackMediaKitAction(product: string, action: string) {
  window.gtag?.("event", "media_kit_action", {
    product,
    action,
  });
}

async function copy(value: string) {
  await navigator.clipboard.writeText(value);
}

export default function MediaKitActions({ name, description, url }: MediaKitActionsProps) {
  const [state, setState] = useState<ActionState>("idle");

  async function copyDescription() {
    await copy(description);
    setState("description-copied");
    trackMediaKitAction(name, "copy_description");
  }

  async function shareProduct() {
    if (navigator.share) {
      await navigator.share({ title: `${name} by JonnyLab`, text: description, url });
      setState("shared");
      trackMediaKitAction(name, "share");
      return;
    }

    await copy(url);
    setState("link-copied");
    trackMediaKitAction(name, "copy_link");
  }

  const status = state === "description-copied"
    ? "Description copied"
    : state === "link-copied"
      ? "Link copied"
      : state === "shared"
        ? "Shared"
        : "";

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={copyDescription}
        className="rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-800 transition hover:border-indigo-400 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Copy description
      </button>
      <button
        type="button"
        onClick={shareProduct}
        className="rounded-lg bg-zinc-950 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Share product
      </button>
      <span aria-live="polite" className="min-w-24 text-xs font-medium text-emerald-700">{status}</span>
    </div>
  );
}
