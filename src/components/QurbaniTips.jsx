import React from "react";

const QurbaniTips = () => {
  return (
    <div class="site-wrapper px-4">
      <div class="text-center mb-12 ">
        <p class="text-2xl font-medium text-primary mb-2">Guidance</p>
        <h2 class="font-display text-3xl md:text-4xl font-semibold text-green-500">
          Qurbani <span className="text-orange-500 text-5xl">Tips</span>
        </h2>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-green-100 p-7 rounded-2xl  border shadow-card">
          <div class="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield-check h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h3 class="font-display text-xl font-semibold mb-2">Check Health</h3>
          <p class="text-sm text-muted-foreground leading-relaxed text-gray-600">
            Always inspect for clear eyes, smooth coat, and active movement.
          </p>
        </div>
        <div class="bg-green-100 p-7 rounded-2xl border border-border shadow-card">
          <div class="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart-handshake h-6 w-6"
              aria-hidden="true"
            >
              <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
            </svg>
          </div>
          <h3 class="font-display text-xl font-semibold mb-2">Verify Age</h3>
          <p class="text-sm text-muted-foreground leading-relaxed text-gray-600">
            Cows must be at least 2 years old, goats at least 1 year for valid
            Qurbani.
          </p>
        </div>
        <div class="bg-green-100 p-7 rounded-2xl border border-border shadow-card">
          <div class="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-truck h-6 w-6"
              aria-hidden="true"
             >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx="17" cy="18" r="2"></circle>
              <circle cx="7" cy="18" r="2"></circle>
            </svg>
          </div>
          <h3 class="font-display text-xl font-semibold mb-2">Plan Delivery</h3>
          <p class="text-sm text-muted-foreground leading-relaxed text-gray-600">
            Book early and confirm delivery date to avoid Eid-week rush.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;
