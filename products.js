// products.js
const note_const = `Now we only support shipment to Taiwan. <br>
                    Please contact <a href="mailto:gary49902210@gmail.com" target="_blank">g-Pico service</a> 
                    for shipment to other regions. <br>
                    We will try our best to open the shipping service in other 
                    regions in the future. <br>
                    Great thanks for your support and understanding! :) <br>`;


const products = {
    product1: {
        name: "YD-2040",
        description: `The most versatile standard model of the Pico board created by the <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a>.<br>
                      <br>
                      <br>
                      Special about this board:   <br>
                      <li>Type C port for connection</li>
                      <li>Standard pico board dimension competible</li>
                      <li>Extra RGB LED supported</li>
                      <li>User define button supported</li>
                      <li>Power input indication LED (red)</li>
                      <li>Pico controlled LED (blue)</li>
                      <li>Schematic of <a href="assets/yd-2040/YD-2040-2022-V1.1-SCH.pdf" target="_blank">YD-2040</a></li>
                      <li>Supports multiple development environments: MicroPython, C/C++ SDK, and Arduino IDE</li>
                      <li>Onboard RP2040 dual-core microcontroller with flexible I/O options</li>
                      <li>Ideal for learning embedded systems and rapid prototyping</li>
                      <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
                      <li>Compatible with a wide range of sensors, displays, and other modules</li>
                      <li>Comprehensive community support and a wealth of online resources</li>
                      <br>
                      Note: <br>
                      <li>Our factroy default flash is 4MB(32Mb, W25Q32)</li>
                      <li>Board configuration for different application:</li>
                      <img src="assets/yd-2040/modification_board.png" alt="Description Image"> <br>
                      <li>The package you will get if order from us:</li>
                      <img src="assets/yd-2040/packed.jpg" alt="Description Image"> <br>


                      <br>
                      Detail description:   <br>
                      This is the most versatile standard model of the Pico board created by the <a href="http://vcc-gnd.com/" target="_blank">VCC-GND Stdio</a>.<br>
                      In addition to meeting the standard Pico board specifications, it also supports a reset function, external buttons, and an RGB LED.<br>
                      It comes with a choice of either 4MB or 16MB of flash memory, with the option of selecting the 4MB version.<br>
                    `,
        price: "NTD$200",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are` 
        images: [
            "assets/yd-2040/IMG_1-1.jpg",
            "assets/yd-2040/IMG_1-2.jpg",
            "assets/yd-2040/IMG_1-3.jpg",
            "assets/yd-2040/YD-2040-PIN.png",
            "assets/yd-2040/YD2040_dimension.png",
        ]
    },
    product2: {
        name: "Raspberry pi Pico",
        description: `A standard product released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a> and finalize the dimension of general pico.<br>
        <br>
        <br>
        Special about this board:   <br>
        <li>Raspberry Pi official release</li>
        <li>Micro USB port for easy power supply and programming</li>
        <li>Standard Pico board dimension compatible for various accessories and shields</li>
        <li>Pico controlled onboard LED (green)</li>
        <li>No extra hardware modification needed for basic operation</li>
        <li>Supports multiple development environments: MicroPython, C/C++ SDK, and Arduino IDE</li>
        <li>Onboard RP2040 dual-core microcontroller with flexible I/O options</li>
        <li>Ideal for learning embedded systems and rapid prototyping</li>
        <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
        <li>Compatible with a wide range of sensors, displays, and other modules</li>
        <li>Comprehensive community support and a wealth of online resources</li>
        <li>Datasheet and schematic of <a href="assets/pico/pico-datasheet.pdf" target="_blank">Raspberry Pi Pico</a></li>
        <br>


        <br>
        Detail description:   <br>
        This is a standard product released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. In addition to defining the basic Pico dimensions, it also provides a 2MB (16Mb, W25Q16) flash configuration that meets basic requirements, as well as a standard BOOTSEL button. A micro USB is used as the standard PC interface. 
        `,
        price: "NTD$200",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are`
        images: [
            "assets/pico/IMG_2-1.jpg",
            "assets/pico/pico-board.png",
            "assets/pico/pico-pin.png",
            "assets/pico/pico_dimension.png",
        ]
    },
	product3: {
        name: "Raspberry pi PicoW",
        description: `A standard product with Wi-Fi 4 and Bluetooth 5.2 Classic released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. <br>
        <br>
        Special about this board:   <br>
        <li>Raspberry Pi official release</li>
        <li>Supports Wi-Fi 4 and Bluetooth 5.2 for wireless communication</li>
        <li>Micro USB port for power and data transfer</li>
        <li>Standard Pico board dimension compatible</li>
        <li>Onboard LED controllable via Pico (green)</li>
        <li>No extra hardware modification needed</li>
        <li>Supports various development environments: MicroPython, C/C++ SDK, and more</li>
        <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
        <li>Ideal for IoT projects with built-in Wi-Fi and Bluetooth connectivity</li>
        <li>Community-supported libraries for easy integration into different applications</li>
        <li>Datasheet and schematic of <a href="assets/pico_w/pico-w-datasheet.pdf" target="_blank">Raspberry Pi Pico W</a></li>
        <br>


        <br>
        Detail description:   <br>
        This is a standard product with Wi-Fi 4 and Bluetooth 5.2 Classic released by <a href="https://www.raspberrypi.com/products/raspberry-pi-pico/" target="_blank">Raspberry Pi</a>. In addition to defining the basic Pico dimensions, it also provides a 2MB (16Mb, W25Q16) flash configuration that meets basic requirements, as well as a standard BOOTSEL button. A micro USB is used as the standard PC interface. <br>
        `,
        price: "$320",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are`
        images: [
            "assets/pico_w/IMG_2-2.jpg",
            "assets/pico_w/picow_board.png",
            "assets/pico_w/picow_pin.png",
            "assets/pico_w/picow_dimension.png",
        ]
    },
	product4: {
        name: "LILYGO T-PicoC3",
        description: `A versatile development board by <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> that combines the power of RP2040 with ESP32-C3.<br>
        <br>
        Special about this board:   <br>
        <li>Dual MCU combination: RP2040 and ESP32-C3</li>
        <li>Provides Wi-Fi and Bluetooth 5.0 capabilities through ESP32-C3</li>
        <li>Multiple GPIO pins and interfaces (UART, I2C, SPI, ADC) for connecting external devices</li>
        <li>USB Type-C for power and data transfer</li>
        <li>Supports various development environments, including Arduino IDE, MicroPython, and C/C++ SDK</li>
        <li>Compatible with Raspberry Pi Pico expansion modules</li>
        <li>Compact size, making it easy to integrate into various projects</li>
        <li>Suitable for IoT, robotics, and embedded development</li>
        <br>
        For more information, check the <a href="https://github.com/Xinyuan-LilyGO/T-PicoC3" target="_blank">LILYGO T-PicoC3 documentation</a>. <br>
        
        <br>
        Detail description:   <br>
        This is a versatile development board by <a href="https://www.lilygo.cc/" target="_blank">LILYGO</a> that combines the power of the Raspberry Pi RP2040 with the ESP32-C3. It is designed to support a wide range of embedded and IoT applications by providing extensive connectivity and processing capabilities. <br>

        
        `,
        price: "NTD$600",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are`
        images: [
            "assets/t-pico-c3/IMG_2-3.jpg",
            "assets/t-pico-c3/T-PicoC3_en.jpg",
            
        ]
    },
	product5: {
        name: "Pico based Extend board",
        description: `Add on for general Pico and extend the Pico to a convenient and strong automation tool<br>
            <br>
            <br>
            Special about this board: <br>
            <li>Board powered by the standard Pico</li>
            <li>Onboard 5V and 3.3V power outputs</li>
            <li>6 General Purpose IO (GPIO)</li>
            <li>1 I2C master interface</li>
            <li>1 SPI master interface</li>
            <li>2 Pulse outputs</li>
            <li>2 PWM outputs</li>
            <li>8 relay channels for versatile control</li>

            <br>
            Detail description:   <br>
            This expansion board is designed to allow the standard Pico board to be 
            better applied in automated testing systems. Inspired by the daily work of 
            electronics engineers, we have integrated various expansion features that might 
            be needed onto this board. By leveraging the RP2040-based standard Pico board, 
            this expansion board can realize General Purpose IO, Relay, I2C, SPI, PWM, and 
            Pulse output functionalities, greatly enhancing the efficiency of electronics 
            engineers in their daily work. The g-Pico team has also developed a companion 
            GUI that allows you to operate the board through a simple graphical interface on 
            a Windows PC. With easy installation and setup, you can quickly start using this 
            versatile expansion board. To further integrate automation, the g-Pico team will 
            continue to develop other Pico-based comprehensive automation testing and verification 
            systems to free electronics engineers from repetitive testing tasks.
                      `,
        price: "NTD$2000",
        note: note_const,
        // us this method to add different string 
        // note: note_const + `Please note that we are`
        images: [
            "assets/extend_board/extend.jpg",

        ]
    }
};
