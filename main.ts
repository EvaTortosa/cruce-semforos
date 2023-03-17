// Nos aseguramos que al resetear el sistema, empiecen los semáforos apagados
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P11, 0)
// BUCLE CONTROL SEM2 - 2MIN.
loops.everyInterval(120000, function () {
	
})
// BUCLE CONTROL SEM1 - 2MIN
loops.everyInterval(120000, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
