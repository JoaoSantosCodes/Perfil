import '@testing-library/jest-dom';

// Mock do ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

// Mock do IntersectionObserver
class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = IntersectionObserver; 