type LogStatus = 'loading' | 'success' | 'error';

function logStatus(status: LogStatus): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

console.log('=== Task 5 ===');
logStatus("loading");
logStatus("success");
logStatus("error");

