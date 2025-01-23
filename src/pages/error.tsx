import { ErrorPage } from "./errrr-page";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  // Get a user-friendly error message
  const errorMessage = error?.message || "Something went wrong. Please try again.";

  return <ErrorPage error={errorMessage} reset={reset} />;
}
