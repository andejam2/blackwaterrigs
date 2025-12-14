export type CartItem = {
  id: string;
  slug: string;
  name: string;
  priceCents: number;
  image?: string;
  qty: number;
};

const KEY = "bwr_cart_v1";

function read(): CartItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}

function write(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
  const items = read();
  const found = items.find(i => i.id === item.id);
  if (found) found.qty += qty;
  else items.push({ ...item, qty });
  write(items);
}

export function getCart() { return read(); }

export function setQty(id: string, qty: number) {
  const updated = read()
    .map(i => i.id === id ? { ...i, qty } : i)
    .filter(i => i.qty > 0);
  write(updated);
}

export function clearCart() { write([]); }

export function cartTotalCents() {
  return read().reduce((s, i) => s + i.priceCents * i.qty, 0);
}
