
let books = [
  {
    bookCode: "B01",
    title: "Lap trinh JavaScript",
    category: "qtkd",
    price: 150000,
    totalCopies: 10,
    availableCopies: 3,
    shelfLocation: "A1"
  },
  {
    bookCode: "B02",
    title: "Co so du lieu",
    category: "CNTT",
    price: 200000,
    totalCopies: 8,
    availableCopies: 5,
    shelfLocation: "A2"
  },
  {
    bookCode: "B03",
    title: "Sach cu hong",
    category: "Tham khao",
    price: 100000,
    totalCopies: 4,
    availableCopies: 0,
    shelfLocation: "B1"
  }
];

books.push({
  bookCode: "B04",
  title: "Lap trinh C",
  category: "CNTT",
  price: 180000,
  totalCopies: 6,
  availableCopies: 6,
  shelfLocation: "A3"
});

console.log("Da them sach B04.");

let found = false;

for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B01") {
    found = true;

    if (books[i].availableCopies > 0) {
      books[i].availableCopies--;
      console.log("Muon sach thanh cong: " + books[i].title);
    } else {
      console.log("Sach da het tren ke.");
    }

    if (books[i].availableCopies === 0) {
      books[i].status = "HET SACH TREN KE";
    }

    break;
  }
}

if (found === false) {
  console.log("Khong tim thay sach B01.");
}

for (let i = 0; i < books.length; i++) {
  if (books[i].bookCode === "B03") {
    books.splice(i, 1);
    console.log("Da thanh ly sach B03.");
    break;
  }
}

let totalBookCopies = 0;
let totalAssetValue = 0;

console.log("\n========== BAO CAO KHO SACH ==========");
console.log("Ma sach | Ten sach | Tong cuon | Con tren ke | Vi tri");

for (let i = 0; i < books.length; i++) {
  console.log(
    books[i].bookCode + " | " +
    books[i].title + " | " +
    books[i].totalCopies + " | " +
    books[i].availableCopies + " | " +
    books[i].shelfLocation
  );

  totalBookCopies += books[i].totalCopies;
  totalAssetValue += books[i].totalCopies * books[i].price;
}

console.log("--------------------------------------");
console.log("Tong so luong sach: " + totalBookCopies + " cuon");
console.log("Tong gia tri kho: " + totalAssetValue + " VND");
console.log("======================================");