// Función para convertir de decimal a BCD (Binary-Coded Decimal)
function bcd (n: number) {
    return (n / 10 << 4) + n % 10
}
// Dirección I2C del módulo RTC DS3231
// Función para configurar la hora en el DS3231
function setDS3231Time () {
    time = [
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
    // Segundos
    // Segundos
    time[0] = 0
    // Minutos
    // Minutos
    time[1] = 30
    // Horas (formato 24 horas)
    // Horas (formato 24 horas)
    time[2] = 12
    // Día de la semana (1 = Lunes, 2 = Martes, etc.)
    // Día de la semana (1 = Lunes, 2 = Martes, etc.)
    time[3] = 1
    // Día del mes
    // Día del mes
    time[4] = 6
    // Mes
    // Mes
    time[5] = 6
    // Año (últimos dos dígitos)
    // Año (últimos dos dígitos)
    time[6] = 21
    pins.i2cWriteBuffer(DS3231_ADDR, pins.createBufferFromArray([0, bcd(time[0]), bcd(time[1]), bcd(time[2]), bcd(time[3]), bcd(time[4]), bcd(time[5]), bcd(time[6])]))
}
let time: number[] = []
// Dirección I2C del módulo RTC DS3231
let DS3231_ADDR = 104
// Configurar hora inicial
setDS3231Time()
