var age = +prompt("Yoshingiz nechida")
if (age > 59 && age <=150) {
    alert("Pensiyaga chiqqansiz, agar tirik bo`lsangiz")
} else if (age > 50 && age <= 59) {
    alert("Pensiya yoshiga oz qolibdi")
} else if (age > 18 && age <= 50) {
    alert("Hali yoshsiz , ishlashiz kerak")
} else if (age > 0 && age <= 18) {
    alert("Yoshingiz yetmaydi")
} else {
    alert("Nimadir xato")
}